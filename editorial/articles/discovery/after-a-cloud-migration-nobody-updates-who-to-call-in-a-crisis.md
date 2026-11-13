---
hub: discovery
record_id: DISC-383
slug: after-a-cloud-migration-nobody-updates-who-to-call-in-a-crisis
title: After a cloud migration, nobody updates who to call in a crisis
description: Recovery contact lists still name data-centre vendors and departed staff, while cloud provider alerts go to whoever signed up. Rebuild the tree around the new estate and test it by calling.
lead: Recovery contact lists still name data-centre vendors and departed staff, while cloud provider alerts go to whoever signed up. Rebuild the tree around the new estate and test it by calling.
category: Business Continuity & Resilience
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: Business continuity or IT service management lead
budget_owner: COO, CIO or CFO
sources:
  - Create Service Health alerts for Azure service notifications - Azure Service Health | https://learn.microsoft.com/en-us/azure/service-health/alerts-activity-log-service-notifications-portal
  - #StopRansomware Guide - CISA | https://www.cisa.gov/stopransomware/ransomware-guide
  - https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf | https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf
related:
  - Recovery environments drift from production | /discovery/why-recovery-environments-quietly-drift-away-from-production/
  - Recovery only works while one specialist is reachable | /discovery/recovery-only-works-while-one-specialist-is-reachable/
  - Third-party recovery commitments are not linked to contracts | /discovery/when-a-suppliers-recovery-promise-is-not-written-into-your-contract/
summary: Recovery contact lists still name data-centre vendors and departed staff, while cloud provider alerts go to whoever signed up. Rebuild the tree around the new estate and test it by calling.
layout: plain
---
Picture a Pretoria engineering firm eight months after it moved its ERP and file servers into the cloud. The migration was a success: the old server room has been cleared, the project team has been thanked and the consultants have gone. On a Tuesday morning, the cloud provider's status page shows a regional incident affecting the firm's database service, and orders stop flowing.

The operations manager reaches for the recovery contact list. It is a spreadsheet on the file server, which is part of what is down, so he finds an older printout in a drawer. It names the hosting company that ran the old data centre, with its twenty-four-hour desk number. It names two infrastructure engineers, one of whom left in the spring. It does not name the managed service provider that now runs the cloud environment, or the person who is allowed to open a priority support case with the cloud provider. The provider's own incident notices have been going to a mailbox belonging to the migration consultant, who signed up the account and has since moved on to another client.

In the first hour, the team makes eleven calls. Six reach the wrong person or nobody. The service comes back after four hours, and a review finds that the provider had emailed an advisory two days earlier that no employee ever saw.

The operating condition is plain: the recovery contact tree still reflects the old environment, and the people and routes that matter in the cloud were never added. That matters to the COO and the CIO because the first hour of an outage is spent finding people instead of fixing the problem, and because nobody can say with confidence how long it will take to reach the right ones.

## The problem in plain language

A recovery communication tree answers a simple question: who do we call, in what order, when something goes wrong? It lists internal staff, suppliers, vendors and sometimes customers and regulators, with the way to reach each one and who calls whom.

Before a cloud migration, the tree is built around what the business runs. The data centre has a facilities contact. The hardware has a maintenance supplier. The network has a line provider. The database has an administrator. Each entry matches something physical or something that a named person looks after.

A migration changes the list of things that matter. The data centre and the hardware vanish, and with them the reasons for several entries. New things appear: cloud accounts and subscriptions, a managed service provider, software-as-a-service vendors, a domain registrar, an identity provider, a payment gateway. Each has its own support route, its own escalation process and its own rules about who is allowed to call.

The migration project plan covers the move: data, applications, cut-over date, training. It rarely includes updating the recovery tree, because the tree belongs to a different team and is not part of the project's definition of done. When the project closes, the old entries stay and the new ones are never written.

The cloud adds a second problem. Cloud providers send notices to the contacts registered on the account, and those were usually entered by whoever created it. Nobody checks them afterwards. The notices that matter most, such as incident advisories, security alerts and maintenance warnings, can go to someone who no longer works at the business.

This is related to [infrastructure diagrams out of date when projects end](/discovery/infrastructure-diagrams-out-of-date-when-projects-end/), because the same pattern applies: a project changes the estate and its documents are not updated. It is also different from [recovery plans organised around servers instead of business services](/discovery/why-recovery-plans-should-be-organised-around-business-services-not-servers/). That topic is about how a plan is structured. This one is about whether the names, numbers and routes in it are still true.

## What the buyer is actually trying to solve

Business continuity leads and IT service management leads put this in practical terms. If something fails tonight, who do we call, and will they answer? Who can open a priority case with the cloud provider? Who receives the provider's warnings? Where is the list kept if our systems are down? How would we know the list is out of date?

The outcome they want is a tree they can trust. It reflects the estate as it is now, names roles with alternates, includes the provider-side contacts and escalation routes, is held where an outage cannot reach it and has been tested by actually calling the people on it.

## Evidence and system mechanism

### Cloud providers notify the contacts on file, and the guidance says to keep them current

Cloud vendors state the risk directly. Amazon's guidance in the [AWS Security Incident Response User Guide](https://docs.aws.amazon.com/security-ir/latest/userguide/update-account-contact-info.html) says it is important to have accurate and up-to-date contact information for each account so that the correct stakeholders receive notifications on topics such as security, billing and operations. Each account has a primary contact and alternate contacts for security, billing and operations. The guide recommends using an email distribution list where a team manages these issues, because a list removes dependence on one person who might be out of the office or leave the company. It also says to protect the email and phone details used for the account against password and multi-factor resets, and notes that administrators of an organisation can manage the alternate contacts for member accounts centrally and should check that newly created accounts carry accurate contact information.

Microsoft's guidance on [Service Health alerts in the Azure portal](https://learn.microsoft.com/en-us/azure/service-health/alerts-activity-log-service-notifications-portal) works in a similar way. You receive an alert when Azure sends a Service Health notification to your subscription, and an action group defines who is notified, by email, text message or app notification. The notification types include service issues, planned maintenance, health advisories and security advisories. The alert can also go to everyone who holds a given role on the subscription, which ties the recipient list to a role instead of a person.

In both cases the provider sends the notice to whoever the business has told it to, and no one at the provider knows whether that person still works there. Keeping the list current is the customer's job.

### An offline copy and a tested list are standard advice

The CISA [#StopRansomware Guide](https://www.cisa.gov/stopransomware/ransomware-guide) advises creating, maintaining and regularly exercising an incident response plan and communications plan, including response and notification procedures, and making sure a hard copy and an offline version of the plan are available. The reason is obvious in the Pretoria example: a contact list stored on the system that has failed cannot be used.

| Gap | Effect |
| --- | --- |
| Tree built around the old data centre and hardware | Calls go to suppliers who no longer matter |
| Cloud, managed service and SaaS vendors missing | Nobody knows who to call or how to escalate |
| Provider notices go to a departed person | Advisories and alerts are never seen |
| Authorised support contacts not defined | Priority cases cannot be opened quickly |
| List stored on the affected system | It cannot be read during the outage |
| No test by calling the list | Errors are found only in a real incident |

### What South African law expects when something goes wrong

POPIA adds a notification duty that depends on reaching the right people quickly. The [Protection of Personal Information Act, 4 of 2013](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) requires, in section 19, that a responsible party secure the integrity and confidentiality of personal information through appropriate, reasonable technical and organisational measures, including identifying risks and verifying safeguards regularly. Section 22 says that where there are reasonable grounds to believe that personal information has been accessed or acquired by an unauthorised person, the responsible party must notify the Information Regulator and the affected people as soon as reasonably possible after discovering the compromise.

A recovery tree that cannot reach the person who decides whether a compromise has occurred, or the legal adviser and the information officer who handle notification, makes that duty hard to meet. The tree should name them and say who calls them. Confirm with your information officer how the Act applies to your own incident response.

## Why this becomes urgent

A cloud migration is the usual trigger. Until then, the contact list could survive for years with small errors, because the team knew who to call and the old environment was stable. A migration breaks that comfort. The things the list describes have changed, and the people who knew the new arrangement are the migration team, who have left.

The first sign is often a smaller event than an outage. A provider emails a maintenance notice that nobody reads. A support case needs an authorised contact, and nobody is authorised. A vendor calls the old number. Each is a warning that the tree has drifted.

If the first real test of the list is a major incident, the cost of every error is paid in downtime.

## Economic consequence

The cost of an outdated tree appears at the worst moment:

- **Extended downtime.** The first part of the outage is spent finding the person who can act, and every call that reaches the wrong person adds minutes or hours.
- **Revenue interruption.** Orders, billing and production stop while contact is being made, and the business pays for the delay in lost sales and idle staff.
- **Recovery uncertainty.** The business cannot say how long recovery will take, because part of it depends on reaching people whose availability is unknown.
- **Customer harm.** Customers who depend on the service wait without information because nobody can authorise or send a message.
- **Missed warnings.** Advisories and alerts from the provider go unseen, so problems that could have been avoided or prepared for become incidents.
- **Delayed notification.** Where personal information is affected, the time taken to reach the information officer and legal adviser delays the decision on notifying the Regulator and the people affected.

As an illustrative example only, suppose it takes ninety minutes to find the person authorised to open a priority case with the cloud provider, because the entry names a former employee and the managed service provider's escalation route is not listed. Ninety minutes at the start of an outage can be a large share of the whole recovery time. The figures are invented, but the effect is common: the time lost to finding people is often longer than the technical fix.

## Root cause

The root cause is that the recovery tree was built for the old environment, and migration projects do not include updating it as a task with an owner. The list belongs to continuity or service management, the migration belongs to a project team, and the point where one affects the other is not on anyone's checklist.

A second cause is that provider-side contacts are set once and never reviewed. The person who created the account entered themselves or their consultant, and nobody was asked to replace them with a shared role list. The same is true of the vendors added during the project.

A third cause is that the list is not tested. A document that is read by its owner looks accurate. The errors only appear when someone calls the number, and the first time anyone does is usually during an incident.

## Practical intervention

### Practical next actions

1. **List the estate as it is now.** Write down every cloud account and subscription, the managed service provider, software-as-a-service vendors, the domain registrar, the identity provider, the network provider and the payment and banking connections. Use the migration records and finance data to find what is missing.
2. **Record the support route for each.** For every item, note the vendor's support number or portal, the severity levels and how to escalate, the support plan you hold, the account or customer reference, and who in your business is authorised to contact the vendor. Do not store passwords or secrets in the list.
3. **Fix the provider-side contacts.** For each cloud account, set the operations, security and billing contacts to monitored shared mailboxes and add a reliable phone number, as the AWS guidance recommends. For Azure, set Service Health alerts to an action group that reaches the right people by email and text, or to the role holders on the subscription. Check newly created accounts and subscriptions as well.
4. **Build the internal tree by role.** List the people to call by role, with a named deputy, a mobile number, an alternative way of contact and the time zone or shift. Put incident leads, the information officer, the legal adviser, communications and the executive sponsor in it, and say who calls whom and in what order.
5. **Decide who authorises outside notification.** Name the person who decides whether a compromise has occurred, the person who contacts the Information Regulator and affected people, and the person who speaks to customers, so that the decision does not wait for a search.
6. **Keep a copy outside the affected systems.** Hold a printed copy in a known place and an offline digital copy that does not depend on your own network, email or file server, as CISA advises for response plans. Make sure the people who need it know where it is.
7. **Test it by calling.** Once a quarter, call each role on the tree, record who answered, how long it took and what was wrong, such as a wrong number, a departed person or a vendor desk that no longer exists. Fix the errors and repeat the test.
8. **Tie updates to events.** Add the tree to the migration closure checklist, to the starter, mover and leaver process, to vendor onboarding and offboarding, and to the review of any contract change. Every entry carries the date it was last verified and the name of the person who verified it.
9. **Flag stale entries.** Treat an entry that has not been verified within an agreed period as unreliable, and report it to the owner of the tree.

## Diagnostic questions

- If our cloud provider needed to reach us tonight about a security issue, where would the message go, and who reads it?
- Who in our business is authorised to open a priority support case with each of our main providers?
- When was each entry on our recovery contact list last checked by phone or in person?
- Where is the list kept if our email, file server and directory are down?
- Does the list name the people who decide on and carry out notification of the Information Regulator and affected people?
- Does our migration closure checklist include updating the contact tree?

## What good looks like

The tree reflects the cloud estate as it is. Provider-side contacts point to monitored shared mailboxes and phones, not to individuals. Each role has a deputy and each entry shows a verification date. A printed and an offline copy exist outside the systems that could fail. The tree is tested by calling it every quarter, and the errors found are fixed. Migration projects, vendor changes and staff changes update it as a standard step.

You can measure the result. The time to reach every role on the tree during a test falls and stays within a target the business sets. The number of wrong or dead entries found in each test falls towards zero. Provider notices are read by someone who can act. When an incident happens, the first hour goes on diagnosis and decisions, not on finding people.

## Where Mellorca fits

If you are not sure who your cloud providers and vendors would contact today, a [digital systems audit](/services/digital-systems-audit/) can list your accounts, vendors and support routes, check the contacts registered on each and show where notices go. To set up the testing, the review triggers and the ownership that keep the tree current, [digital operations improvement](/services/digital-operations-improvement/) can design the practice with your continuity, IT and project teams and help it become routine.

## Method note

This article draws on Amazon's guidance on account contact information, Microsoft's documentation on Azure Service Health alerts, the CISA #StopRansomware Guide and the text of the Protection of Personal Information Act. The scenario, the call counts and the delays are illustrative and not measured. The article does not claim that any cloud provider or product is required to fix the problem or that any provider behaves the same way in your environment, so check the documentation for the services you use. It is general information and not legal advice: confirm your obligations under sections 19 and 22 of the Protection of Personal Information Act with your information officer or legal adviser.
