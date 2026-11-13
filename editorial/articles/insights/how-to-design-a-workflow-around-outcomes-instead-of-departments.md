---
hub: insights
record_id: INS-110
slug: how-to-design-a-workflow-around-outcomes-instead-of-departments
title: How to Design a Workflow Around Outcomes Instead of Departments
description: When each team optimises its own step, the customer waits in the gaps. Here is how to define a workflow by the result it delivers, give it an end-to-end owner and measure it as one thing.
lead: When each team optimises its own step, the customer waits in the gaps. Here is how to define a workflow by the result it delivers, give it an end-to-end owner and measure it as one thing.
category: Workflow Design
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Workflow Design
sources:
  - https://www.gov.uk/service-manual/service-standard/point-2-solve-a-whole-problem | https://www.gov.uk/service-manual/service-standard/point-2-solve-a-whole-problem
  - https://www.hse.gov.uk/stress/standards/role.htm | https://www.hse.gov.uk/stress/standards/role.htm
  - https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview | https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview
summary: When each team optimises its own step, the customer waits in the gaps. Here is how to define a workflow by the result it delivers, give it an end-to-end owner and measure it as one thing.
layout: plain
---
Ask a distribution business in Gauteng how long it takes to get a new customer from signed application to first delivery and you will often get three answers. Sales says two days, because the account form went to finance on time. Finance says two days, because the credit check was done promptly once the form was complete. The warehouse says one day, because the order shipped the morning after it was released. The customer, meanwhile, waited three weeks.

Every department is telling the truth about its own step. Nobody is measuring the thing the customer cares about. That is the core problem with workflows designed around departments: each team optimises what it controls, and the delays live in the spaces between teams, where no one is accountable.

## What an outcome-based workflow is

An outcome-based workflow starts with a result that matters to a customer or to the business and works backwards. "New customer receives first correct delivery" is an outcome. "Supplier invoice paid correctly and on the agreed date" is an outcome. "Credit application processed" is a departmental task inside one of them.

The UK Government Digital Service makes the same point in its service standard, which asks teams to [solve a whole problem for users](https://www.gov.uk/service-manual/service-standard/point-2-solve-a-whole-problem) by joining up the parts of a journey that different organisations own, so that people do not have to understand how government is structured to get what they need. Your customers should not have to understand your organogram either.

Designing around outcomes does not mean abolishing departments. Specialists still do specialist work. It means the workflow is defined, owned and measured as one thing from trigger to result, and departments contribute steps to it rather than each running a private process.

## Step 1: Name the outcome in a sentence a customer would recognise

Write the outcome as a finished state, not an activity. "Onboard customers" is an activity. "A new customer can place and receive an order with correct pricing and credit terms" is a finished state that you can check.

Then define when the workflow starts. The start should also be visible from outside: the moment the customer signs, submits or asks, not the moment the first department picks up the work. Starting the clock at the customer's action is what exposes the queues that departmental measures hide.

## Step 2: Map the path across teams, including the waiting

Lay out every step from start to finish, regardless of who owns it. Include waiting as explicit steps: "form sits in shared inbox", "awaiting credit committee". In most workflows we review, waiting accounts for far more elapsed time than doing. Our guide to [mapping a business workflow without making it complicated](/insights/how-to-map-a-business-workflow-without-making-it-complicated/) shows how to keep the map useful rather than exhaustive.

Mark every point where work crosses from one team to another. These crossings are where outcomes usually break, a pattern we describe in [why broken handoffs are systems problems](/insights/broken-handoffs-are-systems-problems/). For each crossing, ask what the receiving team needs and whether it reliably gets it.

## Step 3: Appoint an end-to-end owner

An outcome without an owner reverts to departments within a quarter. The owner is a named person who is accountable for the whole workflow performing well, even though they do not manage every person who works in it. Their job is to watch the end-to-end measure, chair a short regular review with the contributing teams and decide on changes to the workflow design.

This only works if the role is clear to everyone involved. The UK Health and Safety Executive's management standard on [role](https://www.hse.gov.uk/stress/standards/role.htm) says people should understand their role and responsibilities and that the organisation should make sure the different requirements it places on staff are compatible. Outcome ownership that conflicts with departmental targets puts people in exactly the bind that standard warns about. Write down what the outcome owner decides, what department heads still decide, and how disagreements are settled.

In a small business the owner is often a senior operations person or the managing director. In a larger one, rotate ownership of different outcomes across senior managers so that each feels the cross-team view.

## Step 4: Measure the outcome first, steps second

The primary measure is the elapsed time and success rate of the whole workflow: how long from start to finished state, and what share of cases finish correctly first time. Step measures still matter, but only as diagnostics that explain the end-to-end number. Our article on [what to measure at each stage of a business workflow](/insights/what-to-measure-at-each-stage-of-a-business-workflow/) covers which step measures earn their place.

Be careful with departmental targets that reward local speed. A finance team measured on "credit checks completed within one day of a complete form" has every reason to return incomplete forms quickly, which looks good locally and adds days to the outcome. Where a departmental target conflicts with the outcome, change the target.

## Step 5: Let the system carry the workflow, not the departments

Many businesses run each department's part of a workflow in a different tool: the CRM for sales, the accounting package for credit, a spreadsheet for the warehouse. That arrangement makes outcome-based work hard to see, because no single place shows where a case is.

Business software increasingly supports end-to-end design. Microsoft's documentation on [business process flows](https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview) describes guiding people through defined stages towards an outcome and allows a single process to span several record types, such as an opportunity, quote, order and invoice. Whatever tool you use, the principle is the same: one visible case that moves through stages owned by different teams, rather than separate records in separate systems that someone has to reconcile. Configure software after the workflow is designed, as we argue in [why software configuration should follow workflow design](/insights/why-software-configuration-should-follow-workflow-design/).

## Common objections, and honest answers

**"Department heads will resist losing control."** Some will. Frame it as giving them a clearer picture of how their step affects customers, and give them a seat in the outcome review. Control over how specialist work is done stays with them.

**"We do not have the people for a new role."** Outcome ownership is a responsibility, not a headcount. It usually takes a couple of hours a fortnight once the workflow is mapped.

**"Our outcomes overlap."** They often do, at shared steps such as credit approval. Accept that a shared step serves several outcomes, and give its department one service level that all outcomes rely on.

## Start with one outcome

Do not reorganise everything at once. Pick the outcome customers complain about most, or the one where cash is most delayed, such as order to invoice or onboarding to first order. Run it as an outcome-based workflow for a quarter. If the end-to-end time drops and the departmental friction eases, the approach will sell itself to the next outcome.

## Practical next actions

1. Choose one outcome that customers or cash flow depend on and write it as a finished state with a clear, customer-visible start point.
2. Map every step from start to finish across all teams, marking waiting time and each point where work changes hands.
3. Name one end-to-end owner and write down which decisions they make and which stay with department heads.
4. Measure total elapsed time and first-time-right rate for the outcome, and review any departmental target that rewards local speed at the outcome's expense.
5. Hold a fortnightly 30-minute review with each contributing team, focused on the largest waiting step.
6. Only after the design is agreed, configure your systems so one case is visible from start to finish.
