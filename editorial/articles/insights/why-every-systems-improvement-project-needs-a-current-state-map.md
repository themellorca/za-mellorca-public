---
hub: insights
record_id: INS-019
slug: why-every-systems-improvement-project-needs-a-current-state-map
title: Why every systems improvement project needs a current-state map
description: Projects start with a clear goal and a vague view of today. A current-state map sets scope, gives a baseline and stops old problems carrying over.
lead: Most systems projects start with a picture of where the business wants to be and only a vague idea of where it is. A current-state map fixes that: it sets the scope, gives you a baseline to measure against and stops the new system from inheriting old problems.
category: Digital Operations
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Digital Operations
sources:
  - What is Process Mapping? - IBM | https://www.ibm.com/think/topics/process-mapping
  - Value Stream Mapping Overview - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/value-stream-mapping/
  - How the discovery phase works | https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works
related:
  - Key-person dependency is a systems problem | /insights/key-person-dependency-is-a-systems-problem/
  - Why CRM adoption problems are often workflow problems | /insights/why-crm-adoption-problems-are-often-workflow-problems/
  - Why technology implementations fail after go-live | /insights/why-technology-implementations-fail-after-go-live/
summary: Most systems projects start with a picture of where the business wants to be and only a vague idea of where it is. A current-state map fixes that: it sets the scope, gives you a baseline to measure against and stops the new system from inheriting old problems.
layout: plain
---
Most systems improvement projects begin with a destination. A new CRM, an integration between sales and finance, an automated onboarding flow, a dashboard the directors can finally trust. The proposal describes the future in detail. What it rarely describes, with anything like the same care, is the present.

That gap is where projects go wrong. Without an agreed picture of how work, information and systems actually operate today, the business cannot say what is in scope, cannot prove the change made anything better, and often rebuilds yesterday's problems inside today's software. A current-state map is the cheapest protection against all three.

## What a current-state map is, and what it is not

A current-state map is a documented picture of how a specific piece of work runs today: the steps, the people, the systems, the information passed between them, and how long and how reliably it all happens. It is not a policy document, an org chart or the process described in the staff handbook. It records what really happens, including the workarounds.

The idea is well established. IBM describes [process maps](https://www.ibm.com/think/topics/process-mapping) that represent current-state or future-state processes to show where improvement is possible. Lean practitioners go further: the Lean Enterprise Institute's definition of [value-stream mapping](https://www.lean.org/lexicon-terms/value-stream-mapping/) starts with a current-state map of how material and information actually flow, before a future-state map describes how they should flow. The order matters. You cannot draw a credible target until you have drawn the starting point.

How to draw one without turning it into a wall of boxes is covered in [how to map a business workflow without making it complicated](/insights/how-to-map-a-business-workflow-without-making-it-complicated/). This article is about why the map has to exist before a systems project is approved, and what it does for the project once it does.

## Five jobs the map does for a project

### 1. It sets the real scope

Most scope surprises are discovered, not created. A project to "replace the job card spreadsheet" turns out to touch quoting, stock, invoicing and the technician's WhatsApp group, because the spreadsheet quietly connected all four. A current-state map finds these connections before the budget is set rather than halfway through the build.

The UK Government Digital Service makes the same point in its guidance on [the discovery phase](https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works): teams are told not to start building during discovery, and to map the existing services and constraints, including legacy technology and existing processes, because a problem often spans several teams and organisations.

### 2. It gives you a baseline to measure against

If nobody recorded how long a quote took, how many orders needed rework or how many hours a week went into reconciliation, nobody can say whether the new system improved them. The project ends with opinions instead of evidence. Value-stream maps record timing and quality data next to each step for exactly this reason. Even rough numbers, captured before the change, turn the post-project review from a debate into a comparison. They also make it much easier to [build a business case for systems improvement](/insights/how-to-build-a-business-case-for-systems-improvement/) that a finance manager will accept.

### 3. It separates the process problem from the software problem

Many complaints about a system are really complaints about the process wrapped around it. An approval that waits three days because the approver is on site will wait three days in any software. A current-state map shows which delays come from the tool and which come from the way the work is arranged. That distinction decides whether you need new software, a configuration change or a different rule.

### 4. It surfaces the dependencies nobody listed

Systems in small and mid-sized businesses accumulate quietly. A report pulls from an export that someone runs on Monday mornings. A supplier portal is only checked because one person remembers to. When the map follows the information, rather than just the tasks, these hidden links appear. Leaving them undiscovered is how a project switches off something the business turns out to depend on, the situation described in [when nobody knows which services depend on which systems](/patterns/when-nobody-knows-which-services-depend-on-which-systems/).

### 5. It gives everyone the same starting picture

Directors, team leaders, staff and any outside supplier usually hold different versions of how the work runs. Each version is partly right. Putting one agreed map on the table forces those versions to meet early, while disagreements are cheap to resolve. IBM lists greater awareness of roles and responsibilities, and easier identification of vulnerable parts of a process, among the benefits of mapping.

## What the map needs to contain

A useful current-state map for a systems project records more than steps. For each step, capture:

- **Who does it**, by role, and whether it depends on one named person.
- **Which system or tool is used**, including spreadsheets, email and messaging apps.
- **What information comes in and goes out**, and whether it is retyped, copied or passed automatically.
- **How long it takes and how long it waits**, because waiting time is often larger than working time.
- **How often it goes wrong**, and what happens when it does.
- **Where the workarounds are**: the side spreadsheet, the phone call, the manual check.

Keep it to one workflow at a time, with a clear start and end. A map of "the whole business" is usually too general to act on. A map of "from accepted quote to first invoice" is specific enough to scope a project.

## How to build one without stalling the project

Mapping does not need a long consulting phase. For most small and mid-sized businesses, a focused effort over a week or two is enough for one workflow.

1. **Pick the workflow the project is meant to change**, and define where it starts and ends.
2. **Follow a few real cases** from start to finish, using actual records rather than memory. Recent orders, tickets or applications show what really happened.
3. **Talk to the people who do the work**, not only those who manage it. Ask what they do when the normal path fails.
4. **Record systems and information flow alongside tasks**, so the map shows where data is created, copied and checked.
5. **Add rough numbers**: volumes, elapsed time, error rates, hours spent. Estimates are fine if they are labelled as estimates.
6. **Review the draft with the team** and correct it. The first version is always tidier than reality.

If the project involves automation, the map has an extra job, because automating a step you have not understood tends to speed up the problem. That argument is made in [before you automate, understand how the work actually moves](/insights/before-you-automate-understand-how-the-work-actually-moves/).

## An illustrative example

The following is a hypothetical example, not a client case. A South African distribution business with around forty staff plans to buy a new order management system because orders are "always late". Before signing, it maps the current path from customer order to delivery note.

The map shows that orders arrive by email, phone and a web form, are typed into the accounting package by one administrator, are printed for the warehouse, and are checked against stock by a second person using a spreadsheet the accounting package does not update. Most of the delay is not in any system. It is in the queue for the administrator and the daily spreadsheet refresh.

The project changes shape. The business still improves its order handling, but the first phase becomes a single order intake and a stock feed from the accounting package, both far cheaper than a replacement system. Because the map recorded the elapsed time from order to delivery note, the directors can see afterwards whether the change worked.

## When the map is good enough

A current-state map is good enough when the people who do the work recognise it, when it shows where information moves between systems, and when it holds enough numbers to compare against later. It does not need to be beautiful, and it does not need every edge case. It needs to be honest.

Treat it as the first deliverable of any systems improvement project, before the software choice and before the build. A project that cannot describe where it is starting from will struggle to prove where it ended up.
