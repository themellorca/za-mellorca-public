---
hub: patterns
record_id: PAT-204
slug: why-teams-keep-asking-the-same-internal-questions
title: Why Teams Keep Asking the Same Internal Questions
description: When colleagues ask the same how-do-I and where-is-it questions every week, the answers exist only in people's heads. Here is why that happens and how to give them a findable home.
lead: When colleagues ask the same how-do-I and where-is-it questions every week, the answers exist only in people's heads. Here is why that happens and how to give them a findable home.
category: Knowledge, Records & Information Flow
published_date: 2026-10-08
updated_date: 2026-10-08
eyebrow: Knowledge, Records & Information Flow
pattern_family: Knowledge, Records & Information Flow
observable_condition: Colleagues ask the same how-do-I and where-is-it questions repeatedly, and the same few experienced people answer them from memory or by chat message.
primary_identification: Undocumented operational knowledge: answers have no owned, maintained, findable home, so asking a person remains the fastest route.
commercial_value_dimensions: Specialist productivity, onboarding speed, error reduction, consistency and resilience
sources:
  - Knowledge Management in ITSM: Process & Benefits - Atlassian | https://www.atlassian.com/itsm/knowledge-management
  - Plan an intelligent SharePoint intranet - SharePoint in Microsoft 365 | https://learn.microsoft.com/en-us/sharepoint/plan-intranet
  - Overview of cloud flows - Power Automate | https://learn.microsoft.com/en-us/power-automate/overview-cloud
related:
  - Why Decision-Makers Keep Asking for Status Updates | /patterns/why-decision-makers-keep-asking-for-status-updates/
  - The Hidden Cost of Asking Customers for the Same Information Twice | /patterns/the-hidden-cost-of-asking-customers-for-the-same-information-twice/
  - Why Service Teams Spend Their Day Chasing Internal Answers | /patterns/why-service-teams-spend-their-day-chasing-internal-answers/
summary: When colleagues ask the same how-do-I and where-is-it questions every week, the answers exist only in people's heads. Here is why that happens and how to give them a findable home.
layout: plain
---
## Observable condition

The messages are familiar. Where is the latest price list? Which form do I use for a supplier change? Who approves a discount above ten percent? How do I reissue a credit note? Each one is small, and each is answered in a minute or two, usually by the same three people. The answers go into a WhatsApp group or a direct message, are useful to exactly one person, and are gone from view by the afternoon.

A week later someone else asks the same thing. A month later a new starter asks it again. The experienced staff have stopped being surprised, and some have developed a standard reply they paste from their phone. A few have quietly started to avoid the group chat because the interruptions make it hard to finish a task.

An illustrative example: a Cape Town engineering services firm of about sixty people has a finance coordinator who receives, by her own count, around fifteen internal questions a day. Most concern the same ten topics: how to capture a purchase order, which cost code to use, what the approval limits are. She is good at answering them, and she has become the firm's unofficial help desk instead of the person who closes the month on time.

## Realisation

A repeated question is a signal. It tells you that a piece of knowledge the business depends on has no agreed home. The person asking is not lazy, and the person answering is not a bottleneck by temperament. The question is repeated because the answer has nowhere to live that is easier to reach than the colleague who knows it.

Asking a person is, in the moment, the fastest way to get an answer. That is why the habit is so stable. But the speed is local: it costs the asker a minute and the answerer a few more, and it leaves no trace. Over a year, across a team, the same answer is produced hundreds of times and never once becomes an asset. The business is paying for the same knowledge repeatedly and owning none of it.

**Realisation prompt:** which five questions did you or your colleagues answer this week that someone had also answered last month?

## Identification

This is a pattern of undocumented operational knowledge. The visible symptom is a stream of recurring questions and a small group of people who are constantly interrupted. The common assumption is that staff should read more carefully, pay attention in induction, or simply know their job. The structural cause is that answers have not been captured in one maintained place, owned by someone, and reachable from the point where the question arises.

The published Pattern [the hidden cost of repetitive customer questions](/patterns/the-hidden-cost-of-repetitive-customer-questions/) describes the same loop on the customer side. The Impact page on [the same internal questions and undocumented knowledge](/impact/same-internal-questions-undocumented-knowledge-cost/) sets out the cost in more detail. This article looks at why the pattern persists and what a practical home for the answers looks like.

## Diagnosis

- **Answers live in conversations.** A reply typed into a chat is read by one person and buried by the next message. The knowledge is created, then lost.
- **Nobody owns the content.** Where documents do exist, they were written once during a project and never updated, so staff learn that asking a person is safer than trusting a page.
- **The documents are hard to find.** They sit in personal folders, old email attachments or three different shared drives. If the search takes longer than the question, the question wins.
- **Processes change without the answer changing.** A new approval limit or form is announced in a meeting, but the written guidance still describes the old way.
- **The experts are rewarded for answering.** Being the person who knows is a source of status, and nobody has asked them to spend time writing it down.

## Commercial impact

The commercial value at stake is management and specialist productivity, onboarding speed, error reduction and resilience. The visible cost is interruption: a one-minute answer rarely costs one minute, because it breaks the concentration of the person answering. Multiply fifteen interruptions a day across a handful of experts and a meaningful part of the week is spent re-explaining.

The hidden cost is inconsistency. When the answer is delivered from memory, different people give slightly different answers, and staff follow whichever one they happened to hear. That produces mistakes in coding, approvals and customer commitments that are discovered later and fixed at greater expense. The Pattern [the business process that only works because someone remembers](/patterns/the-business-process-that-only-works-because-someone-remembers/) shows how fragile this becomes when that person is away.

Atlassian's guidance on knowledge management makes a similar point from the service desk side: capturing and maintaining what a team knows so that people can find a verified answer, rather than rediscovering it, reduces duplicate work and shortens onboarding. The same logic applies in finance, sales, operations and HR. A growing company also hires faster than its experts can teach, so the cost of undocumented knowledge rises with headcount.

## Common misidentification

A common response is a document dump: someone is asked to write a handbook, which is finished in a burst of effort, stored in a folder and not touched again. Within a year it is out of date and the questions return.

Another is to introduce a new messaging channel for questions. That makes asking easier and the answers more visible for a day, but it is still a conversation, not a record. The Pattern [when business knowledge lives in inbox history](/patterns/when-business-knowledge-lives-in-inbox-history/) explains why searching old messages is a poor substitute for a maintained source. The same weakness is why AI search tools perform badly on scattered content, as the Pattern [when AI search fails because knowledge is chaotic](/patterns/when-ai-search-fails-because-knowledge-is-chaotic/) describes.

## Possibility

In a better state, the ten questions that account for most of the interruptions each have a short, current answer in one internal location. The answer says what to do, who approves it, which form or template to use and what to do when the case is unusual. Each has a named owner who updates it when the process changes, and a date showing when it was last reviewed. The help channel still exists, but the standard reply to a repeated question is a link.

The tools needed are modest. Microsoft's guidance for planning a SharePoint intranet recommends starting with a key scenario, planning for governance, and piloting with real users before scaling. That is the right scale of ambition for an internal answers site: one scenario, one owner, one pilot group. Where the answer is really a task, such as requesting access or submitting a change, an automated cloud flow can collect the request and route it, instead of describing how to email someone.

For the engineering firm, this would mean a one-page guide per recurring topic, a short search-friendly title for each, and a rule that a question answered twice is written up the second time.

## Intervention

1. **Collect the questions.** For two weeks, ask the most-interrupted people to tally what they are asked. Group the results and keep the top ten.
2. **Write the answers once.** Use plain language, include an example, and state who approves what. Keep each page to what a person needs to act.
3. **Choose one home.** Put the pages somewhere everyone can search and nobody has to ask permission to read. Retire the duplicate copies on personal drives.
4. **Assign an owner and a review date.** A page without an owner decays. Link review to the moment a process changes, not to a calendar reminder alone.
5. **Change the reply.** Agree as a team that the first response to a repeated question is the link, and the second step is to fix the page if it did not help.
6. **Turn tasks into requests.** Where an answer is really a procedure that ends in an email, replace it with a form and a routed approval.

## Diagnostic questions

- Which three people are asked the most questions, and how many of them are repeats?
- Can a new starter find the approval limits without asking anyone?
- When a process changes, who updates the written guidance?
- How long does it take to find the current version of a standard form?

## Bottom line

Teams keep asking the same internal questions because the business has not given the answers a findable, owned home. Each repeated question is a small recurring payment for knowledge the company already has. Capturing the top few answers, naming owners and replying with links turns that payment into an asset, frees the people who know the most, and makes the next hire productive faster.
