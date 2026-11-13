---
hub: patterns
record_id: PAT-108
slug: the-real-price-of-capturing-a-prospect-in-two-places
title: The cost of entering the same prospect information twice
description: Typing a prospect's details into one tool, then again when the deal closes, costs more than minutes. It brings errors, delay and lost momentum.
lead: A prospect's details are typed into one tool at first contact and again into another when the deal closes. The cost is more than minutes: it is errors, delay and lost momentum.
category: Sales, Lead & Client Operations
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Sales, Lead & Client Operations
pattern_family: Sales, Lead & Client Operations
observable_condition: A prospect's details are typed into a sales tool at first contact and again into accounting or operations tools when the deal closes, causing delay and mismatched records.
primary_identification: Duplicated prospect capture: sales and finance tools have no defined conversion step or field ownership, so details are re-keyed at the point where accuracy matters most.
commercial_value_dimensions: Speed to revenue, data accuracy, administrative capacity and client first impression
sources:
  - What Is Customer Relationship Management (CRM)? - IBM | https://www.ibm.com/think/topics/crm
  - What Is Data Quality? - IBM | https://www.ibm.com/think/topics/data-quality
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
related:
  - The hidden cost of re-keying order information | /patterns/the-hidden-cost-of-re-keying-order-information/
  - The hidden cost of asking customers for the same information twice | /patterns/the-hidden-cost-of-asking-customers-for-the-same-information-twice/
  - Why new clients wait while internal teams coordinate | /patterns/why-new-clients-wait-while-internal-teams-coordinate/
  - How to reduce re-entry of the same information across systems | /insights/how-to-stop-the-same-information-being-typed-into-several-systems/
summary: A prospect's details are typed into one tool at first contact and again into another when the deal closes. The cost is more than minutes: it is errors, delay and lost momentum.
layout: plain
---
## Observable condition

A prospect enquires through the website or at a trade show. A salesperson captures their name, company, phone number and requirement in a lead sheet or in the CRM. A few weeks later the prospect accepts a quote, and an administrator opens the accounting package or the client-management tool and types the same details again, adding the company registration number, the billing address and the VAT number. When the project team starts, they ask the client to confirm their details a third time.

Each of these steps seems reasonable on its own. Together they mean the same prospect has been typed into the business more than once, by different people, with different spellings.

An illustrative example: a Sandton recruitment agency wins a new corporate client. The consultant has the contact in the CRM. Finance needs a client account, which means a form. The compliance officer needs the same details for a service agreement. By the time the first placement is made, three records exist for one client, and two of them disagree about the billing contact.

## Realisation

The realisation is that the second entry is not the same job as the first. At first contact, the details are captured quickly and loosely, because the lead may go nowhere. At the point of becoming a customer, the details must be exact: legal name, billing address, tax references, authorised signatory. When the two stages are not connected, the business asks someone to re-create the record from scratch at the moment accuracy matters most.

That timing is what makes this pattern costly. The re-entry happens under pressure, at the point where the customer is waiting to start, and by someone who did not take the original conversation. Questions go back to the salesperson, who has moved on to another prospect, and the customer is asked for details they already supplied.

**Realisation prompt:** take the last customer you won. How many times were their basic details typed into your business, by how many people, between first enquiry and first invoice?

## Identification

This is a pattern of duplicated prospect capture. The visible symptom is delay and small mistakes between sale and start. The common assumption is that administration is slow or that the customer provided incomplete information. The structural cause is that the sales tool and the operational or financial tool are separate, with no defined way to promote a prospect record into a customer record.

The general case is covered in [the hidden cost of re-entering the same information](/patterns/the-hidden-cost-of-reentering-the-same-information/). This Pattern focuses on the specific moment when a prospect becomes a customer and why that moment is so vulnerable. The related Impact note [duplication of customer data entry](/impact/pain-duplication-of-customer-data-entry/) describes the staff-time effect.

## Diagnosis

- **Two systems, two purposes, no bridge.** The [CRM](https://www.ibm.com/think/topics/crm), which IBM describes as a group of connected technologies for recording, tracking and managing relationships with current and prospective customers, is built for pursuing deals; the accounting or operations tool is built for serving and billing customers. Without a connection, the details travel by hand.
- **Lead capture is deliberately light.** Sales tools favour speed and ask for few fields. Operations needs many more. The gap is filled at conversion by whoever has time.
- **Required fields are not collected early.** Nobody asks for the company registration or tax number during the sales conversation, because it feels premature. It is then chased after the customer has said yes.
- **Prospects exist in unofficial places.** Business cards, spreadsheets, a shared mailbox and WhatsApp threads hold the first capture, and the CRM entry is a retyped version of that.
- **No duplicate check on entry.** The second tool does not check whether the person or company already exists, so repeat enquiries create parallel records. The Pattern [when duplicate records start causing operational problems](/patterns/when-duplicate-records-start-causing-operational-problems/) follows this through.
- **Ownership is split.** Sales owns the prospect, finance owns the customer. Nobody is accountable for the transition between the two.

## Commercial impact

The commercial value at stake is speed to revenue, data accuracy, administrative capacity and the client's first impression.

The most obvious cost is delay. If a new customer cannot be set up until a form is completed and verified, the first order, project start or invoice waits. The Pattern [the cost of delayed handoffs after a deal is won](/patterns/the-cost-of-delayed-handoffs-after-a-deal-is-won/) describes the revenue timing effect, which is often measured in days, not minutes.

The second cost is error. Retyped details drift. A transposed digit in a bank account number or a misspelt company name leads to a rejected payment, a returned invoice or a contract in the wrong entity's name. Correcting these costs more than the original typing. [IBM's overview of data quality](https://www.ibm.com/think/topics/data-quality) lists accuracy, consistency and uniqueness among the dimensions on which data should be judged. Where personal information is involved, the POPIA principle of [information quality in section 16](https://popia.co.za/section-16-quality-of-information/) expects a responsible party to take reasonably practicable steps to ensure that personal information is complete, accurate and not misleading, and parallel copies make that harder to demonstrate.

The third cost is experience. The customer who has just signed is asked again for their address, their contact person and their purchase order process. It signals that the business's left hand does not know what the right hand has been told, and it happens at precisely the point when the relationship is most receptive.

The fourth cost is sales time. The Pattern [why salespeople spend time updating systems instead of selling](/patterns/why-salespeople-spend-time-updating-systems-instead-of-selling/) shows how often sales staff are drawn back to answer admin questions about deals they thought were finished.

## Common misidentification

A frequent response is to insist that salespeople fill in every field up front. This slows down lead capture and leads to made-up values, because the information is not yet available. Another is to hire an administrator for onboarding. That makes the re-entry faster but leaves the duplication in place.

A third is to treat the CRM as the master and the accounting tool as a copy that finance maintains separately. Without a defined rule on which system wins for each field, the two simply diverge more slowly.

## Possibility

In a better state, a prospect is captured once. The light details collected at first contact remain on the record. When the deal is won, a defined step converts it into a customer by adding the fields operations needs, either by the customer completing a short digital form or by the salesperson answering a short checklist, and the record flows to the finance and delivery tools without retyping. The customer sees one confirmation, not three requests.

The record also remembers its history: who the contact was, what was promised and which quote was accepted.

## Intervention

1. **Map the journey of one record.** Follow a recent customer from first enquiry to first invoice and mark each place their details were typed.
2. **Split fields into "needed to sell" and "needed to serve".** The first set is captured at enquiry. The second set is collected at acceptance.
3. **Collect service details with the quote.** Include a short digital onboarding form with the acceptance, so the customer provides billing details once, directly.
4. **Decide which system owns each field.** Write down that the CRM owns contact names and the accounting package owns bank and tax details, and why.
5. **Connect the tools.** Many CRMs and accounting packages offer native integrations or connectors that create the customer record when a deal is marked won. The Salesforce and Microsoft Dynamics documentation both describe such conversion of leads into accounts and contacts.
6. **Check for duplicates on entry.** Search for existing names, emails and company numbers before creating anything new.

## Diagnostic questions

- How many times is a new customer's name and address typed between enquiry and first invoice?
- Who is responsible for turning a won deal into a set-up customer?
- Which details do you chase after the customer has said yes, and could you ask for them earlier?
- How often do billing or contract documents go out with an error that began as a typing slip?
- Does anyone check for an existing record before creating a new one?

## Bottom line

Typing a prospect in twice looks like a minor administrative habit, yet it falls at the most sensitive moment in the relationship. A single capture, a clear rule about which tool owns which detail, and a defined step from prospect to customer remove the repetition and give the new client a smoother start.
