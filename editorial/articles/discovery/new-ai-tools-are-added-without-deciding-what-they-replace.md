---
hub: discovery
record_id: DISC-350
slug: new-ai-tools-are-added-without-deciding-what-they-replace
title: New AI tools are added without deciding what they replace
description: AI tools are approved as additions, so the older tools they were meant to replace keep running. Make every request name what it replaces, set a retirement date and track overlap.
lead: AI tools are approved as additions, so the older tools they were meant to replace keep running. Make every request name what it replaces, set a retirement date and track overlap.
category: SaaS & Application Portfolio Management
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: SaaS & Application Portfolio Management
problem_domain: SaaS & Application Portfolio Management
problem_owner: Head of IT or application portfolio lead
budget_owner: CIO or CFO
sources:
  - https://learn.microsoft.com/en-us/purview/deploymentmodels/depmod-data-leak-shadow-ai-step1 | https://learn.microsoft.com/en-us/purview/deploymentmodels/depmod-data-leak-shadow-ai-step1
  - https://learn.microsoft.com/en-us/security/security-for-ai/discover | https://learn.microsoft.com/en-us/security/security-for-ai/discover
  - https://cms.law/en/zaf/legal-updates/Managing-cross-border-data-transfers | https://cms.law/en/zaf/legal-updates/Managing-cross-border-data-transfers
summary: AI tools are approved as additions, so the older tools they were meant to replace keep running. Make every request name what it replaces, set a retirement date and track overlap.
layout: plain
---
Picture a Sandton professional-services firm that has been asked to rationalise its application list ahead of the budget round. The IT team lays out what is running and finds a pattern. An AI meeting-notes assistant sits alongside the transcription service it was bought to replace. An AI proposal writer sits alongside the template library that proposals used to come from. An AI helpdesk assistant sits alongside the knowledge-base tool and the chat widget it was meant to make redundant.

Each tool was approved on its own merits, usually as a pilot with a clear business case, and each pilot succeeded. Nobody was asked what the new tool would replace, so none of the older tools was retired. Staff use whichever they happen to open first. Meeting notes now sit in two places, proposals draw on two sets of content, and every tool has its own integration, its own licence and its own security review.

The operating condition is plain: AI tools are added to the application portfolio without a decision about which existing tools they replace, so the business pays for both. That matters to the CIO and the CFO because the savings promised in each business case never arrive, and because every overlapping tool adds data, access and compliance work that the old arrangement did not have.

## The problem in plain language

When a business wants a new tool, it follows an approval route. Someone writes a case: what the tool does, what it costs, what benefit it will bring. If the case is good, the tool is approved, bought and set up.

For AI tools the case often includes a claim that the tool will replace something. The meeting assistant will save people from using the old transcription service. The proposal writer will end the need for the template library. The helpdesk assistant will take pressure off the knowledge base. These claims are made in the business case, and they are believed.

Then the approval is given for the new tool, and the matter is closed. The claim about replacement was part of the justification, not part of the decision. Nobody writes down which tool is to be retired, who will retire it or by when. The older tool stays in place, because switching it off needs work, a data migration, a conversation with its users and a notice period, and none of that was planned or funded.

So the two tools run side by side. Some people move across, some do not. The old tool's licence renews automatically. The new tool's licence starts. Over a year, the portfolio grows by one tool and shrinks by none.

This is different from [AI add-ons that push software spend past budget](/discovery/ai-add-ons-push-software-spend-beyond-the-approved-budget/), which concerns the price of AI features added to products the business already owns. This article is about separate AI tools bought as new products, where the old product is meant to go.

## What the buyer is actually trying to solve

CIOs, IT and procurement leads and application owners put this in practical terms. Why are we paying for two tools that do the same job? Which of them are people actually using? Which one holds the right data? How do we stop it happening with the next AI tool? What did we approve, and what did we get?

The outcome they want is a portfolio that shrinks or stays flat when a replacement tool arrives. Every approved tool has a record of what it displaces, an owner for that replacement, a retirement date and a check that it happened. Where nothing is displaced, the business knows that and has agreed to the extra cost.

## Evidence and system mechanism

### Tools can tell you what is in use, but not what replaces what

Discovery tooling can show which AI tools are in use. Microsoft's guidance on [discovering AI apps with Defender for Cloud Apps](https://learn.microsoft.com/en-us/purview/deploymentmodels/depmod-data-leak-shadow-ai-step1) describes filtering the cloud app catalog by the Generative AI category to identify AI apps in use, reviewing the risk score and usage details of each, and tagging each as Sanctioned or Unsanctioned according to organisational policy. It notes that the first step focuses on discovery and monitoring before any blocking action is taken. Microsoft's page on [discovering AI apps and data](https://learn.microsoft.com/en-us/security/security-for-ai/discover) says the catalog now includes more than a thousand generative AI related apps, which gives a sense of how many tools staff can reach.

Those records answer the question "is this tool allowed, how risky is it and who uses it?" They do not answer "what is this tool supposed to replace?" A sanctioned tag says the business has accepted a tool. It does not say that another tool has to go. That information has to be captured when the tool is approved, in whatever register the business keeps.

The same applies to licence and spend data. A finance system can show two subscriptions in the same category, but it cannot tell whether that is intentional overlap or an unfinished replacement. Only a recorded decision can.

| Gap | Effect |
| --- | --- |
| Approval says nothing about replacement | The old tool is never scheduled for retirement |
| No named owner for the replaced tool | Nobody is responsible for moving users and data |
| No retirement date | The old licence renews by default |
| Overlap not tracked in the application register | Duplicates are found only in the next review |
| Staff are not told which tool to use | Both tools get used, and data splits |
| Security and privacy review covers only the new tool | The old tool's data and access are left unmanaged |

### What South African law expects when AI tools process personal information

Most AI tools are run by vendors outside South Africa, and many handle personal information, so a South African business has to consider POPIA's rule on cross-border transfers. The [Protection of Personal Information Act, 4 of 2013](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) says in section 72 that a responsible party in South Africa may not transfer personal information about a data subject to a third party in a foreign country unless one of the listed grounds applies. The main ones are that the recipient is subject to a law, binding corporate rules or a binding agreement providing an adequate level of protection, including provisions on further transfer, or that the data subject consents to the transfer. The section lists a few further grounds, such as transfers needed to perform a contract.

A CMS South Africa note on [managing cross-border data transfers](https://cms.law/en/zaf/legal-updates/Managing-cross-border-data-transfers), published in July 2022, observed that the Information Regulator had not given criteria for judging adequacy or published a list of jurisdictions regarded as adequate. Check the current position with your information officer, since guidance may have changed since.

For the portfolio, the consequence is simple. Every AI tool that sends personal information to a vendor abroad needs its own section 72 basis, normally a binding agreement. Two overlapping tools mean two transfers to assess and two contracts to maintain. A retirement plan for the replaced tool should also cover what happens to the personal information it holds.

## Why this becomes urgent

Application rationalisation is the usual trigger. Finance or IT is asked to reduce the number of tools or the software bill, and a review of what is running reveals the overlap. The AI tools that were supposed to replace older ones are found running beside them.

The finding is awkward for everyone. The business cases promised savings, and they have not appeared. The owners of the new tools say adoption is good and the owners of the old tools say their users still need them. Neither side can show that the other has been displaced, because nobody agreed what displacement would look like.

The problem also grows with the pace of AI adoption. Teams can now try and buy AI tools quickly, often with a corporate card and a short trial. If every new tool is an addition, the portfolio grows at the speed of adoption, while retirement proceeds at the speed of whoever has time for it.

## Economic consequence

The cost of unretired overlap shows up in several places:

- **Paying twice.** Licences for the old tool and the new tool for the same job, often for a year or more.
- **Split data.** Meeting notes, proposals, tickets or knowledge held in two systems, which makes search, reporting and handover harder and costs time every week.
- **More integrations.** Each tool needs connections to identity, storage and business systems, and each connection needs upkeep, a cost that is described in [new software integrations with no upkeep budget](/discovery/why-new-saas-integrations-have-no-maintenance-budget/).
- **More reviews.** Each tool needs its own security assessment, data protection review and vendor contract, and each is repeated when contracts renew.
- **Confused staff.** People are unsure which tool to use, spend time choosing, and get different results from each.
- **Missing savings.** The business cases that justified the purchase promised a reduction elsewhere that never took place.

As an illustrative example only, suppose a firm buys an AI meeting-notes tool on a case that says it will replace a transcription service, and neither contract is changed. The business pays for both for the next year, holds notes in two places and runs two security reviews. The sums involved are invented, but the pattern is the one most portfolio reviews find: the saving that justified the purchase is never booked.

A related weakness is the inventory itself. As [application inventories that miss unofficial tools](/discovery/why-application-inventories-leave-out-shadow-it/) explains, a register that does not show every tool cannot show overlap, so the first step in controlling it is to record what is in use.

## Root cause

The root cause is that AI tools are approved as additions on their own merits, and nobody is asked to name what they replace or to retire it. The approval process looks at the new tool in isolation: cost, benefit, risk. It has no step that looks across the portfolio and asks what the new tool does to what is already there.

A second cause is that replacement work is unfunded and unowned. The new tool has a project, a budget and a sponsor. The retirement of the old tool has none of these, so it competes for attention with everything else and loses.

A third cause is that the register records tools, not decisions. It may say that a tool exists, who owns it and what it costs. It rarely says "this tool replaces that one, by this date". Without that field, nobody can check whether the promise was kept.

## Practical intervention

### Practical next actions

1. **Add two questions to every tool request.** What existing tool or process does this replace, and if none, why is this an addition? Make both required, and do not process the request without an answer.
2. **Name the replaced tool, its owner and a retirement date.** Where a tool is being replaced, the request records which one, who is accountable for moving its users and data, and the date its licence will end. Link the date to the contract renewal so that the licence is not renewed by default.
3. **Fund the retirement.** Include in the business case the cost of migration, training and any notice period for the old tool, so that retirement is part of the project and not an afterthought.
4. **Track overlap in the application register.** Add fields for "replaces", "replaced by", "planned retirement date" and "status", and show any pair of tools in the same category that are both live. Review the overlap list in each regular portfolio meeting.
5. **Tell staff which tool to use.** On the go-live date, announce which tool is the standard for the task, from when, and when the old one will be switched off. Make the old tool read-only after a stated period.
6. **Move the data deliberately.** Decide which data from the old tool must be migrated, archived or deleted, and where personal information is involved, record what happens to it. Confirm with your information officer how section 72 applies to any new vendor that holds personal information outside South Africa.
7. **Review the security and privacy position for both tools together.** Run the assessment for the new tool and the retirement plan for the old one as a single piece of work, so that neither is left unmanaged.
8. **Check at an agreed interval.** Some time after go-live, compare usage of both tools, confirm whether the old tool has been retired and report any slippage to the budget owner. If the replacement did not happen, decide whether to enforce it or accept the overlap as an explicit cost.
9. **Record the decision.** Where a tool is intentionally added with nothing replaced, record the reason and the approver, so that the next review can see it was a choice.

## Diagnostic questions

- For each AI tool added in the last year, can we name the older tool it was meant to replace, and has that tool been retired?
- Does our tool request form ask what a new tool replaces, and does anyone check the answer?
- Which pairs of live tools in our register do the same job, and who decided to keep both?
- Which licences renew in the next quarter for tools that are meant to be on their way out?
- Which of our AI tools send personal information to a vendor outside South Africa, and what is our section 72 basis for each?
- If we asked staff which tool to use for meeting notes or proposals, would they all give the same answer?

## What good looks like

Every tool request answers what it replaces. Each replaced tool has an owner, a funded retirement plan and a date tied to its contract. The application register shows overlap, and the portfolio meeting reviews it. Staff know which tool is standard. After a replacement date passes, the old tool is switched off, its data has been dealt with and its licence is not renewed.

You can measure the result. The number of live tools in the same category does not rise unless a decision has been recorded. The share of replacement commitments that were met by their date is known and improves. Licences for replaced tools stop renewing. The portfolio review finds few unexplained overlaps, and the business cases that promised savings can show where they were booked.

## Where Mellorca fits

If you are not sure which of your AI tools overlap with older ones, a [digital systems audit](/services/digital-systems-audit/) can map what is running, show where tools do the same job, find licences that are about to renew for tools meant to be on their way out and list the data each holds. To add the replacement question to your approval route, build the register fields and run the review each quarter, [digital operations improvement](/services/digital-operations-improvement/) can design the routine with your IT and procurement teams and help it stick.

## Method note

This article draws on Microsoft's documentation on discovering AI apps, the text of the Protection of Personal Information Act and a CMS South Africa note on cross-border data transfers published in 2022. The scenario and the sums in it are illustrative and not measured. The article does not claim that any product named is needed to fix the problem or that it behaves the same way in your environment, so check the documentation for the tools you use. Section 72 and the Information Regulator's guidance may have been updated since the sources were published, so confirm the current position. It is general information and not legal advice: take advice from your information officer or legal adviser on how POPIA applies to your own AI tools.
