---
hub: patterns
record_id: PAT-045
slug: when-information-reaches-your-systems-only-because-someone-carried-it
title: When Information Reaches Your Systems Only Because Someone Carried It
description: An order change is phoned to a rep, sent as a voice note, written on a printout and retyped into two systems. When data has to travel through people to reach a system, each hand-off can change it, and the system records only the final version.
lead: An order change is phoned to a rep, sent as a voice note, written on a printout and retyped into two systems. When data has to travel through people to reach a system, each hand-off can change it, and the system records only the final version.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: Order changes, job details and customer updates reach the business's systems only after being phoned, voice-noted, written down, photographed or forwarded by one or more people, and are then retyped.
primary_identification: Human relay: the system of record does not reach the point where information originates, so people carry and reinterpret data before it is captured.
commercial_value_dimensions: Accuracy, cash flow, capacity, customer experience and compliance
sources:
  - Section 16 Quality of information - POPIA | https://popia.co.za/section-16-quality-of-information/
  - Section 19 Security measures on integrity and confidentiality of personal information - POPIA | https://popia.co.za/section-19-security-measures-on-integrity-and-confidentiality-of-personal-information/
  - Mobile offline for model-driven apps overview - Power Apps | https://learn.microsoft.com/en-us/power-apps/mobile/mobile-offline-overview
  - Document processing model overview - AI Builder | https://learn.microsoft.com/en-us/ai-builder/form-processing-model-overview
related:
  - When Disconnected Systems Let the Business Act on Old Information | /patterns/when-disconnected-systems-let-the-business-act-on-old-information/
  - When the Next Step Waits for Someone to Check Another System | /patterns/when-the-next-step-waits-for-someone-to-check-another-system/
  - When Work Goes Missing in the Gap Between Two Systems | /patterns/when-work-goes-missing-in-the-gap-between-two-systems/
summary: An order change is phoned to a rep, sent as a voice note, written on a printout and retyped into two systems. When data has to travel through people to reach a system, each hand-off can change it, and the system records only the final version.
layout: plain
---
## Observable condition

A customer phones their sales rep to change an order: drop one product, double another, deliver on Thursday instead of Tuesday. The rep, driving between visits, sends a voice note to the internal sales desk. Someone at the desk listens, writes the changes on the printed order and walks it to the person who updates the order system. Later, someone else changes the delivery date in the dispatch schedule. The original call is gone; only the last person's interpretation of the voice note remains.

The same thing happens in other forms. A rep takes a photo of a signed order form and sends it on WhatsApp. A supervisor reads out the day's production figures on a call. A customer's change of address is mentioned to a driver, who tells the dispatcher, who emails accounts. Information exists in one place, a person carries it, and it arrives somewhere else in a slightly different shape.

An illustrative example: a Gqeberha building-supplies wholesaler with around forty staff took most order changes by phone through its reps. Deliveries regularly arrived with the wrong quantities, and invoices were queried. When the owner traced several disputes back, the error usually entered at the point where a spoken or handwritten detail was retyped.

## Realisation

When data travels through people, every hand-off is a translation. A detail is heard, summarised, written down, read and retyped. Each step can drop information, change a number, or substitute an assumption for a fact. None of these steps is visible in the receiving system: it records what was typed, not what was originally said or seen.

This matters for more than efficiency. Section 16 of the Protection of Personal Information Act requires a responsible party to take reasonably practicable steps to ensure that personal information is complete, accurate, not misleading and updated where necessary. Section 19 requires appropriate, reasonable measures to secure its integrity and confidentiality. Customer details carried by phone calls, notepads and personal phones are harder to keep accurate and harder to protect.

Capturing data where it originates is now practical for most businesses. Microsoft documents, for example, that Power Apps can run offline-first on a mobile device, saving changes locally and syncing when a connection returns, which matters for field teams working with patchy coverage. Microsoft's AI Builder document processing can extract information from standard documents such as invoices, so paper does not always have to be retyped.

**Realisation prompt:** for your most common transaction, how many people does a detail pass through between where it happens and where it is recorded?

## Identification

This is a pattern of **human relay**: data that originates in one place reaches the system of record only by being spoken, written, photographed or forwarded by people, with each step able to change or lose it. The visible symptom is recurring small errors and queries that are hard to trace. The common assumption is that the errors come from carelessness. The structural cause is that the system of record does not reach the point where the information is created.

It is related to [information copied from one system to another](/patterns/why-information-has-to-be-copied-from-one-system-to-another/), where the source is already digital. Here, the source is often a conversation, a paper form or a photo, and the person in the middle is not just copying but interpreting. It also connects to the condition where [field teams still phone the office for information](/patterns/why-field-teams-still-phone-the-office-for-information/), which is the same gap seen from the other direction.

## Diagnosis

- **The system stops at the office door.** The job, stock or CRM system is only used at desks, so information created on site, on the road or at the counter has to be carried back.
- **Capture is unstructured.** Phone calls, notes and chat messages have no required fields, so details are missed and nobody notices until they are needed.
- **The original is not kept.** Once the administrator has typed the record, the call or note is discarded, so there is nothing to check against when a query arises.
- **Several systems need the same detail.** One relayed message is retyped into two or three systems, multiplying the chances of a mismatch.
- **Personal devices carry business data.** Photos of signed forms and customer details sit on staff phones and in chat apps, outside the business's access controls.

## Commercial impact

The commercial value at stake is accuracy, cash flow, capacity, customer experience and compliance.

Errors introduced by relay show up as disputed invoices, wrong deliveries, under-billed items and incorrect stock levels. Each dispute delays payment and takes time to investigate, and some under-billing is never recovered. The Impact page on [paper forms captured twice](/impact/paper-forms-captured-twice-double-handling-cost/) explores the cost of this kind of double handling.

Relay also ties up capacity at both ends. Reps and field staff spend time on calls that could be spent with customers, and office staff spend time listening, writing and retyping. As volume grows, the office becomes a bottleneck through which every detail must pass.

Customers notice. When they give a detail once and later find it wrong on an invoice, a delivery note or a follow-up, it suggests the business is not listening. And where the information is personal, inaccuracy and uncontrolled copies create avoidable compliance risk.

## Common misidentification

The usual response is to ask people to be more careful, or to add a checking step in the office. Checking catches some errors, but adds another person to the relay.

Another response is to give field staff access to the full office system on a phone. Desktop systems squeezed onto a small screen are often harder to use than a phone call, so staff revert to calling.

A third is to assume the problem is connectivity. Patchy signal is real, but offline-capable apps mean it no longer has to prevent capture at source.

## Possibility

In a better state, information is captured once, in structured form, by the person who sees it happen. A rep amends the order directly in a mobile order screen, and the order and dispatch systems update together. A technician completes a short mobile job form with hours, parts and photos, and stock reduces automatically. The office reviews exceptions rather than retyping routine details. Where paper still arrives, it is scanned and its key fields extracted, with a person checking only uncertain results.

For the wholesaler, the change was a simple mobile order-amendment screen for reps, with required fields for product, quantity and delivery date, feeding the order and dispatch systems at once. The sales desk's role shifted from retyping to reviewing unusual changes.

## Intervention

1. **Trace the relay chains.** For your most common transactions, map how information travels from where it originates to where it is recorded, and count the people in between.
2. **Identify where errors enter.** Review a sample of disputes, corrections and queries and note the step where the wrong detail appeared.
3. **Capture at source.** Give the person who sees the event a short, structured way to record it, designed for the device and conditions they work in.
4. **Record once, use everywhere.** Make the captured record feed the other systems that need it rather than being retyped. The Insight on [how manual data transfer becomes a bottleneck](/insights/how-manual-data-transfer-becomes-an-operational-bottleneck/) covers why this matters as volume grows.
5. **Keep the original.** Store photos, signatures and forms with the record so queries can be checked against evidence.
6. **Bring personal information into controlled systems.** Replace routine use of personal phones and chat apps for customer data with business tools that have access controls.

## Practical diagnostic questions

- Which details reach your systems by phone call, paper or chat message?
- How many people handle an order change before it reaches the delivery note and invoice?
- When an invoice is disputed, can you see what was originally recorded on site?
- Where is customer information stored on personal devices?
- What would it take for the person who sees an event to record it directly?

## Bottom line

When information must be carried by people to reach a system, every hand-off is a chance to lose or change it, and the system records only the final version. The result is recurring small errors, slow billing and avoidable compliance risk. Capturing data in structured form where it originates, and using that record everywhere it is needed, removes the relay and the errors it creates.
