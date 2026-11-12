---
hub: patterns
record_id: PAT-133
slug: when-every-new-client-needs-its-own-administrative-process
title: When Every New Client Requires a Custom Administrative Process
description: If each new client is set up differently, growth multiplies admin instead of revenue. Here is how the habit forms, what it costs, and how to build a standard core with room for exceptions.
lead: If each new client is set up differently, growth multiplies admin instead of revenue. Here is how the habit forms, what it costs, and how to build a standard core with room for exceptions.
category: Operations & Process
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Operations & Process
pattern_family: Operations & Process
observable_condition: Each new client is set up with its own forms, folders, invoicing arrangements and reporting routine, so the person doing the set-up works out the steps again every time.
primary_identification: Absent standard core: there is no defined baseline process for client administration, so every client is treated as a special case and the know-how stays with whoever did the last one.
commercial_value_dimensions: Time to first billing, staff capacity, error rate, consistency of service and ability to take on more clients without more admin staff
sources:
  - https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview | https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview
  - https://learn.microsoft.com/en-us/power-automate/get-started-approvals | https://learn.microsoft.com/en-us/power-automate/get-started-approvals
  - https://learn.microsoft.com/en-us/sharepoint/introduction | https://learn.microsoft.com/en-us/sharepoint/introduction
summary: If each new client is set up differently, growth multiplies admin instead of revenue. Here is how the habit forms, what it costs, and how to build a standard core with room for exceptions.
layout: plain
---
## Observable condition

A Pretoria bookkeeping and payroll practice has grown from eight clients to forty in three years. Each new client begins with a welcome call. After that, the account manager creates a folder structure, but not the same one as last time. One client wants invoices on the first of the month, another on the twenty-fifth. One needs a monthly pack sent to a shareholder in London, another a short WhatsApp summary. Banking details are collected by email for some and by a printed form for others.

Nothing here is unreasonable on its own. Together, it means that each new client demands a fresh round of thinking, drafting and checking. The senior account manager says, with some pride, that every client is different. The junior staff say they cannot cover for each other because nobody knows how any one client works.

This is an illustrative example, but the pattern appears in agencies, consultancies, logistics firms and many other businesses that serve other businesses.

## Realisation

The realisation is that "every client is different" is partly true and partly a habit. Clients do have genuine differences: their industry, their reporting needs, their people. But a large share of the set-up work is identical in purpose even when it differs in form. Every client needs contact details captured, authority confirmed, documents stored, billing arranged and a first deliverable agreed.

When the form varies, the business pays to redesign it each time. The effort goes into the variation instead of the substance. This is the same dynamic described in [when client onboarding becomes a growth constraint](/patterns/when-client-onboarding-becomes-a-growth-constraint/): each new client adds a proportional amount of set-up work, so growth cannot outrun capacity.

**Realisation prompt:** take the last three clients you set up. List every step in each. Mark the steps that appear in all three. That shared list is your standard core.

## Identification

This is a pattern of an absent standard core. The symptom is that no two clients are administered quite alike. The common assumption is that flexibility is a selling point and standardisation would make the service feel generic. The structural cause is that nobody has defined the baseline, so every difference, large or small, is handled as if it were a major one.

It should not be confused with onboarding that is standard in design but slow in delivery, such as the email chain described in [when client onboarding starts with a chain of emails](/patterns/when-client-onboarding-starts-with-a-chain-of-emails/). In that case the sequence exists but travels inefficiently. Here the sequence itself is missing.

## Diagnosis

- **Know-how is attached to people.** Each account manager has a private way of setting up clients. Colleagues learn it only by being told, which in practice means rarely.
- **Exceptions are agreed too early.** In the enthusiasm of winning the client, special arrangements are promised before anyone checks what the standard offer already covers.
- **Documents have no home.** Without a shared structure, contracts, authorisations and instructions end up in inboxes and personal folders. A shared document platform such as [SharePoint](https://learn.microsoft.com/en-us/sharepoint/introduction) can give each client the same layout, but only when someone has decided what that layout is.
- **Approvals follow the person, not the rule.** Credit approval, fee discounts and special terms are routed to whoever happens to be involved, rather than to a defined approver.
- **Nothing is measured.** Nobody knows how long set-up takes, so the cost of customisation stays invisible.

## Commercial impact

The most direct cost is time to first invoice. Every day spent working out how a client should be set up is a day before billing can begin. Where set-up spans a week or two, that delay repeats for every new client and shows up as cash that arrives later than it could.

The second cost is error. Bespoke processes are rarely documented, so the person following one has only memory to rely on. A missed authority letter or an invoice sent to the wrong contact is likely to appear later as a dispute or a late payment. The effect on cash is discussed in [manual customer onboarding checklists and revenue delay](/impact/manual-customer-onboarding-email-checklists-revenue-delay-cost/).

The third is dependency. When one person holds the know-how for a client, holidays, resignations and sick days become operational risks. Cover is poor and the client notices.

The fourth is the ceiling on growth. If every client requires the same intensity of set-up, adding the fiftieth client takes as much effort as adding the fifth. Revenue rises, but so does the administrative load, and margins flatten.

## Common misidentification

Owners often interpret the symptoms as a hiring problem and add another administrator. That treats the load, not the cause. Others see a software gap and look for a tool that can "handle all our different clients", which risks encoding the variation instead of reducing it.

A third misreading is that standardisation means treating clients identically. It does not. The aim is a common backbone with deliberate, recorded exceptions on top, so that special treatment is a decision rather than an accident.

## Possibility

A standard core makes it possible to hand work between people, train new staff quickly and measure performance. It also frees senior people to spend their effort on the parts of the client relationship that really are unique.

Tools can support the structure once it exists. [Microsoft's description of business process flows](https://learn.microsoft.com/en-us/power-automate/business-process-flows-overview) explains that they guide people through defined stages so that the same steps are followed consistently, and [its guidance on approvals](https://learn.microsoft.com/en-us/power-automate/get-started-approvals) shows how a request can be routed to a named approver and the outcome recorded. These are options to consider, not prerequisites. A written checklist and a shared folder template deliver much of the benefit on their own.

## Intervention

Start with the core, then handle the edge. Define the minimum a client needs to be live, then identify which variations are really needed and which exist out of habit. Many differences, such as invoice dates, can be offered from a short menu of options rather than negotiated individually.

Record exceptions in one place with the reason and the approver. This keeps special terms visible, and over time shows which ones are common enough to be folded into the standard offer.

## Practical next actions

1. **Compare three recent clients.** Lay their set-up steps side by side and mark the steps they share. Use that list as the first version of your standard core.
2. **Create one folder template.** Agree a single structure for contracts, authorisations, correspondence and deliverables, and use it for every new client from now on.
3. **Offer a menu, not a blank page.** Define two or three options for billing dates, reporting formats and communication channels, and present them during the sales conversation.
4. **Name approvers for exceptions.** Decide who may approve a departure from the standard, and require the reason to be written down.
5. **Time the next set-up.** Record how many working days pass from signed agreement to first invoice, and how much staff time it takes.
6. **Review after five clients.** Look at which exceptions recurred and decide whether to adopt them into the standard or decline them in future.

## Diagnostic questions

- Could a colleague set up a new client using only written instructions?
- What share of our set-up steps is the same for every client?
- Who decides when a special arrangement is acceptable, and where is it recorded?
- How many working days pass between signature and first invoice?
- If our most experienced account manager left, which client arrangements would be lost?

## Bottom line

Custom set-up for every client feels like good service, but it often hides a missing baseline. Define the common core, offer a short menu of choices and record exceptions on purpose. Clients still receive attention where it matters, and the business gains steadier cash flow, easier handovers and the ability to grow without adding administrators in step with each new client.
