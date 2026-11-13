---
hub: impact
record_id: CPS-186
slug: network-performance-not-monitored-until-staff-complain-reactive-support-cost
title: Waiting for Staff to Complain: The Cost of Unmonitored Office Networks
description: When the only network monitoring is staff saying the system is slow, problems are found late, diagnosed by guesswork and paid for twice: once in lost work and again in support time.
lead: When the only network monitoring is staff saying the system is slow, problems are found late, diagnosed by guesswork and paid for twice: once in lost work and again in support time.
category: IT Infrastructure
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: IT Infrastructure
commercial_domain: IT Infrastructure
primary_pain: Network performance is not monitored, so problems are only discovered when employees complain
primary_cost_mechanism: Lost productive time from slow and unreliable connections, repeated reactive support tickets, spending on bandwidth or equipment that does not fix the real cause, and poor call quality with customers
sources:
  - Prepare your organization's network for Teams - Microsoft Teams | https://learn.microsoft.com/en-us/microsoftteams/prepare-network
  - Microsoft 365 network connectivity principles - Microsoft 365 Enterprise | https://learn.microsoft.com/en-us/microsoft-365/enterprise/microsoft-365-network-connectivity-principles
related:
  - Old Switches and Routers: The Hidden Slowdown in Your Office | /impact/old-network-switches-routers-hidden-office-bottleneck-productivity-cost/
  - Slow computers turn small delays into paid waiting | /impact/slow-computers-paid-waiting-cost/
  - Automating the Easy Things First: The Opportunity Cost of Leaving Bottlenecks Alone | /impact/automation-chosen-for-convenience-not-costly-bottlenecks-opportunity-cost/
summary: When the only network monitoring is staff saying the system is slow, problems are found late, diagnosed by guesswork and paid for twice: once in lost work and again in support time.
layout: plain
---
## "The system is slow again"

In a 45-person engineering practice in Durban, the complaint arrives most afternoons. Video calls break up, the shared drawings take a minute to open, and the cloud accounting package times out. Someone logs a ticket with the IT provider. The technician connects remotely, finds nothing obviously wrong, restarts the router and closes the ticket. Two days later it happens again.

Nobody is negligent here. The business simply has no way of knowing what its network is doing until a person feels the effect. Monitoring is done by staff frustration, which is the slowest and least precise instrument available.

## What reactive network support looks like

A business that does not monitor network performance usually shows the same symptoms:

- **Problems are reported by feel.** "Slow", "dropping" and "freezing" are the only data points, with no record of when, where or for whom.
- **Diagnosis starts from zero every time.** The technician has no history to compare against, so each ticket is a fresh investigation.
- **Fixes are guesses.** Restarting equipment, upgrading the internet package or replacing a Wi-Fi access point are tried in turn, without evidence that any of them is the cause.
- **Intermittent faults are never caught.** By the time a technician looks, the problem has passed.
- **Staff build their own work-arounds.** People use phone hotspots, move to a different desk or postpone uploads until the evening.

This is the network version of the pattern described in [infrastructure faults reported by people rather than monitoring](/patterns/when-infrastructure-faults-are-first-reported-by-customers-not-by-monitoring/).

## Where the money goes

### Lost productive time

Slow networks rarely stop work completely. They make every task take a little longer. If 30 people each lose 15 minutes a day to slow file access, dropped calls and repeated log-ins, that is 7.5 hours a day. At a loaded cost of R300 an hour for professional staff, that is about R2,250 a day, or roughly R49,000 a month across 22 working days. These numbers are illustrative, but the method is useful: small daily delays multiplied by headcount become a material monthly cost.

### Repeated support tickets

Reactive support charges for the same problem several times. Each ticket costs a technician's time, whether it is billed hourly or absorbed into a contract that will be priced higher at renewal. The related cost of [routine IT support delays](/impact/routine-it-support-delays-productivity-cost/) adds to it.

### Spending on the wrong fix

Without measurements, the natural response to slowness is to buy more bandwidth. If the real cause is a congested Wi-Fi channel, an overloaded switch or traffic being routed the long way round, the faster line does not help. The business pays more every month and still has the problem. The existing analysis of [network capacity use that is not visible](/impact/network-capacity-use-not-visible-slowdowns-cannot-be-diagnosed-cost/) covers the capacity side of this in more detail.

### Poor customer experience

Customer calls and video meetings are often the first casualties. Microsoft's guidance on [preparing a network for Teams](https://learn.microsoft.com/en-us/microsoftteams/prepare-network) notes that calls with static, cut-outs or robotic-sounding voices can be caused by jitter or packet loss, and that dropped calls can be caused by firewall or proxy blockers. Those are exactly the problems a customer notices.

## Why businesses stay reactive

Monitoring feels like an enterprise tool. The office network was set up once, works most of the time, and has no obvious owner. The IT provider is paid to fix problems, not to prevent them, so the commercial arrangement rewards tickets rather than fewer tickets. And staff get used to slowness; the complaint becomes background noise rather than a signal.

## What monitoring actually means for a small business

Network monitoring for a business of 20 to 200 people does not require a control room. It means collecting a small number of measurements continuously and keeping enough history to compare a bad day with a normal one.

- **Availability.** Is the internet line, firewall, switch and each Wi-Fi access point up, and when did it last go down?
- **Utilisation.** How full is the internet line and the busiest internal links at different times of day?
- **Quality.** What are latency, jitter and packet loss to the cloud services the business depends on?
- **Wi-Fi health.** How many devices are connected to each access point, and what channel interference exists?

Most business-grade routers, firewalls and Wi-Fi systems can report these measures, and many managed IT providers already have monitoring tools they can switch on. For businesses relying on Microsoft 365, the [Microsoft 365 network connectivity principles](https://learn.microsoft.com/en-us/microsoft-365/enterprise/microsoft-365-network-connectivity-principles) are a useful benchmark. They explain that traffic routed through distant egress points, network hairpins and inspection devices adds latency, and recommend local internet egress and direct routes to the nearest service entry point. A monitored network shows whether those principles are being met.

## The commercial trigger

A sensible moment to act is when the business is about to pay for more bandwidth or new Wi-Fi equipment to fix slowness. A month of monitoring first will show whether the purchase will help. Another trigger is an IT support contract renewal, which is the right time to ask for proactive monitoring and a monthly network report as part of the service.

## Practical next actions

1. **Start a slowness log.** For four weeks, ask staff to record the time, location and task each time the network feels slow. Patterns appear quickly.
2. **Ask your IT provider what they can already see.** Many have monitoring tools that are not switched on for every client.
3. **Monitor the four basics.** Availability, utilisation, latency and packet loss, and Wi-Fi client counts per access point.
4. **Set alerts on thresholds, not only on outages.** A line running above 80 percent for an hour, or packet loss above an agreed level, deserves a look before staff notice it.
5. **Review a monthly network report.** One page showing incidents, peak usage and trends is enough to decide where to invest.
6. **Delay bandwidth upgrades until you have evidence.** Spend on the bottleneck the data points to, not the one that feels most likely.

Waiting for staff to complain is the most expensive form of network monitoring, because the business pays in lost time first and in guesswork afterwards. Measuring a handful of indicators turns vague complaints into decisions that can be costed.
