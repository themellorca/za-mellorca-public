---
hub: impact
record_id: CPS-134
slug: employees-clicking-fraudulent-links-weak-security-awareness-phishing-fraud-interruption-cost
title: One Click, Real Rands: What Weak Phishing Awareness Costs a Business
description: When staff cannot recognise a fraudulent link or report one quickly, a single click can mean redirected payments, a taken-over mailbox and days of lost work.
lead: When staff cannot recognise a fraudulent link or report one quickly, a single click can mean redirected payments, a taken-over mailbox and days of lost work.
category: Information Security
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Information Security
commercial_domain: Information Security
primary_pain: Employees clicking fraudulent links because security awareness is weak
primary_cost_mechanism: Redirected payments and fraud loss, business interruption while accounts and devices are recovered, investigation and recovery effort, and regulatory and reputational exposure after personal information is accessed
sources:
  - Phishing scams: how to spot and report them | https://www.ncsc.gov.uk/collection/phishing-scams
  - Recognize and Report Phishing - CISA | https://www.cisa.gov/secure-our-world/recognize-and-report-phishing
  - Get started using Attack simulation training - Microsoft Defender for Office 365 | https://learn.microsoft.com/en-us/defender-office-365/attack-simulation-training-get-started
  - Who makes an application to process Special Personal Information? | https://www.inforegulator.org.za/popia/
related:
  - Guests on the Business Network: The Hidden Cost of Poor Separation | /impact/guest-devices-sharing-network-with-business-systems-poor-network-separation-financial-security-risk/
  - Customer Requests Lost in Shared Inboxes: The Cost of Missed Service Work | /impact/customer-requests-lost-shared-inbox-missed-service-work/
  - Customers Who Cannot See Where Their Request Stands Keep Phoning to Ask | /impact/customers-do-not-know-request-status-inbound-follow-up-and-lost-trust-cost/
summary: When staff cannot recognise a fraudulent link or report one quickly, a single click can mean redirected payments, a taken-over mailbox and days of lost work.
layout: plain
---
## The click that costs more than the invoice

A finance clerk at a Cape Town services firm receives an email that looks like it comes from the managing director. It asks her to open a shared document about "revised supplier banking details". The link opens a page that looks like the company's Microsoft sign-in. She enters her password. Within the hour, the attacker is reading her mailbox, finding real supplier invoices and sending a convincing message to the real supplier with new bank details. Two days later, R380,000 goes to an account that is not the supplier's.

The example is illustrative, but every element is ordinary. The email was not clever. The page was not sophisticated. What made it work was a trusting employee who had never been shown what these messages look like, and had no easy way to check or report one. That is the pain examined in this article: weak security awareness among employees, and the financial and operational cost when someone clicks.

## What phishing actually is

The UK National Cyber Security Centre describes [phishing as criminals using scam emails, text messages or phone calls to trick victims](https://www.ncsc.gov.uk/collection/phishing-scams), often to get them to visit a website that downloads malicious software or steals bank details and other personal information. The US Cybersecurity and Infrastructure Security Agency makes a similar point in its guidance on [recognising and reporting phishing](https://www.cisa.gov/secure-our-world/recognize-and-report-phishing): the message is designed to look familiar, create urgency and prompt an action.

For a business, the usual forms are:

- **Credential theft.** A fake sign-in page captures an email password, which gives the attacker access to mail, files and often other systems.
- **Payment redirection.** A message that appears to come from a supplier or senior manager asks for payment to a new account.
- **Malicious attachments and links.** A document or download that installs software which locks files or steals information.
- **Text and phone variants.** A fake delivery notice, a bank alert or a call from "IT support" asking for a code.

## Where the money goes

The financial cost of a successful phishing attack rarely has one line item. It is made up of several, and many are paid by different people in different months.

### Direct fraud loss

Payments redirected to fraudsters are often not recoverable, or only partly so. Banks may assist if the fraud is reported quickly, which is why speed of reporting matters as much as prevention.

### Business interruption

If a mailbox is taken over, the business has to reset credentials, check what was accessed, warn customers and suppliers and often stop using email for a period. If malware is installed, computers may need to be rebuilt. Staff cost time while no work is being done, and revenue slips with them. A day of lost work for twenty people at an average cost of R600 an hour for eight hours is about R96,000 before any other expense, and attacks seldom end in a day.

### Investigation and recovery

Specialist help to find out what happened, restore systems and confirm that the attacker is out has a price. So does the time of internal staff who answer questions, change passwords and rebuild trust with customers.

### Regulatory exposure and reputation

If personal information was accessed, South African businesses have obligations under the Protection of Personal Information Act to notify the Information Regulator and affected people in defined circumstances. The Information Regulator publishes [guidance on the Act](https://www.inforegulator.org.za/popia/), and a business that has not planned for this will be drafting notices while it is also recovering. The reputational cost of a customer learning that their details or invoices were exposed is harder to quantify but real.

## Why awareness stays weak

Nearly every business has a phishing risk and nearly every business knows it. Awareness stays weak not through negligence but through habit.

- **Training is one-off.** A presentation at induction fades within weeks, and new scams look different from the ones shown.
- **Reporting feels risky.** If staff expect to be blamed for clicking, they stay silent, and the attacker gets more time.
- **There is no easy way to report.** If someone has to look up an address and write an email to IT, most will simply delete the message and move on.
- **Security tools are assumed to cover it.** A mail filter helps, but no filter stops everything, and a belief that "IT blocks that" makes people less careful. This overlaps with the point in [security products without basic controls](/impact/security-products-without-basic-controls/).
- **Too many demands.** Staff already struggle to learn every application, as described in [software overload and training cost](/impact/software-overload-staff-cannot-learn-every-application-training-productivity-cost/), and security training competes with everything else.

## Awareness works best with limits on damage

No amount of training will bring the click rate to zero. A well-run programme assumes that someone will eventually click, and limits what that click can do.

That means limiting access. If every employee can reach every file and every system, one stolen password exposes everything. The risk is examined in [employees with more system access than the job requires](/impact/employees-more-system-access-than-job-requires-excess-permissions-cost/). It also means making sure that a few critical actions, such as changing supplier bank details or approving large payments, cannot be completed on the strength of one email. A call-back to a known number, or a second approver, turns a convincing message into a failed attempt.

Simulation tools can help measure and train. Vendor documentation for [attack simulation training](https://learn.microsoft.com/en-us/defender-office-365/attack-simulation-training-get-started) in Microsoft Defender for Office 365 describes running realistic simulated attacks to find vulnerable users before a real one occurs. These tools have licence requirements, so a smaller business may do something simpler: send a few clearly flagged test messages, discuss the results openly and reward people who report.

## Practical next actions

1. **Run a 30-minute session on the three most likely messages.** Use real examples from your own inbox: a fake sign-in request, a supplier bank-change request and an urgent message from "the boss".
2. **Create one-click reporting.** Add a report button to the mail client or set up a single shared address everyone knows, and thank the first person who uses it.
3. **Require a second check on payment changes.** Any change of bank details must be confirmed by calling a number already on file, never one given in the message.
4. **Turn on multi-factor sign-in for email.** A stolen password alone then no longer opens the mailbox.
5. **Agree a no-blame rule in writing.** State that reporting a mistaken click quickly is expected and valued, and that hiding it is the real problem.
6. **Repeat short refreshers every quarter.** Ten minutes with one new example is more effective than one long annual session, and it keeps the habit alive.

The target is a team that notices, reports within minutes and works inside controls that make one mistake survivable. That is a modest and affordable aim, and it costs far less than the first redirected payment.
