---
hub: patterns
record_id: PAT-035
slug: when-sales-finance-and-support-disagree-about-the-same-customer
title: When sales, finance and support disagree about the same customer
description: Sales sees a growing account, finance a credit hold and support an unhappy client. Each acts correctly on a partial picture the others cannot see.
lead: Sales treats a customer as a growing account, finance has them on credit hold and support sees an unhappy client with open complaints. When each department keeps its own picture of the customer, each acts correctly on information the others cannot see.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: Different departments describe the same customer differently, as active or lapsed, in good standing or on hold, valued or at risk, and each takes action based only on its own view.
primary_identification: Fragmented customer standing, where status and relationship information is defined and held separately by each department with no shared definitions or combined view.
commercial_value_dimensions: Revenue, cash flow, customer retention, risk and customer experience
sources:
  - What Are Data Silos? - IBM | https://www.ibm.com/think/topics/data-silos
  - Data unification overview - Dynamics 365 Customer Insights | https://learn.microsoft.com/en-us/dynamics365/customer-insights/data/data-unification
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
related:
  - When one change has to be made in every system you own | /patterns/when-one-change-has-to-be-made-in-every-system-you-own/
  - When disconnected systems let the business act on old information | /patterns/when-disconnected-systems-let-the-business-act-on-old-information/
  - Why information has to be copied from one system to another | /patterns/why-information-has-to-be-copied-from-one-system-to-another/
summary: Sales treats a customer as a growing account, finance has them on credit hold and support sees an unhappy client with open complaints. When each department keeps its own picture of the customer, each acts correctly on information the others cannot see.
layout: plain
---
## Observable condition

A salesperson closes a large new order with a long-standing customer and celebrates a growing account. The next morning, finance points out that the customer is sixty days overdue and was placed on credit hold last week. Meanwhile, the support team has three open complaints from the same customer and has been trying to get someone senior to call them.

Each department is right about what it knows. Sales sees an active, buying customer. Finance sees a credit risk. Support sees an unhappy client. Nobody sees all three at once, and the customer experiences a business that seems not to know who they are.

The same split shows up in quieter ways. Marketing counts a customer as active because they opened last month's newsletter. Finance counts them as dormant because they have not bought in a year. Operations still holds their delivery preferences from an old contract. When management asks how many active customers the business has, three departments give three different numbers, and each can defend its own.

An illustrative example: a Western Cape professional-services firm with around sixty staff found that its account managers were proposing new engagements to clients whose previous projects were in dispute over unpaid invoices. The disputes were recorded in the finance system and in email between the finance manager and the client. The account managers worked in the CRM, which showed only a history of successful projects.

## Realisation

A customer is not one piece of data. It is a relationship that each department touches from a different angle, and each angle carries information the others need. When that information stays inside each department, the business does not have one view of the customer that is sometimes out of date. It has several views, each complete in its own terms and each missing something important.

[IBM describes data silos as isolated collections of data](https://www.ibm.com/think/topics/data-silos) that prevent sharing between departments, systems and business units, and notes that they commonly form when teams such as marketing and sales run their own systems. The consequences it lists include weaker data quality, lower efficiency and decisions made on incomplete information.

Platforms built to address this, such as [Microsoft's Customer Insights](https://learn.microsoft.com/en-us/dynamics365/customer-insights/data/data-unification), describe a process of bringing customer data from several sources together: finding duplicates, matching records across sources and deciding which fields make up a single combined profile. The interesting part is not the tool. It is that the process forces a business to decide what each field means and which source should be believed.

**Realisation prompt:** could anyone in your business, today, see a single customer's sales history, account standing and open complaints on one screen?

## Identification

This is a pattern of fragmented customer standing: each department defines and records the customer's status and relationship separately, with no shared definitions and no combined view at the point where decisions are made. The visible symptom is departments acting at cross purposes. The common assumption is that this is a communication problem between teams. The structural cause is that customer status is held in separate systems, under different definitions, with no agreed rules for how one department's information should affect another's actions.

It is different from [why one customer exists differently in three systems](/patterns/why-does-one-customer-exist-differently-in-three-systems/), which concerns matching records for the same customer. Here the records may match perfectly; it is the meaning attached to them that diverges.

## Diagnosis

- **Each department chose its own definitions.** "Active", "key account" and "at risk" were defined to suit each team's purpose, often without being written down.
- **Status changes do not travel.** A credit hold, a formal complaint or a contract cancellation is recorded in one system and has no effect on what other systems show or allow.
- **The most important facts live outside systems.** Disputes, verbal commitments and relationship concerns sit in email and in people's heads.
- **Nobody owns the customer as a whole.** Departments own their part of the relationship. No one is responsible for the overall picture or for resolving conflicts between views.
- **Reports reflect the split.** Each department's reports count customers by its own rules, so management sees disagreement rather than a single answer.

## Commercial impact

The commercial value at stake is revenue, cash flow, retention and risk.

Selling more to customers who are not paying increases credit exposure. Chasing payment from a customer whose complaint is unresolved can turn a dispute into a lost account. Missing early signs of dissatisfaction, visible to support but not to sales, removes the chance to retain a valuable customer. Conflicting customer counts weaken forecasts and planning.

Customer experience suffers in a way customers notice: being sold to while in dispute, or asked for details they have already given another department. For personal information, [POPIA section 16](https://popia.co.za/section-16-quality-of-information/) also requires reasonably practicable steps to keep it complete, accurate and updated, which is harder when several departments keep their own versions.

The related Pattern on [when your CRM knows something your finance system does not](/patterns/when-your-crm-knows-something-your-finance-system-does-not/) looks at the specific gap between sales and finance records.

## Common misidentification

These conflicts are usually treated as poor internal communication, and the response is more meetings or a request that teams copy each other on emails. That relies on people remembering to share information at the right moment, which is exactly what is not happening.

The other common response is a project to buy a single customer platform. That can help, but without agreed definitions it simply moves the disagreement into one system. The Pattern on [when nobody owns the definition of a business metric](/patterns/when-nobody-owns-the-definition-of-a-business-metric/) describes the same trap for reporting.

## Possibility

In a better state, the business has a short, agreed list of customer definitions that everyone uses: what makes a customer active, what puts them on hold, what makes them at risk. Key status changes in one department trigger visible flags in the others. Anyone about to make a significant decision about a customer, such as a new proposal, a credit extension or a collections call, sees the customer's standing across sales, finance and service before acting.

For the professional-services firm, that meant a dispute flag that flowed from the finance system to the CRM and a rule that proposals to flagged clients needed the finance manager's sign-off.

## Intervention

1. **Collect the definitions.** Ask each department how it defines active, key, at risk and on hold, and write the answers side by side.
2. **Agree shared definitions.** Settle on one definition for each status the whole business uses, and name an owner for each.
3. **Identify decisive events.** List the events in one department that should change another's behaviour: credit holds, disputes, formal complaints, cancellations.
4. **Make those events travel.** Use integrations or simple automated flags so these events are visible in the systems where other teams work.
5. **Bring the picture to the decision.** Before proposals, credit decisions and collections calls, show the customer's combined standing, even if at first it is a simple summary pulled from each system.
6. **Move key facts out of email.** Record disputes and commitments in a system, not only in correspondence.

## Practical diagnostic questions

- Do your departments agree on how many active customers you have?
- Has a customer been sold to, chased or contacted in a way that ignored what another department knew?
- Where would a salesperson see that a customer is on credit hold or has an open complaint?
- Who is responsible for the overall relationship with a major customer?
- Which important facts about customers live only in email?

## Bottom line

When every department keeps its own version of the customer, each can act correctly and the business can still act badly. The fix is less about one more system and more about shared definitions, status changes that travel between teams and a combined view at the moment decisions are made. Customers should experience one business, not three departments that happen to share a name.
