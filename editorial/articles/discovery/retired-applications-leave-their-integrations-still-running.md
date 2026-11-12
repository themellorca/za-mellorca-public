---
hub: discovery
record_id: DISC-300
slug: retired-applications-leave-their-integrations-still-running
title: Retired applications leave their integrations still running
description: Decommission plans switch off the application but not the connections, credentials and schedules around it. Add an integration step to every retirement and record the closure.
lead: Decommission plans switch off the application but not the connections, credentials and schedules around it. Add an integration step to every retirement and record the closure.
category: Integration & API Operations
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Integration & API Operations
problem_domain: Integration & API Operations
problem_owner: Integration lead
budget_owner: CIO
sources:
  - Find unused AWS credentials - AWS Identity and Access Management | https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_finding-unused.html
  - Recommendation to remove unused credentials from apps - Microsoft Entra ID | https://learn.microsoft.com/en-sg/entra/identity/monitoring-health/recommendation-remove-unused-credential-from-apps
related:
  - Legacy integrations block application upgrades | /discovery/why-legacy-integrations-stop-businesses-from-upgrading-their-applications/
  - Why Critical Integrations Need a Named Operational Owner | /discovery/why-critical-integrations-need-a-named-operational-owner/
  - Why your integrations multiply faster than your applications | /discovery/point-to-point-integrations-multiply-faster-than-applications/
summary: Decommission plans switch off the application but not the connections, credentials and schedules around it. Add an integration step to every retirement and record the closure.
layout: plain
---
Picture a Pretoria manufacturer that has moved its warehouse operations to a new system. The old warehouse management system is formally retired: the project team signs off, IT shuts down the server, and the ticket is closed. Everyone agrees the job is done.

Three months later, a nightly job that exports stock movements from the old system's database to the finance team is still scheduled, and it fails every night with an error nobody reads. A synchronisation task that pushed order statuses to the customer portal is still registered on the integration platform. And the access key that the portal used to read from the old system is still active, because nobody remembers that it exists. When a new AI assistant is set up to answer stock questions, its developer finds the old connection in a shared list, assumes it is current, and points the assistant at it. The assistant answers confidently, from data that stopped changing months ago.

The operating condition is plain: when the business retires an application, the connections, credentials, schedules and data feeds around it are left running. That matters to the CIO because the business keeps paying to run and secure links that serve nothing, and because those links are most likely to be reused, by mistake, at the moment new automation arrives.

## The problem in plain language

An application rarely stands alone. It has connections to other systems: files it sends to finance, data it pulls from the ERP, status updates it pushes to a portal, reports it feeds into a data platform. Each of those connections is a small piece of the integration estate. It has a schedule, a set of credentials, a destination, and often a log nobody reads.

A decommission plan is usually written around the application. It covers the data migration, the user communication, the licence cancellation, the server shutdown and the archive. It rarely covers the connections around it, because those were built by different people at different times, often as part of other projects, and they are not listed in the application's own documentation.

So the application goes, and its connections stay. Some fail quietly every night. Some keep running against a read-only copy or an old database and deliver stale data. Some stay valid and open, with credentials that still work, waiting for someone to use them.

This is different from [orphaned automations still running after a process is retired](/discovery/retired-processes-leave-orphaned-automations-running/). That topic is about business processes that have ended. This article is about the technical links that were attached to an application, which outlast it unless somebody removes them deliberately.

## What the buyer is actually trying to solve

Integration leads, heads of IT and application owners ask practical questions. When we retire an application, how do we know every connection to it is gone? Which of our current connections serve nothing? Why do we still pay for links to systems that no longer exist? Who is responsible for closing them?

The outcome they want is simple. Every decommission ends with a short, verified record: here are all the connections the application had, here is how each was switched off and removed, here is the evidence that nothing still calls it, and here is who signed it off. After that, nobody has to wonder whether a link is live.

## Evidence and system mechanism

### Unused credentials are a known risk, and last-used data finds them

Credentials are the part of a connection that most obviously stays behind. Amazon's documentation on [finding unused credentials in AWS IAM](https://docs.aws.amazon.com/IAM/latest/UserGuide/id_credentials_finding-unused.html) states the principle directly: to increase security, remove credentials that are not needed, ideally by deleting them, and at the very least by deactivating them, noting that they can be recreated later if the need arises. It describes how the console and a credential report show when a password or access key was last used, and for access keys also the Region and the service last requested. It adds that "unused" usually means not used within a specified period.

Microsoft makes the same point for applications in Microsoft Entra. Its recommendation on [removing unused credentials from apps](https://learn.microsoft.com/en-sg/entra/identity/monitoring-health/recommendation-remove-unused-credential-from-apps) says only credentials actively in use by an application should remain registered, and that the recommendation appears when a credential has not been used for more than 30 days. It explains that removing unused credentials reduces the attack surface and lowers the risk of misuse by discovery.

These products are examples. The idea carries to any system that issues keys, tokens, service accounts or certificates: a credential whose application has been retired is a standing risk, and "last used" information is the evidence that tells you whether anything still depends on it.

### A connection has several parts

Closing a connection properly means removing each of its parts, not just the one that is easiest to see.

| Part of the connection | What is left behind if it is missed |
| --- | --- |
| The scheduled job or flow | Nightly failures, or stale data still flowing |
| The credentials, keys and certificates | A valid way in that nobody monitors |
| The firewall rule or network route | An open path to a system that no longer exists |
| The destination mapping or feed | Reports and portals showing out-of-date figures |
| The entry in the integration inventory | Developers who assume the link is current |
| The monitoring and alerting rule | Alerts about a retired link that train people to ignore alerts |

### What South African law expects

POPIA gives the leftover connections a legal angle where they carry personal information. The [Protection of Personal Information Act, 4 of 2013](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) requires, in section 19, that a responsible party secure the integrity and confidentiality of personal information in its possession by taking appropriate, reasonable technical and organisational measures, which includes identifying foreseeable risks and keeping safeguards up to date. A working credential into a retired system that still holds customer records is exactly the kind of foreseeable risk that section anticipates.

Section 14 deals with retention: in general, records of personal information must not be kept longer than is necessary for the purpose for which they were collected or processed, and must be destroyed, deleted or de-identified when the responsible party is no longer authorised to retain them. A retired application whose database is left running, and whose feeds keep copying data elsewhere, works against that. Confirm how both sections apply to your own systems with your information officer.

## Why this becomes urgent

An AI agent rollout is the usual trigger. Agents and new services need to read from and write to business systems, and the people building them look for existing connections to reuse. They search the integration platform, a shared document or a team's memory, and find a link that looks suitable.

If a retired application's connection is still listed, still scheduled or still has valid credentials, an agent can start calling it. It may read stale data and present it as current. It may write to a system that nobody watches. It may use a credential that should have been removed years ago, and that is not covered by the controls applied to current connections. The risk was there before, but it was dormant. Agents make it active, and make it active at speed, because they call connections in volume and without a person noticing an error.

## Economic consequence

The cost of left-behind connections appears in several ways:

- **Running costs.** Integration platform licences, server time, monitoring and support for links that serve nothing.
- **Security.** Valid credentials into retired or neglected systems, which are cheap for an attacker to find and expensive to explain after an incident.
- **Stale data.** Reports, portals and agents showing information that stopped updating when the application was retired, which people then act on.
- **Outages.** A half-retired link fails at the worst time, for example when the old server is reused for another purpose and the nightly job starts writing into the wrong place or blocking a queue that other jobs share.
- **Investigation time.** Each time someone finds an unknown connection, an engineer has to work out what it does, who owns it and whether it is safe to switch off.

As an illustrative example only, suppose an integration team spends two days tracing a failing nightly job back to an application that was retired a year earlier, and a further day getting agreement to switch it off. Three days of a senior engineer's time is spent on something that a one-page closure record at decommissioning would have prevented, and that figure repeats for every forgotten link. Related problems with missing ownership appear in [legacy applications that stay live without an owner](/discovery/why-legacy-applications-remain-live-without-an-owner/), and credentials that serve more than one link are covered in [API credentials shared across unrelated integrations](/discovery/api-credentials-shared-across-unrelated-integrations/), which makes removal harder because turning off one connection can break another.

## Root cause

The root cause is that decommissioning plans cover the application itself but not the integrations, credentials, schedules and data feeds around it. The plan's checklist was designed around the application: data, users, licences, servers. Connections are not on it because nobody was asked to find them.

A second cause is that nobody holds a complete list. Connections are created inside projects, on integration platforms, in scripts, in other applications' settings and in cloud consoles. A team retiring one application cannot see all of them, and no central inventory says what talks to what.

A third cause is that finishing is not rewarded. A project is judged on whether the new system works. Once it does, the team moves on, and the removal of the old connections is a task without a sponsor, a deadline or a visible benefit.

## Practical intervention

### Practical next actions

1. **Add an integration step to every decommission plan.** Make "inventory and close all connections" a named work item, with an owner and a date, ahead of the final shutdown of the application.
2. **Build the list of connections before the switch-off.** For the application being retired, list every inbound and outbound connection: scheduled jobs, flows on the integration platform, database links, file transfers, API clients, webhooks, reports that read from it, and anything an agent or script might call. Ask the teams on the other end, and check logs and last-used information as well as documentation.
3. **Decide what happens to each connection.** For every item, choose one outcome: replace it with a connection to the new system, retire it because nothing needs it, or keep it for a stated reason and a stated period.
4. **Switch off, then remove.** First disable the schedule, flow or route. Watch for failures or complaints for an agreed period. Then delete the connection, its credentials, keys and certificates, its network rules and its monitoring alerts, as the AWS and Microsoft documentation recommend for credentials that are no longer needed.
5. **Confirm that nothing still calls it.** Use last-used and sign-in information, logs and error reports to show that no process is still trying to use the connection. Record the evidence.
6. **Record the closure.** Update the integration inventory so each retired connection is marked closed, with the date, the person who closed it and the evidence. Keep the record where future projects and agent builders will look first.
7. **Make the closure a condition of sign-off.** The decommission is not complete, and the project is not closed, until the integration closure record has been reviewed by the integration lead.
8. **Sweep for survivors.** Once a year, review credentials and scheduled jobs that have not been used for a set period, and follow up on anything that does not belong to a current application.

## Diagnostic questions

- For the last application we retired, can we list every connection it had, and show when each was removed?
- Do we have an inventory of integrations that a developer or agent builder can search, and does it distinguish live from closed?
- Which credentials, keys or certificates in our environment belong to applications that no longer exist?
- Which scheduled jobs or flows fail every night, and has anyone asked why?
- If a new AI agent were pointed at a connection listed in our inventory, how would we know it was live and current?
- Who signs off that a decommission is complete, and does their checklist include integrations?

## What good looks like

Each decommission ends with a one-page closure record: the connections the application had, what was done with each, the evidence that nothing still calls them, and the name of the person who signed it off. The integration inventory shows closed links as closed, so nobody mistakes them for current ones. Credentials belonging to retired applications are removed on a known schedule, not discovered by accident.

You can measure the result. The number of connections with no live application behind them trends to zero and stays there. Nightly failures from retired links disappear. The yearly sweep finds few survivors, and those it does find are traced to the decommission that missed them. When a team builds a new agent, the inventory tells them which connections are live, who owns each one and what data it serves.

## Where Mellorca fits

If you do not know what connections surround your applications, a [digital systems audit](/services/digital-systems-audit/) can build the inventory, mark which links serve a live purpose and flag the credentials and schedules that belong to systems already retired. Once the list is clear, [systems implementation and integration](/services/systems-implementation-integration/) can switch off and remove the redundant connections safely, move the ones that still matter to the new systems and put the closure step into the way you decommission applications.

## Method note

This article draws on Amazon's documentation on finding unused credentials in AWS IAM, Microsoft's documentation on removing unused credentials from apps in Microsoft Entra, and the text of the Protection of Personal Information Act. The scenario, the time figures and the closure checklist are illustrative and not measured. The article does not claim that any product named is needed to fix the problem or that it behaves the same way in your environment, so check the documentation for the systems you run. It is general information and not legal advice: confirm your obligations under sections 14 and 19 of the Protection of Personal Information Act with your information officer or legal adviser.
