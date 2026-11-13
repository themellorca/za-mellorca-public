---
hub: impact
record_id: CPS-091
slug: business-processes-stop-when-one-application-unavailable-fragile-dependency-cost
title: When One App Goes Down, Everything Stops: The Cost of Fragile Dependencies
description: If quoting, invoicing and dispatch all stop the moment one application is unavailable, the business has a hidden single point of failure, and every outage costs more than it should.
lead: If quoting, invoicing and dispatch all stop the moment one application is unavailable, the business has a hidden single point of failure, and every outage costs more than it should.
category: Risk and Continuity
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Risk and Continuity
commercial_domain: Risk and Continuity
primary_pain: Business processes stop completely whenever one application is unavailable
primary_cost_mechanism: Idle paid staff during outages, lost and deferred revenue, recovery rework and unbilled work, missed service commitments, and weaker position at contract renewal
sources:
  - https://learn.microsoft.com/en-us/microsoft-365/enterprise/view-service-health | https://learn.microsoft.com/en-us/microsoft-365/enterprise/view-service-health
  - https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/design-principles.html | https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/design-principles.html
summary: If quoting, invoicing and dispatch all stop the moment one application is unavailable, the business has a hidden single point of failure, and every outage costs more than it should.
layout: plain
---
## The morning the job system was down

A plumbing and maintenance company in Cape Town runs everything through one cloud-based job management application. Calls are logged in it, technicians receive their jobs on their phones through it, quotes are created in it and invoices are pushed from it to the accounting system. One Wednesday, the application's provider has a problem that lasts most of the morning. Technicians do not know where to go. The call centre cannot see job history. Quotes cannot be sent. The accounting system is working, but nothing is flowing into it. A business with 25 technicians effectively stops for four hours, even though the internet, the phones and every other system are working normally.

The outage was the provider's fault. The fact that one application could stop the whole business was a design choice nobody had consciously made.

## How fragile dependencies form

Concentrating work in one application is often a good decision. It reduces double entry, gives a single view of the customer and simplifies training. The fragility comes from what is missing around it:

- **No manual fallback.** Paper job cards, printed schedules and phone-based dispatch were retired, and nothing replaced them for emergencies.
- **Chained processes.** Invoicing depends on job completion, which depends on dispatch, which depends on the job system, so one failure stops the whole chain.
- **No offline copy of essential data.** Today's schedule, customer contact details and job addresses exist only inside the application.
- **Hidden dependencies.** The application itself relies on a sign-in service, a mapping service or an integration that can fail independently.

The pattern on [why a small technical failure can stop the whole business](/patterns/why-does-a-small-technical-failure-stop-the-whole-business/) describes the general shape of this problem.

## Where the cost appears

### Idle paid staff

The following figures are illustrative. If 25 technicians and 6 office staff are unable to work productively for four hours, and their average loaded cost is R230 an hour, the wage cost of the morning is about R28,500. That is before lost revenue.

### Lost and delayed revenue

Jobs that should have been completed are pushed to later days, displacing other work. Some customers call a competitor. Emergency call-outs, often the most profitable jobs, are the most likely to be lost. If the business normally invoices R180,000 a day, a half-day stoppage can defer or lose a large share of that.

Deferred work is not free either. Jobs moved to the following days push other bookings back, technicians work overtime to catch up, and the knock-on delays can last most of a week. The visible outage lasted four hours, but its effect on the schedule, overtime bill and customer satisfaction lasts much longer. None of that appears in the provider's incident report.

### Recovery and rework

After the outage, the backlog has to be rescheduled and any work done informally has to be captured in the system. Errors creep in, and some work is never invoiced because it was not recorded properly.

### Customer and contract consequences

Service-level commitments to commercial customers may be missed. Penalties, credits or simply a weaker position at contract renewal follow.

## Outages are normal, even for good providers

Cloud services are generally reliable, but every provider has incidents. Microsoft, for example, maintains a [service health page for Microsoft 365](https://learn.microsoft.com/en-us/microsoft-365/enterprise/view-service-health) that lists active incidents and advisories, defines an incident as a critical issue where a service or major function is unavailable, and lets administrators sign up for email notifications about incidents affecting their organisation. The existence of such tools is a reminder that outages are expected and planned for by the providers themselves. Businesses that depend on those services need their own plan for the hours when a service is unavailable.

A business can also learn from how cloud engineers design for failure. The AWS Well-Architected [reliability design principles](https://docs.aws.amazon.com/wellarchitected/latest/reliability-pillar/design-principles.html) include automatically recovering from failure, testing recovery procedures, and avoiding a single resource whose failure affects the whole workload. They also recommend monitoring indicators that measure business value rather than only technical health. The same thinking applies to business processes: avoid one point whose failure stops everything, and test what happens when it fails.

## Why it is tolerated

The application works almost all of the time, so the risk feels theoretical. Fallback processes feel like a step backwards after investing in digital systems. And nobody has calculated what an hour of stoppage costs, a gap covered in [not knowing the hourly cost of downtime](/impact/not-knowing-hourly-cost-of-downtime/).

## What better looks like

A resilient business keeps its main application but designs for its absence:

- Each critical process has a simple, documented fallback that staff have practised.
- Essential data, such as today's schedule, customer contacts and open jobs, is exported automatically to a location that does not depend on the application.
- Processes are decoupled where possible, so that, for example, invoicing can catch up later without blocking dispatch.
- Someone is notified quickly when the application is unavailable, and decides when to switch to fallback.

The guide on [identifying the systems your business actually depends on](/insights/how-to-identify-the-systems-your-business-actually-depends-on/) is a useful first step.

## Practical next actions

1. **List processes that stop if each core application stops.** For each application, record what cannot happen without it.
2. **Estimate the cost of a four-hour outage.** Use wages of affected staff plus typical revenue for that period.
3. **Design a fallback for the top three processes.** Keep it simple: a printed schedule, a phone tree, a paper job card or a shared spreadsheet.
4. **Automate a daily export of essential data.** Send today's jobs, customer contacts and open orders to a location staff can reach if the application is down.
5. **Subscribe to provider status alerts.** Make sure a named person receives incident notifications and decides when to activate the fallback.
6. **Practise once a quarter.** Run a short drill where one team works from the fallback for an hour and records what was missing.

A single application at the centre of the business is not the problem. The problem is having no plan for the hours when it is unavailable, which turns an ordinary supplier incident into a stoppage paid for in wages, revenue and goodwill.
