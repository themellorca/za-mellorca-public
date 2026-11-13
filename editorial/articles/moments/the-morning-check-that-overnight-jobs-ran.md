---
hub: moments
record_id: STORY-ANGLE-000020
slug: the-morning-check-that-overnight-jobs-ran
title: The morning routine of checking whether overnight jobs ran
description: Before coffee, someone opens five screens to check last night's imports and syncs ran. What that check takes, and what changes when systems report silence.
lead: Before coffee, before email, someone opens five screens to confirm that last night's imports, syncs and exports actually happened. What that daily ritual of verification takes, and what changes when systems report their own silence.
category: Time and Attention
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Time and Attention
thematic_domain: time_and_attention
human_situation: A finance or operations person begins each working day by opening several systems to confirm that overnight bank imports, stock syncs, exports and backups actually ran, because failures have previously gone unnoticed.
human_dividend: Attention and predictability: systems report missed or failed jobs themselves, so the morning starts with a trustworthy summary rather than a manual investigation.
trade_off: Poorly tuned alerting creates noise; trust in monitoring takes time to build; monitoring itself needs maintenance as jobs change; a named person must still own the response to alerts.
epistemic_state: HYPOTHESISED: the attention cost of manual morning verification is inferred from monitoring practice and vendor documentation, not from a measured study of South African businesses.
sources:
  - Google SRE monitoring ditributed system - sre golden signals | https://sre.google/sre-book/monitoring-distributed-systems/
  - Healthchecks.io Documentation - Healthchecks.io | https://healthchecks.io/docs/
  - Notify an Operator of Job Status | https://learn.microsoft.com/en-us/ssms/agent/notify-an-operator-of-job-status
related:
  - Ten open tabs and five logins: What the morning sign-in takes | /moments/ten-open-tabs-and-five-logins/
  - Why waiting for information feels like working | /moments/why-waiting-for-information-feels-like-working/
  - The report someone rebuilds by hand every Friday | /moments/the-report-someone-rebuilds-by-hand-every-friday/
  - The sleep lost over a system nobody else understands | /moments/the-sleep-lost-over-a-system-only-one-person-understands/
summary: Before coffee, before email, someone opens five screens to confirm that last night's imports, syncs and exports actually happened. What that daily ritual of verification takes, and what changes when systems report their own silence.
layout: plain
---
The first half-hour of some working days does not belong to the day at all. It belongs to the night before.

Before answering a single email, someone opens the accounting system to see whether the bank transactions imported. Then the online shop, to see whether last night's orders reached the warehouse system. Then the shared folder where the price file should have been refreshed at two in the morning. Then the payroll export, if it is that week. Each check is quick. Usually everything is fine. But the person does it every day, because on the day they do not, something will have quietly failed.

This piece looks at that morning ritual: what it costs the person who performs it, why it exists, and what could let them stop. The mechanism is presented as a hypothesis, supported by monitoring practice and vendor documentation rather than by a study of particular businesses.

## Work that happens while nobody is watching

Many small and mid-sized businesses now rely on work that runs on a schedule, often overnight. Bank feeds import transactions. Integrations move orders from one system to another. Scripts produce reports and exports. Backups copy data to another place. These scheduled jobs are one of the quiet benefits of modern systems: work happens without anyone needing to be present.

But scheduled work has a particular weakness. When it fails, it often fails silently. Nothing announces that a job did not run. The absence of an import looks exactly like a quiet night with no transactions. Mellorca's analysis of [the financial impact of silent automation failures](/impact/silent-automation-failures-financial-impact/) covers what this can cost the business when it goes unnoticed.

The person who checks each morning is the business's answer to that weakness. They have become, in effect, the monitoring system.

## Why a person ends up doing the checking

Experienced operations teams have argued for years that this should not be a human job. [Google's site reliability engineering book, in its chapter on monitoring,](https://sre.google/sre-book/monitoring-distributed-systems/) describes how its teams carefully avoid any situation that requires someone to stare at a screen to watch for problems. Monitoring should raise an alert when something needs attention, rather than relying on a person to look.

The same chapter makes another useful point: alerts should be actionable, and email alerts tend to be of limited value because they are easily lost in noise. That explains part of the morning ritual. Even businesses with some alerting often send it to an inbox, where a failure message sits among newsletters and receipts. The person learns that the inbox cannot be trusted to tell them, so they check the systems directly.

There are other reasons too:

- **Jobs report failure but not absence.** A job that errors may send a message. A job that never started sends nothing at all.
- **Nobody set up notifications.** The tool was configured to run, but the notification settings were left at their defaults.
- **The person was the one who noticed last time.** Once someone has caught a failure by checking, they tend to keep checking, and the responsibility settles on them without anyone deciding it.

## An illustrative morning

Consider an illustrative case: the finance administrator of a South African wholesale business with about thirty staff. Overnight, the business's systems run four scheduled jobs: a bank feed into the accounting package, a stock update from the warehouse system to the online store, a price list export to two large customers and a backup of the shared drive.

Each morning the administrator spends twenty minutes or so confirming each one. Once, a few months ago, the stock update had stopped for three days before a customer complained about ordering items that were out of stock. Since then the check has become non-negotiable. When the administrator is on leave, a colleague is given a written list, but is never quite sure what a failure would look like.

The check is sensible. It has caught real problems. It exists because the business has assigned monitoring to a person's attention without ever deciding to.

## The human tax: attention and cognitive load

The time is modest. The attention is the larger cost. The person carries a mental list of jobs, how each one should look when it has worked, and what to do when it has not. That list never fully leaves them, including on leave, when they may wonder whether the colleague has checked.

There is also a cost to the start of the day. Beginning every morning by looking for failure frames the work that follows. Some people do this calmly and find it a reassuring routine. Others may experience it as a small daily uncertainty. Mellorca cannot know which applies to any individual. The narrower claim is that the morning check is a recurring cognitive load that a better system design could carry instead.

Mellorca has written about related situations: the evening version in [the notification you check before you sleep](/moments/the-notification-you-check-before-you-sleep/), and the specific uncertainty of recovery in [the stress of not knowing if the backup worked](/moments/the-stress-of-not-knowing-if-the-backup-worked/). This piece is about the routine verification of ordinary scheduled work, which is less dramatic and far more frequent.

## What could realistically change

1. **Monitor for absence, not only for errors.** Services such as Healthchecks.io work on a simple principle described in [their documentation](https://healthchecks.io/docs/): a scheduled job sends a signal each time it runs, the service stays silent as long as signals arrive on time, and it raises an alert as soon as one does not. A grace period allows for jobs that run slightly late. The approach catches jobs that never started, which error messages cannot.
2. **Use the notification settings that already exist.** Many tools can report on their own jobs. [Microsoft's documentation for SQL Server Agent](https://learn.microsoft.com/en-us/ssms/agent/notify-an-operator-of-job-status), for example, describes notifying a named operator when a job succeeds, fails or completes. The setting is often available and unused.
3. **Send alerts somewhere they will be seen.** A failure message should go to a place reserved for things that need action, not to a general inbox.
4. **Produce one morning summary.** Instead of five screens, a single short report listing each job and whether it ran turns a twenty-minute investigation into a glance.
5. **Write down what good looks like.** A one-page note for each job, describing how to tell it has worked and who to call when it has not, lets a colleague cover without guessing.

Mellorca's guide on [how to know whether an automation actually ran](/insights/how-to-know-whether-an-automation-actually-ran/) covers the technical detail. The human point is simpler: the system should tell the person, rather than the person interrogating the system.

## What changes first, and the business outcome

The first change is that the morning begins with a summary or with silence that can be trusted. If nothing has been reported, nothing needs checking. If something has failed, the person knows which job, and when it stopped.

For the business, failures are found sooner and by design rather than by habit. A missed stock update is caught the same morning instead of three days later. Cover during leave becomes reliable, because it no longer depends on one person's knowledge of what to look for.

## The human dividend

The dividends are attention and predictability. Attention, because the mental list of jobs to verify is held by a system rather than by a person. Predictability, because the start of the day no longer depends on what the night may have done.

The person may still choose to look. The difference is that looking becomes a choice rather than the only safeguard.

## The trade-offs

- **Alerts can become noise.** Badly tuned monitoring produces false alarms, and people learn to ignore them. Fewer, clearer signals work better than many.
- **Trust takes time.** Someone who has caught real failures by checking will reasonably want evidence before they stop.
- **Monitoring is another system to maintain.** When jobs change, the monitoring has to change with them, or it gives false comfort.
- **Someone still owns the response.** An alert only helps if a named person is responsible for acting on it.

## Why it matters

The morning check is easy to overlook because it works. Problems are caught, the business runs and the person absorbs the effort quietly. But it means a part of someone's mind is always occupied with the night before.

Mellorca's interpretation is that this is not diligence that should be expected forever. It is a monitoring gap that has been filled by a conscientious person. Let jobs report their own absence, send alerts where they will be seen and write down what good looks like. What returns to the person is the first half-hour of the day, and a little more of the attention they had been holding in reserve.
