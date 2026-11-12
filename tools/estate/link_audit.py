"""IMPROVEMENTS #15 and #257: check every external source cited by a published article.

Usage: python3 tools/estate/link_audit.py [--output reports/content-quality/link-audit.md] [--json reports/content-quality/link-audit.json]

Reads the `sources:` list of each editorial/articles/<hub>/<slug>.md, checks each distinct URL with the same
check the daily run uses (a specific page that currently resolves), retries a failure once so a transient error
is not reported, and writes a Markdown report plus a JSON map of url -> last verified date and result.
"""
from __future__ import annotations

import argparse
import datetime as dt
import itertools
import json
import sys
import urllib.parse
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
ARTICLES = ROOT / "editorial" / "articles"


def source_urls(markdown: str) -> list[str]:
    """URLs from the front-matter `sources:` list. Entries are 'label | url' or a bare url."""
    urls, in_sources = [], False
    lines = markdown.replace("\r\n", "\n").split("\n")
    for line in lines[1:]:
        if line == "---":
            break
        if not line.startswith((" ", "\t")):
            in_sources = line.rstrip() == "sources:"
            continue
        if in_sources and line.strip().startswith("- "):
            entry = line.strip()[2:].strip().strip("\"'")
            url = entry.rsplit(" | ", 1)[-1].strip()
            if url.startswith("https://") or url.startswith("http://"):
                urls.append(url)
    return urls


def collect(root: Path = ARTICLES) -> dict[str, list[str]]:
    """url -> list of '/hub/slug/' pages citing it."""
    cited: dict[str, list[str]] = {}
    for file in sorted(root.glob("*/*.md")):
        page = f"/{file.parent.name}/{file.stem}/"
        for url in source_urls(file.read_text(encoding="utf-8")):
            cited.setdefault(url, []).append(page)
    return cited


GONE = {404, 410}  # the page is gone; other failures (403, 429, 5xx, timeouts) only mean the check was refused


def http_status(url: str) -> int | None:
    """HTTP status of a GET, or None when the host cannot be reached."""
    import urllib.error
    import urllib.request
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 (compatible; MellorcaSourceCheck/1.0; +https://mellorca.com)"})
    try:
        with urllib.request.urlopen(req, timeout=20) as response:
            return response.status
    except urllib.error.HTTPError as exc:
        return exc.code
    except (urllib.error.URLError, OSError, ValueError):
        return None


def audit(cited: dict[str, list[str]], check, status=http_status, workers: int = 6) -> dict[str, str]:
    """url -> 'ok', 'dead' (page gone or no longer a specific page) or 'unverified' (the site refused the check)."""
    def run(url: str) -> str:
        if check(url) or check(url):  # one retry before a link is called anything but ok
            return "ok"
        code = status(url)
        if code in GONE:
            return "dead"
        if code is None or code >= 400:
            return "unverified"  # 403 bot blocks, 429 rate limits and timeouts are not evidence the page is gone
        # The probe succeeded where the check failed: a rate-limit window may have just passed, so ask the check once
        # more. Dead only if it still fails while the page loads, i.e. it redirects to a generic or parent page.
        return "ok" if check(url) else "dead"

    # Interleave hosts so consecutive requests rarely hit the same site (hundreds of learn.microsoft.com
    # pages in a row trip its rate limit).
    by_host: dict[str, list[str]] = {}
    for url in sorted(cited):
        by_host.setdefault(urllib.parse.urlsplit(url).netloc, []).append(url)
    urls = [url for group in itertools.zip_longest(*by_host.values()) for url in group if url]
    with ThreadPoolExecutor(max_workers=workers) as pool:
        return dict(sorted(zip(urls, pool.map(run, urls))))


def render(cited: dict[str, list[str]], results: dict[str, str], today: str) -> str:
    dead = sorted(url for url, state in results.items() if state == "dead")
    unverified = sum(1 for state in results.values() if state == "unverified")
    lines = ["# External link audit", "",
             f"Generated {today} by `tools/estate/link_audit.py`. "
             f"{len(results)} distinct source URLs across {len({p for pages in cited.values() for p in pages})} articles; "
             f"{len(dead)} are gone or no longer a specific page, and {unverified} refused the check (bot block or rate limit) "
             f"and are left alone.", ""]
    if not dead:
        return "\n".join(lines + ["Every cited source still resolves."]) + "\n"
    lines += ["| Dead source | Cited by |", "|---|---|"]
    lines += [f"| {url} | {', '.join(cited[url])} |" for url in dead]
    return "\n".join(lines) + "\n"


def merge_verification(previous: dict[str, str], results: dict[str, str], today: str) -> dict[str, str]:
    """url -> date it last resolved. A source that refused this check keeps its earlier date; sources no longer cited drop out."""
    return {url: (today if state == "ok" else previous[url]) for url, state in sorted(results.items())
            if state == "ok" or url in previous}


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--output", type=Path, default=ROOT / "reports" / "content-quality" / "link-audit.md")
    parser.add_argument("--verification", type=Path, default=ROOT / "editorial" / "source-verification.json",
                        help="url -> last verified date, shown beside each source on the article page")
    parser.add_argument("--json", type=Path, default=ROOT / "reports" / "content-quality" / "link-audit.json")
    args = parser.parse_args()
    sys.path.insert(0, str(ROOT / "tools" / "mellorca-controller"))
    import editorial_synthesis  # the daily run's own source check

    cited = collect()
    results = audit(cited, editorial_synthesis.http_source_check)
    today = dt.date.today().isoformat()
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(render(cited, results, today), encoding="utf-8")
    args.json.write_text(json.dumps({url: {"state": state, "verified": today} for url, state in sorted(results.items())}, indent=1) + "\n", encoding="utf-8")
    previous = json.loads(args.verification.read_text(encoding="utf-8")).get("sources", {}) if args.verification.exists() else {}
    verified = merge_verification(previous, results, today)
    args.verification.write_text(json.dumps({"updated": today, "sources": verified}, indent=1) + "\n", encoding="utf-8")
    dead = sum(1 for state in results.values() if state == "dead")
    print(f"{len(results)} source URLs, {dead} dead")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
