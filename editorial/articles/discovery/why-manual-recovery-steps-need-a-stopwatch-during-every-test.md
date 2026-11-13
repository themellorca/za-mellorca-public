---
hub: discovery
record_id: DISC-384
slug: why-manual-recovery-steps-need-a-stopwatch-during-every-test
title: Manual recovery steps are not timed during tests
description: A recovery test that records only pass or fail hides the slowest, most human part of recovery. How to time manual steps so the recovery time you quote is one you have actually seen.
lead: A recovery test that records only pass or fail hides the slowest, most human part of recovery. How to time manual steps so the recovery time you quote is one you have actually seen.
category: Business Continuity & Resilience
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: IT or operations manager who owns the recovery plan and its test
budget_owner: Operations director, chief financial officer or managing director
sources:
  - Architecture strategies for disaster recovery - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery
  - Disaster recovery options in the cloud - Disaster Recovery of Workloads on AWS: Recovery in the Cloud | https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html
  - SP 800-34 Rev. 1, Contingency Planning Guide for Federal Information Systems - CSRC | https://csrc.nist.gov/pubs/sp/800/34/r1/upd1/final
  - Run a test failover (disaster recovery drill) to Azure in Azure Site Recovery - Azure Site Recovery | https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-test-failover-to-azure
related:
  - Recovery only works while one specialist is reachable | /discovery/recovery-only-works-while-one-specialist-is-reachable/
  - Restore tests prove the files return, not that the service works | /discovery/restore-tests-prove-the-files-return-not-that-the-service-works/
  - Cyber recovery and disaster recovery runbooks give conflicting instructions | /discovery/cyber-recovery-and-disaster-recovery-runbooks-give-conflicting-instructions/
summary: A recovery test that records only pass or fail hides the slowest, most human part of recovery. How to time manual steps so the recovery time you quote is one you have actually seen.
layout: plain
---
A finance system goes live on the first of the month, and the project plan promises that it can be recovered within four hours. Three weeks later the team runs a recovery test. The database is restored, the application starts, a few invoices are posted as a check, and the test report says "passed". Nobody wrote down how long the restore took, how long it took to find the right administrator password, or how long the finance manager waited before anyone told her the system was usable. The four-hour promise is still a promise, and nothing has tested it.

This article is about that gap: recovery tests that confirm recovery is possible but never time the manual steps inside it.

## The problem in plain language

Most recovery plans are a mix of automated work and human work. The automated parts, such as a restore job or a replicated server starting up, take a duration that a tool can report. The human parts are different: someone has to be reached, someone has to decide, someone has to find the document, log in, run the commands in the right order, check the result and tell the business. Those steps sit between the technical milestones, and in a real incident they often take longer than the technical milestones themselves.

When a test is judged only on whether it worked, the manual steps are invisible. The plan then carries a recovery time that was estimated in a meeting, not observed in a test. That figure is what the board, the insurer and the customers are told.

## What the buyer is actually trying to solve

The person searching for this problem is usually not trying to build a perfect plan. They are trying to answer one question honestly: if this service stopped on a Tuesday morning, when would it be back, and how do we know? They may have a new critical service about to go live, a customer contract that quotes a recovery time, or a nagging suspicion that the last test was too gentle. What they want is a way to turn a pass-or-fail test into evidence they can stand behind.

## Evidence and system mechanism

### Recovery targets are only meaningful if they are measured

Microsoft's reliability guidance recommends [structured, tested and documented recovery plans that align with the recovery targets](https://learn.microsoft.com/en-us/azure/well-architected/reliability/disaster-recovery). It defines the recovery time objective as the maximum acceptable time to restore business operations, and it describes a recovery drill as a planned exercise that validates recovery capability under controlled conditions. The same guidance asks for step-by-step instructions that list prerequisites such as scripts, credentials and configurations, and for named owners for tasks such as declaring a disaster, running operations tasks and communicating internally and externally.

Read together, those requirements describe a plan made of many small tasks with owners and prerequisites. A recovery time objective is the sum of those tasks plus the waiting between them. If the test does not time each task, the objective cannot be checked against anything.

### Where the minutes hide

In most untimed tests, the same places absorb the time:

- **Declaring the event.** Someone has to decide that this is a recovery situation and not a fault that will clear in ten minutes. If nobody is named to make that call, the clock runs while people wait for each other.
- **Getting access.** Emergency accounts, passwords held by one person, multi-factor prompts sent to a phone that is on leave, and vendor portals that need a support ticket.
- **Finding the right instructions.** A runbook stored on the very file server that has failed, or a version from two systems ago.
- **Waiting for another party.** A hosting provider, a software vendor or an internet provider who must act before anything else can proceed.
- **Checking and communicating.** Confirming that data is complete, then telling the people who can finally resume work.

None of these show up in a tool's job log. They show up only when someone sits with a clock and records when each step started and finished.

### Automated recovery still has manual edges

Tooling helps, but it does not remove the human edges. Microsoft's description of a [test failover in Azure Site Recovery](https://learn.microsoft.com/en-us/azure/site-recovery/site-recovery-test-failover-to-azure) explains that a test lets you validate a replication and recovery strategy without affecting production. That is valuable, and it is also only the technical part of the picture. Someone still decides when to run the real failover, checks that the recovered systems behave correctly, and tells the business. A drill can be technically clean and still tell you nothing about those steps unless they are part of the exercise and are timed.

AWS makes a related point in its [disaster recovery options guidance](https://docs.aws.amazon.com/whitepapers/latest/disaster-recovery-workloads-on-aws/disaster-recovery-options-in-the-cloud.html): it is critical to regularly assess and test your recovery strategy so that you have confidence in invoking it. Confidence of that kind comes from numbers, not from the absence of failure.

## Why it persists

Timing manual steps is uncomfortable. It exposes the slow parts of the plan, and it can show that the promised recovery time is not achievable. Test windows are also short and often scheduled after hours, so the team is focused on finishing rather than recording. The person leading the test is usually the person who wrote the plan, which makes it harder to observe it critically.

## What good looks like

A well-run test produces a simple timeline. It lists each step in order, who performed it, when it started, when it finished, and what it was waiting for. It separates working time from waiting time. It records deviations from the written runbook, because the way people actually recover is rarely the way the document says. It ends with one number: the total elapsed time from the declared event to the point at which the business could resume work.

That number is then compared with the recovery time the business has been told. If the observed time is longer, there are two honest options: improve the slow steps, or change the target. Both are better than leaving the gap undocumented.

| Step | Owner | Planned | Observed | What it waited for |
| --- | --- | --- | --- | --- |
| Declare recovery event | Named incident lead | 10 minutes | Record on the day | Decision and reachability |
| Obtain emergency access | Systems administrator | 15 minutes | Record on the day | Credentials, approvals, vendor |
| Restore data and start service | Systems administrator | 90 minutes | Record on the day | Tooling and data volume |
| Check data and handover | Business owner | 30 minutes | Record on the day | Sample checks and sign-off |

## Risks and trade-offs

Timed tests take more preparation. You need an observer who is not performing the steps, a prepared way to capture times, and a tolerance for finding out uncomfortable things. A very realistic test can also disturb live operations, so some businesses time steps in a test environment and accept that real conditions may be slower. That is a reasonable compromise provided the report states it.

Timing also does not replace judgment. A fast recovery of the wrong data is not a good outcome, and a slow recovery of a service nobody uses on weekends may be perfectly acceptable. The purpose is to give the business an observed figure to weigh against the cost of tightening it. If you have not yet agreed which services need which recovery time, begin with the approach described in [organising recovery plans around business services](/discovery/why-recovery-plans-should-be-organised-around-business-services-not-servers/).

## How this connects to other recovery gaps

Untimed manual steps are one symptom of a wider pattern. Many businesses cannot say how long recovery would take after a major outage, which is explored in [not knowing recovery time after a major outage](/impact/not-knowing-recovery-time-after-major-outage-unplanned-downtime-cost/). Others have backups that have never been restored, covered in [the cost of backups that are never tested](/impact/backups-never-tested-restore-financial-cost/). A timed test addresses both: it produces a duration, and it proves the restore works.

## Practical next actions

1. Choose one critical service with a recovery time that has been promised to customers, insurers or the board, and list every step between "something is wrong" and "staff can work again", including the human ones.
2. At the next test, appoint an observer who does not perform any steps and who records the start, finish and waiting reason for each step on a shared sheet.
3. Test the access path as its own step: confirm that the emergency accounts, authentication methods and vendor contacts work without the person who normally holds them.
4. Add the observed total to the plan next to the stated recovery time, and ask the business owner whether the gap is acceptable or needs fixing.
5. Rank the slowest three steps, assign an owner and a date to each, and repeat the timed test after the changes so the improvement is measured, not assumed.
