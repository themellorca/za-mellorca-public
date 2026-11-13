---
hub: patterns
record_id: PAT-210
slug: when-staff-have-to-ask-which-version-is-correct
title: When Staff Have to Ask Which Version Is Correct
description: When the same price list, policy or contract exists in several copies and staff must ask which one to trust, every decision carries a hidden risk. Here is why it happens and how to end it.
lead: When the same price list, policy or contract exists in several copies and staff must ask which one to trust, every decision carries a hidden risk. Here is why it happens and how to end it.
category: Documents, Files & Knowledge Management
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Documents, Files & Knowledge Management
pattern_family: Documents, Files & Knowledge Management
observable_condition: Staff find several copies of the same price list, policy or contract in email, shared folders, personal drives and print, and must ask colleagues which one is current.
primary_identification: Version sprawl: documents are shared as copies rather than links to one owned source, so new versions are added alongside old ones instead of replacing them.
commercial_value_dimensions: Pricing accuracy, compliance exposure, staff time and dispute cost
sources:
  - https://learn.microsoft.com/en-us/sharepoint/document-library-version-history-limits | https://learn.microsoft.com/en-us/sharepoint/document-library-version-history-limits
  - https://learn.microsoft.com/en-us/purview/data-governance-overview | https://learn.microsoft.com/en-us/purview/data-governance-overview
summary: When the same price list, policy or contract exists in several copies and staff must ask which one to trust, every decision carries a hidden risk. Here is why it happens and how to end it.
layout: plain
---
## Observable condition

A new branch manager at a Western Cape building supplies chain needs the current trade discount schedule. She finds four candidates. One is attached to an email from head office in March. One is in a shared folder called Pricing. One is on the desk of the counter supervisor, printed and annotated. One is called Trade Discounts FINAL v3 updated and sits in a colleague's personal drive.

She asks in the managers' group chat which one is correct. Two people reply with different answers. The regional manager says he thinks there was a newer one in June but is not sure where it went.

In the meantime, the counter staff have been quoting from the printed copy for two months.

## Realisation

The realisation is that the question "which version is correct?" is a sign that the business has no single authoritative home for important documents. When a document is updated, the new version is created alongside the old ones instead of replacing them, and nothing marks which one is current.

The cost is not just the time spent asking. It is every decision made from the wrong copy by someone who did not think to ask.

**Realisation prompt:** choose three documents staff use daily, such as a price list, a policy and a standard contract. How many copies of each can you find, and can you say with certainty which is current?

## Identification

This is a pattern of version sprawl. The visible symptom is staff asking which document to use, or worse, not asking. The common assumption is that people should be more careful about filing. The structural cause is that documents are shared by sending copies rather than by pointing to one maintained original, and that nobody owns each document's currency.

It extends [when nobody knows which spreadsheet is the latest](/patterns/when-nobody-knows-which-spreadsheet-is-the-latest/) beyond spreadsheets to policies, price lists, contracts and procedures. It also relates to [why staff rebuild documents instead of finding the original](/patterns/why-staff-rebuild-documents-instead-of-finding-the-original/).

## Diagnosis

- **Sharing by attachment.** Every email attachment creates a new copy that can be saved, edited and forwarded independently.
- **Versions in file names.** "FINAL", "v3" and "updated" in file names show that version control is being done by hand.
- **No document owner.** Nobody is responsible for saying when a document has changed and retiring the old version.
- **Printed copies.** Paper versions on desks and walls are never recalled when the original changes.
- **No single home.** Important documents are scattered across email, personal drives and several shared folders.

## Commercial impact

The commercial value at stake is pricing accuracy, compliance, staff time and the cost of disputes.

Pricing errors are the most direct cost. Staff quoting from an old discount schedule either give away margin or overcharge customers, who then dispute invoices.

Compliance risk follows when policies and procedures exist in several versions. Staff following an old health and safety procedure or an old credit policy expose the business to risk it thought it had addressed.

Time is lost searching and asking. Each "which version?" question interrupts at least two people. The Impact note on [conflicting document versions](/impact/conflicting-document-versions-rework-decision-cost/) sets out the rework and decision cost.

Disputes become harder to resolve. When a customer and the business hold different versions of the same terms, establishing which applied takes time and goodwill.

## Common misidentification

One misreading is that staff need better filing discipline. Discipline helps, but as long as documents are shared by copying, copies will multiply.

Another is to create a new shared folder and ask everyone to use it. Without retiring the old copies and changing how documents are shared, the new folder becomes one more location.

A third is to rely on the person who wrote the document to know which version is current. That works until they leave or forget.

## Possibility

The possibility is that each important document has one home, one owner and one current version. Staff share links, not attachments. When the owner updates the document, everyone who follows the link sees the new version automatically. Older versions are kept in the document's history for reference and audit, not as separate files with confusing names.

Document libraries in tools such as SharePoint keep version history for each file, so the latest version is always the one opened and earlier ones can still be recovered. [Microsoft's documentation on version history limits](https://learn.microsoft.com/en-us/sharepoint/document-library-version-history-limits) explains how versions are retained and managed at library and site level, which lets a business decide how much history to keep. That turns version control from a naming habit into a feature of where the document lives.

In that business, the question "which version is correct?" has one answer: the one at the link. The Moment [the half hour lost to finding the right file](/moments/the-half-hour-lost-to-finding-the-right-file/) describes what staff get back.

## Intervention

Start with the documents that cause the most damage when wrong: price lists, discount schedules, standard terms, credit policy and key procedures. List them.

For each, appoint an owner. The owner decides which version is current, moves it to one agreed location and deletes or clearly archives the others.

Change how these documents are shared. From now on, send a link to the single location rather than an attachment. Ask staff to delete local copies and to replace printed copies with a note pointing to the link.

Finally, when an owner updates a document, they announce the change with the link and a one-line summary of what changed.

## Practical next actions

1. List the ten documents that cause the most harm if staff use an outdated version.
2. Assign a named owner to each and record the owner on the document itself.
3. Move the current version of each into one shared location with version history switched on.
4. Archive or delete every other copy, including attachments saved in shared folders.
5. Replace attachments with links whenever these documents are shared internally or with customers.
6. Collect and replace printed copies with a short note pointing to the current link.

## Diagnostic questions

- How many copies of our current price list exist across email, drives and desks?
- Who decides when a key document has changed, and how does everyone else find out?
- When did a customer last dispute a price or term because of an outdated document?
- Do our staff share documents by link or by attachment?

## Bottom line

When staff have to ask which version of a document is correct, the business is relying on copies rather than a single source. Give each important document one home and one owner, share links instead of attachments and let version history do the work that file names cannot. The right version becomes the only one people find.
