---
hub: patterns
record_id: PAT-019
slug: when-people-are-used-to-move-data-instead-of-make-decisions
title: When People Are Used to Move Data Instead of Make Decisions
description: Repeated manual transfer of information between systems can turn skilled employees into human data pipelines.
lead: If skilled employees repeatedly move information between systems, the business may be using people as an integration layer rather than as decision-makers.
category: Manual Work & Administrative Load
published_date: 2026-09-05
updated_date: 2026-09-05
eyebrow: Pattern
tags:
  - Capacity
  - Productivity
  - Scalability
cta_label: Business Automation
cta_href: /services/business-automation/
side_title: Commercial value
pattern_family: Manual Work & Administrative Load
observable_condition: Employees repeatedly copy, re-key or relay information between systems before higher-value work can continue.
primary_identification: human data-pipeline and workflow orchestration problem
commercial_value_dimensions: Capacity, Productivity, Error risk, Scalability
sources:
  - Overview of cloud flows - Power Automate | https://learn.microsoft.com/en-us/power-automate/overview-cloud
  - The Government Data Quality Framework | https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework
  - Explore the Power Automate home page - Power Automate | https://learn.microsoft.com/en-us/power-automate/getting-started
related:
  - When Manual Exceptions Become the Normal Process | /patterns/when-manual-exceptions-become-the-normal-process/
  - Why Teams Keep Building Manual Workarounds | /patterns/why-teams-keep-building-manual-workarounds/
  - Why Staff Keep Checking the Same Things Over and Over | /patterns/why-staff-keep-checking-the-same-things-over-and-over/
summary: Repeated manual transfer is often a systems-and-workflow design issue rather than a people-capacity issue. Reducing unnecessary data movement can release capacity, improve consistency and make growth less dependent on administrative headcount.
---
## Observable condition

A person opens one system, finds a record, copies fields into another application, emails an update, renames a file or re-enters the same facts so that the next step can happen. Later, someone else checks that the copy matches the original. When a figure is wrong, a third person investigates which version was correct.

None of this looks unusual. It is often written into job descriptions as “administration” or “processing”, and the people doing it are frequently among the most experienced in the team, because they know where everything lives.

## Realisation

The employee appears busy, but much of the activity creates no new judgement. It transports information. As volume rises, that hidden transport layer scales with headcount unless the workflow changes.

There is a second realisation. The people doing the transporting are usually the ones best placed to make decisions: to spot an unusual order, to question a pricing exception or to notice a customer at risk. Every hour spent moving data is an hour their judgement is not being used. The business is paying for expertise and receiving data entry.

## Identification

This is a **human data-pipeline and workflow orchestration problem**. The visible symptom is repetitive administration. The deeper condition is that systems and process stages are not carrying state forward reliably, so people do it instead.

A useful test is to ask, for each manual step: does this step change what happens next, or does it only make information available somewhere else? Steps of the second kind are transport. They are candidates for integration. Steps of the first kind are decisions, and they are where people add value.

## Diagnosis

The visible symptom is workload. The common assumption is that the team is under-resourced or that the process is simply administrative by nature. The structural cause is usually one or more of the following:

- **Disconnected applications.** Systems were bought separately to solve separate problems and were never connected.
- **Unclear system-of-record ownership.** Nobody has decided which system owns each fact, so it is maintained in several places by hand.
- **Manual approvals.** A decision step requires someone to gather information from several systems into an email before anyone can say yes.
- **Unstructured inputs.** Orders, requests and documents arrive as free-text emails or PDFs, so a person must read and re-key them.
- **Rules held in people’s heads.** Business rules exist only in staff knowledge, so a system cannot apply them.

Re-keying also carries a quality cost. The UK government’s [Government Data Quality Framework](https://www.gov.uk/government/publications/the-government-data-quality-framework/the-government-data-quality-framework) names manual data entry errors among the common sources of poor data quality and encourages organisations to address root causes rather than apply temporary fixes. Each manual transfer is a point where a figure can be mistyped, a field missed or an update applied to the wrong record.

Automation platforms illustrate the general shape of the alternative. Microsoft’s [overview of Power Automate cloud flows](https://learn.microsoft.com/en-us/power-automate/overview-cloud) describes automated workflows that connect apps and services and are triggered by events, such as the arrival of an email, or by a schedule, then perform actions across multiple services. The specific product matters less than the pattern: events, conditions and actions can move structured data between systems while keeping exceptions visible for people.

## Commercial impact

The commercial value at stake is **capacity, productivity, error risk and scalability**.

Manual transfer consumes skilled time. It creates opportunities for stale or mismatched data, which in turn create rework, customer queries and corrections. It slows the process down, because each handoff waits for a person to be available. And it makes growth dependent on more coordination effort: if twice the orders require twice the copying, revenue growth arrives with a matching growth in administrative cost. The related pattern [Why high-value employees become human middleware](/patterns/why-high-value-employees-become-human-middleware/) examines this from the perspective of the people involved.

## Common misidentification

The problem is often labelled a staffing shortage. More people may relieve pressure temporarily, but they do not remove the structural reason people are doing transport work. A second misidentification is to treat it as a training issue, assuming errors would disappear if staff were more careful. Care helps, but a process that depends on perfect re-keying will produce errors at some rate whatever the training.

## Possibility

A stronger operating model captures information once, gives each field a clear owner, passes reliable state between process stages, and uses people for exceptions, judgement and customer decisions. In that model, the experienced person who used to copy order details is the person who reviews the orders that the rules flag as unusual. Their knowledge becomes the design input for the rules, rather than a substitute for them.

## Intervention

Start with one high-volume workflow rather than a programme:

1. **Map the workflow as it really runs.** Follow a real case from start to finish and note every system it touches.
2. **Mark every transfer.** Record each point where a person copies, re-keys, reconciles or relays information.
3. **Separate judgement from transport.** Label each step as a decision or as movement of state.
4. **Assign ownership.** Decide which system owns each key field, so that integration has a clear direction.
5. **Automate the transport.** Design integrations or event-driven automation around the movement steps, starting with those that are frequent, rule-based and low-risk.
6. **Design the exception path.** Make sure records that do not fit the rules land in front of a named person with the context needed to decide.

For more on the mechanics, see [How manual data transfer becomes an operational bottleneck](/insights/how-manual-data-transfer-becomes-an-operational-bottleneck/).

## Practical diagnostic

### Warning signs

- The same customer, order or invoice details are typed into more than one system.
- Staff keep a second screen or a spreadsheet open purely to copy from.
- Work stops when one particular person is on holiday, because only they know where to move information.
- Errors are found downstream and traced back to a re-keyed value.
- Team leads describe their busiest people as “doing admin” rather than making calls.
- Growth plans assume administrative headcount rising in step with volume.

### Diagnostic questions

- Where is the same information entered more than once?
- Which transfers require judgement and which are mechanical?
- What system should own each key field?
- Which exceptions genuinely require human review?
- What breaks when transaction volume doubles?

The companion pattern [When copy and paste becomes part of the job description](/patterns/when-copy-and-paste-becomes-part-of-the-job-description/) offers further signs.

## Bottom line

When people spend their day moving data, the organisation is paying human attention to compensate for a missing operating connection. Removing that transport work does not remove the need for people; it returns them to the decisions the business actually needs them to make.
