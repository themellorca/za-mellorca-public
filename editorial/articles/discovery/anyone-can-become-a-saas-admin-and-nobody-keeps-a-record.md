---
hub: discovery
record_id: DISC-345
slug: anyone-can-become-a-saas-admin-and-nobody-keeps-a-record
title: Anyone can become a SaaS admin and nobody keeps a record
description: Admin rights inside SaaS tools are handed out by whoever set them up, outside access reviews. List admins per tool, have the owner approve each, and keep them few and named.
lead: Admin rights inside SaaS tools are handed out by whoever set them up, outside access reviews. List admins per tool, have the owner approve each, and keep them few and named.
category: SaaS & Application Portfolio Management
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: SaaS & Application Portfolio Management
problem_domain: SaaS & Application Portfolio Management
problem_owner: IT security or identity lead
budget_owner: CIO
sources:
  - Best practices for Microsoft Entra roles - Microsoft Entra ID | https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/best-practices
  - Security best practices for administrator accounts - User management - Google Workspace Help | https://support.google.com/a/answer/9011373?hl=en-uk
related:
  - Business capabilities that depend on tools nobody supports | /discovery/business-capabilities-depend-on-tools-with-no-support-owner/
  - Customer data is copied into too many applications to track | /discovery/customer-data-is-copied-into-too-many-applications-to-track/
  - Why application inventories leave out shadow IT and AI tools | /discovery/why-application-inventories-leave-out-shadow-it/
summary: Admin rights inside SaaS tools are handed out by whoever set them up, outside access reviews. List admins per tool, have the owner approve each, and keep them few and named.
layout: plain
---
Picture a Cape Town services firm that has been asked to cut its software spend. The finance team lists the SaaS tools it pays for, and the IT security lead is asked a simple question for each one: who are the administrators? The answers are uncomfortable. The CRM has fourteen admins, the marketing platform nine, the project tool eleven and the e-signature service six. For most of them nobody can say who approved the rights, when, or why.

Some of the explanations are harmless. A project manager who set up the project tool made herself an admin, and so did the three colleagues who helped. Some are not. A marketing contractor was given admin rights on the marketing platform to connect a form tool and kept them after the job ended. A former employee still has an active admin account on the e-signature service, because offboarding removes people from the company directory and that tool keeps its own list of users.

The operating condition is plain: admin roles inside SaaS tools are granted by whoever set the tool up, with no approval and no record, so nobody can say who holds the most powerful rights in the business. That matters to the CIO because those rights can expose data, change configuration and connect other systems, and the business cannot answer an auditor who asks who has them.

## The problem in plain language

A SaaS tool is bought, trialled or signed up for by a team, often with a company credit card and without much involvement from IT. Whoever creates the account becomes its first administrator. That person then invites colleagues and decides, on the spot, who else gets admin rights. Often the reason is convenience: the colleague needs to change a setting, connect an integration or add a user, and making them an admin is quicker than working out which narrower role would do.

None of this goes through the access request process that the business uses for its core systems. There is no ticket, no approval from an owner and no entry in a register. The rights exist only inside the tool, in a settings page that few people look at.

Over time the list grows. People join projects and are made admins. Contractors and agencies are added for a job. Colleagues change roles and keep their rights. Nobody removes anyone, because nobody is responsible for the list and nobody knows it is long.

This is different from [admin access reviewed without knowing the application](/discovery/why-administrator-access-reviews-fail-when-reviewers-cannot-see-the-application/). That problem is about a review that happens but lacks context. This one comes earlier: the rights are handed out without any approval or record, so there is nothing for a review to start from.

## What the buyer is actually trying to solve

IT security leads, identity managers and SaaS owners ask practical questions. Who has admin rights in each of our tools? Who approved them, and why? How many is too many? When someone leaves, how do we know every admin right goes with them? What do we tell an auditor who asks for the list?

The outcome they want is a short, accurate list for every tool: the named admins, the owner who approved each one and the reason. New admin rights need an approved request. Anyone who no longer needs rights loses them on a schedule, not by accident.

## Evidence and system mechanism

### The first person to sign up becomes the administrator

The default behaviour of the tools helps explain why the list starts the way it does. Microsoft's guidance on [best practices for Microsoft Entra roles](https://learn.microsoft.com/en-us/entra/identity/role-based-access-control/best-practices) notes that when a user signs up for a Microsoft cloud service, a Microsoft Entra tenant is created and that user is assigned the Global Administrator role. Many other SaaS products work the same way: the person who creates the account holds the most powerful role until someone changes it.

The same page recommends keeping this role rare. It advises assigning Global Administrator to fewer than five people, because Global Administrators essentially have unrestricted access and it is in the organisation's interest to keep the attack surface low. It also recommends keeping privileged role assignments to fewer than ten, and describes alert cards in the admin centre that flag when those numbers are exceeded.

Those numbers apply to one product, but the principle carries over. Admin rights in any tool should be few, and the system should make it obvious when they are not.

### Named, separate admin accounts make activity traceable

Google makes a complementary point in its guidance on [security best practices for administrator accounts](https://support.google.com/a/answer/9011373?hl=en-uk). It says each administrator should have their own identifiable admin account, because otherwise, if several people share one login, you cannot tell from the audit log which of them did what. It also says an organisation should have more than one super administrator, each a separate individual, that super admins should use a separate non-admin account for daily work, and that routine admin tasks should be delegated to accounts with limited admin roles. It lists monitoring admin activity as a further practice.

Three ideas from this matter for governance. Admins should be named individuals, not shared logins. Powerful roles should be used only when needed. And most admin work can be done with narrower roles than the top one.

| Gap | Effect |
| --- | --- |
| Admin rights granted by the tool's setter-up | The list reflects convenience, not need |
| No approved request or owner sign-off | Nobody can say who authorised an admin or why |
| Shared or generic admin accounts | Audit logs cannot show who made a change |
| Tool keeps its own user list outside the directory | Leavers keep admin rights after offboarding |
| No periodic review of admins | The list only grows |
| Top-level roles used for routine tasks | Mistakes and misuse have the widest possible impact |

### What South African law expects of the safeguards

POPIA puts a legal edge on this. The [Protection of Personal Information Act, 4 of 2013](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) requires, in section 19, that a responsible party secure the integrity and confidentiality of personal information in its possession by taking appropriate, reasonable technical and organisational measures to prevent loss, damage and unauthorised access. It also expects the party to identify foreseeable risks, put safeguards in place, verify them regularly and update them.

Admin roles in a tool that holds customer or staff information are among the most direct ways to reach that information. A business that cannot say who holds them, or who approved them, will struggle to show that its safeguards are reasonable. A record of admins, approvals and reviews is practical evidence. Confirm how the Act applies to your own tools with your information officer.

## Why this becomes urgent

Application rationalisation is the usual trigger. When finance or IT reviews the list of tools to decide which to keep, consolidate or retire, someone has to check who administers each one. The result is often a surprise. The number of people with admin rights is much higher than anyone expected, and nobody can explain why most of them have it.

The same review exposes related problems. Tools turn out to hold their own user lists that are not connected to the company directory. Admins turn out to include people who have left, contractors whose work ended and colleagues who changed roles years ago. What looked like a software cost exercise becomes a security finding.

## Economic consequence

The cost of ungoverned admin rights appears in several ways:

- **Data exposure.** More people with the ability to export data, change sharing settings or create public links, which raises the chance of accidental or deliberate leaks.
- **Unapproved changes.** Configuration changes, new integrations and automations made by admins without review, some of which create security or compliance problems.
- **Audit findings.** An auditor or insurer asks for the list of privileged users and approvals, and the business cannot produce it, which becomes a finding and sometimes a cost.
- **Harder offboarding.** Departing staff and contractors keep access in tools that sit outside the directory, so leaving is not a clean cut.
- **Investigation time.** After an incident, the team spends time working out who could have made a change because the records do not say.
- **Wasted licences.** Admin seats are often paid for at a higher rate, and seats held by people who no longer need them are money spent for nothing.

As an illustrative example only, suppose an audit asks for the list of privileged users across twenty SaaS tools and it takes the security team three weeks to assemble it by logging in to each tool in turn. Three weeks of skilled time is spent on something a maintained register would answer in an afternoon, and the same effort is repeated at every audit and every rationalisation exercise. The numbers are invented, but the repetition is real.

Broad rights are also a problem in themselves, as described in [permissions broader than the task requires](/discovery/agent-permissions-broader-than-task-requires/). An admin role given to someone who only needed to change one setting gives them far more than the job calls for.

## Root cause

The root cause is that admin rights are granted inside each SaaS tool by whoever set it up, outside the normal access request and review process. The business built a process for access to its core systems and never extended it to the tools that teams adopt on their own.

A second cause is that there is no central view. Each tool has its own admin page, its own roles and its own vocabulary. Nobody is asked to bring them together, so nobody sees that the totals are high.

A third cause is that tools sit outside single sign-on. A tool connected to the company directory can have its users and, in many cases, its roles managed from one place. When a tool has local accounts, offboarding and role changes in the directory never reach it, which is the pattern in [single sign-on coverage that lags behind the software in use](/discovery/why-sso-coverage-lags-behind-the-saas-portfolio/). The gap between the tools the business uses and the tools it has connected is where unmanaged admin rights accumulate.

## Practical intervention

### Practical next actions

1. **Inventory the tools and their admins.** List every SaaS tool in use, including those bought by teams on their own, and for each one record the named admins, their roles and when each was granted. Start with tools that hold customer, financial or staff data.
2. **Find the owner of each tool.** Name a business owner who is accountable for how the tool is used and who may approve admin rights. If a tool has no owner, that is a finding.
3. **Require an approved request for admin rights.** Use the same access request process as for core systems. The request states who, which tool, which role, why and for how long, and the tool's owner approves it before the right is granted.
4. **Keep admins few and named.** Set a sensible maximum per tool, give each admin their own identifiable account, avoid shared admin logins and use narrower roles for routine tasks. Apply the principle behind the Microsoft and Google guidance even if your tools differ.
5. **Connect tools to single sign-on.** Where the tool supports it, connect it to your identity system so that users, and where possible roles, are managed from one place and leavers lose access automatically.
6. **Record the approvals.** Keep each request, approval and removal in a register that security, audit and the tool owner can see.
7. **Review admins every quarter.** Send each tool owner their admin list and ask them to confirm or remove each name. Remove rights that are no longer needed, and record the outcome.
8. **Make removal part of offboarding.** Add the register to the offboarding checklist, so that leavers and contractors are checked against every tool's admin list, including tools outside single sign-on.

## Diagnostic questions

- For our five most sensitive SaaS tools, can we list the admins today without logging in to each one?
- Who approved each admin right, and where is that approval recorded?
- Which tools keep their own user list and are not connected to our directory?
- If an admin left the company yesterday, how would we know which tools they could still access?
- Do we have shared or generic admin accounts, and what do the audit logs say about who used them?
- When did a tool owner last confirm that each admin in their tool still needs the role?

## What good looks like

There is a register of SaaS tools, each with a named business owner, a short list of named admins, and a record of who approved each one and when. A new admin right needs an approved request. Admins use their own accounts and narrower roles for routine work. Tools connected to single sign-on lose a leaver's access automatically, and the rest are covered by the offboarding checklist. Owners confirm their admin lists every quarter.

You can measure the result. The number of admins per tool falls and then stays stable. Every admin has an approval on record. The time to answer "who are our privileged users?" falls from weeks to hours. Leavers and contractors no longer appear on any admin list. Audit and insurer questions on privileged access are answered from the register.

## Where Mellorca fits

If you do not know how many admins your tools have, a [digital systems audit](/services/digital-systems-audit/) can list the tools, extract the admin lists, flag the ones with no owner or approval and show which are outside single sign-on. To set up the request, approval and review routine so that it lasts, [digital operations improvement](/services/digital-operations-improvement/) can build it into the way your IT and tool owners already work.

## Method note

This article draws on Microsoft's guidance on Microsoft Entra roles, Google's guidance on administrator account security and the text of the Protection of Personal Information Act. The scenarios, the admin counts and the audit effort are illustrative and not measured. The numeric limits quoted come from Microsoft's guidance for its own product and are not universal rules, and Google's guidance gives no fixed number, so set limits to suit each tool. The article does not claim that any product is needed to fix the problem or that it behaves the same way in your environment. It is general information and not legal advice: confirm your obligations under the Protection of Personal Information Act with your information officer or legal adviser.
