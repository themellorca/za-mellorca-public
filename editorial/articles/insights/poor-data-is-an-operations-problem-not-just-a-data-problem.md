---
hub: insights
record_id: INS-226
slug: poor-data-is-an-operations-problem-not-just-a-data-problem
title: Poor data is an operations problem, not just a data problem
description: Bad records usually come from how work is done: rushed capture, unclear ownership and processes that never ask for the right fact. Fix operations first.
lead: Bad records are usually created by the way work is done: rushed capture, unclear ownership and processes that never ask for the right fact at the right moment. Fixing data therefore starts with fixing operations.
category: Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Operations
sources:
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
  - Only 3% of Companies’ Data Meets Basic Quality Standards | https://hbr.org/2017/09/only-3-of-companies-data-meets-basic-quality-standards
related:
  - What your recurring problems are telling you about your systems | /insights/what-your-recurring-problems-are-telling-you-about-your-systems/
  - Why fixing symptoms without mapping the system rarely works | /insights/why-fixing-symptoms-without-mapping-the-system-rarely-works/
  - What to fix first when everything feels broken | /insights/what-to-fix-first-when-everything-feels-broken/
summary: Bad records are usually created by the way work is done: rushed capture, unclear ownership and processes that never ask for the right fact at the right moment. Fixing data therefore starts with fixing operations.
layout: plain
---
When a report is wrong, an invoice goes to the wrong address or an automation sends a reminder to a customer who has already paid, the usual response is to call it a "data problem". Someone is asked to clean the spreadsheet, merge the duplicates or run a fix in the CRM. A few months later the same problems are back.

They come back because the data was not the cause. The data was the symptom. Records are created and changed by people doing their jobs, inside processes the business designed, under pressures the business created. If those processes allow, or even encourage, incomplete and inconsistent records, the business will keep producing them however often it cleans up.

> Data quality is the residue of how work is done. Change the work and the data changes with it.
>

## Where bad data actually comes from

It helps to be specific about what "bad" means. The UK [Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) describes six dimensions: completeness (are the records and values present?), uniqueness (is each thing recorded once?), consistency (do values contradict each other?), timeliness (is the data current enough for its use?), validity (is it in the expected format and range?) and accuracy (does it match reality?). Each of these failures has an operational origin.

| Defect | Typical operational cause |
| --- | --- |
| Missing fields | The field is not needed by the person capturing it, only by someone later in the process |
| Duplicate customers | Searching is slower than creating a new record, and nobody owns the customer list |
| Inconsistent values | Two systems hold the same fact and both can be edited |
| Out-of-date records | Changes arrive by phone or email and updating the system is nobody's step |
| Invalid formats | Free-text fields where a list or a validated value was needed |
| Inaccurate entries | Capture is rushed at a busy point in the day, or done from memory afterwards |

None of these is a technical fault. Each is a design decision, usually an unconscious one, about who captures what, when and why.

## The person who captures the data rarely suffers from it

The most common pattern is a mismatch between who enters a fact and who depends on it. A salesperson closing a deal has every reason to move fast and little reason to record the delivery contact, the billing entity or the purchase-order number accurately. Those details matter to operations and finance, days or weeks later.

When the cost of poor capture lands on a different team, the capturing team does not feel it, and the receiving team spends its time chasing, correcting and re-keying. That is an operations cost, paid in hours, delays and customer frustration, even though it shows up as "bad data". The cost of the same customer living differently in several systems is set out in [what it costs when customer details differ between applications](/impact/pain-customer-details-different-applications-cost-mistakes/).

## An illustrative example

Take an illustrative Pretoria engineering services firm with about 50 staff. Its month-end invoicing regularly slipped by several days. Finance described the problem as "the job data is a mess": jobs without purchase-order numbers, wrong client branches, labour hours recorded against closed jobs.

A data clean-up was done twice in a year. Both times the problems returned within weeks. When the firm finally traced the defects back, it found that technicians captured job details on their phones at the end of the day, from memory, and the job form did not require a purchase-order number because the field had been made optional during a busy period years earlier. Branch details were chosen from an unfiltered list of every client site in the country.

The fixes were operational: the purchase-order number became required before a job could be scheduled, not after it was completed; the branch list was filtered by client; and technicians closed each job on site instead of at the end of the day. Finance stopped cleaning data because far less bad data was being made.

## Why clean-ups do not last

A clean-up treats the stock of bad records and ignores the flow that keeps adding to it. The Government Data Quality Framework makes the same point in its own terms: it recommends using root-cause analysis to solve data quality issues at source rather than applying temporary fixes, and it stresses that good planning early in the data lifecycle can prevent problems before they occur.

Clean-ups still have a place. Before a migration, before switching on an automation, or before an AI tool starts acting on records, the existing stock must be fit for use. But a clean-up without a change to the capturing process is a recurring cost, not a solution. Where the data feeds automation, the consequences arrive faster, as described in [when poor data quality becomes an automation failure](/patterns/when-poor-data-quality-becomes-an-automation-failure/).

## There is a compliance dimension too

For personal information, quality is not optional in South Africa. Section 16 of the Protection of Personal Information Act requires a responsible party to take reasonably practicable steps to ensure that personal information is complete, accurate, not misleading and updated where necessary, having regard to the purpose for which it is collected or further processed.

That obligation is met, or missed, in daily operations: in how customer details are captured, how changes are recorded and how duplicates are prevented. A policy document cannot satisfy it if the process keeps producing out-of-date and conflicting customer records.

## How to treat data quality as an operational issue

### 1. Measure it where it is created

Do not start with the warehouse or the report. Start with recent records from one team. The HBR article on companies' data [quality standards](https://hbr.org/2017/09/only-3-of-companies-data-meets-basic-quality-standards) suggests a simple exercise: assemble the last 100 data records your department completed and work through each one looking for errors. A manager who does this for an afternoon usually learns more than a year of complaints revealed.

### 2. Trace each defect to a step

For each type of error, ask which step in the process created it, who performed it and what they were trying to achieve at the time. The answer is almost always a process or form design issue, not a carelessness issue.

### 3. Move capture to the moment of knowledge

Facts should be captured by the person who knows them, when they know them. Delivery details belong at order acceptance, not dispatch. Job details belong on site, not at the end of the week.

### 4. Give every important fact one owner and one home

If two systems can both change a customer's address, they will eventually disagree. Decide which system holds each fact and which team is responsible for it; see [how to decide which system owns which data](/insights/how-to-decide-which-system-owns-which-data/).

### 5. Build the rule into the system

Required fields, picklists instead of free text, duplicate checks before creation and validation of formats remove whole categories of error. They should be used sparingly and deliberately: too many mandatory fields invite people to type anything to get past the form.

### 6. Report quality to the people who create it

Teams improve what they can see. A short weekly view of missing, duplicate or late records, shown to the team that captures them, aligns the incentive with the consequence.

## Warning signs that data is really an operations issue

- The same clean-up has been done more than once.
- Finance or operations keeps a private spreadsheet that "corrects" the system.
- Staff phone each other to confirm facts that are supposedly in the system.
- Different reports give different figures for the same thing; see [why your reports cannot agree on the same number](/insights/why-your-reports-cannot-agree-on-the-same-number/).
- Important fields are optional because making them required "slowed people down".

## Trade-offs

Better capture can add a little time at the front of a process. That time is almost always cheaper than the rework it prevents, but it is felt by a different team, so the decision needs to be made by someone who can see both sides. The aim is not perfect data everywhere. It is data that is good enough for each decision and each automation that depends on it, produced reliably by the way the work is done.
