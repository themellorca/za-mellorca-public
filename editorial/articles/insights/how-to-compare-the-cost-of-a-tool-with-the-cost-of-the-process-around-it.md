---
hub: insights
record_id: INS-431
slug: how-to-compare-the-cost-of-a-tool-with-the-cost-of-the-process-around-it
title: How to Compare the Cost of a Tool With the Cost of the Process Around It
description: The subscription is the visible cost; the work around it is not. Compare options by cost per completed outcome, measured on real cases.
lead: The subscription is the visible cost; the work around it is not. Compare options by cost per completed outcome, measured on real cases.
category: Software Portfolio
published_date: 2026-11-14
updated_date: 2026-11-14
eyebrow: Software Portfolio
sources:
  - Define your purchasing strategy | https://www.gov.uk/guidance/define-your-purchasing-strategy
  - Cost Optimization design principles - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/principles
  - Cost optimization quick links - Microsoft Azure Well-Architected Framework | https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/
related:
  - How to Calculate the Cost of Piling On More Software | /insights/how-to-calculate-the-cost-of-piling-on-more-software/
  - How to decide which software to remove | /insights/how-to-decide-which-software-to-remove/
  - The real cost of paying for software nobody uses properly | /insights/the-real-cost-of-paying-for-software-nobody-uses-properly/
summary: The subscription is the visible cost; the work around it is not. Compare options by cost per completed outcome, measured on real cases.
layout: plain
---
A small firm in Cape Town compares two tools for managing supplier invoices. One costs R450 per user per month. The other costs R180. The cheaper one wins, because the numbers on the quote are clear. Six months later, the team is exporting data by hand, correcting duplicate entries and chasing approvals through email, and the owner is wondering where the saving went.

The quote compared two tools. The business, however, pays for a process, and the tool is only one part of it. This article shows how to compare what a tool costs with what the surrounding process costs, so that the choice reflects the whole picture.

## The tool is the visible cost, the process is not

A subscription fee is easy to see. It is on the quote, then on the invoice, then on the bank statement. The cost of the process around it is spread across the working week, appears in nobody's budget and is easy to treat as normal. It includes the time to enter data, to check it, to correct it, to move it to another system and to chase people who need to act on it.

Over a year the process cost often exceeds the licence cost. If a tool saves ten minutes per invoice but its poor fit adds fifteen minutes of correcting and re-keying, it has made the work slower while the invoice for the subscription arrives on time. Our article on [the hidden cost of apps that do not share data](/insights/the-hidden-cost-of-apps-that-do-not-share-data/) covers one of the most common sources of this hidden effort.

## What official guidance says about total cost

Public-sector buying guidance takes this view explicitly. The UK government's guidance on [defining your purchasing strategy](https://www.gov.uk/guidance/define-your-purchasing-strategy) asks buyers to look at the full cost across the life of what they buy, rather than the initial price alone, and to consider how a product will be run, upgraded and eventually retired. Microsoft's [cost optimisation design principles](https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/principles) make a similar point from a technology perspective: cost decisions should be weighed against business value and what the business is trying to achieve, not made on price alone. Neither is written for a ten-person firm, but the principle holds at any size.

## A way to compare: cost per completed outcome

The most useful measure is not the cost of the tool per month. It is the cost per completed outcome, such as an invoice paid, an order delivered or a new employee set up. To calculate it, add three groups of cost for each option and divide by the number of outcomes in the same period.

1. **Tool costs.** Licences, set-up, training, support, connections to other systems and any fees that rise with usage.
2. **Process time.** The hours spent by people on the whole sequence, including entering data, checking, correcting, exporting and chasing, multiplied by what an hour of that person's time costs the business.
3. **Cost of errors and delay.** Late payment penalties, credits issued, lost discounts, rework and the time of senior staff dealing with escalations.

The calculation does not need to be precise. A rough, honest estimate of time from the people who do the work is far better than a precise quotation figure with the rest left out. Our article on [how to calculate the real cost of a repetitive task](/insights/how-to-calculate-the-real-cost-of-a-repetitive-task/) offers a method for putting a rand value on time spent.

## A worked comparison

Take a business that processes 200 supplier invoices a month. Suppose Tool A costs R4,500 a month for the team, and Tool B costs R1,800. The figures below are illustrative, to show how the method works.

| Item per month | Tool A | Tool B |
| --- | --- | --- |
| Subscription | R4,500 | R1,800 |
| Minutes per invoice (entry, checking, approval) | 6 | 14 |
| Hours per month for 200 invoices | 20 | about 47 |
| Time cost at R200 per hour | R4,000 | about R9,300 |
| Total | R8,500 | about R11,100 |
| Cost per invoice | R42.50 | about R56 |

On the quote, Tool B is 60 percent cheaper. After counting the surrounding process, it is more expensive. The result depends entirely on the minutes per invoice, which is why those minutes should be measured, not guessed. A trial with real invoices and a stopwatch is better than a demonstration with tidy sample data. Our article on [how to buy business software without letting the demo make the decision](/insights/how-to-buy-business-software-without-letting-the-demo-make-the-decision/) explains why.

## Where process cost hides

Several costs are easy to overlook when comparing tools:

- **Re-keying.** Every field typed twice costs time and creates errors.
- **Workarounds.** The spreadsheet kept on the side because the tool does not quite fit.
- **Waiting.** Approvals that stall because the tool does not remind or route properly.
- **Training and turnover.** A tool that is hard to learn costs more every time someone new joins.
- **Exit.** What it will take to move your data out if you change supplier.

Our article on [what to ask before you buy another tool](/insights/before-you-buy-another-tool-ask-these-questions/) gives a checklist of questions that expose these costs before a contract is signed.

## The counter-case: sometimes the dearer tool is not the answer

This analysis does not always favour the more expensive option. A costly tool that matches a broken process will simply automate the breakage. If most of the time is lost to unclear ownership, missing information or approvals nobody responds to, a better tool will not fix that. Our article on [why automating a broken process makes the problem worse](/insights/why-automating-a-broken-process-makes-the-problem-worse/) explains why the process should be repaired first. Compare the process cost with and without the tool. If the tool changes little, do not pay for it.

The same logic applies to value over time. Microsoft's [cost optimisation guidance](https://learn.microsoft.com/en-us/azure/well-architected/cost-optimization/) treats cost management as a continuing activity and not a single decision. Revisit the comparison annually, because both the tool and the process change.

A fair comparison also includes your current approach as an option. Many tool decisions are made as if the choice were between two products, when a third option is to keep the existing method and fix its worst steps. Measure that option the same way, with the same minutes, the same hourly cost and the same count of errors, and the comparison becomes honest. Sometimes a small change to the form, the approval rule or the naming of files removes more cost than any subscription would.

## Practical next actions

1. Choose one process where a tool decision is pending or recently made, and list every step that people perform from start to finish, including the informal ones.
2. Ask the people who do the work to time each step on ten real cases, and record the average minutes and the number of corrections or chases.
3. Convert time to rand using a realistic hourly cost for each role, and add the tool costs, including set-up, connections and training.
4. Divide the total by the number of completed outcomes to get a cost per outcome for each option, including your current approach.
5. Run a trial with real data before signing, and ask the supplier what it takes to export your data if you leave.

The cheapest quote is not necessarily the cheapest process. Compare both, and the decision will be based on what the business actually pays.
