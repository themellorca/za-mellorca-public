---
hub: discovery
record_id: DISC-381
slug: failover-is-tested-quietly-and-fails-when-real-load-arrives
title: Failover is tested quietly and fails when real load arrives
description: Failover is tested off-peak with little traffic, so the standby's limits stay hidden. Define the load a failover must carry, test at that load on a schedule and fix what the test finds.
lead: Failover is tested off-peak with little traffic, so the standby's limits stay hidden. Define the load a failover must carry, test at that load on a schedule and fix what the test finds.
category: Business Continuity & Resilience
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: Head of IT operations or infrastructure
budget_owner: CIO
sources:
  - https://www.masthead.co.za/wp-content/uploads/2023/11/Joint_Communication_4_of_2023_Publication_of_Joint_Standard_1_of_2023.pdf | https://www.masthead.co.za/wp-content/uploads/2023/11/Joint_Communication_4_of_2023_Publication_of_Joint_Standard_1_of_2023.pdf
  - https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_planning_for_recovery_dr_tested.html | https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_planning_for_recovery_dr_tested.html
  - https://sre.google/sre-book/addressing-cascading-failures/ | https://sre.google/sre-book/addressing-cascading-failures/
summary: Failover is tested off-peak with little traffic, so the standby's limits stay hidden. Define the load a failover must carry, test at that load on a schedule and fix what the test finds.
layout: plain
---
Picture a Cape Town online retailer that runs its order and payment service from one primary site, with a smaller standby site ready to take over. Every quarter, at two o'clock on a Sunday morning, the infrastructure team switches over to the standby, checks that the service responds, switches back and records a pass. The test takes about twenty minutes. The plan promises that a real failover will restore full service within thirty.

In the middle of Black Friday week, the primary database host fails at peak trading. The team triggers the failover, and technically it works: the standby takes over and the health checks go green. But the service is not healthy. The standby was sized to save money and cannot carry a full day's traffic. Its caches are empty, so every request goes to the database. Replication was running behind, so the most recent orders are missing. A connection limit in the database licence caps concurrent sessions at a fraction of what the shop needs, and the payment provider only accepts calls from the primary site's addresses. Checkout errors and slow pages continue for three hours.

The operating condition is plain: the business tests that failover can happen, but never that the standby can carry the work. That matters to the CIO because the recovery time on paper is a measure of how quickly a nearly idle standby can be switched on, while the recovery time a customer experiences is how long it takes before the standby can handle real trading.

## The problem in plain language

A failover is the switch from a main system to a standby when the main one fails. The standby may be a second server, a second data centre or a second cloud region. It is built so that the service can continue if the first location is lost.

Testing it is sensible, and most businesses do. The test is usually run when it is least likely to hurt anyone: late at night or at a weekend, with a few staff watching, and often with little or no real traffic going through. The test checks the things that are easy to check. Did the switch happen? Did the application start? Does a test transaction work? Did the team follow the runbook?

What the test does not check is whether the standby can carry the load it will have when a real failure happens. That load is the busiest the system ever sees, because failures do not wait for quiet periods and because all traffic now lands on one site. A standby that handles a trickle of test traffic for twenty minutes can fail completely under a full day's demand.

The gap stays hidden because the test passes. The plan says failover works and the evidence says it does. Nobody has seen the standby under real load, so nobody knows that its limits sit well below what the business needs.

## What the buyer is actually trying to solve

IT operations, infrastructure and site reliability leads put this in practical terms. If the main site fails at our busiest moment, will the standby actually cope? How long until the service is really back, not just switched over? What limits would we hit? What do we tell the board when it asks whether we can survive a failure?

The outcome they want is a measured answer. They know the load the standby must carry, they have tested it at that load, they have a recorded time from the start of failover to full service and they have fixed the bottlenecks the test found. The recovery time in the plan is a number they observed, not one they hoped for.

## Evidence and system mechanism

### The risk is documented and well known

Amazon's Well-Architected guidance on [testing disaster recovery](https://docs.aws.amazon.com/wellarchitected/latest/framework/rel_planning_for_recovery_dr_tested.html) describes this exact problem. It says that if you do not test failover frequently, your assumptions about the capabilities of the secondary may be wrong, and that the secondary's capacity, which may have been enough when last tested, might no longer cope with the load in a failover scenario. It states that the only error recovery that works is the path you test frequently, and that the recovery path should be exercised so that recovery is achieved in the specified time to the specified state.

The same guidance describes how drills are commonly run. It points to a tool that launches drill instances without redirecting traffic. That is a convenient way to prove that a recovery environment can start, and it is also the reason many drills never see load: the traffic stays where it is.

### What overload does to a standby

Google's chapter on [addressing cascading failures](https://sre.google/sre-book/addressing-cascading-failures/) in its Site Reliability Engineering book explains what happens when a standby is not ready. In its example, two clusters share the work. When one fails, the other receives all the traffic. If that cluster cannot handle the extra demand, it starts running out of resources, crashing or missing deadlines, so the rate of successfully handled requests falls below what it handled before the failure. The failure can then spread, because the load balancer shifts traffic onto whatever remains.

The chapter makes several points that apply directly to failover testing. It says that load testing capacity limits is the most important exercise for preventing overload, and that unless you test in a realistic environment, it is hard to predict which resource will be exhausted and how. It warns that a cluster brought into service has empty caches, which makes requests far more expensive, and recommends increasing load gradually so that caches warm up. It advises testing both gradual and sudden load patterns, because caching changes the result. It suggests that, once protections are in place, teams can test in a small slice of production, including rapidly losing a cluster's worth of capacity, while keeping spare capacity available. And it notes that a path you never use is often the one that does not work.

| What a quiet test checks | What a real failover also needs |
| --- | --- |
| The switch happens | The standby sustains peak demand |
| The application starts | Caches fill without overwhelming the database |
| A test transaction works | Thousands of concurrent users and connections work |
| Data is present | Replication lag is small enough that recent data is not lost |
| The runbook is followed | Licences, limits and quotas on the standby match production |
| Health checks go green | Third parties accept traffic from the new location |

### What South African regulation expects

South African financial regulators have set out expectations for resilience testing. The [Joint Standard 1 of 2023 on IT governance and risk management](https://www.masthead.co.za/wp-content/uploads/2023/11/Joint_Communication_4_of_2023_Publication_of_Joint_Standard_1_of_2023.pdf), made by the Financial Sector Conduct Authority and the Prudential Authority and published with their Joint Communication 4 of 2023, commenced on 15 November 2024. It applies to financial institutions as the Standard defines them, which include banks, insurers, managers of collective investment schemes, market infrastructures and certain financial services providers.

Among its requirements, the Standard says an institution must define recovery priorities and set recovery time and recovery point objectives for critical services and business processes. It requires an IT resilience plan that is tested regularly, at least annually, with scenarios that include total shutdown or incapacitation of the primary site as well as component failure at the level of an individual system or application cluster. It requires institutions to test the recovery dependencies between systems. It requires performance and capacity planning and monitoring that can respond to capacity shortages in time. It also requires that testing of new IT systems uses test environments that adequately reflect production. And where a material incident occurs, it requires the institution to notify its responsible authority.

The Standard does not say how much load a test must carry, and it applies only to the institutions it defines. A business outside financial services is not bound by it, but it shows what the regulator expects of those who are, and customers, insurers and auditors in other sectors increasingly ask comparable questions. For an institution that is covered, an annual test that never carries realistic load is a weak answer to a requirement that scenarios be tested.

## Why this becomes urgent

A major incident is the usual trigger. The business learns, at the worst moment, that failover works in principle but the standby cannot carry real traffic. The runbook was followed correctly, and the outage still lasts several times longer than the plan promised.

An incident like that creates three kinds of pressure at once. The commercial side wants to know why the plan was wrong. Customers and partners ask whether it can happen again. And, for regulated institutions, the incident may need to be reported, with questions about when failover was last tested and what the tests covered.

The pressure builds more slowly before that. Each year the business grows, the load on the standby that would be needed grows with it, while the standby may remain at its original size, because it earns nothing until it is used. The gap between what it can carry and what it would have to carry widens quietly.

## Economic consequence

The costs of untested capacity show up in several places:

- **Longer outages.** The plan says thirty minutes and the service is not truly back for hours, because the standby must be resized, caches rebuilt, limits raised or third parties asked to accept new addresses.
- **Degraded service.** Slow pages, failed checkouts and timeouts after failover, which leave customers worse off than if the business had been honest that it was down.
- **Lost sales and trust.** Revenue lost during the peak period, and customers who do not return.
- **Lost data.** Recent transactions missing because replication was behind at the moment of failure.
- **Weak audit and regulatory positions.** An auditor, insurer or regulator who sees that tests never included realistic load may judge the recovery targets unproven.
- **Emergency spending.** Capacity bought or leased under pressure, at a premium, during the incident.

As an illustrative example only, suppose the plan promises recovery in thirty minutes and the real outage lasts three hours at peak trading. Two and a half hours of lost or degraded sales at the busiest time of the year can exceed the whole annual cost of keeping a properly sized standby. The figures are invented, but the comparison is typical: sizing the standby for the load it must carry is cheap next to one failure at peak.

This is also a capacity issue, and a business that works on [capacity planning that starts only after an outage](/discovery/capacity-planning-only-after-incidents/) will usually discover the standby's limits the same way: when it is too late.

## Root cause

The root cause is that failover is tested quietly, off-peak and with little traffic, so capacity, licensing, data lag and dependency limits on the standby never show. The test was designed to prove that the switch works, and it proves that. Nobody was asked to prove that the result can carry the business.

A second cause is that the standby drifts from production. Production gets resized, upgraded and reconfigured as the business grows, and the standby is changed less often, because changes to it are easy to forget. When a failure happens, the standby is an older and smaller version of what it is meant to replace. This is the same pattern as [incidents that cannot be linked to the change behind them](/discovery/infrastructure-incidents-cannot-be-linked-to-recent-changes/): a change to production that was never mirrored on the standby is invisible until the standby is needed.

A third cause is that the environment used for failover tests may not behave like the real one. As the pattern described in [test environments that do not match production](/discovery/integration-test-environments-do-not-match-production/) shows, results from a simplified environment do not carry over to the real thing, and a drill that runs without traffic is an extreme version of that gap.

## Practical intervention

### Practical next actions

1. **Define the load a failover must carry.** For each critical service, record the peak load the standby must handle on the worst realistic day: transactions per second, concurrent users, data volumes and batch jobs. Use real measurements from the busiest periods and add a margin for growth. Agree the figure with the business owner, and tie it to the recovery time and recovery point objectives for the service.
2. **List what the standby needs besides servers.** Check sizes of compute and database instances, caches, connection and licence limits, storage throughput, network capacity, third-party allow-lists and addresses, certificates, secrets and monitoring. Compare each with production, and record every difference.
3. **Build a realistic load for the test.** Use recorded production traffic or a tested simulation that reproduces the traffic mix and peak volume. Include the batch jobs and integrations that run at busy times.
4. **Run the test at that load on a planned schedule.** Agree a date with the business, warn stakeholders, and prepare a way to switch back quickly. Start with a controlled test environment that closely mirrors production, then move to a limited portion of real traffic when the protections are in place, keeping spare capacity available in case it fails.
5. **Test both gradual and sudden shifts.** Move traffic across in steps to see how caches and connections build up, and also test a sudden full switch, since a real failure is sudden.
6. **Measure time to full service.** Record the time from the start of failover to the point where the service meets its normal performance and error targets, not just the time until it responds. Record replication lag and data loss against the recovery point objective.
7. **Fix the bottlenecks.** For each limit that appears, such as undersized instances, licence ceilings, cold caches or blocked addresses, record it, assign an owner and a date, fix it and retest. Decide where the business will accept a degraded mode and where it will not.
8. **Keep the standby in step with production.** Put changes to production and the standby in the same change process, so that a resize, upgrade or new dependency is applied to both. Review configuration differences regularly.
9. **Repeat and report.** Rerun the test on a schedule agreed with the business, and after major changes. Report the measured recovery time and the open fixes to the CIO and to the risk or audit function, and keep the evidence for insurers and regulators.

## Diagnostic questions

- When did we last run a failover at, or close to, peak load, and what did we learn?
- Is the standby sized, licensed and configured to carry our busiest day, and how do we know?
- What is our measured time from failover to full service, as distinct from the time to switch?
- How far behind can replication be at the moment of failure, and have we tested what is lost?
- Which third parties allow only the primary site's addresses, and who would change that during an incident?
- Which differences between production and the standby have we recorded, and which have we missed?

## What good looks like

For each critical service, there is a written statement of the load the standby must carry, a list of what the standby needs to match production and a record of the last failover test at that load, with the measured time to full service and any data lag. Bottlenecks found in each test are fixed and retested. Changes to production are mirrored on the standby through the same process. The CIO can state a recovery time for each service and say how it was measured.

You can measure the result. The measured time to full service is close to the planned time. The number of limits found in each test falls over successive tests. Replication lag at failover stays within the recovery point objective. Questions from auditors, insurers and regulators are answered with test evidence. When a real failure occurs, the service recovers close to the plan, without surprises.

## Where Mellorca fits

If you do not know what your standby would do under real load, a [digital systems audit](/services/digital-systems-audit/) can compare the standby with production, list the limits and differences, and show which services have never been tested at realistic load. To set up the load definition, the test schedule and the change routine that keeps the standby in step, [digital operations improvement](/services/digital-operations-improvement/) can design the practice with your operations team and help it stick.

## Method note

This article draws on the Joint Standard 1 of 2023 as published by the Financial Sector Conduct Authority and the Prudential Authority, Amazon's Well-Architected Framework guidance on testing disaster recovery, and chapter 22 of Google's Site Reliability Engineering book. The scenario, the timings and the cost comparison are illustrative and not measured. The article does not claim that any product or cloud provider is needed to fix the problem or that any system behaves the same way in your environment, so check the documentation for the platforms you use. The Joint Standard applies only to the financial institutions it defines, and its requirements, dates and notification rules should be confirmed with your compliance team or the Authorities. It is general information and not legal advice.
