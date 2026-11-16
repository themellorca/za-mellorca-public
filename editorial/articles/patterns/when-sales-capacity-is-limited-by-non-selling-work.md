---
hub: patterns
record_id: PAT-123
slug: when-sales-capacity-is-limited-by-non-selling-work
title: When Sales Capacity Is Limited by Non-Selling Work
description: Reps chase order status, credit applications, delivery problems and internal approvals for their customers. Why sales capacity leaks into internal fixing, and how to win it back.
lead: Reps chase order status, credit applications, delivery problems and internal approvals for their customers. Why sales capacity leaks into internal fixing, and how to win it back.
category: Sales, Leads & Revenue Handoffs
published_date: 2026-11-16
updated_date: 2026-11-16
eyebrow: Sales, Leads & Revenue Handoffs
pattern_family: Sales, Leads & Revenue Handoffs
observable_condition: Sales reps spend large parts of their week chasing order status, credit approvals, delivery problems, pricing sign-off and complaint resolution for existing customers, and new business development is squeezed into what time remains.
primary_identification: Rep as internal fixer: because operational processes lack visibility and owners, customers rely on their sales rep to make things happen internally, so selling capacity is absorbed by coordination work.
commercial_value_dimensions: Revenue growth, sales capacity, cost of sale, customer experience and rep retention
sources:
  - In New Survey, UK Sales Teams Name AI and Agents #3 Growth Tactic for 2026 | https://www.salesforce.com/uk/news/stories/state-of-sales-report-announcement-2026/
  - Qualify and convert a lead to opportunity | https://learn.microsoft.com/en-us/dynamics365/sales/qualify-lead-convert-opportunity-sales
related:
  - Why Revenue Growth Exposes Weak Sales Operations | /patterns/why-revenue-growth-exposes-weak-sales-operations/
  - Why do good leads disappear between marketing and sales? | /patterns/why-good-leads-disappear-between-marketing-and-sales/
  - Why Lead Qualification Becomes Inconsistent Across Reps | /patterns/why-lead-qualification-becomes-inconsistent-across-reps/
summary: Reps chase order status, credit applications, delivery problems and internal approvals for their customers. Why sales capacity leaks into internal fixing, and how to win it back.
layout: plain
---
## Observable condition

The sales team is busy all day. Phones ring, messages arrive, reps walk between the warehouse, accounts and the operations office. Yet new business is flat. Look at what the busy-ness consists of and much of it is not selling. A customer wants to know where an order is. Another needs a credit limit increased before they can order. A delivery arrived short. A price needs sign-off. A complaint has not been answered. Each time, the customer calls the person they know, and that person is the sales rep.

The rep becomes the customer's internal fixer. It feels like good service, and in a sense it is. But every hour spent chasing an order is an hour not spent finding the next customer.

An illustrative example: a Port Elizabeth industrial supplies distributor with six field reps. A simple diary review over two weeks shows that most of their contact time with customers concerns existing orders, deliveries and account problems. New prospect meetings take up a small share of the week. The owner had been planning to hire two more reps to grow sales.

## Realisation

The realisation is that sales capacity is not the number of reps. It is the number of hours those reps spend on selling. If a large share of each rep's week is spent on internal coordination, adding reps adds coordination capacity as much as selling capacity, at the cost of a sales salary.

Industry research suggests the gap between employed time and selling time is wide. [Salesforce's 2026 State of Sales announcement](https://www.salesforce.com/uk/news/stories/state-of-sales-report-announcement-2026/) reports that the average seller spends about 40% of their time selling, based on a survey of more than 4,000 sales professionals, and points to administrative bottlenecks as the main drag. Those are vendor survey figures across many countries, so they should be read as an indication rather than a benchmark. The useful step is to measure the split in your own team.

**Realisation prompt:** what share of your reps' last week was spent with prospects, and what share on fixing things for existing customers?

## Identification

This is a pattern of the rep as internal fixer. The visible symptom is reps who are busy but not selling. The common assumption is that reps need better time management, or that the business needs more reps. The structural cause is that operational processes such as order tracking, credit, delivery and complaints lack visibility and clear owners, so customers route everything through the one person they trust to get an answer. The rep fills the gaps in other teams' processes.

It differs from the Pattern [why salespeople spend time updating systems instead of selling](/patterns/why-salespeople-spend-time-updating-systems-instead-of-selling/), which concerns data entry. Here the drain is coordination: chasing, explaining and fixing on the customer's behalf.

## Diagnosis

- **Customers cannot see order status.** Without a portal, notifications or a service desk that knows, the rep is the only reliable source.
- **Service problems have no owner.** Short deliveries, damages and billing errors are not routed to a team with responsibility, so the rep chases them.
- **Credit and pricing decisions need the rep to push.** Approvals stall unless the rep follows up in person.
- **Setup work is duplicated.** Reps re-enter customer and deal details into several systems. Some CRMs can create linked records automatically; [Microsoft's documentation on qualifying leads](https://learn.microsoft.com/en-us/dynamics365/sales/qualify-lead-convert-opportunity-sales) describes account, contact and opportunity records being created automatically when a lead is qualified, which removes one source of re-keying.
- **Handoffs after the sale are weak.** Once an order is won, there is no clear transfer to an operations owner, so the rep stays involved until delivery and beyond.
- **Nobody measures selling time.** Activity is measured, not its type, so the drain is invisible.

## Commercial impact

The commercial value at stake is revenue growth, cost of sale and customer experience.

The clearest cost is growth that does not happen. A rep who spends most of the week fixing has little time to prospect, so the pipeline depends on existing accounts and referrals. The cost of sale rises because expensive selling time is spent on coordination that a service or operations role could do at lower cost. Hiring more reps to compensate raises cost further while the drain continues.

Customer experience is fragile too. Service depends on the rep's availability; when the rep is on leave or leaves the business, customers lose their only route to answers. The Pattern [the cost of delayed handoffs after a deal is won](/patterns/the-cost-of-delayed-handoffs-after-a-deal-is-won/) describes how weak post-sale handoffs keep reps tied to orders. Reps themselves tire of being fixers rather than sellers, which affects retention.

## Common misidentification

The usual response is to hire more reps, or to set activity targets for new business meetings. More reps inherit the same drain. Activity targets add pressure without removing the work that crowds out selling, so reps either miss them or meet them by doing less fixing, which hurts customers.

## Possibility

In a better state, customers can see order and delivery status without phoning their rep, service problems are routed to an owner with a target response time, and approvals move without personal chasing. Won deals are handed to operations with a clear acceptance step. The rep stays informed through the system and remains the relationship owner, but is no longer the mechanism by which the business functions. Selling time is measured and reviewed, so any new drain is noticed early.

## Intervention

Start by measuring where sales time goes. The categories that consume the most time point directly to the processes that need an owner.

## Practical next actions

1. **Run a two-week time study.** Ask reps to tag their customer contacts and internal tasks as prospecting, selling, order chasing, service problems, approvals or admin.
2. **Rank the non-selling categories.** Identify the two or three that consume the most time.
3. **Give each one an owner.** Assign order status, service problems and approvals to a named team with a response target.
4. **Make status visible to customers.** Send order and delivery notifications, or give customers a simple way to check status without calling.
5. **Define the post-sale handoff.** Agree when and how a won order passes from sales to operations, and what the rep is told afterwards.
6. **Track selling time monthly.** Repeat a short time sample each quarter and compare against the baseline before deciding to hire.

## Diagnostic questions

- What share of your reps' time is spent with prospects rather than fixing things for existing customers?
- Who do customers call when an order is late or short, and why?
- Which internal approvals only move when a rep chases them?
- What happens to a customer's service problems when their rep is on leave?
- Before your next sales hire, how much capacity could you recover from your current team?

## Article summary

When sales capacity is limited by non-selling work, the business pays sales salaries for internal coordination and grows more slowly than its team size suggests. Measuring where sales time goes, giving operational problems proper owners and making status visible to customers returns reps to selling, often before any new hire is needed. If this condition is familiar in your business, [explore our solutions](/solutions/) or [start a conversation](/contact/) so we can examine where your sales time goes and how Mellorca may be able to help.
