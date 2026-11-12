---
hub: patterns
record_id: PAT-017
slug: the-cost-of-work-that-adds-no-new-information
title: The Cost of Work That Adds No New Information
description: Reports, summaries, status updates and confirmations often restate facts that already sit in a system. Testing each for what it genuinely adds frees skilled time for interpretation and action.
lead: Reports, summaries, status updates and confirmations often restate facts that already sit in a system. Testing each for what it genuinely adds frees skilled time for interpretation and action.
category: Manual Work & Administrative Load
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Manual Work & Administrative Load
pattern_family: Manual Work & Administrative Load
observable_condition: Staff regularly compile reports, summaries, status updates and confirmations whose content is already available in a system or already known to the recipient.
primary_identification: Information-redundancy problem: people are used to transport and restate existing information rather than interpret or act on it.
commercial_value_dimensions: capacity, decision speed, accuracy, key-person risk
sources:
  - Muda, Mura, Muri - Get a Quick Introduction - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/muda-mura-muri/
  - Failure Demand | https://beyondcommandandcontrol.com/failure-demand/
  - Email Subscriptions for Reports and Dashboards in the Power BI Service - Power BI | https://learn.microsoft.com/en-us/power-bi/collaborate-share/end-user-subscribe
related:
  - When New Business Brings More Paperwork Than Profit | /patterns/when-new-business-brings-more-paperwork-than-profit/
  - When Repetitive Work Is Mistaken for Necessary Work | /patterns/when-repetitive-work-is-mistaken-for-necessary-work/
  - When People Are Used to Move Data Instead of Make Decisions | /patterns/when-people-are-used-to-move-data-instead-of-make-decisions/
summary: Reports, summaries, status updates and confirmations often restate facts that already sit in a system. Testing each for what it genuinely adds frees skilled time for interpretation and action.
layout: plain
---
## Observable condition

Every Monday morning, the operations coordinator opens the job management system, filters last week's completed jobs, copies the list into a spreadsheet, adds a column for the technician's name, formats it and emails it to the three managers. Each of those managers can already see the same jobs in the same system. On Tuesday, the finance clerk takes the list of invoices raised, retypes the totals into a summary and sends it to the owner, who has access to the accounting package. On Wednesday, a team leader writes a status update describing where each project stands, using information she gathered by asking the people who updated the project tracker on Monday.

Nobody in this business is idle, and every one of these tasks is done carefully. Yet when you ask what the recipient knows after reading the email that they could not have found out before it was sent, the honest answer is often: nothing. The work moved information, reformatted it, summarised it or confirmed it. It did not create any.

## Realisation

Most businesses judge work by whether it was done and whether it was done well. Very few ask whether it added anything new. A report produced on time, accurately and neatly looks like good work, even if every number in it was already sitting in a system the reader could open.

The realisation is that a meaningful share of daily effort can be spent repackaging information that already exists. Each instance is small, and each feels responsible. Together they absorb hours of skilled time every week, introduce copying errors, and create a lag between when something happened and when the people who need to know actually know. The work is not wrong. It simply adds no new information, and the business pays full price for it.

Realisation prompt: take the last five internal reports, summaries or updates you received. For each one, ask where the underlying data came from and whether you could have seen it yourself, in the same form, without someone preparing it.

## Identification

This is an information-redundancy problem: people are being used to transport, reformat and restate information between systems and people, rather than to interpret it or act on it. In lean terms it is a form of waste. The Lean Enterprise Institute's definition of [muda](https://www.lean.org/lexicon-terms/muda-mura-muri/) describes it as any activity that consumes resources without creating value for the customer, and distinguishes waste that can be removed quickly from waste that needs deeper redesign.

It overlaps with, but is not the same as, the duplicate capture described in [the hidden cost of re-entering the same information](/patterns/the-hidden-cost-of-reentering-the-same-information/). Re-entry is about typing the same data into a second system. This pattern is broader: it includes reports, summaries, status updates, confirmations and forwarded messages whose content is already known or already available.

## Diagnosis

The visible symptom is busy people producing a steady stream of internal documents. The common assumption is that these documents are how a business stays informed. The structural causes are usually these:

- **Systems that are hard to read.** Information exists, but the system that holds it is awkward to search, filter or view, so someone extracts it on behalf of everyone else.
- **Reports designed for a past need.** A summary was created years ago when the data lived in paper files. The data moved into software; the summary did not stop.
- **Status that has to be asked for.** When the current state of work is not visible, people ask, and someone writes an update. The update contains what the tracker already says, plus a delay.
- **Trust gaps.** Managers do not trust the system's figures, so they ask a person to compile and vouch for them. The compilation adds reassurance, not information.
- **Confirmation loops.** Emails confirming receipt of emails, messages confirming that a job was logged, calls checking that a form arrived. Each exists because the original step gives no reliable signal of its own.

Some of this demand comes from earlier failures. Vanguard's description of [failure demand](https://beyondcommandandcontrol.com/failure-demand/) defines it as demand caused by a failure to do something, or do something right, for the customer. Internally, much status chasing has the same character: it exists because the original process did not make its outcome visible.

## Commercial impact

The commercial value at stake is capacity, speed of decision and the reliability of what management sees.

- **Capacity.** Hours spent restating information are hours not spent resolving problems, serving customers or improving the work. The people doing it are often among the most reliable in the business.
- **Speed.** A summary compiled on Monday about last week is already old. Decisions wait for the document rather than drawing on current data.
- **Accuracy.** Every manual copy is a chance to introduce an error, and the copy is often treated as more authoritative than the source.
- **Dependency.** When one person produces the report, the business's visibility depends on their availability, a risk explored in [the hidden cost of waiting for management information](/patterns/the-hidden-cost-of-waiting-for-management-information/).

The size of the effect should be estimated from the business's own data: how many recurring reports and updates exist, how long each takes and how often it is produced. The method in [how to calculate the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/) applies directly.

## Common misidentification

The usual response is to make the repackaging faster: a better spreadsheet template, a macro, or a tool that generates the summary automatically. That reduces effort but keeps the underlying question unasked. Automating a report nobody needs still produces a report nobody needs. The opposite error is to cancel reports wholesale and leave managers without the visibility they genuinely require. The aim is to separate the need, which is usually real, from the method, which is often obsolete.

## Possibility

In a stronger state, people who need information go to where it already lives and see it in a form that suits them. Recurring summaries are generated from the system of record rather than assembled by hand. Many reporting tools already support this: Microsoft's guidance on [email subscriptions for Power BI reports](https://learn.microsoft.com/en-us/power-bi/collaborate-share/end-user-subscribe) describes scheduled emails containing a snapshot of, and link to, a report, delivered on a frequency the user chooses. Status is visible in the workflow itself, so nobody has to ask. Staff time shifts from restating facts to interpreting them: explaining why a number moved, what should happen next and who should act.

## Intervention

1. **List the information-moving work.** Collect every recurring report, summary, status update and confirmation produced in a typical week, with who produces it and who receives it.
2. **Apply the new-information test.** For each, ask what the reader learns that is not already available in a system. Mark items that add interpretation, judgement or genuinely new data.
3. **Ask recipients what they actually use.** Often only one figure or one exception list matters. The rest is habit.
4. **Fix the source, not the copy.** Where people extract data because the system is hard to read, improve the views, filters or dashboards in the system.
5. **Automate what remains.** Scheduled reports, alerts on exceptions and visible status replace manual compilation.
6. **Redirect the time.** Give the people who used to compile reports the job of explaining them.

## An illustrative example

The following is illustrative, not a client case. A Durban electrical contractor with about forty staff finds that its administrator spends most of Monday and part of Friday producing four internal reports. When each recipient is asked what they use, the owner reads only the overdue-jobs figure, the operations manager uses only the list of jobs awaiting parts, and two reports are not opened at all. The contractor sets up saved views in its job system, a scheduled email of overdue jobs, and drops the two unused reports. The administrator's freed time goes to chasing supplier delays, which the business had never had capacity to do properly.

## Practical diagnostic questions

- How many recurring internal reports and updates does your business produce each week?
- For each, could the recipient see the same information directly in a system?
- Which reports exist because a system is hard to read rather than because the information is unavailable?
- How much status reporting exists because work progress is not visible?
- Who would notice if a given report stopped?

## Bottom line

Work that adds no new information is easy to miss because it looks diligent. It is copying, compiling, restating and confirming facts that already exist. Testing each recurring report and update for what it genuinely adds, fixing how systems display information and automating what remains turns that effort back into interpretation and action, which is where people create value.
