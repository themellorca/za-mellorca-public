---
hub: discovery
record_id: DISC-481
slug: supplier-bank-detail-changes-arrive-by-email-and-go-unchecked
title: Supplier bank-detail changes arrive by email and go unchecked
description: Bank-detail changes sent by email are captured without independent checks. Move them to a controlled route, verify with a known contact, require a second approver and hold first payments.
lead: Bank-detail changes sent by email are captured without independent checks. Move them to a controlled route, verify with a known contact, require a second approver and hold first payments.
category: Payments, Expenses & Spend Operations
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Payments, Expenses & Spend Operations
problem_domain: Payments, Expenses & Spend Operations
problem_owner: Accounts payable manager
budget_owner: Financial director or CFO
sources:
  - https://cib.absa.africa/home/insights-and-events/business-email-compromise/ | https://cib.absa.africa/home/insights-and-events/business-email-compromise/
  - https://learn.microsoft.com/en-us/training/modules/configure-manage-vendor-collaboration-dyn365-supply-chain-mgmt/3-configure-vendor-collab | https://learn.microsoft.com/en-us/training/modules/configure-manage-vendor-collaboration-dyn365-supply-chain-mgmt/3-configure-vendor-collab
  - https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf | https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf
summary: Bank-detail changes sent by email are captured without independent checks. Move them to a controlled route, verify with a known contact, require a second approver and hold first payments.
layout: plain
---
Picture the accounts payable team at a Johannesburg wholesaler in the last week of the month. An email arrives that appears to come from the credit controller at a long-standing supplier. It says that, because of a routine audit requirement, the supplier's bank account has changed, and it attaches a signed letter on the supplier's letterhead. It asks the team not to phone to confirm, because the supplier's accounts staff are overwhelmed this week. The clerk is behind on a payment run and the letter looks right, so she updates the supplier's bank details in the payment system.

On Friday the run goes out, including a large invoice for that supplier. Three weeks later the real supplier phones to ask why it has not been paid. The email address the clerk replied to differed from the supplier's real one by a single letter, and nobody noticed. The bank is asked to recall the payment, but the money has already moved on.

The operating condition is plain: supplier bank-detail changes arrive by email and are captured in the payment system without independent verification or a second approver. That matters to the financial director and the CFO because one successful request can send a full invoice to a criminal, and because the business may have to pay the real supplier a second time.

## The problem in plain language

Every supplier you pay has a bank account recorded in your payment system. Payments go to that account because the record says so, and nobody rechecks it each time. The record is therefore the most valuable and most trusted piece of data in the payables process.

Suppliers do change banks, and when they do, they tell their customers. In many businesses the notice arrives by email, addressed to whoever the supplier usually deals with, and ends up with an accounts payable clerk. The clerk's job is to keep the records current, so the clerk updates it.

Criminals know this. The scam, often called business email compromise or a change-of-banking-details fraud, works by sending a believable request that looks like it comes from a supplier. The email may come from an address that is almost identical to the real one, from a spoofed domain, or from a genuine mailbox that the criminals have taken over. The attached letter and invoice look right because the criminals have copied real ones.

Once the record is changed, the system does the rest. Every payment to that supplier now goes to the criminal's account, on schedule, through the same approved process, with the same sign-offs. Nothing about the payment run itself looks unusual.

This is different from [procurement requests that disappear into email](/discovery/why-procurement-requests-disappear-into-email/) and [invoice disputes kept in email while the ledger says overdue](/discovery/why-invoice-disputes-live-in-email-while-the-ledger-says-overdue/). Those are about tracking and visibility. A bank-detail change is a request that carries direct fraud risk, because acting on it redirects money.

## What the buyer is actually trying to solve

Accounts payable managers and finance leaders describe this in practical terms. How do we make sure we are paying the real supplier? What happens if someone gets one of these emails when the team is busy? Who checks the person who changed the record? If a payment goes astray, can we get it back, and who explains it to the board?

The outcome they want is a process in which no bank-detail change takes effect on the strength of an email alone. Changes arrive through a route the business controls, are verified independently with someone the business already knows, are approved by a second person, and are treated with extra care on the first payment to the new account.

## Evidence and system mechanism

### What South African banks and SABRIC advise

South African banks have warned about this scam for years, and their advice is consistent. The South African Banking Risk Information Centre (SABRIC) described the "Business Email Compromise" scam in a 2019 warning, [reported by BusinessTech](https://businesstech.co.za/news/finance/342807/beware-new-email-scam-targeting-south-african-businesses/). It described how criminals use email spoofing to make a payment instruction look as though it comes from the usual authoriser. Its tips included verifying any request to change beneficiary account details by contacting the sender through normal, historically reliable contact details, and having robust policies and procedures with checks and balances, backed by staff awareness.

Absa's corporate banking page on [business email compromise](https://cib.absa.africa/home/insights-and-events/business-email-compromise/) gives similar and more specific guidance. It tells businesses to confirm any emailed change of banking details by contacting the sender on contact details already on record, and not to reply to the email or use the contact details inside it. It also tells them to verify the bank account details with the Account Verification Service (AVS) available to them before making any payments, to examine email address and header information, and to use email security tools that detect spoofed messages.

Taken together, that is a clear specification for a process: use a known contact through a known channel, check the account with the bank, look closely at the sender, and make it hard for spoofed email to reach the team.

### Systems can force a second approver, but only if configured to

Payment and ERP systems can enforce the second person. Microsoft's training material on [configuring vendor collaboration in Dynamics 365](https://learn.microsoft.com/en-us/training/modules/configure-manage-vendor-collaboration-dyn365-supply-chain-mgmt/3-configure-vendor-collab) describes a vendor bank account approval workflow. It explains that you can choose whether approval is required when a bank account record is created and when an existing one is updated, and choose which fields trigger the workflow. It notes that if approval for new records is switched off, users can create or import new bank account records without it.

The point is general: approval is something the business turns on, field by field, and it must cover every route by which a bank account can be changed, including imports. A workflow that covers the screen but not the import leaves a second door open. Other payment systems have comparable controls under different names.

An approval step also checks only what the approver can see. If the approver sees the same email the clerk saw, they are checking the clerk, not the request. The approver needs to see evidence of independent verification.

| Gap | Effect |
| --- | --- |
| Changes accepted from any email | A criminal can redirect payments with one message |
| Verification by replying to the email or using its contact details | The check reaches the criminal, not the supplier |
| One person can change and release | Nobody independent examines the change |
| Approval covers the screen but not imports | A second route bypasses the control |
| No check of the account against the supplier's name | A wrong account is not noticed before the money moves |
| First payment treated like any other | The largest single loss happens before anyone is suspicious |

### What South African law expects of the data

Supplier bank details are business records, but where a supplier is a sole proprietor or a partnership, they can also be personal information. The [Protection of Personal Information Act, 4 of 2013](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) requires, in section 19, that a responsible party secure the integrity and confidentiality of personal information in its possession through appropriate, reasonable technical and organisational measures, which includes identifying foreseeable risks and keeping safeguards up to date.

A process that lets an unverified email change a supplier's bank details is a foreseeable risk to the integrity of that record. Controls that verify and approve every change are practical evidence of reasonable measures. Confirm how the Act applies to your supplier records with your information officer.

## Why this becomes urgent

Invoice volume growth is the usual trigger. A business that pays a few dozen suppliers can spot a strange email because the team knows each supplier and each contact. A business that pays hundreds receives more invoices, more supplier questions and more change requests than the team can verify by hand.

In that situation, every change request competes with a queue of invoices due for payment. The verification step is slow because it needs a phone call, and the pressure is to clear the queue. The more suppliers there are, the more likely it is that nobody on the team knows the person who sent the email, and the less likely that someone notices a one-letter difference in an address.

Criminals also benefit from growth. A bigger supplier list means more targets, and busy month-end periods give them more chances for a hurried approval to go through.

## Economic consequence

The cost of a successful fraud falls in several places:

- **Money paid to criminals.** The invoice amount, often the largest single cost, and sometimes several invoices if the change is not noticed before the next run.
- **Money that cannot be recovered.** Banks may try to recall a payment, but funds moved on quickly are often gone, and there is no guarantee of getting any back.
- **Paying twice.** The real supplier is still owed, and the business usually has to pay again while it pursues the loss.
- **Supplier disputes.** Strained relationships, late-payment complaints, and in some cases suppliers who stop delivering until they are paid.
- **Time.** Staff time spent on investigation, bank enquiries, police reports, insurance claims and explaining the loss to the board and auditors.
- **Checking effort.** Even when no fraud happens, teams spend time chasing and checking changes by hand because the process has no structure.

As an illustrative example only, suppose a fraudulent change redirects a payment of several hundred thousand rand. The business pays the supplier again, absorbs the loss and spends weeks on investigation and claims. The cost of a clear verification process, set against that single event, is small. The figures here are invented, but the shape is accurate: the loss is large, sudden and concentrated, and the controls that prevent it are cheap by comparison.

Suppliers also give criminals another way in. Where [supplier access survives after the work ends](/discovery/why-supplier-access-survives-after-engagements-end/), old accounts and portal logins can be used to submit changes that look legitimate, which is a further reason to control the route by which changes are accepted.

## Root cause

The root cause is that bank-detail changes arrive by email and are captured in the payment system without independent verification or a second approver. The process treats a change request as routine administration, like a change of address, when it is in fact an instruction to redirect money.

A second cause is that the verification, where it exists, depends on the clerk's judgement under time pressure. A rule that says "check if something looks wrong" fails exactly when the fraud is good, because the best forgeries look right.

A third cause is that the same person can often receive the request, change the record and release payments to it, or that the second approver sees nothing but the clerk's work. In those cases the system has the form of a control without the substance.

## Practical intervention

### Practical next actions

1. **Set one controlled route for changes.** Decide how suppliers may request a change: through a supplier portal, a standard form from a named address, or a documented process handled by named staff. Tell all suppliers, and treat a request that arrives any other way as unverified.
2. **Verify independently with a known contact.** For every change, call the supplier on a number already in your records, or from an independent source such as a previous contract or the supplier's own published details, never the number in the request. Speak to a person you have dealt with before, and record who you spoke to and when.
3. **Check the account with the bank.** Use your bank's account verification service, for example the AVS that Absa describes, to confirm the new account exists and belongs to the supplier's registered name before the record is changed.
4. **Require a second approver.** Turn on the approval workflow in your payment or ERP system for both new and changed bank accounts, covering every route including imports. The approver must see the verification evidence, not just the request.
5. **Separate the duties.** The person who receives or captures a change should not be able to approve it or release payments to the changed account.
6. **Hold the first payment to changed details.** Delay the first payment to a new or changed account for a set period, and make a final confirmation call before it is released. Flag large first payments for extra review.
7. **Alert the supplier and keep records.** Notify the supplier at their old known contact that a change was made, keep the evidence for each change and review a sample of changes regularly.
8. **Train the team and secure the mailbox.** Teach staff the warning signs, such as near-identical addresses, urgency and requests not to phone. Use multi-factor authentication and email security tools so that spoofed messages are less likely to arrive.
9. **Plan the response.** Agree in advance what to do if a fraudulent payment is found: whom to call at the bank, who reports to the police and who informs management. Speed matters.

## Diagnostic questions

- If a supplier's bank details changed by email today, who would capture the change and what checks would be done before it took effect?
- Do we always call the supplier on a number from our own records, or sometimes on a number in the email?
- Can one person receive a change request, update the record and release a payment to it?
- Does our approval workflow cover imports and bulk updates as well as changes made on screen?
- Do we check new bank accounts against the supplier's registered name with our bank before paying?
- What do we do with the first payment to a changed account, and who can release it?

## What good looks like

Suppliers know that changes are accepted only through one controlled route. Every change is verified by a call to a known contact, the account is checked with the bank, a second person approves with the evidence in front of them, and the first payment to the new account is held and re-confirmed. A fraudulent email gets no further than the clerk's inbox because there is no path from email to payment.

You can measure the result. Every change in the payment system has a record of who verified it, how, and who approved it. The number of changes processed without verification is zero. Changes to existing accounts and first payments to them are reviewed on a regular schedule. The team spends less time chasing changes by hand because the process tells them what to do.

## Where Mellorca fits

If bank-detail changes currently arrive in shared mailboxes and are keyed in by hand, [business automation and AI workflows](/services/business-automation-ai-workflows/) can move them into a controlled request form with built-in checks, a second approval and an automatic hold on the first payment. To agree who verifies, who approves and how to handle exceptions, [digital operations improvement](/services/digital-operations-improvement/) can design the process with your accounts payable team and put it into daily use.

## Method note

This article draws on a SABRIC warning on business email compromise as reported by BusinessTech, Absa's corporate banking guidance on business email compromise, Microsoft's training material on vendor bank account approval in Dynamics 365, and the text of the Protection of Personal Information Act. The scenario and the amounts are illustrative and not measured. The article does not claim that any product is needed to fix the problem or that it behaves the same way in your environment, so check the documentation for the systems you use. It is general information and not legal advice: confirm your obligations under the Protection of Personal Information Act with your information officer or legal adviser, and speak to your bank about its verification and recall services.
