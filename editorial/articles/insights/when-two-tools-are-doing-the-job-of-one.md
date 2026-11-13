---
hub: insights
record_id: INS-032
slug: when-two-tools-are-doing-the-job-of-one
title: When two tools are doing the job of one
description: Two tools that look alike are not always redundant, and two that look different sometimes are. How to test for one job and choose which stays.
lead: Two tools that look like they overlap are not always redundant, and two that look different sometimes are. How to test whether a pair of applications is really doing one job, when keeping both is justified, how to choose which one stays and how to retire the other cleanly.
category: Systems & Strategy
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Systems & Strategy
sources:
  - What is Application Portfolio Management? - IBM | https://www.ibm.com/think/topics/application-portfolio-management
  - Discover and manage Shadow IT - Microsoft Defender for Cloud Apps | https://learn.microsoft.com/en-us/defender-cloud-apps/tutorial-shadow-it
  - Shadow IT guidance | https://www.ncsc.gov.uk/guidance/shadow-it
related:
  - Why switching software is not always the answer | /insights/why-switching-software-is-not-always-the-answer/
  - When a spreadsheet is a useful tool—and when it becomes infrastructure | /insights/when-a-spreadsheet-is-a-useful-tool-and-when-it-becomes-infrastructure/
  - How to decide which software to keep | /insights/how-to-decide-which-software-to-keep/
summary: Two tools that look like they overlap are not always redundant, and two that look different sometimes are. How to test whether a pair of applications is really doing one job, when keeping both is justified, how to choose which one stays and how to retire the other cleanly.
layout: plain
---
Almost every growing business ends up with pairs of tools that seem to do the same thing. Two ways of sharing files. Two places to track tasks. A CRM and a spreadsheet of customers. An e-signature service bought by sales and another bought by HR. Someone eventually asks the obvious question: why are we paying for both?

The answer is not always "we should not be". Some pairs really are redundant. Others look alike but serve different needs. And some pairs that look quite different are, on closer inspection, doing the same job. This article sets out how to decide what to do about a specific pair. For a wider view of whether the business simply has too many applications, see [how to know when you have too many business apps](/insights/how-to-know-when-you-have-too-many-business-apps/).

## Step 1: Test whether the overlap is real

Overlap should be judged by the job a tool does, not by its product category. Two tools can both be called "project management" and support quite different work. A construction site diary and an office task board are not the same job. Equally, a shared spreadsheet and a CRM sit in different categories but may both be the place where the sales team tracks deals.

IBM describes [application portfolio management](https://www.ibm.com/think/topics/application-portfolio-management) as working from an inventory of applications to an assessment of what each one does and is worth, and describes rationalisation as the step that finds overlap and redundancy between applications. For a single pair, a lighter version works. Ask:

- What business task does each tool support, described in plain words?
- Who uses each one, and for which part of the task?
- What information does each one hold, and does any of it appear in both?
- If one tool disappeared tomorrow, could its users do their job in the other with only configuration changes?

If the last answer is yes, the overlap is real. If it is "only with significant workarounds", the tools may be serving genuinely different needs.

## Step 2: Find out why there are two

Before deciding which to keep, understand how the pair came about. The reason often determines what will happen if one is removed.

Microsoft's guidance on [discovering shadow IT](https://learn.microsoft.com/en-us/defender-cloud-apps/tutorial-shadow-it) recommends reviewing discovered apps by category, because unsanctioned apps are often being used for legitimate work-related purposes that the sanctioned app did not address. It also suggests looking at who uses an app: if all its users sit in one department, there may be a real business need behind it. The UK National Cyber Security Centre's guidance on [shadow IT](https://www.ncsc.gov.uk/guidance/shadow-it) makes a similar point: people usually adopt their own tools when approved ones lack the functionality they need, or when getting something approved takes too long, and it recommends a simple process for handling requests rather than punishment.

Common reasons for a pair include:

- the official tool lacked a feature one team needed;
- the official tool was never properly configured or adopted;
- a new system was bought, but the old one was never retired;
- a team needed something quickly and the approval route was slow;
- a client, partner or regulator required a specific tool for some work.

If the second tool exists because the first one falls short, removing it without fixing the shortfall will only push people to a third tool.

## Step 3: Decide whether keeping both is justified

There are legitimate reasons to run two tools that overlap. Keeping both may make sense when:

- **The needs genuinely differ.** A field team working offline on mobile devices may need a different tool from an office team, even for similar tasks.
- **Separation is required.** Some data must be kept apart for legal, contractual or client reasons.
- **The overlap is temporary.** During a migration both tools will run for a while, provided there is an end date.
- **The overlap is small.** Two tools share a minor feature but each does a distinct main job.

If you keep both, make the boundary explicit. Write down which tool is used for what, which one holds the master copy of any shared information, and who owns each. An undefined overlap creates the most work, because every person decides for themselves where things go.

## Step 4: Choose which tool stays

When the overlap is real and unjustified, choose the survivor on more than price or popularity. Compare the two on:

| Criterion | Question to ask |
| --- | --- |
| Fit to the work | Which one supports the full task with fewer workarounds? |
| Connections | Which one integrates better with the systems that hold related data, such as accounting or the CRM? |
| Adoption | Which one do people actually use well today, and why? |
| Data | Which one holds the more complete and accurate history, and how hard is it to move data out of the other? |
| Control | Which one supports proper user management, access control and multi-factor authentication? |
| Total cost | Including administration, training and integration, not only the licence. |
| Ownership | Is there a named person willing and able to own the surviving tool? |

Involve the users of both tools. The people giving up a tool need to see that their needs were considered, or they will quietly keep using it.

## Step 5: Retire the other tool properly

Most failed consolidations fail at retirement. The new arrangement is announced, but the old tool stays available, and within months both are in use again. A clean retirement includes:

1. **Close the gaps first.** Configure the surviving tool to cover what the retiring one did, especially anything that was the reason it was adopted.
2. **Move the data that matters.** Decide what history must migrate and what can be archived. Check export options early, because some tools make leaving harder than joining.
3. **Repoint connections.** Find every integration, automation, form and report that reads from or writes to the retiring tool.
4. **Set an end date and keep it.** Run both for a short, defined overlap, then switch the old one to read-only and, after a set period, close it.
5. **Remove access and cancel.** Close accounts, cancel the subscription at the right point in the billing cycle and record the change.

A tool removed without this care can break a process nobody knew depended on it. The wider set of removal tests is covered in [how to decide which software to remove](/insights/how-to-decide-which-software-to-remove/).

## Step 6: Stop the next pair forming

Consolidating one pair does little if the conditions that created it remain. The NCSC's advice is to understand users' needs and make asking for a tool simple. A light request process, a current list of what the business already has, and a habit of checking that list before buying anything will prevent most new overlaps. The same discipline applies to automations: [the same workflow automated independently by multiple teams](/discovery/the-same-workflow-is-automated-independently-by-multiple-teams/) is the automation version of two tools doing one job.

## An illustrative example

The following is a hypothetical example. A South African financial advisory practice uses one cloud storage service for client documents and a second, adopted by the administration team, for sharing files with product providers. Testing the overlap shows both are used for the same job: storing and sharing client documents. The second was adopted because the first was set up without external sharing, and asking for that change had stalled.

The practice enables controlled external sharing in the first service, moves the administration team's active folders across, updates the two automations that saved files into the second service and closes it after a month of read-only access. Client documents now live in one place with one set of access controls, which also makes it easier to answer questions about who can see client information.

## The useful question

"Why are we paying for both?" is a good question, but it is the start of the analysis, not the end. The more useful question is whether the two tools are really doing one job, and if so, what made the business need a second one. Answer that, and the decision about which to keep usually follows. For businesses where overlaps have built up across many tools, the broader argument is made in [piling on more software is not digital maturity](/insights/piling-on-more-software-is-not-digital-maturity/).
