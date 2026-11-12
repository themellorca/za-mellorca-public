---
hub: moments
record_id: STORY-ANGLE-000095
slug: when-fixing-other-peoples-data-quietly-becomes-your-job
title: When Fixing Other People's Data Becomes Your Job
description: Analysts are often hired to interpret figures and end up repairing everyone else's inputs. Why it happens, what it costs and how to move the fix upstream.
lead: Analysts are often hired to interpret figures and end up repairing everyone else's inputs. Why it happens, what it costs and how to move the fix upstream.
category: Work and Dignity
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Work and Dignity
thematic_domain: work_and_dignity
human_situation: A person hired to analyse figures gradually becomes the unofficial repairer of other people's inconsistent data, spending most of the week cleaning before any analysis can start.
human_dividend: Time: hours returned to analysis or to the person's own choices once errors are fixed at the source instead of downstream.
trade_off: Moving accuracy upstream asks more of others and can feel like blame; constraints slow entry; the analyst role must be redefined honestly; some cleaning will always remain.
epistemic_state: HYPOTHESISED: reasoned from occupational research and public data-quality guidance, not from a survey of South African reporting teams; the worked example is illustrative.
sources:
  - Management Standards - Demands - HSE | https://www.hse.gov.uk/stress/standards/demands.htm
  - Job demands-resources model - Wikipedia | https://en.wikipedia.org/wiki/Job_demands-resources_model
related:
  - The Customer Service Agent Apologising for a Broken System | /moments/the-service-agent-who-apologises-for-a-system-they-cannot-fix/
  - The Receptionist Juggling Four Booking Systems | /moments/the-receptionist-who-keeps-four-booking-systems-in-sync/
  - Why Re-Keying Data Is Not a Career | /moments/why-re-keying-data-is-not-a-career-and-what-replaces-it/
summary: Analysts are often hired to interpret figures and end up repairing everyone else's inputs. Why it happens, what it costs and how to move the fix upstream.
layout: plain
---
Every Monday, someone opens the sales figures from three branches and finds that they cannot be added together. One branch records dates as day-month-year, another uses month-day-year, and the third has typed a product name four different ways. Nobody in reporting created these differences, but reporting has to clean them up before anyone can read a single total.

This piece looks at the quiet transfer of responsibility that happens when the person who produces a report becomes the person who repairs everyone else's data. It is a hypothesis drawn from general research on job design and on data quality, not a finding about a particular South African business, and the scenario is illustrative.

## How the repair job appears

Nobody is hired to fix other people's data. The role starts as analysis: take the figures, summarise them, tell the business what is going on. Then one month, a figure is wrong, and the analyst corrects it. The next month, the same error appears, and the analyst corrects it again. Within a year, correcting has become the larger part of the work, and the original skill of interpreting numbers is squeezed into whatever time is left.

This is the pattern behind [the report someone rebuilds by hand every Friday](/moments/the-report-someone-rebuilds-by-hand-every-friday/). The report looks like the product, but the real labour is in cleaning, matching and reconciling the inputs. Because the labour sits between the people who create the data and the people who read the report, it belongs to nobody and is therefore given to whoever is most reliable.

## Why the fix lands in reporting

The reasons are structural. The people entering data are measured on speed: orders taken, tickets closed, calls handled. Accuracy of a field that only matters downstream is invisible to them. The person producing the report is measured on a correct report. So the incentive to be careful sits at the end of the chain, far from where the mistakes are made.

- **Entry points are rarely controlled.** Free-text fields, optional fields and different spellings are accepted at the source, and the damage appears only at the report.
- **Feedback does not travel upstream.** The analyst fixes the figure quietly and the person who made the error never hears about it.
- **The fix is faster than the conversation.** Correcting a cell takes a minute. Persuading three branches to change a habit takes months.

The article on [how bad CRM data gets created](/insights/how-bad-crm-data-gets-created/) follows the same logic in the customer-record setting: poor data is usually produced by reasonable people working under conditions that never asked them to be precise.

## The human tax: dignity and time

The first cost is dignity. An analyst trained to find meaning in numbers can spend entire days acting as a proofreader for strangers. Their strengths, judgement and pattern recognition, are used only after the cleaning is done, if at all. And the cleaning is credited to nobody, so the effort that makes the report possible is invisible even to the people who rely on it. The Moment on [why best work is invisible when it is repair work](/moments/when-your-best-work-is-invisible-because-its-repair-work/) describes the same effect.

The second cost is time. Hours spent repairing are hours not spent analysing, and the repairs recur. The Job Demands-Resources model in occupational research treats a job as a balance between demands that drain and resources that restore. Repeated cleanup is a demand that adds no resource: it does not teach the person anything new, and it does not reduce next month's workload.

Data quality is also a recognised responsibility in its own right. The Information Regulator in South Africa oversees compliance with the Protection of Personal Information Act, and the Act's conditions include the quality of information held about people. The text of the [Protection of Personal Information Act](https://www.gov.za/documents/protection-personal-information-act) sets that out, and it matters because accuracy at the source is not only a reporting convenience. For personal data it is part of the business's duty.

## An illustrative case

Consider a hypothetical regional retailer with five stores and one person in head office who produces the weekly performance report. Each store manager sends a spreadsheet in their own layout. The analyst spends about two days a week aligning the layouts, correcting product names and chasing missing numbers, and about half a day on the report itself. Because the report goes out on time, management assumes the process is healthy.

When the analyst takes leave, the report is late for the first time in three years, and the business learns how much unseen effort held it together. The lesson is not that the analyst is irreplaceable. It is that the process was always bigger than the report.

## Practical next actions

1. **Log the fixes for four weeks.** Each time you correct something, note what was wrong, where it came from and how long the fix took. A pattern usually appears within a month.
2. **Send the pattern back to its source.** Show each contributor the three most common errors in their data, in a neutral tone, with an example. Most people fix what they can see.
3. **Constrain the entry point.** Replace free text with dropdowns, set required fields and fix a single date format. Spreadsheet tools and most business systems have built-in validation for this, which is a cheap first step.
4. **Agree a data owner for each source.** Write down who is responsible for the accuracy of each input, so that fixing becomes a shared duty. The article on [deciding which system owns which data](/insights/how-to-decide-which-system-owns-which-data/) is a useful companion.
5. **Protect analysis time.** Block a fixed part of the week for interpreting the figures, and treat cleanup that spills into it as a signal that the source needs attention.

## The business outcome

When errors are fixed at the source, reports arrive sooner and are trusted more, and the analyst's time moves from cleaning to explaining what the figures mean. Decisions improve because the people reading the numbers argue about the business and not about whether the totals are right. Where the same error repeatedly becomes an invoice dispute, [how one typing error becomes a disputed invoice](/insights/how-one-typing-error-becomes-a-disputed-invoice-and-a-wrong-report/) shows what a downstream fix can cost.

## The human dividend

The dividend is time, given back to the person whose job was meant to be analysis. Time is not a single use: it might be deeper insight, a skill they have wanted to learn, earlier finishes or more time with colleagues. The point is that the hours are no longer pre-spent on other people's mistakes.

## The trade-offs

- **Pushing accuracy upstream asks more of others.** Store managers and data-entry staff may feel blamed unless the change is framed as removing friction, not assigning fault.
- **Constraints can frustrate.** Required fields and fixed formats slow entry and may annoy people with genuine exceptions, so there must be a route for unusual cases.
- **The analyst's value is being redefined.** If the cleanup role disappears, the business must make sure the analysis role is real, and not leave the person without a defined purpose.
- **Some cleaning will always remain.** Perfect inputs are unrealistic, and the goal is fewer, visible repairs, not none.

## Why it matters

A report is only as good as its inputs, and the person assembling it should not be the only one who cares about that. Spreading responsibility for accuracy across the people who create the data frees the analyst to do the job they were hired for. For a view of the human side of a similar chore, see [the late night spent reconciling two spreadsheets](/moments/the-late-night-spent-reconciling-two-spreadsheets/).
