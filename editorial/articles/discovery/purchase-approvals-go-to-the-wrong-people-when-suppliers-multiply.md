---
hub: discovery
record_id: DISC-028
slug: purchase-approvals-go-to-the-wrong-people-when-suppliers-multiply
title: Purchase approvals go to the wrong people when suppliers multiply
description: A stale approval matrix and a clerk's judgement send purchases to the wrong approvers as suppliers multiply. Route by rule on amount, category and supplier type, with substitutes and a trail.
lead: A stale approval matrix and a clerk's judgement send purchases to the wrong approvers as suppliers multiply. Route by rule on amount, category and supplier type, with substitutes and a trail.
category: Procurement & Supplier Operations
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Procurement & Supplier Operations
problem_domain: Procurement & Supplier Operations
problem_owner: Head of procurement or operations manager
budget_owner: CFO or COO
sources:
  - https://learn.microsoft.com/en-au/dynamics-nav-app/across-how-to-set-up-approval-users | https://learn.microsoft.com/en-au/dynamics-nav-app/across-how-to-set-up-approval-users
  - https://www.acts.co.za/broad_based_black_econom/n1019_annexe_400a | https://www.acts.co.za/broad_based_black_econom/n1019_annexe_400a
  - https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf | https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf
summary: A stale approval matrix and a clerk's judgement send purchases to the wrong approvers as suppliers multiply. Route by rule on amount, category and supplier type, with substitutes and a trail.
layout: plain
---
Picture the procurement team at a Port Elizabeth manufacturer that has spent the past year widening its supplier base. New packaging suppliers have come on to cut dependence on one vendor. A second logistics provider has been added, and a cloud payroll service has been bought. When a purchase request arrives, the procurement clerk opens a spreadsheet called the approval matrix, finds the request type and amount, and emails the request to the person she thinks should approve it. The spreadsheet was last updated fourteen months ago.

Over a single month, three things go wrong. A request for the new payroll service goes to the operations manager, whose limit covers the amount, when it should also have gone to the finance director and to someone who checks the contract's data terms. A packaging order is sent to a plant manager who left in the spring, and sits for nine days before anyone notices. A logistics purchase is routed to the wrong cost-centre owner, who approves it, and the budget holder finds out only when the invoice arrives.

The operating condition is plain: purchase approvals are routed by hand, using a matrix that is out of date and a clerk's judgement, so requests reach the wrong people, or the right people late. That matters to the head of procurement, the CFO and the COO because the routing gets worse in step with the supplier base, and because an approval sent to the wrong person is either slow or not a real approval.

## The problem in plain language

A purchase approval answers a simple question: is this person allowed to commit the business to this spend? The answer depends on several things. The amount matters. So does the type of purchase, the cost centre it will be charged to, the supplier and the nature of the contract.

In many businesses these rules live in a document, often a spreadsheet, called an approval matrix or delegation of authority. It lists roles and limits. When a request arrives, a person, usually someone in procurement or finance administration, reads the request, finds the matching line and decides who to send it to.

That works while the business is small and stable. The clerk knows who holds which limit, who is on leave and who has moved. As the supplier base grows, requests arrive for categories the matrix never anticipated, such as a new type of service, a cloud tool, a different kind of contractor. The clerk has to guess which line applies. At the same time, people change roles and the matrix is not updated.

The result is routing by judgement. The request goes to whoever the clerk believes is right, and nothing in the process checks that belief. If the approver was wrong, nobody finds out until something goes wrong: a delay, a complaint, an audit question or an overspend.

This is related to [procurement requests that disappear into email](/discovery/why-procurement-requests-disappear-into-email/), because manual routing usually travels by email. The two problems are not the same: a request can arrive in the right system and still be sent to the wrong approver.

## What the buyer is actually trying to solve

Heads of procurement and operations managers put this in practical terms. Why do purchases take so long to approve? Why did this one go to someone without the authority? Who covers when an approver is away? How do we show an auditor that every purchase had the right sign-off? What happens when we add a new category of supplier?

The outcome they want is routing that follows rules, not memory. Each request reaches the right approver automatically, based on amount, category, cost centre and supplier type. When an approver is absent, a named substitute is used. The approval, and the information the approver saw, is recorded where it can be found.

## Evidence and system mechanism

### Approval systems can hold the rules, if the data is kept up to date

Purchasing and finance systems have long supported rule-based routing. Microsoft's documentation on [setting up approval users in Business Central](https://learn.microsoft.com/en-au/dynamics-nav-app/across-how-to-set-up-approval-users) shows the typical building blocks. For each approver it lets you set a purchase amount approval limit, the largest purchase that person can approve, or mark the person as having unlimited purchase approval. It lets you define a hierarchy so that a request is not approved until several approvers in a chain have approved it. It lets you name substitute approvers to whom requests are delegated when the original approver is absent. And it describes an approval administrator, a user with the right to unblock approval workflows, for example by delegating requests to new substitutes or deleting overdue ones.

Other purchasing systems offer comparable features under different names. What they have in common is that the rules are only as good as the data behind them. A limit, a hierarchy or a substitute that is out of date produces a wrong route as reliably as a clerk's guess, and with more confidence.

### Routing by amount alone is not enough

An approval limit answers one question: how much. Many purchases raise others. Is the supplier new? Does the supplier handle personal information? What is the supplier's B-BBEE status? Does the contract run for years or for a day? A matrix built on amounts alone sends a small but sensitive purchase straight through.

| Gap | Effect |
| --- | --- |
| Matrix kept in a spreadsheet, updated when someone remembers | Requests go to people who have left or changed role |
| Clerk chooses the approver by judgement | Different clerks route the same request differently |
| Routing by amount only | Sensitive or risky purchases pass without the right checks |
| No substitutes defined | Requests wait while the approver is away |
| Nobody owns the matrix | New categories never get a rule |
| Approval by email | The record of who saw what is hard to rebuild |

### What South African rules add to the route

Two South African requirements show why amount is not the only routing factor. The first concerns privacy. The [Protection of Personal Information Act, 4 of 2013](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) says in section 21 that a responsible party must have a written contract with an operator that processes personal information on its behalf, which requires the operator to establish and maintain the security measures required by section 19, and that the operator must notify the responsible party immediately where there are reasonable grounds to believe that personal information has been accessed or acquired by an unauthorised person.

A new cloud payroll service, a mailing house, a recruitment agency or a call centre contractor is likely to be an operator. The purchase needs a person who can confirm that a compliant contract is in place before it is approved. A route that sends a purchase to the person whose limit covers the amount never reaches that person.

The second concerns preferential procurement under the B-BBEE Codes of Good Practice. Annexe 400(A) of the [amended Code Series 400](https://www.acts.co.za/broad_based_black_econom/n1019_annexe_400a) calculates a measured business's B-BBEE procurement spend by multiplying its spend with each supplier by that supplier's recognition level. For a business that is measured, who it buys from has a direct effect on its own score. An approver who cannot see the supplier's current level and when its certificate expires cannot weigh that effect. Confirm how the Codes apply to your business with a verification agency or adviser.

## Why this becomes urgent

Supplier-base expansion is the usual trigger. A business widens its suppliers for good reasons: to reduce dependence on one vendor, to enter new markets, to meet customers' preferences for local or black-owned suppliers, or to add services. Each new supplier brings new request types, new categories, new cost centres and new risks.

The matrix and the clerk's knowledge were built for the old supplier base. They have no rule for the new categories, and nobody has the job of adding one. Requests multiply while the routing logic stands still.

The strain shows up first in delays and small errors, then in an approval that was clearly wrong. By then dozens of purchases may have taken the same wrong route.

## Economic consequence

The cost of manual routing falls in several places:

- **Cycle-time delay.** Requests wait for the wrong person, for an absent person or for a clerk's second attempt to find the right one, and the delay is paid for in late orders and idle teams.
- **Maverick spend.** When approvals are slow or unclear, requesters go around the process, placing orders directly or splitting purchases to stay below limits, which weakens price and contract control.
- **Duplicated work.** Requests are re-routed, re-explained and re-approved, and finance reconstructs who approved what when the invoice arrives.
- **Weak approval evidence.** Approvals recorded in email threads or verbal agreements are hard to produce for an auditor, and where the wrong person approved, the evidence shows a control failure.
- **Missed savings.** Late orders miss volume discounts and early-payment terms, and purchases made without the buyer are not competitively sourced.
- **Supplier friction.** Suppliers wait for orders and payment, and the relationships that the expansion was meant to build are strained.

As an illustrative example only, suppose a purchase request takes four extra working days because it was sent to the wrong approver first, and a business processes several hundred such requests a month. Even if only a small share is misrouted, the accumulated waiting is measured in many working weeks of delay across teams each year. The figures are invented, but the effect is real: delay hides in the process and never appears as a line in the budget.

Approvals recorded by hand also create work later. When an auditor asks who approved a purchase and what they were shown, the answer has to be assembled from emails, which is the same pattern as [data lineage rebuilt by hand for every audit](/discovery/data-lineage-reconstructed-manually-during-audits/) applied to approvals.

## Root cause

The root cause is that approval routing is decided by hand from a matrix that is not maintained, instead of by rules applied by the system. The matrix was written once, and the people and suppliers it described have changed.

A second cause is that routing is based on one dimension. The matrix says how much each role can approve. It does not say which categories need a privacy check, which suppliers need a certificate check, or which cost centres need the budget holder, so the clerk cannot route correctly even when she is careful.

A third cause is that nobody owns the rules. Procurement uses the matrix, finance owns the limits, HR knows who has moved and IT runs the system. Each assumes another will keep it current. The same pattern appears in other request processes, such as [environment requests still built by hand](/discovery/platform-teams-build-environment-requests-by-hand/), where a task that could follow rules depends on someone remembering the steps.

## Practical intervention

### Practical next actions

1. **Name an owner for the approval rules.** Give one person, usually in procurement or finance, accountability for the matrix, with authority to change it and a named deputy. Agree who confirms limits with the CFO.
2. **List the routing factors.** Beyond amount, decide what changes the route: category, cost centre, supplier type, new supplier, contract length, personal information involved, capital or operating spend. Keep the list short enough to maintain.
3. **Rewrite the matrix as rules.** For each combination, state who approves, in what order, and what they must see. Replace roles named by person with roles named by position, so that a change of person does not break the rule.
4. **Add the supplier-type checks.** Route purchases from suppliers that will handle personal information to someone who confirms that a written operator contract meeting section 21 is in place, and route purchases from suppliers that count towards your B-BBEE procurement score to an approver who can see the supplier's level and certificate expiry.
5. **Load the rules into the purchasing system.** Set approval limits, hierarchies and substitutes in the system, as the Business Central example shows, or in your own system's equivalent, so that requests are routed automatically instead of by a clerk.
6. **Define substitutes and an escalation route.** Name a substitute for every approver, set a time after which an unanswered request escalates, and give someone the right to unblock stuck approvals.
7. **Connect the rules to HR changes.** When someone changes role or leaves, update their approval rights through the same process that updates their access, and check what is waiting in their queue.
8. **Show approvers what they need.** Present the amount, the category, the supplier's status, the budget available and any flags from the privacy and B-BBEE checks on the approval screen, so that the approval means something.
9. **Review the rules when the supplier base changes.** Add a step to supplier onboarding that asks whether the new supplier or category needs a new routing rule, and review the whole matrix at least once a year.
10. **Report on routing.** Track time to approve, number of requests re-routed, requests escalated and approvals by someone outside the matrix, and use them to find rules that need fixing.

## Diagnostic questions

- Who owns our approval matrix, and when was it last checked against who holds each role today?
- Who decides where a request goes, a rule in the system or a person, and how often is the person wrong?
- What happens to a request when its approver is on leave or has left?
- Which of our purchases go to someone who confirms that a supplier handling personal information has a written operator contract?
- Can an approver see the supplier's B-BBEE level and when its certificate expires?
- If an auditor asked who approved a purchase last month and what they were shown, how long would it take to answer?

## What good looks like

The approval rules are held in the purchasing system, owned by a named person and reviewed at least annually. A request reaches the right approver automatically, based on amount, category, cost centre and supplier type. Every approver has a substitute, and unanswered requests escalate. Suppliers that handle personal information trigger a privacy check, and B-BBEE information is visible to the approver. The approval, with what the approver saw, is recorded in the system.

You can measure the result. The time from request to approval falls and becomes predictable. The number of requests re-routed or approved by someone outside the rules falls towards zero. Escalations are rare and are cleared quickly. Approval evidence for any purchase can be produced in minutes. New supplier categories receive a routing rule before the first purchase, not after the first problem.

## Where Mellorca fits

If your approvals are routed by a spreadsheet and a clerk, [business automation and AI workflows](/services/business-automation-ai-workflows/) can turn the matrix into rules, route requests by amount, category and supplier type, apply substitutes and escalation, and keep the evidence with each request. To agree the routing factors, the ownership of the rules and the review cycle with procurement, finance and operations, [digital operations improvement](/services/digital-operations-improvement/) can design the process and help it become routine.

## Method note

This article draws on Microsoft's documentation on approval users in Business Central, the B-BBEE Codes of Good Practice as published on Acts Online, and the text of the Protection of Personal Information Act. The scenario, the delay and the sums in it are illustrative and not measured. The article does not claim that any product named is needed to fix the problem or that it behaves the same way in your environment, so check the documentation for the systems you use. It is general information and not legal advice: confirm your obligations under section 21 of the Protection of Personal Information Act and the application of the B-BBEE Codes with your information officer, a verification agency or an adviser.
