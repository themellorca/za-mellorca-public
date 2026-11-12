---
hub: impact
record_id: CPS-073
slug: business-data-locked-in-applications-nobody-understands-export-vendor-dependency-risk
title: Business Data Locked in Apps Nobody Understands: The Cost of Vendor Dependency
description: Customer and job records often sit in cloud systems no one has mapped or tested an exit from. See how that dependency becomes a cost and how to reduce it.
lead: Customer and job records often sit in cloud systems no one has mapped or tested an exit from. See how that dependency becomes a cost and how to reduce it.
category: Digital Infrastructure
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Digital Infrastructure
commercial_domain: Digital Infrastructure
primary_pain: Important business data sits in applications nobody fully understands or has tested an export from
primary_cost_mechanism: Risk exposure and switching cost from vendor dependency
sources:
  - How to download your Google data - Google Account Help | https://support.google.com/accounts/answer/3024190
  - Who makes an application to process Special Personal Information? | https://www.inforegulator.org.za/popia/
  - Art. 20 GDPR – Right to data portability - General Data Protection Regulation (GDPR) | https://gdpr-info.eu/art-20-gdpr/
  - Plan - Training | https://learn.microsoft.com/en-us/training/modules/cloud-adoption-framework/3-plan
related:
  - Software That Grew by Accident: The Price of Complexity Nobody Designed | /impact/software-environment-grew-by-accident-complexity-duplication-lost-productivity-cost/
  - Software Bought Without Approval: The Financial and Security Cost of Shadow IT | /impact/software-bought-without-approval-shadow-it-cost/
  - Shared Passwords at Work: The Cost of Losing Accountability and Control | /impact/shared-passwords-lost-accountability-breach-exposure/
summary: Customer and job records often sit in cloud systems no one has mapped or tested an exit from. See how that dependency becomes a cost and how to reduce it.
layout: plain
---
Most businesses can tell you where their stock is kept and who holds the keys. Far fewer can tell you where their customer history is kept, which application holds the master copy of a price list, or what would happen to either if the supplier closed the account tomorrow. The information is in "the system", which was set up years ago by someone who may no longer be around, and which everyone uses without quite understanding how it works.

## The pain: valuable data held in places nobody fully understands

Customer records, quotations, job histories, staff files and financial transactions are among a small business's most valuable assets. Yet they often live in a handful of cloud applications that nobody has mapped. Staff know how to type into them and read reports out of them. Few know what data they hold, how it is structured, who can see it, how to get it out in a usable form, or what the contract says about what happens when the relationship ends.

This is not the same as the [dependency on a single person](/impact/key-person-operational-dependency/), though the two often overlap. It is a dependency on a vendor and on a lack of understanding. Mellorca's guidance on [avoiding vendor-led architecture](/insights/how-to-avoid-vendor-led-architecture/) describes how this develops when a supplier's defaults become the business's design.

## Why it is tolerated

- **It works.** As long as the application is available, the risk is invisible.
- **Cloud feels safe.** The assumption is that a large vendor will look after the data, and that the business has little left to do.
- **Understanding it takes effort.** Mapping fields, exports and permissions is unglamorous work with no immediate payoff.
- **Ownership is unclear.** The system was bought by one department and used by three. No one is assigned to know what is in it.
- **Exit seems unlikely.** Nobody expects to leave, so nobody tests how.

## How the risk shows up in operations

- The business cannot answer "where is the master record for this customer?" without checking two systems.
- Reports are produced by one person who knows which fields to filter.
- Nobody knows whether a full export has ever been taken, or whether it could be read.
- Access is wide, and nobody has reviewed who can download, edit or delete records.
- Integrations exist, but nobody knows what data moves through them.
- Contract terms on data return, retention and termination have never been read.

## What the evidence says about getting data out

Exports are not always as complete or convenient as assumed. Google's help page on downloading account data states that a download does not delete the data from Google's servers, that archives expire after about a week and can only be downloaded a limited number of times, that exports cannot be filtered by date range, and that recent changes and items still being deleted may be missed. Those are reasonable design decisions for a consumer-style tool, but they show why you should test an export before you depend on it.

Data portability is also a recognised principle in privacy law. Article 20 of the EU's General Data Protection Regulation gives individuals the right to receive personal data they have provided to a controller in a structured, commonly used and machine-readable format, in defined circumstances. That law applies in the European Union and not directly in South Africa, but it shows what a good export should look like: structured, common and machine-readable. A system that can only export a PDF report does not meet that standard.

## The legal and compliance dimension

Under South Africa's Protection of Personal Information Act, the Information Regulator explains that any organisation that processes personal information is a responsible party. Its duties include applying reasonable technical and organisational safeguards to protect the integrity and confidentiality of that information, and notifying the Regulator and affected people as soon as reasonably possible after a security compromise. A business that does not know what personal information sits in each application, who can reach it and how it flows to other tools will struggle to meet those duties. Responsibility does not move to the vendor simply because the data is hosted in the vendor's cloud. This article is general information, not legal advice; take advice on your specific position.

## The financial chain

1. **Disruption cost.** If access is lost through a billing dispute, suspension, outage or vendor failure, staff cannot work, invoices are delayed and customers wait.
2. **Switching cost.** Poorly understood data takes longer to map, clean and migrate. Consultants charge for the time it takes to discover what is there.
3. **Negotiating weakness.** A vendor that knows you cannot leave can raise prices with little fear. See [renewals accepted without a value review](/impact/automatic-software-renewals-without-value-review-cost/).
4. **Compliance exposure.** Weak knowledge of where personal data sits raises the chance of an unreported compromise or an unfulfilled request.
5. **Reconstruction cost.** If data is lost or corrupted and there is no usable copy, rebuilding records from emails and paper is slow and incomplete.

## An illustrative scenario

The following example is hypothetical and uses assumed figures. A 15-person South African maintenance contractor keeps all customer and job records in one cloud job-management application. The vendor is acquired and announces the product will be retired with six months' notice.

| Cost element | Assumption |
| --- | --- |
| Discovery and mapping of fields, files and reports | 60 hours at R450 an hour = R27 000 |
| Cleaning and re-importing data | 80 hours at R450 an hour = R36 000 |
| Staff time on parallel running and retraining | 15 people, 6 hours each at R200 an hour = R18 000 |
| Total one-off cost | R81 000 |

If the business had kept a documented data map and a tested export, the discovery cost might have been largely avoided, and the clean-up reduced. The saving is not guaranteed, but the exercise shows where the money goes: mostly into finding out what the business already owned.

## The commercial trigger point

- A vendor announces a price rise, product retirement, acquisition or change of terms.
- The business is considering switching, adding automation or connecting systems.
- A key staff member who understands the system is leaving.
- You receive a data-subject request, an audit query or a security incident.
- You are preparing the business for sale, investment or a larger contract that requires due diligence.

## What better looks like

A business that understands its data does not need to be technical. It can state, for each important application, what data it holds, who owns it, how it is backed up and exported, who has access, and what the contract says about leaving. It decides which system is the master for each kind of record, as discussed in our guide to [deciding which system owns which data](/insights/how-to-decide-which-system-owns-which-data/). It holds a tested copy of critical data that it can read without the vendor's help.

## Practical steps

1. **List the applications that hold business-critical data.** Customers, orders, money, staff and suppliers are the usual starting points.
2. **Assign a data owner to each,** a named person who can answer questions about contents and access.
3. **Write a one-page profile for each system:** what it holds, which fields matter, integrations, backups, export options and who has admin rights. The Microsoft Cloud Adoption Framework planning guidance suggests documenting ownership, business function, criticality, data sensitivity and compliance requirements for each workload, which is a good template even for small businesses.
4. **Take a full export and open it.** Check that it is complete, readable without the vendor's tool and covers attachments and history. Record how long it took and what was missing.
5. **Review access.** Remove accounts that are no longer needed, and restrict who can export or delete. Our article on [uncontrolled system access](/impact/uncontrolled-system-access-financial-risk/) covers this in detail.
6. **Read the contract** for data return on termination, notice periods, retention after cancellation and service-level commitments. Ask the vendor in writing what format a full export takes.
7. **Diarise a yearly repeat** of the export test and the access review.

## The bottom line

Keeping important data inside applications that nobody fully understands is a quiet form of borrowing. The convenience is real today, and the bill arrives when the vendor changes terms, an account is suspended or the business wants to move. Mapping what you hold, assigning owners and proving that you can get the data out is inexpensive compared with discovering the gaps during a crisis. It also gives the business the one thing that makes a supplier relationship healthy: a genuine choice about whether to stay.
