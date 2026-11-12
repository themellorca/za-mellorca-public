---
hub: patterns
record_id: PAT-209
slug: why-important-information-stays-trapped-in-pdfs-and-email-attachments
title: Why Important Information Is Trapped in PDFs and Attachments
description: Quotes, orders and contracts arrive as PDFs, and the facts inside them reach your systems only when someone retypes them. Here is why, what it costs, and how to loosen the grip.
lead: Quotes, orders and contracts arrive as PDFs, and the facts inside them reach your systems only when someone retypes them. Here is why, what it costs, and how to loosen the grip.
category: Data & Information Flow
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: Data & Information Flow
pattern_family: Data & Information Flow
observable_condition: Orders, quotes, invoices and signed forms arrive as PDFs or email attachments, and staff open each one and retype the figures into a system, or leave the facts in the attachment and search for them later.
primary_identification: Information is captured as a picture of a page instead of as structured data, so every downstream use depends on a person reading and re-keying it.
commercial_value_dimensions: Staff time, error and rework cost, speed of response, cash collection and the ability to report on what the business has committed to
sources:
  - https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/overview | https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/overview
  - https://learn.microsoft.com/en-us/sharepoint/introduction | https://learn.microsoft.com/en-us/sharepoint/introduction
  - https://learn.microsoft.com/en-us/power-automate/overview-cloud | https://learn.microsoft.com/en-us/power-automate/overview-cloud
summary: Quotes, orders and contracts arrive as PDFs, and the facts inside them reach your systems only when someone retypes them. Here is why, what it costs, and how to loosen the grip.
layout: plain
---
## Observable condition

A supplier emails a quote as a PDF. A customer sends a purchase order as a scanned attachment. A contractor returns a signed form photographed on a phone. Each one holds facts the business needs: a price, a quantity, a delivery date, a bank account, an expiry. Each one lands in an inbox.

From there, one of two things happens. Someone opens the file, reads it and types the key facts into the accounting package or the order system. Or nobody does, and the facts stay in the attachment until the day somebody needs them and starts searching through months of email to find the one that mentions the number.

An illustrative example: a Gqeberha building-supplies wholesaler receives about forty customer purchase orders a week, almost all as PDFs. One clerk opens each, reads the lines and keys them into the order system. When she is on leave, orders wait. When she is rushing, a quantity of 120 becomes 12. Nobody notices until the delivery is short.

## Realisation

The realisation is that the business does not hold the information it thinks it holds. It holds *files*. A PDF is built to look right on a page, not to be read by a system, so the price in a quote is no more available to your software than the price on a printed brochure.

That changes how the work should be counted. Retyping is not clerical housekeeping around the real work. It is the step that turns a document into something the business can act on, and until it happens the order, the commitment or the obligation is invisible to everything except the person who opened the email. Microsoft's [overview of Azure Document Intelligence](https://learn.microsoft.com/en-us/azure/ai-services/document-intelligence/overview) describes a service built specifically to pull text, tables and key fields out of documents and into structured form, which tells you how common the underlying problem is: whole products exist to close the gap between the page and the data.

**Realisation prompt:** pick one document type that arrives every day. After it arrives, how many times is its content typed, and where does the first typed copy live?

## Identification

This is a pattern of data captured at the wrong level. The visible symptom is the person who spends their morning opening attachments. The common assumption is that the document is the record and the system is just a convenience. The structural cause is that the facts were never captured as facts. They were captured as an image of a page, and every later use depends on a human converting the image back into data.

It is related to, but different from, [information that reaches your systems only because someone carried it](/patterns/when-information-reaches-your-systems-only-because-someone-carried-it/), which looks at the carrying. This pattern looks at the container that makes carrying necessary.

## Diagnosis

- **The sender controls the format.** Suppliers and customers send what suits them. You cannot ask a hundred counterparties to adopt one layout, so the variety arrives at your door.
- **The inbox is the filing system.** An attachment sitting in a personal mailbox is findable only by the person who received it, and only if they remember the subject line.
- **Retyping is a single point of failure.** One person knows which field on which supplier's quote is the real price. That knowledge is not written anywhere.
- **The system accepts only typed input.** If the accounting or order system has no way to take a document in, retyping is the only route, however many people are doing it.
- **Versions multiply.** A revised quote arrives as a second PDF. The first stays in the inbox, and nothing marks it as superseded.
- **Scanned and photographed pages add a further layer.** Text that is only pixels cannot be searched at all until it is read by a person or by software designed for the job.

## Commercial impact

The commercial value at stake is staff time, accuracy, speed and visibility of commitments.

The first cost is time that scales with volume. Every additional order or invoice adds a fixed amount of opening, reading and typing. As volume grows, the business hires more people to do the typing rather than improving how the facts arrive.

The second is error. A re-keyed figure is a figure that can be keyed wrongly, and mistakes in quantity, price or account number are expensive precisely because they are found late: at delivery, at payment or at audit.

The third is slow response. A customer asks, "Did you receive my order?" and the honest answer is "I will check my inbox". The Pattern [when customers call for records your systems already hold](/patterns/when-customers-call-for-records-your-systems-already-hold/) describes the same exposure from the customer's side.

The fourth is that commitments are hidden. If a supplier quote with a price validity date is never entered anywhere, the business cannot see which offers are about to lapse. Obligations such as contract renewals and certificate expiry dates live in files nobody reads until they pass.

## Common misidentification

The usual response is to hire a data-capture clerk, or to ask the existing clerk to be more careful. That treats the symptom and makes the volume problem permanent. Another is to scan everything into a shared folder and call it digitised, which makes the files easier to store and exactly as hard to use. A third is to buy an extraction tool and point it at every document type at once, which tends to disappoint because the documents were never consistent in the first place.

## Possibility

In a better state, the facts are captured once, as data, close to the moment of arrival. The original document is kept as evidence, attached to a record, but the price, quantity, date and reference are fields in a system that other people and other processes can use.

For some documents, the best fix is upstream: a simple online form or a structured order template that the customer fills in instead of sending a PDF. For others, extraction software can read the common fields and offer them to a person for confirmation, leaving a human check rather than a human keystroke. Microsoft's [SharePoint documentation](https://learn.microsoft.com/en-us/sharepoint/introduction) describes document libraries where files carry columns of searchable information, so that a document can be found by its supplier, date or status rather than by the name someone gave the file. Power Automate's cloud flows, covered in the [cloud flows overview](https://learn.microsoft.com/en-us/power-automate/overview-cloud), can move a newly arrived file to the right place and start the next step. These are options to evaluate once the paperwork itself is understood, not where to begin.

Related reading: [the work your staff do because your systems don't](/patterns/the-work-your-staff-do-because-your-systems-dont/).

## Intervention

Start with a count, not a purchase. A week of tracking usually shows that two or three document types account for most of the retyping.

## Practical next actions

1. **List the document types that arrive as attachments.** For each, note how many arrive in a week, who opens them and which system receives the typed facts.
2. **Pick the one with the highest volume and the most uniform layout.** Start with a document you receive from a few senders, not a hundred.
3. **Define the five fields that matter.** Most documents carry dozens of details, but the process usually depends on a handful, such as reference, date, amount, quantity and counterparty.
4. **Move arrivals out of personal inboxes.** Give each document type one shared intake address or folder so that any authorised person can find the file, and the process does not stop when one person is away.
5. **Offer senders a structured alternative.** A short online form or a fixed template removes the retyping for every sender who uses it.
6. **Trial extraction on a small batch.** Run twenty real documents through a tool, compare the results with the typed versions and count the differences before committing to anything wider.

## Diagnostic questions

- Which three document types does your team open and retype most often?
- If the person who does the retyping were absent for two weeks, what would stop?
- Can anyone find every unpaid supplier quote without searching an inbox?
- How many times has a re-keyed figure caused a short delivery, a wrong payment or a credit note?
- Which of those documents could the sender enter directly, if you gave them a way to?

## Bottom line

A business that receives its facts as pictures of pages pays someone to turn them back into facts, every time, for ever. Capturing the key fields once, near the moment of arrival, and treating the document as evidence rather than as the record, removes most of that work and makes the commitments inside the paperwork visible to the rest of the business.
