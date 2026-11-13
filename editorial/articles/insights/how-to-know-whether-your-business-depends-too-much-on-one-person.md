---
hub: insights
record_id: INS-327
slug: how-to-know-whether-your-business-depends-too-much-on-one-person
title: How to know whether your business depends too much on one person
description: Most owners suspect key-person risk but cannot size it. An evidence-based way to measure dependency on individuals using records you already have.
lead: Most owners suspect they have a key-person risk but cannot say how large it is. A practical, evidence-based way to measure dependency on individuals, using records the business already has and a simple capability count.
category: Digital Operations
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Digital Operations
sources:
  - Bus factor - Wikipedia | https://en.wikipedia.org/wiki/Bus_factor
  - How we identify and mitigate single-points-of-failure (SPOF) - Ministry of Justice Digital and Technology | https://mojdigital.blog.gov.uk/2021/08/03/how-we-identify-and-mitigate-single-points-of-failure-spof/
  - OPS11-BP04 Perform knowledge management - AWS Well-Architected Framework | https://docs.aws.amazon.com/wellarchitected/latest/framework/ops_evolve_ops_knowledge_management.html
related:
  - How to find the manual work nobody is measuring | /insights/how-to-find-the-manual-work-nobody-is-measuring/
  - How to find the real bottleneck in a digital operation | /insights/how-to-find-the-real-bottleneck-in-a-digital-operation/
  - How to diagnose a business that runs on exceptions | /insights/how-to-diagnose-a-business-that-runs-on-exceptions/
summary: Most owners suspect they have a key-person risk but cannot say how large it is. A practical, evidence-based way to measure dependency on individuals, using records the business already has and a simple capability count.
layout: plain
---
Almost every owner of a growing business has a name that comes to mind when asked, "who could you least afford to lose next week?" Often it is a long-serving operations manager, a bookkeeper, the person who set up the systems, or the owner themselves. The instinct is usually right. What is missing is a way to say how large the risk is, where exactly it sits and which part of it to deal with first.

The reasons dependency forms, and the systems approach to reducing it, are covered in [key-person dependency is a systems problem](/insights/key-person-dependency-is-a-systems-problem/). This article is about the step before that: finding out, with evidence rather than impression, whether the business depends too much on one person.

> A key-person risk is too large when the business cannot perform, repair, change or access something it needs without one particular individual.
>

## A useful measure: how many people would have to be away?

Software teams have a blunt name for this measure: the "[bus factor](https://en.wikipedia.org/wiki/Bus_factor)", sometimes called the truck or lottery factor. Wikipedia's entry defines it as the minimum number of team members who would have to suddenly leave a project before it stalls for lack of knowledgeable people. The same entry summarises research on popular open-source projects that found many of them had a bus factor of two or less, which says something about how common concentrated knowledge is even in well-run technical work.

The idea transfers directly to a business. For each critical capability, ask how many people would have to be unavailable before it stopped. If the answer is one, the business depends on that person for that capability. The point is not to apply the term mechanically but to count, capability by capability, rather than worrying in general.

## Step 1: List the capabilities that matter

Start with ten to fifteen things the business could not go a week without. Keep them concrete:

- running payroll and paying suppliers;
- issuing invoices and following up debtors;
- quoting and pricing for customers;
- scheduling deliveries, jobs or staff;
- producing the management numbers the owner relies on;
- keeping key systems, integrations and automations working;
- approving spend, credit or exceptions.

## Step 2: Count people across five abilities

Being able to do the routine task is not the same as being able to recover it when it breaks. For each capability, count how many people can do each of five things.

| Ability | The question |
| --- | --- |
| Perform | Who can carry out the routine work correctly today? |
| Fix | Who can recover it when something goes wrong? |
| Change | Who can safely alter how it works, such as a price rule, a report or an automation? |
| Decide | Who has the authority to approve the exceptions it produces? |
| Access | Who holds the logins, administrator rights, banking authority or supplier relationships it needs? |

Any cell with a count of one is a dependency. A capability where the same single name appears in three or more columns is a serious one. Businesses are often reassured that several people can "perform" a process and then discover that only one can fix it or log in to it.

## Step 3: Check the evidence, not just the answers

People tend to overestimate how many colleagues can cover for them, and managers tend to underestimate how much one person quietly holds. The business usually already has records that show the truth.

- **Administrator and owner accounts.** List who holds administrator rights on the accounting system, CRM, website, domain, email platform and banking. A single name against several is a red flag.
- **Automation and integration credentials.** Check whose account each automation runs under. Automations tied to one person's login stop when that person leaves; see [why automations should not run on personal credentials](/discovery/why-automations-should-not-run-on-personal-credentials/).
- **Approval history.** Look at who actually approved credit notes, discounts, payments and purchase orders over the last quarter.
- **Change history.** Who has edited the pricing spreadsheet, report templates or system configuration in the past year?
- **Inbox and phone routing.** Which supplier, customer and system notifications go to one individual's address or phone?
- **Critical spreadsheets.** Which spreadsheets drive decisions, and who maintains them? These are often the most concentrated knowledge in the business, as described in [when a spreadsheet becomes a business-critical system](/patterns/when-a-spreadsheet-becomes-a-business-critical-system/).

## Step 4: Read the behavioural signals

Records show access and authority. Behaviour shows knowledge. Typical signals that one person has become a dependency include:

- leave is planned around them, or they work while on leave;
- work visibly slows or queues when they are out;
- colleagues route unusual cases to them by name instead of through a process;
- questions in team chats are regularly answered with "ask them";
- they are the only person who attends every supplier or system meeting;
- problems are fixed quickly when they are present and not at all when they are away.

## Step 5: Test it

Ready.gov's business continuity guidance includes organising teams and tasks and then testing plans through exercises. The small-business version is an absence test. Choose one capability with a dependency and have the backup person run it for a week, or for one full cycle such as a month-end, while the key person is available but does not help. Record every point where the backup had to stop, guess or ask.

The test is reliably more revealing than interviews. It shows the missing passwords, the undocumented exceptions and the steps the key person no longer realises they perform. The UK Ministry of Justice's digital team describes similar warning signs when it looks for [single points of failure](https://mojdigital.blog.gov.uk/2021/08/03/how-we-identify-and-mitigate-single-points-of-failure-spof/): work stalls when one person is on holiday, only one person can handle a legacy system, and the team would be blocked if a key person left. AWS's Well-Architected guidance on [knowledge management](https://docs.aws.amazon.com/wellarchitected/latest/framework/ops_evolve_ops_knowledge_management.html) lists notes kept on individuals' own machines as an anti-pattern and recommends a central, maintained repository that starts with the runbooks and playbooks people use daily.

## An illustrative example

Consider an illustrative East Rand electrical wholesaler with about 25 staff. The owner believed the business was well covered because three people in the office could process orders and invoices. The capability count told a different story. One administrator, in post for twelve years, was the only person who could fix the nightly price update from the main supplier, the only one who could change customer-specific discount rules, and the only office user with administrator rights on the accounting system. The debtors' reminder automation also ran under her login.

Three people could perform the work. One person could fix, change and access it. When she took two weeks' leave as a test, with the business choosing a quiet month, the price update failed on the fourth day and nobody could correct it, and customer discounts could not be adjusted. The business had not depended on three people. It had depended on one.

## How to read and rank the results

Not every single-person dependency needs urgent action. Rank them by two questions: how quickly would the business feel the absence, and how hard would it be to recover? A capability that would fail within days and cannot be recovered without the person, such as banking authority or a broken integration nobody understands, comes first. A monthly report that only one person produces but others could rebuild in a day comes later.

The financial consequences of leaving a high-ranked dependency in place are described in [the cost of key-person operational dependency](/impact/key-person-operational-dependency/).

## Trade-offs

Doing this assessment can make a valued employee feel exposed or under suspicion. It should be framed as protecting them as well as the business: a person on whom everything depends cannot take a proper holiday, cannot be promoted and carries a burden they did not choose. Involving them in the assessment usually produces the most accurate results, since they know better than anyone what would go wrong in their absence. Workflows designed with that knowledge, rather than around it, are the subject of [how to design workflows that can survive staff changes](/insights/how-to-design-workflows-that-can-survive-staff-changes/).
