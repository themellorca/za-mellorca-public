---
hub: impact
record_id: CPS-010
slug: same-internal-questions-undocumented-knowledge-cost
title: Answering the same question again: The payroll cost of undocumented know-how
description: When answers live only in experienced employees' heads, they repeat them daily and the business pays in interruptions and mistakes. Document the top ones.
lead: When answers live only in experienced employees' heads, they spend part of every day repeating them. The business pays for the interruptions, the waiting and the mistakes. Documenting the top questions pays back quickly.
category: Digital Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Digital Operations
commercial_domain: Digital Operations
primary_pain: Staff repeatedly answering the same internal questions
primary_cost_mechanism: Payroll cost of interruptions and waiting, plus error and rework cost from inconsistent answers
sources:
  - Professional Developers - 2024 Stack Overflow Developer Survey | https://survey.stackoverflow.co/2024/professional-developers
  - The importance of a handbook-first approach to communication | https://handbook.gitlab.com/handbook/company/culture/all-remote/handbook-first/
  - Overview of process mining in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/process-mining-overview
related:
  - Two departments, same work: The payroll cost of duplicated effort | /impact/departments-duplicating-same-work-payroll-cost/
  - Fixing avoidable mistakes instead of serving customers: The cost of rework | /impact/fixing-preventable-mistakes-rework-customer-time-cost/
  - "I thought you were doing it": The labour cost of unclear responsibilities | /impact/unclear-responsibilities-duplicated-dropped-work-cost/
summary: When answers live only in experienced employees' heads, they spend part of every day repeating them. The business pays for the interruptions, the waiting and the mistakes. Documenting the top questions pays back quickly.
layout: plain
---
## The tolerated pain

Every business has a few people everyone asks. How do I process a credit note? Which price list applies to this client? Where is the template for a site report? What is the password policy for the new system? The answers are known. They just are not written down anywhere useful, so each new employee, and many existing ones, asks the same person the same question.

Each answer takes a few minutes. But the experienced bookkeeper who explains the credit-note process for the fortieth time this year has also lost her concentration forty times. The person asking has waited, sometimes for hours, for a reply. And because answers are given verbally, slightly different versions spread through the business.

Two related problems are covered elsewhere. [The cost of time spent searching for files](/impact/employees-searching-for-files-lost-productivity-cost/) deals with documents that exist but cannot be found. [When one employee knows how everything works](/impact/key-person-operational-dependency/) deals with continuity risk if that person leaves. This article is about the daily cost while they are still here: the repeated question.

## Why businesses tolerate it

- **Asking is faster for the asker.** Walking over or sending a message is quicker than looking it up, especially if there is nothing to look up.
- **Answering feels helpful.** Experts take pride in being the go-to person, and saying "it's documented" can feel unfriendly.
- **Documentation feels like a project.** Writing a full manual is daunting, so nothing gets written.
- **The cost is fragmented.** Five minutes here and ten there never add up to a visible number.
- **Chat history feels like a record.** Answers given in WhatsApp or Teams seem saved, but nobody can find them later.

## What the evidence shows

The clearest data comes from software teams, who measure this more than most. The [2024 Stack Overflow Developer Survey](https://survey.stackoverflow.co/2024/professional-developers) reports that 61% of respondents spend more than 30 minutes a day searching for answers or solutions, and that 61% of people managers spend more than 30 minutes a day answering questions. It also reports that 53% agree or strongly agree that waiting on answers disrupts their workflow. Developers are not typical office workers, but the pattern, people on both sides of a question losing time every day, will be familiar in most businesses.

GitLab, which runs one of the best-known public company handbooks, explains on its [handbook-first page](https://handbook.gitlab.com/handbook/company/culture/all-remote/handbook-first/) why this gets worse with growth. It notes that a very small team can stay informed through meetings and messages, but that as a team scales, the need for documentation rises together with the cost of not having it. Without structured documentation, it says, people ask and re-ask for the same information indefinitely, creating a loop of interruptions, meetings and poor knowledge transfer.

## Operational symptoms

- a small number of experienced staff who are interrupted many times a day;
- new employees taking months to become independent;
- work paused while someone waits for the one person who knows;
- different people giving different answers to the same question;
- mistakes traced to someone following an outdated or misremembered instruction;
- experts unable to take leave without being contacted.

## How the pain becomes money

- **Payroll cost of answering:** experienced, usually higher-paid staff spend time repeating answers.
- **Interruption cost:** each question breaks the expert's concentration, so the lost time is larger than the minutes spent answering.
- **Waiting cost:** the asker is paid while blocked, and their work is delayed.
- **Error and rework cost:** inconsistent verbal answers lead to inconsistent work.
- **Onboarding cost:** new starters take longer to reach full productivity.

## An illustrative cost model

This example is **illustrative**. Every figure is an assumption for a hypothetical business. Picture a Pietermaritzburg insurance brokerage with 40 staff and four experienced people who field most internal questions.

| Assumption | Value |
| --- | --- |
| Experts who are regularly asked | 4 |
| Repeat questions per expert per day | 8 |
| Expert time per question, including regaining focus | 10 minutes |
| Expert loaded hourly cost | R480 |
| Asker waiting time per question | 15 minutes at R260 an hour |
| Working days per year | 220 |

- Expert time: 4 × 8 × 10 minutes = 320 minutes a day, about 5.3 hours; 5.3 × R480 × 220 = R559,680
- Asker waiting: 32 questions × 15 minutes = 8 hours a day; 8 × R260 × 220 = R457,600
- **Illustrative total: about R1.02 million a year**

Not every question can be eliminated, and some deserve a conversation. But if documenting the twenty most common answers removed half the repeats, the illustrative saving would be about R500,000 a year, from a few weeks of focused writing. Test the assumptions by asking your experts to tally repeat questions for one week.

## When it becomes commercially urgent

- the business is hiring several people in a short period;
- an expert is overloaded, leaving, retiring or going on extended leave;
- errors are traced to inconsistent instructions;
- the business wants to use AI assistants or search tools, which can only answer from knowledge that is written down;
- a new branch or remote team cannot easily walk over and ask.

The AI point deserves emphasis. Assistants and search tools are only as good as the documented knowledge they draw on, as the Patterns piece [when AI search fails because knowledge is chaotic](/patterns/when-ai-search-fails-because-knowledge-is-chaotic/) explains. Undocumented know-how cannot be found by people or by software.

## What better looks like

1. **Answers live in one trusted place.** A shared knowledge base, intranet page or wiki that everyone knows to check first.
2. **Experts answer with a link.** When a question comes in, the answer is written once and the link is shared from then on.
3. **Each page has an owner and a date.** Staff know who keeps it current and how recent it is.
4. **Short beats complete.** A half-page checklist for a common task is more useful than a perfect manual that never gets finished.
5. **Chat is for discussion, not storage.** Decisions and instructions are moved out of chat threads into the shared place.
6. **Process knowledge is drawn from systems where possible.** When work runs through a system, tools such as [process mining](https://learn.microsoft.com/en-us/power-automate/process-mining-overview) can show how a process actually runs, which helps keep written instructions honest.

The Insights article [what business processes need documentation first](/insights/what-business-processes-need-documentation-first/) helps decide where to start.

## Practical next actions

1. Ask your three or four most-asked people to tally repeat questions for one week.
2. Rank the questions by frequency and write short answers for the top twenty.
3. Put them in one shared location and tell everyone to check there first.
4. Agree that experts reply with a link wherever an answer exists, and add a page when it does not.
5. Give each page an owner and review dates.
6. Include the knowledge base in onboarding so new starters learn to look before they ask.

## Bottom line

Repeated questions are a payroll cost paid twice: once by the experienced person who answers and again by the person who waits. Because the cost arrives in small pieces, it is rarely measured, yet in a mid-sized business it can easily reach a significant annual sum. Writing down the answers to the most common questions, in one trusted place, turns that recurring cost into a one-off investment and frees the most knowledgeable people to do the work they are paid for.
