---
hub: impact
record_id: CPS-201
slug: slow-computers-paid-waiting-cost
title: Slow Computers Turn Small Delays into Paid Waiting
description: A computer can still turn on while making routine work unnecessarily expensive. The useful question is how much working time its delays actually prevent the employee from using.
lead: A computer can still turn on while making routine work unnecessarily expensive. The useful question is how much working time its delays actually prevent the employee from using.
category: Digital Infrastructure
published_date: 2026-09-06
updated_date: 2026-09-06
tags:
  - Digital Infrastructure
cta_label: Talk to Mellorca
cta_href: /contact/
side_title: Cost mechanisms
side_text: Blocked productive capacity and support labour
side_text_position: above_tags
content_id: CONTENT-000141
commercial_domain: Digital Infrastructure
primary_pain: slow employee computers
primary_cost_mechanism: blocked productive capacity and support labour
evidence_basis: original qualitative analysis and transparent input-based cost model; related repository-contained editorial context
sources:
  - Startup Performance Report in Endpoint Analytics - Microsoft Intune | https://learn.microsoft.com/en-us/intune/endpoint-analytics/startup-performance
  - Endpoint analytics overview - Microsoft Intune | https://learn.microsoft.com/en-us/intune/endpoint-analytics/
related:
  - New Employees Without Equipment Create Paid Onboarding Delay | /impact/new-employees-without-equipment-onboarding-cost/
  - Old Computers Kept Too Long: The False Saving on Hardware | /impact/ageing-computers-false-hardware-savings-cost/
  - Paying for Server Capacity the Business Does Not Use | /impact/overprovisioned-server-capacity-cost/
---
## The tolerated pain

A spreadsheet takes time to open, switching applications stalls a task, and a restart interrupts work that was already under way. Each delay looks too small to justify attention. Keeping the device feels economical because replacement has a visible price while waiting is scattered through the working day. This argument only holds if the existing setup still supports the work at an acceptable total cost.

Employees adapt. They start the machine and make coffee, avoid opening large files during calls, or keep everything open all week to avoid a slow start. These workarounds hide the problem from management while the time keeps leaking.

## Operational consequence

Separate device delay from slow network access, application response and an unusually demanding task. A faster laptop will not necessarily fix a remote service bottleneck. Record the task, duration, frequency and whether the employee could do useful alternative work. Repeated restarts can also create recovery work: reopening files, checking saved changes and reconstructing the point at which the task stopped.

Warning signs worth recording:

- the same employees raise repeated “slow PC” tickets;
- support visits clear temporary files or restart the device, and the problem returns;
- certain device models attract more complaints than others;
- staff avoid restarting, so updates are postponed;
- delays cluster in tasks that other people are waiting on, such as quoting or dispatch.

## Measure before guessing

Managed estates can produce evidence rather than anecdotes. Microsoft's endpoint analytics in Intune, for example, reports startup performance as a boot score (power-on to sign-in) and a sign-in score (credential entry to a responsive desktop), each from 0 to 100. Its documentation notes that hard disk drives typically result in boot times three to four times longer than solid-state drives, flags Group Policy delays and startup processes that keep the desktop unresponsive, compares performance by device model and tracks restart frequency, including Stop errors. It also states that, apart from roughly monthly update restarts, restarts without an update should ideally be close to zero.

That kind of telemetry separates a hardware constraint from a configuration problem. A device with a hard disk and a device slowed by a startup process need different fixes, and only one of them requires buying anything.

## Financial consequence

For a measured period, estimate blocked capacity cost as the sum, across affected employees, of genuinely blocked minutes divided by 60 and multiplied by each employee’s loaded hourly employment cost. Add separately recorded support and recovery hours at the appropriate rates. Do not count the same minute as both waiting and recovery. Use actual payroll inputs and observations; there is no universal cost per slow computer.

## An illustrative cost model

Every figure below is an **illustrative assumption** chosen to show the arithmetic. None is a benchmark.

| Component | Illustrative inputs | Monthly hours | Monthly cost |
| --- | --- | --- | --- |
| Blocked waiting | 12 employees × 20 blocked minutes per day × 21 working days = 5,040 minutes | 84 | 84 × R280 = R23,520 |
| Recovery after crashes or forced restarts | 6 incidents × 15 minutes = 90 minutes | 1.5 | 1.5 × R280 = R420 |
| Support labour | 8 tickets × 45 minutes = 360 minutes | 6 | 6 × R400 = R2,400 |
| **Total** |  | **91.5** | **R26,340** |

The illustrative rates are R280 per hour loaded employment cost and R400 per hour for support. Over 12 months, R26,340 per month is R316,080 of capacity consumed. Now compare an **illustrative** intervention: replacing or upgrading 12 devices at R9,500 each, including configuration and migration, costs R114,000. If, after the change, only half of the measured burden actually disappears, the monthly value recovered is R13,170 (R26,340 ÷ 2), and the intervention cost is matched by recovered capacity in under nine months (R114,000 ÷ R13,170 ≈ 8.7).

The point of the model is the method, not the answer. With different inputs the case may be stronger, weaker or not worth pursuing.

## What the estimate does and does not mean

This is a valuation of capacity consumed, not an automatic reduction in payroll available from buying equipment. Cash savings require a real change such as avoided overtime or an otherwise necessary hire. If delays affect a constrained customer process, record missed commitments separately and establish attribution before assigning lost contribution. Multiplying every pause by gross sales would exaggerate the effect.

Equally, do not assume replacement removes every blocked minute. Some waiting belongs to network, application or service performance, and some will remain however fast the device is.

## Commercial urgency

A useful trigger is a repeated, measured delay in a task that gates other work, especially when support visits keep treating the same symptom. Compare the observed avoidable burden over a consistent planning period with the full intervention cost: diagnosis, repair or replacement, configuration, migration and disruption. Do not assume every measured minute will be recovered or that the most expensive device is the right answer.

## Resolution

Start with a representative task on the affected setup and a suitable comparison setup. Identify whether the constraint is local hardware, configuration, connectivity or the application. Trial the smallest supported correction, preserve the employee’s files and test the task again. Agree acceptance criteria with the person doing the work. Track both blocked time and support demand after the change, including any new migration or compatibility issues.

The cheapest effective fix often comes first: removing a heavy startup process, correcting a policy that delays sign-in, or replacing a hard disk with a solid-state drive. Full replacement is justified when the device model itself is the constraint. Rebuilding or replacing devices also creates setup work; see [the labour cost of manual device setup](/impact/manual-device-setup-labour-rework-cost/).

## A practical diagnostic

1. Which tasks are delayed, how often, and for how long each time?
2. Does the delay happen on a comparison device running the same task over the same connection?
3. Is the boot drive a hard disk, and are startup processes or policies delaying sign-in?
4. How many restarts without an update, crashes or forced power-offs has the device had this month?
5. Who is waiting downstream when this person is waiting?

## What better looks like

Device performance is measured continuously across the estate, not discovered through complaints. Refresh decisions use startup, reliability and support data alongside age and purchase price. Problem models are identified early, and the people who do the work agree that the fix removed the delay.

## The economic meaning

Device life should be judged against productive use and support burden as well as purchase price. A working machine can still consume scarce capacity; a replacement earns its place when evidence shows that it removes the actual constraint.

## Sources and method

This is a diagnostic cost model, not a client case study or an industry benchmark. All headcounts, minutes, rates and prices in the model are illustrative assumptions and must be replaced with your own time, payroll and support records. No industry loss or saving is asserted. External sources describe current device-performance measurement mechanisms only.

[Related analysis: capacity cost versus payroll savings](/impact/high-value-employees-doing-low-value-admin/).
