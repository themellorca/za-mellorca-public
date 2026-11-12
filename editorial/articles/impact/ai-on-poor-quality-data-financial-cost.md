---
hub: impact
record_id: CPS-280
slug: ai-on-poor-quality-data-financial-cost
title: AI on Poor-Quality Data: Faster Decisions, Unreliable Results
description: AI does not repair weak source data by itself. Incomplete, inconsistent or poorly governed business data can make automated analysis faster without making it more reliable.
lead: AI can accelerate analysis, classification and decision support. If the underlying business data is incomplete, inconsistent or poorly understood, the organisation can simply reach unreliable conclusions faster.
category: AI Governance
published_date: 2026-09-02
updated_date: 2026-09-02
byline_category: Artificial Intelligence, AI Agents & Governance
tags:
  - Decision error
  - Rework
  - AI waste
cta_label: Automation & AI Workflows
cta_href: /services/business-automation-ai-workflows/
side_title: Cost mechanisms
side_text: AI value depends on integrated systems, governed data and explicit operating rules.
commercial_domain: Artificial Intelligence, AI Agents & Governance
primary_pain: AI systems depend on business data whose quality, provenance and fitness for use are not adequately controlled
primary_cost_mechanism: Decision error, rework, remediation cost and wasted AI investment
sources:
  - https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf | https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf
  - What Is Data Quality? - IBM | https://www.ibm.com/think/topics/data-quality
  - NIST-led Panel Addresses Qualifying Data for AI Use | https://www.nist.gov/news-events/news/2022/02/nist-led-panel-addresses-qualifying-data-ai-use
  - Artificial Intelligence Risk Management Framework: Generative Artificial Intelligence Profile | https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence
  - AI Risks and Trustworthiness - AIRC | https://airc.nist.gov/airmf-resources/airmf/3-sec-characteristics/
closing_title: Method note
closing_text: No generic AI-error benchmark is used. Measure correction rates, rework, data defects and business consequences in the specific use case.
related:
  - Staff Using AI with Company Data Nobody Governs | /impact/uncontrolled-ai-company-data-financial-risk/
  - When Revenue Is Visible but Profitability Is Not | /impact/no-visibility-into-customer-product-profitability/
  - When Customer Details Differ Between Applications | /impact/pain-customer-details-different-applications-cost-mistakes/
---
## The tolerated pain is treating data as available when it is not fit for purpose

A business can have large volumes of data and still have weak inputs for AI. Customer records may contain duplicates. Product names may vary between systems. Historical decisions may have been recorded inconsistently. Important fields may be missing or based on definitions that changed over time.

None of this stops an AI project from running. That is what makes the problem dangerous. A model can produce an answer from poor inputs with the same confidence and speed it produces an answer from good ones.

Take a mid-sized distributor that introduces an AI assistant to draft replies to customer stock queries. The assistant reads from the inventory system, but the warehouse keeps its own spreadsheet of stock that has been counted but not yet captured. The assistant confidently tells customers that items are available when the shelf is empty, and that others are out of stock when they have just arrived. The model is doing what it was asked. The data it was given does not describe reality. This is the situation explored in [why AI tools fail without authoritative data](/discovery/why-ai-tools-fail-without-authoritative-data/).

## Why businesses tolerate the problem

AI projects are visible and exciting. Data clean-up is slower, less glamorous and often owned by nobody. Teams therefore start with the tools they can buy rather than the information conditions the use case requires.

NIST's [AI Risk Management Framework](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-1.pdf) treats validity and reliability as core trustworthiness characteristics, and warns that systems which are inaccurate, unreliable or poorly generalised beyond the data and settings they were developed for increase AI risk. NIST's work on [qualifying data for AI](https://www.nist.gov/news-events/news/2022/02/nist-led-panel-addresses-qualifying-data-ai-use) also stresses understanding data source, collection method, coverage, variance, integrity and sensitive information. NIST has since published a [Generative AI Profile](https://www.nist.gov/publications/artificial-intelligence-risk-management-framework-generative-artificial-intelligence) to accompany the framework. The implication is practical: data quality is not an abstract data-team concern; it is part of whether the AI system is fit for its intended use.

There is also a common assumption that newer AI tools are better at coping with messy information. They are often better at producing fluent output from it, which is not the same thing. The argument is developed further in [why AI makes data quality more important, not less](/insights/why-ai-makes-data-quality-more-important-not-less/).

### Warning signs

- Staff keep side spreadsheets to "correct" what the official system says.
- Two reports on the same measure produce different numbers and nobody can say which is right.
- The same customer or product appears under several names or codes.
- AI pilots are described as promising but never move into daily use.
- Users check every AI output by hand because they no longer trust it.

## How the pain becomes money

- **Decision error:** poor inputs can distort prioritisation, classification, forecasting or recommendations.
- **Rework:** employees spend time checking, correcting and overriding outputs that cannot be trusted.
- **Wasted AI spend:** licences, model usage and implementation effort are consumed before the underlying information problem is solved.
- **Remediation cost:** bad outputs that reach customers or operations may require correction, communication and review.
- **Low adoption:** staff stop using AI when repeated errors destroy confidence, leaving the organisation paying for capability it does not trust.

> **The commercial signal:** if people routinely say "the AI is wrong" but nobody can determine whether the problem came from the model, the prompt, the source data or the business rule, the organisation lacks a reliable AI operating layer.
>

## Measure data fitness against the use case

There is no universal data-quality score that makes a dataset "AI ready". Fitness depends on the decision being supported. A missing field may be irrelevant for one use case and critical for another.

Before deployment, define which data fields matter, where they originate, who owns them, how often they change and what error level the business can tolerate. Test the AI against known cases and track where poor data rather than model behaviour causes failure.

IBM's guide to [data quality](https://www.ibm.com/think/topics/data-quality) offers a workable checklist of dimensions: completeness, uniqueness, validity, timeliness, accuracy, consistency and fitness for purpose. Applied to a single use case, they become concrete questions:

| Dimension | Question for the use case |
| --- | --- |
| Completeness | Are the fields the AI relies on actually filled in? |
| Uniqueness | Does each customer, product or supplier exist once? |
| Validity | Do values follow the expected formats and business rules? |
| Timeliness | Is the data current enough for the decision being made? |
| Accuracy | Does it match the agreed source of truth? |
| Consistency | Do connected systems agree on the same record? |

The consistency question usually leads back to ownership. If two systems hold the same information, one needs to be authoritative; see [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).

**AI rework cost** = outputs requiring correction × average correction time × loaded labour cost

**Data-remediation effort** = records requiring correction × average remediation time × loaded labour cost

These are operational measures, not universal benchmarks. They show whether AI is reducing work or merely relocating it into verification and clean-up.

### Diagnosing where errors come from

When an output is wrong, record why. A simple four-way tag is enough: source data wrong or missing, business rule unclear, prompt or configuration at fault, or model behaviour. After a few weeks a pattern tends to emerge. If most corrections trace back to data and rules rather than the model, that changes where money should be spent. Without this tagging, the instinctive response is to switch tools, which carries the same data problems into the next platform.

## Faster is not the same as better

Automation changes the economics of error. A person may make a bad decision slowly and locally. An AI-enabled workflow can apply the same flawed input across hundreds of records quickly. That can improve productivity when controls are sound; it can also scale mistakes when they are not. The risk is sharper still once AI can take actions rather than only make suggestions, as discussed in [why bad data becomes more dangerous when AI can take actions](/insights/why-bad-data-becomes-more-dangerous-when-ai-can-take-actions/).

For high-impact use cases, validation and human review should reflect the consequence of being wrong, not the novelty of the technology. The trade-off is real: more review reduces risk but also reduces the time saved. The answer is to set review thresholds by consequence, so that low-risk outputs flow freely and high-risk ones are checked.

## When this becomes commercially urgent

Priority is high when AI outputs influence pricing, customer eligibility, employee decisions, financial forecasts, operational scheduling or other material outcomes; when source systems disagree; when staff maintain unofficial spreadsheets to correct official data; or when AI pilots repeatedly fail because "the data isn't ready".

## What good looks like

A strong AI use case has defined source systems, documented data owners, measurable quality checks, traceable provenance, test cases, monitoring and a feedback loop for correcting both data and model behaviour. The organisation knows which data the system depends on and what happens when that data is missing or wrong.

## What to do first

Do not start with a company-wide data clean-up. Pick the one AI use case closest to production, list the ten fields it depends on most, and measure how often each is missing, duplicated or out of date. Fix the worst field at its source, then rerun the same test cases. That gives a realistic view of whether the use case is ready and what it will cost to make it so.

## Practical next actions

1. Choose one AI use case and identify every source field it depends on.
2. Document the authoritative source and owner for each critical field.
3. Measure missing, duplicate, inconsistent and stale records.
4. Create a representative test set with known expected outcomes.
5. Separate model errors from source-data errors during evaluation.
6. Define human review thresholds based on business consequence.
7. Fix recurring data-quality causes upstream instead of correcting outputs forever.

## Bottom line

AI can amplify the value of good information, but it also amplifies the consequences of weak information. Before scaling an AI workflow, prove that the data supporting the decision is fit for the job. Otherwise the business risks automating uncertainty.
