---
hub: insights
record_id: INS-187
slug: how-to-give-ai-the-context-it-needs-without-giving-it-everything
title: How to Give AI the Context It Needs Without Giving It Everything
description: An AI assistant is only as useful as the context it can see, but more access means more risk. Here is how to decide what to share and what to hold back.
lead: An AI assistant is only as useful as the context it can see, but more access means more risk. Here is how to decide what to share and what to hold back.
category: AI and Automation
published_date: 2026-11-12
updated_date: 2026-11-12
eyebrow: AI and Automation
sources:
  - https://www.gov.za/documents/protection-personal-information-act | https://www.gov.za/documents/protection-personal-information-act
  - https://www.nist.gov/itl/ai-risk-management-framework | https://www.nist.gov/itl/ai-risk-management-framework
  - https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-privacy | https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-privacy
summary: An AI assistant is only as useful as the context it can see, but more access means more risk. Here is how to decide what to share and what to hold back.
layout: plain
---
A practice manager at a Cape Town physiotherapy group asks an AI assistant to draft a reply to an unhappy patient. The first draft is polite and useless: it apologises for "any inconvenience" and offers nothing specific. She pastes in the patient's file, the billing history, the clinician's notes and the practice's complaints policy. The second draft is excellent. It is also now sitting in a tool that was never assessed for health information.

Both mistakes come from the same place: nobody decided what context the task needed. This article offers a way to make that decision deliberately, so the AI gets enough to do good work and no more than it should have.

## Why context decides quality

An AI assistant does not know your business. It knows what it was trained on and what you put in front of it. When it produces generic or wrong output, the cause is often missing context: it does not know who the customer is, what you promised, which policy applies, or what a good answer looks like in your firm. We describe the same gap between a tool and the work it has to do in [what AI agents need before they can do useful work](/insights/what-ai-agents-need-before-they-can-do-useful-work/), and the handoff version in [why AI agent handoffs need enough business context](/discovery/why-ai-agent-handoffs-need-enough-business-context/).

The instinct to fix this by connecting the assistant to everything is understandable and usually wrong. Broad access gives the tool more material but also more ways to surface the wrong thing, such as another customer's information, an old policy or a confidential salary figure. We explain this in [why giving AI access to more systems is not automatically better](/insights/why-giving-ai-access-to-more-systems-is-not-automatically-better/).

## Start from the task, not the system

The right question is not "what can the AI reach?" but "what does a competent person need in front of them to do this task?" A new employee asked to reply to a complaint would need the complaint, the relevant order or booking, the refund policy and the tone you expect. They would not need every customer record, the payroll file or the board minutes.

For each task you want an AI to do, write a short context package with four parts:

- **The input:** the specific item being worked on, such as one email, one contract or one ticket.
- **The rules:** the policies, limits and definitions that apply, written clearly and kept current.
- **The examples:** two or three good outputs from the past, so the style and level of detail are clear.
- **The boundaries:** what the AI must not do or must send to a person, such as promising refunds above a limit.

Keeping rules in one maintained document, rather than scattered across individual prompts, matters. Our article on [business rules hidden inside AI prompts](/discovery/business-rules-hidden-inside-ai-prompts/) describes how rules buried in prompts drift out of date without anyone noticing.

## Sort information by sensitivity

Before sharing anything, place it in one of three groups.

- **Safe to share freely:** published policies, product descriptions, templates, public price lists and general procedures.
- **Share only with controls:** customer and supplier names, order details, internal pricing and contracts. These may be shared with a tool that your business has assessed and has a proper agreement with, and only where the task needs them.
- **Do not share with general AI tools:** special personal information such as health, biometric or children's data, identity numbers, bank details, passwords and anything under legal privilege.

The Protection of Personal Information Act matters here. It requires that personal information be collected for a specific purpose and processed in a way that is adequate, relevant and not excessive for that purpose, and that a responsible party secure the information it holds, including when an operator processes it on their behalf. The [text of the Act](https://www.gov.za/documents/protection-personal-information-act) sets this out. Pasting a patient file into an unassessed tool to get a better letter is hard to reconcile with those duties. If you are unsure, remove the identifying details first, or ask your information officer.

## Prefer the smallest slice that works

There are several practical ways to cut what the AI sees without cutting what it needs.

- **Redact:** replace names, numbers and addresses with labels such as "Customer A" before the text goes in, and restore them afterwards.
- **Summarise upstream:** give the tool a short structured summary of the account instead of the full history.
- **Retrieve narrowly:** if the tool searches your documents, restrict it to a defined folder or collection per task, not the whole drive.
- **Use the person's own permissions:** tools that act on behalf of a user should only see what that user can already see.

The last point deserves checking. Microsoft's documentation on [data, privacy and security for Microsoft 365 Copilot](https://learn.microsoft.com/en-us/microsoft-365-copilot/microsoft-365-copilot-privacy) explains that the assistant works within a user's existing access permissions, which means it can expose anything a user can technically open, even if they should never have been able to. Old permission problems become visible quickly once an AI starts searching. Tidy up shared folders before you switch such a tool on.

## Decide what the AI may do, not only what it may see

Reading and acting are different risks. A tool that can draft a reply is much less risky than one that can send it, issue a refund or change a record. Match the level of access to the level of consequence, and keep a person in the loop for anything that is hard to reverse. Our article on [what an AI agent should be allowed to do in your business](/insights/what-an-ai-agent-should-be-allowed-to-do-in-your-business/) goes through this in detail.

NIST's [AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) encourages organisations to map the context in which an AI system is used and to measure and manage its risks, which in practice means writing down what the tool is for, what data it touches and who is accountable. A one-page record for each use is enough for a small business.

## Test with a small case and watch what comes out

Run the task with the smallest context package first. Check what the output gets right and what it misses, and add only the pieces that fix the gaps. This is cheaper and safer than starting with everything and trying to remove it later. Also test the opposite: ask the tool a question whose answer should be out of its reach, and see whether it can find it. If it can, the boundary is not where you think it is.

## Practical next actions

1. Pick one task you want AI to do, and write its context package: the input, the rules, two good examples and the boundaries.
2. Sort the information that task touches into free, controlled and never-share groups, and confirm with your information officer or adviser which AI tools are approved for the middle group.
3. Set up redaction or summarising for personal information so that the AI sees labels, not identities, wherever the task allows.
4. Review who can open shared folders and mailboxes before connecting any AI tool that searches them, and remove access that is no longer needed.
5. Run the task on a small sample, record what the AI got wrong, and add only the missing context that fixes it, repeating the check every quarter.

Good context is chosen, not accumulated. Give the AI what a careful new colleague would need for this task, keep the rest behind the door, and write down the decision so that the next person can see why.
