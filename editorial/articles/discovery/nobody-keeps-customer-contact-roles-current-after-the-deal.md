---
hub: discovery
record_id: DISC-213
slug: nobody-keeps-customer-contact-roles-current-after-the-deal
title: Nobody keeps customer contact roles current after the deal
description: Decision makers and billing contacts get recorded to win a deal, then nobody keeps them current. Here is how to prompt reviews from real events and protect renewals.
lead: Decision makers and billing contacts get recorded to win a deal, then nobody keeps them current. Here is how to prompt reviews from real events and protect renewals.
category: Sales Operations & CRM
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Sales Operations & CRM
problem_domain: Sales Operations & CRM
problem_owner: Sales operations lead
budget_owner: Sales director
sources:
  - How are stakeholders and sales team members tracked for opportunities? (Dynamics 365 Sales) | https://learn.microsoft.com/en-us/dynamics365/sales/stakeholders-sales-team-members
  - Email nondelivery reports (NDRs) and SMTP errors in Exchange Online - Exchange | https://learn.microsoft.com/en-us/troubleshoot/exchange/email-delivery/ndr/non-delivery-reports-in-exchange-online
related:
  - Opportunities remain open long after buyers go quiet | /discovery/why-dead-deals-stay-open-in-the-crm-and-distort-the-sales-forecast/
  - Sales cannot see a customer's credit or service problems | /discovery/sales-cannot-see-a-customer-s-credit-or-service-problems/
  - Lead response rules treat a demo request like a download | /discovery/lead-response-rules-treat-a-demo-request-like-a-download/
summary: Decision makers and billing contacts get recorded to win a deal, then nobody keeps them current. Here is how to prompt reviews from real events and protect renewals.
layout: plain
---
Picture a Durban company that sells and services industrial equipment on annual contracts. Two years ago the account manager won a large contract by working with three people at the customer: a plant manager who championed the purchase, a finance manager who approved the budget, and an accounts clerk who received the invoices. All three were captured in the CRM with roles, and the deal closed. Since then the plant manager has been promoted to another site, the finance manager has left, and a new finance head has taken over budgets. Nobody at the supplier knows.

Four months before renewal, the supplier emails the renewal quote to the finance manager named in the CRM. The message bounces, and the bounce goes to a shared mailbox nobody checks. The renewal sits in the forecast as a commit. On the renewal date the account manager phones the plant manager, who no longer runs the equipment, and learns that the new finance head wants to put the contract out to tender. The business spent ten weeks selling to people who no longer decided.

## The problem in plain language

During a sale, a salesperson works hard to find out who matters at the customer. Who will use the product, who controls the money, who can say yes, who is likely to say no, and who will process the paperwork. Many CRMs hold this as contact roles: labels such as decision maker, budget holder, influencer or billing contact, attached to the people involved.

That effort is spent to win the deal. Once the contract is signed, the account moves to a different team or a different phase, and the list of contacts stops being a working tool. Nobody is asked to confirm that the people on it are still in post, still hold the same authority, or still read the email address on file.

People at customers change roles all the time. They are promoted, moved, made redundant or leave for other employers, and their replacements often bring their own preferences. A contact list that was accurate on the signing date drifts a little every month. Within a year or two it can describe an organisation that no longer exists.

This is different from [customer account structures that miss real relationships](/discovery/why-crm-account-hierarchies-miss-how-customers-are-really-connected/), which is about how companies and branches are linked. Here the structure may be right, but the people recorded inside it are out of date.

## What the buyer is actually trying to solve

The sales director and the head of sales operations describe this in practical terms. Why did a renewal we were sure about go out to tender? Why did the invoice go to someone who left months ago? Why does the account manager only discover who really decides when the renewal is already late? Who is responsible for knowing who we deal with at each customer?

The outcome they want is simple. For every customer that matters, the business knows who the real decision maker, budget holder and billing contact are today, when that was last confirmed, and who is responsible for checking. Renewals and expansions should not depend on a contact list that was last updated during the original sale.

## Evidence and system mechanism

### How CRMs store contact roles

In Dynamics 365 Sales, the roles of customer contacts are attached to a particular opportunity. Microsoft's documentation on [how stakeholders and sales team members are tracked for opportunities](https://learn.microsoft.com/en-us/dynamics365/sales/stakeholders-sales-team-members) explains that the Stakeholders subgrid on the opportunity form uses connections to associate contact records with the opportunity, and it lists the out-of-the-box roles: Champion, Decision Maker, End User, Economic Buyer, Influencer and Technical Buyer. Other CRMs use different names, such as opportunity contact roles, but many follow the same idea: a role belongs to the link between a person and a particular deal.

That design has a consequence for what happens after the deal closes. The roles were captured against the original opportunity, which is now closed. When a renewal opportunity is created a year later, it does not automatically inherit a verified set of roles. Either someone copies the old roles across, trusting them without checking, or the renewal starts with no roles at all. In both cases, nothing in the system asks whether the people are still the right ones.

### Bounces are evidence that nobody reads

Systems often hold the first signal that a contact has moved on, but nobody is looking at it. Microsoft's documentation on [non-delivery reports in Exchange Online](https://learn.microsoft.com/en-us/troubleshoot/exchange/email-delivery/ndr/non-delivery-reports-in-exchange-online) explains that when a message cannot be delivered, the sender receives a delivery status notification, also called a bounce message, with an error code. Among the common causes it lists is that the recipient's address does not exist in the destination email system, and it includes a code for "recipient not found". An address that no longer exists is a strong sign that the person may have left the customer.

That event is a trigger waiting to be used. In most businesses the bounce lands in the sender's inbox or a shared mailbox and stays there, instead of becoming a task for the account owner to check who the new contact is.

| Gap | Effect |
| --- | --- |
| Roles captured during the sale only | The list describes the customer as it was at signing |
| No owner for keeping roles current | Nobody is asked to confirm the contacts after the deal |
| Renewal opportunity inherits roles unchecked | Renewal quotes go to people who may no longer decide |
| Bounced emails not routed to the account owner | The first sign that a contact left is missed |
| No record of when a role was last confirmed | Nobody can tell a fresh role from a two-year-old one |

### What South African law expects of the data

South African law adds a data-quality duty. The [Protection of Personal Information Act, 4 of 2013](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) includes a condition on information quality. Section 16 requires a responsible party to take reasonably practicable steps to make sure personal information is complete, accurate, not misleading and updated where necessary.

A CRM that holds names, job titles and email addresses of people at customers is holding personal information about those people. A record that says a person is the decision maker at a company they left a year ago is out of date, and an invoice or contract notice sent to a mailbox that is now used by someone else may put business information in the wrong hands. Keeping contact roles current is therefore a commercial discipline and also a part of handling personal information responsibly. Check the specific rules for your own situation with your information officer.

## Why this becomes urgent

A missed renewal or expansion forecast is the usual trigger. The forecast says the renewal is safe, because the contract is in place and the relationship is good. Then the renewal slips, stalls or goes to tender, and the explanation is the same each time: the person we were talking to is no longer the person who decides.

Renewals are where this shows. A new contract has fresh contacts because the sale just happened. A renewal or an upsell happens one to three years later, long after the contacts were captured and long after people have moved on. The older the account, the more likely the contact roles are wrong, and the larger the contract, the more it costs to find out late.

## Economic consequence

The cost appears in several places, and most of it is hidden inside normal sales activity:

- **Renewals.** Contracts that stall, shrink, go to tender or are lost because the business reached the new decision maker too late.
- **Expansions.** Upsell campaigns aimed at people who no longer have budget or influence, so effort is spent without a path to a buyer. This ties to [upsells that mean rebuilding the customer's deal from scratch](/discovery/why-every-upsell-means-rebuilding-the-customers-deal-from-scratch/), since the work of finding who decides gets repeated each time.
- **Billing.** Invoices, statements and notices sent to people who have left, which delays payment and adds to collections effort.
- **Forecasting.** Renewals and expansions marked as likely because the contract and relationship look healthy, when the people behind them have changed.
- **Time.** Account managers spend days rediscovering who decides, which could have been a few minutes of maintenance along the way.

As an illustrative example only, suppose an account manager spends ten days of effort on a renewal and discovers in the last two weeks that the decision maker has changed. Those days are mostly wasted, the new decision maker is approached late and cold, and the renewal is now a negotiation under pressure with a tender as the alternative. A short check at the right moment would have found the change months earlier.

## Root cause

The root cause is that contact roles such as decision maker, budget holder and billing contact are captured to win the deal, and then nobody owns keeping them current. The CRM stores the roles, but no one's job or process includes checking them after the sale.

A related cause is timing. Most CRM discipline is built around the forecast meeting, so records are touched when a deal is about to be discussed. As [CRM updates made only before forecast meetings](/discovery/why-crm-updates-happen-only-before-forecast-meetings/) shows, the update then reflects what is needed for that meeting and not the real state of the account. Contact roles on a closed deal are rarely part of any meeting, so they are never touched.

A third cause is that nothing prompts a review. Job changes, bounced emails, returned post and unanswered calls all happen as events. Without a rule that turns these events into a task, they pass unnoticed.

## Practical intervention

### Practical next actions

1. **Define the few contact roles that matter after the sale.** Keep the list short, for example decision maker, budget holder, day-to-day user and billing contact. Write one sentence for each saying what it means, so every account owner uses the labels the same way.
2. **Make the account owner responsible for each customer's contact roles.** State in the account owner's role description that keeping these roles current is part of the job, and agree who covers when the owner is away.
3. **Record when each role was last confirmed.** Add a "confirmed on" date to each role. A role confirmed last week and a role confirmed two years ago should look different on the record.
4. **Set a review rhythm.** Ask the account owner to confirm the roles at a regular interval, such as before each renewal conversation and at least once a year for important accounts. Keep the check short: three questions, answered in the CRM.
5. **Trigger reviews from real events.** Create a task for the account owner when an email to a key contact bounces because the address no longer exists, when the customer's billing contact changes, when a contact's job title changes in a source you trust, or when a key contact does not respond to repeated approaches.
6. **Check roles at the start of every renewal or expansion.** When a renewal opportunity is created, require the account owner to confirm the roles or update them before the opportunity can move to the next stage.
7. **Report on role freshness.** Give the sales director a simple view of how many key accounts have confirmed roles within the agreed interval, and review the weakest accounts before the forecast meeting.

## Diagnostic questions

- For our ten largest renewals this year, when was each decision maker last confirmed by a person at our company?
- Who at our company is responsible for keeping contact roles current after a deal closes?
- What happens in our systems when an email to a key contact bounces?
- When a renewal opportunity is created, where do its contact roles come from, and does anyone check them?
- When did we last lose or delay a renewal because the contact had changed, and how early could we have known?
- If a customer's billing contact left today, how long would it take us to find out?

## What good looks like

Each important account has a short list of roles, each with a name and a "confirmed on" date. The account owner reviews them on a schedule and when an event prompts it, such as a bounced email or a change of contact. A renewal opportunity cannot progress until its roles are confirmed. The sales director can see which accounts have stale roles before the forecast meeting.

You can measure the result. Renewal and expansion forecasts stop being surprised by a change of decision maker. Invoices and notices reach the right person. Account managers spend less time rediscovering who decides, and the share of key accounts with recently confirmed roles stays above a level the business sets and reviews.

## Where Mellorca fits

If your systems already record events such as bounced emails but nobody acts on them, [business automation and AI workflows](/services/business-automation-ai-workflows/) can turn those events into tasks for the right account owner, and show the date each role was last confirmed. To agree the review rhythm, the role definitions and who is responsible for each account, [digital operations improvement](/services/digital-operations-improvement/) can build the process into how your sales and customer success teams already work.

## Method note

This article draws on Microsoft's documentation on stakeholders in Dynamics 365 Sales, Microsoft's documentation on non-delivery reports in Exchange Online, and the text of the Protection of Personal Information Act. The scenarios and the effort figures are illustrative and not measured. The article does not claim that any CRM or mail system behaves the same way in your environment, so check the documentation for the systems you use. It is general information and not legal advice: confirm your obligations under the Protection of Personal Information Act with your information officer or legal adviser.
