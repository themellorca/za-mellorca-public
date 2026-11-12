---
hub: insights
record_id: INS-405
slug: what-a-system-of-record-is-and-why-it-matters
title: What a System of Record Is and Why It Matters
description: A system of record is the one place that holds the authoritative version of a kind of information. Declaring it stops tools competing and copies drifting.
lead: A system of record is the one place that holds the authoritative version of a kind of information. Declaring it stops tools competing and copies drifting.
category: Data and Systems
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Data and Systems
sources:
  - Make better use of data | https://www.gov.uk/guidance/make-better-use-of-data
  - Anti-Corruption Layer Pattern - Azure Architecture Center | https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer
  - The Technology Code of Practice | https://www.gov.uk/guidance/the-technology-code-of-practice
related:
  - How to Map the Flow of Information Between Business Systems | /insights/how-to-map-the-flow-of-information-between-business-systems/
  - How to decide which system owns which data | /insights/how-to-decide-which-system-owns-which-data/
  - How to Know When Your Operating System Has Outgrown the Business | /insights/how-to-know-when-your-operating-system-has-outgrown-the-business/
summary: A system of record is the one place that holds the authoritative version of a kind of information. Declaring it stops tools competing and copies drifting.
layout: plain
---
Ask three people in a growing business what a customer's current delivery address is, and you may get three answers. Sales has the one the customer gave at signup. The warehouse has the one on the last waybill. Accounts has the one on the invoice, typed in two years ago. Each is a reasonable copy of the truth, and each is possibly wrong. The question that matters is not who is right today but where the right answer is supposed to live.

That place is called a system of record. The term sounds technical, but the idea is plain, and understanding it prevents a large share of the quiet, expensive confusion that comes from running several software tools side by side.

## A plain definition

A system of record is the one system that holds the authoritative version of a particular kind of information. When two copies disagree, the system of record wins. It is where a change is made first, and every other system that needs that information either reads it from there or receives it from there.

Two points are worth drawing out. First, the term applies to a type of information, not to a whole business. Your accounting package may be the system of record for invoices and ledgers, your customer relationship tool for contact details and agreed terms, and your stock system for quantities on hand. Different information can have different authorities. Second, a system of record is not the same as a system that is used most. A spreadsheet may be open on twenty desks and still not be the authority for anything, because nobody agreed it should be.

## What goes wrong without one

When no system of record is declared, every tool becomes a rival. Staff update the version they happen to be looking at, and the others fall behind. The consequences are practical rather than theoretical:

- **Duplicate and conflicting records.** The same customer appears under two spellings with different credit limits, as described in [how duplicate customer records are created](/insights/how-duplicate-customer-records-are-created/).
- **Corrections that do not stick.** Someone fixes a phone number in one tool, and a nightly update from another tool overwrites it with the old one.
- **Reports that disagree.** The sales report and the finance report give different totals for the same month, and meetings are spent arguing about whose is right.
- **Automation that spreads the error.** A connection between systems copies a wrong value faster and further than a person could.
- **Weak foundations for new tools.** Anything you add, including reporting dashboards and AI assistants, inherits whichever version it was pointed at.

Government guidance on data use in the UK makes the benefit of the opposite arrangement explicit. It describes [infrastructure and services containing consistent information](https://www.gov.uk/guidance/make-better-use-of-data) as one of the gains from using data more effectively, alongside only collecting the data you need and only collecting it once. Collecting once is almost impossible unless you have decided where it is kept.

## System of record, source of truth and copy

People use several overlapping terms, so it helps to separate them.

- The **system of record** is the owner of the data. Changes are made here.
- A **copy** is a read-only reflection in another system, kept so that people can work without switching tools. It may be delayed by minutes or by a day.
- A **report or extract** is a point-in-time snapshot. It is useful for analysis and dangerous as a source for changes.

The rule that holds the arrangement together is simple: edit in one place, read from many. If staff can edit a customer's address in three tools, you do not have a system of record, you have three competing ones. This does not mean everyone must open the authoritative tool. It means that when someone changes a copy by hand, the change needs a route back to the authority, or the copy needs to be locked so that it cannot be changed.

## How to choose which system it should be

Our guide on [how to decide what should be the system of record](/insights/how-to-decide-what-should-be-the-system-of-record/) goes through the selection in detail. In brief, test each candidate against four questions.

1. **Who creates this information first?** The tool where the data enters the business is often the natural authority.
2. **Who has the most to lose if it is wrong?** Prices and bank details belong where mistakes are costliest and controls strongest.
3. **Which tool has the controls you need?** Look for permissions, change history and the ability to record who changed what and when.
4. **Which tool will you still have in three years?** Government technology guidance advises that [your data should not depend on the lifecycle of your technology or service](https://www.gov.uk/guidance/make-better-use-of-data), so that you can keep using it for as long as you need. A system of record that cannot export its data cleanly is a risk.

It is sometimes right to choose a system that is not the most pleasant to use, because it is the one with the controls. Staff can still work in friendlier tools provided those tools read from and write to the authority.

## Different departments, different views

Declaring a system of record does not mean every department sees the same screen. Sales cares about the history of conversations, the warehouse about delivery windows and finance about payment terms. They can all draw on one underlying record while seeing the parts they need. We cover this in [one customer record, three teams, three useful views](/insights/one-customer-record-three-teams-three-useful-views/). The point is that the views are presentations of one record, not separate versions of it.

## When two systems must talk

If the authoritative system and a working tool disagree about structure, for instance one stores a full name in a single field and another splits it, a translation is needed. Microsoft's architecture guidance on the anti-corruption layer pattern describes placing a [facade or adapter layer between subsystems that do not share the same semantics](https://learn.microsoft.com/en-us/azure/architecture/patterns/anti-corruption-layer). The government's Technology Code of Practice sets the expectation in its own words: [technology should work with existing technologies, processes and infrastructure in your organisation, and adapt to future demands](https://www.gov.uk/guidance/the-technology-code-of-practice). For a small business this might be a single, documented mapping that sits in the integration, rather than a rule spread across spreadsheets. The principle holds at any size: keep the translation in one visible place, and keep it away from the authority itself.

## Recording the decision

A system of record is a decision, and a decision that lives only in someone's head will be quietly reversed when that person leaves. Write it down in a short table: the type of information, the authoritative system, the named owner, the systems that hold copies, the direction of flow and how often copies refresh. A table of ten to twenty rows is enough for most small and mid-sized businesses. Review it when you add software or retire a tool, since each new tool arrives with its own idea of what it owns. The wider consequences of leaving this undecided are shown in [when duplicate records start causing operational problems](/patterns/when-duplicate-records-start-causing-operational-problems/).

## Practical next actions

1. List the ten kinds of information your business cannot function without, such as customers, suppliers, products, prices, stock, invoices, staff and contracts.
2. For each, name the one system that should be the authority, and write down who owns it and who may change it.
3. Find every other tool that holds a copy, and mark each copy as read-only, refreshed automatically, or needing a manual route back to the authority.
4. Take a sample of twenty customer records across two systems and count how many differ, so you know the size of the problem before you start fixing it.
5. Remove or lock edit rights on copies where staff currently make changes, and tell them where changes should be made instead.
6. Put the table where staff and suppliers can see it, and add a check to your software purchase process asking which information the new tool will own.

A system of record does not need to be elaborate. It needs to be chosen, written down and respected, so that when two numbers disagree, everyone already knows which one to believe.
