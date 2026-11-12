---
hub: moments
record_id: STORY-ANGLE-000036
slug: the-attention-spent-remembering-what-systems-should-remember
title: The Attention Spent Remembering What Systems Should Remember
description: VAT returns, licence renewals, insurance reviews, recurring invoices: in many small businesses, the calendar of obligations lives in one person's head. What that quietly costs them, and how to move the remembering into the systems.
lead: VAT returns, licence renewals, insurance reviews, recurring invoices: in many small businesses, the calendar of obligations lives in one person's head. What that quietly costs them, and how to move the remembering into the systems.
category: Time & Attention
published_date: 2026-10-06
updated_date: 2026-10-06
eyebrow: Time & Attention
thematic_domain: time_and_attention
human_situation: An owner, bookkeeper or financial manager carries the business's calendar of tax returns, renewals, reviews and recurring invoices in memory, supplemented by scattered personal reminders.
human_dividend: Attention released from continuously guarding dates, and the predictability of reminders that arrive reliably, including when the person is on leave.
trade_off: Writing the calendar down takes effort from the busiest person; reminders can become noise; automation can miss changed circumstances; some people value being the one who knows; an unmaintained calendar gives false confidence.
epistemic_state: HYPOTHESISED: the attention cost of carrying an obligations calendar in memory is reasoned rather than measured; VAT obligations and tool capabilities are OBSERVED in SARS and vendor documentation; the engineering firm example is illustrative.
sources:
  - Obligations of a VAT vendor - South African Revenue Service | https://www.sars.gov.za/types-of-tax/value-added-tax/obligations-of-a-vat-vendor/
  - Tax periods for VAT - South African Revenue Service | https://www.sars.gov.za/types-of-tax/value-added-tax/tax-periods-for-vat-vendors/
  - Run a cloud flow on a schedule in Power Automate - Power Automate | https://learn.microsoft.com/en-us/power-automate/run-scheduled-tasks
  - Specify when and how to receive workflow notifications - Business Central | https://learn.microsoft.com/en-us/dynamics365/business-central/across-how-to-specify-when-and-how-to-receive-notifications
related:
  - The Saturday Morning Spent on Invoices | /moments/the-saturday-morning-spent-on-invoices/
  - When Payroll Week Means Late Nights for One Person | /moments/when-payroll-week-means-late-nights-for-one-person/
  - When Your Calendar Belongs to Other People's Systems | /moments/when-your-calendar-belongs-to-other-peoples-systems/
summary: VAT returns, licence renewals, insurance reviews, recurring invoices: in many small businesses, the calendar of obligations lives in one person's head. What that quietly costs them, and how to move the remembering into the systems.
layout: plain
---
There is a kind of knowledge that rarely appears on any job description. The VAT return is due at the end of next month. The vehicle licence disc on the bakkie expires in March. The insurance broker wants updated asset values before renewal. The cloud accounting subscription renews annually on a card that expires in June. Three clients are invoiced on the first of every month, but one of them has a different amount since the contract changed.

In many small and mid-sized businesses, all of this sits in one person's memory: often the owner, sometimes a bookkeeper or office manager who has been there for years. They are very good at it. The business runs smoothly partly because they never forget. But remembering is work, and it is work that systems are capable of doing.

## A calendar nobody wrote down

Some of these obligations are set by law. The South African Revenue Service, for example, requires VAT vendors to submit returns and make payment by the 25th of the month following the end of their tax period, or by the last business day of the month for those who file and pay through eFiling. Late payment attracts penalties and interest. The tax period itself depends on the vendor's category: SARS describes categories that file every two months, monthly, every six months or annually, depending on turnover and type of business. A vendor also has to keep records for five years.

None of that is complicated on its own. The difficulty is that it sits alongside dozens of other dates that are not set by law but matter just as much: supplier contracts that roll over unless cancelled, domain names, software subscriptions, equipment services, staff probation reviews, client price increases. Each has its own rhythm, and some carry a cost when missed: Mellorca has looked at what happens when [supplier contracts renew without review](/impact/supplier-contracts-renewing-without-review/). Together they form a calendar that is rarely written down in one place.

## An illustrative case

Consider a Polokwane engineering firm with about twenty staff. The financial manager has been there twelve years. She files VAT on the bi-monthly cycle, knows which client contracts escalate in January, remembers that the server warranty lapses in August, and keeps a mental note that the company's professional indemnity cover needs reviewing before a big tender. She uses Outlook reminders for some of it, a desk diary for some of it, and her own memory for the rest.

The arrangement works, and that is precisely why it is rarely questioned. Its costs are only visible from the inside:

- **Constant background checking.** She scans ahead most mornings to see what is coming, because no single place will tell her.
- **Anxiety about the gaps.** She knows her method has holes, so some of her attention is always spent wondering what she has missed.
- **Difficulty taking leave.** Two weeks away means briefing someone on a calendar that exists mainly in her head, or checking in from holiday.
- **A business exposed to one person.** If she left or fell ill, the firm would discover its obligations one missed deadline at a time.

The last point connects to a theme Mellorca has explored in [how to design workflows that can survive staff changes](/insights/how-to-design-workflows-that-can-survive-staff-changes/). This piece is concerned with the first three: what the arrangement takes from the person holding it while things are going well.

## The human tax: attention and cognitive load

It is worth being careful here. No source cited in this piece measures how much mental effort small-business finance staff spend tracking deadlines, and it would be wrong to claim to know how any individual feels about it. Some people find keeping a calendar of obligations satisfying, and are proud of never missing a date.

What can be said, as a reasoned inference, is that remembering is a continuous task rather than a periodic one. A system that sends a reminder on the right day asks for attention once. A person who is the reminder system has to keep the whole calendar partly active all the time, because there is no other safeguard. That is the attention tax: not the effort of filing the return, but the effort of never forgetting that it exists.

A second tax is predictability. When obligations are remembered rather than recorded, every week carries a small risk of a surprise: a renewal invoice nobody expected, a penalty notice, a lapsed cover. The person responsible lives with that low-level uncertainty. Mellorca has looked at the financial side of the same surprise in [why contract renewals surprise finance and operations](/discovery/why-contract-renewals-surprise-finance-and-operations/).

## What could change

The change is not complicated, but it does take a few deliberate hours.

1. **Write the calendar down once.** List every recurring obligation: statutory returns, renewals, reviews, recurring invoices. For each, record the date, the lead time needed, the owner and what "done" looks like. A shared spreadsheet is a perfectly good start.
2. **Let systems send the reminders.** Most business software can do this. Microsoft's Power Automate documentation, for example, describes cloud flows that run on a schedule, such as every week on a set day, and send an email reminding someone that a document is due. Accounting and workflow tools commonly offer similar scheduled notifications. Business Central lets approvers choose to receive notifications instantly or on a daily, weekly or monthly schedule, including reminders about overdue items.
3. **Make the routine work run itself where possible.** Recurring invoices with fixed amounts can often be generated automatically, leaving people to handle the exceptions.
4. **Give each obligation a second name.** A backup person for each item means leave and illness do not leave a gap.
5. **Review the calendar quarterly.** New contracts, cancelled subscriptions and changed tax periods all need updating. A calendar that drifts out of date becomes another thing to remember.

For the illustrative engineering firm, the financial manager would still be in charge. The difference is that the calendar would exist outside her head, and she could stop scanning ahead each morning because the reminders would come to her.

## Trade-offs

- **Setup takes effort.** Writing down a calendar that has lived in someone's memory for years is real work, and it falls on the person who is already busiest.
- **Reminders can become noise.** If every item generates several emails, people learn to ignore them. Fewer, well-timed reminders are better than many.
- **Automation can hide judgement.** An automatically generated invoice will not notice that a client relationship has changed. Exceptions still need a human eye.
- **Some people value being the one who knows.** Moving the calendar into a system can feel like losing standing or expertise. That feeling deserves respect and a conversation, not dismissal.
- **A system is only as good as its upkeep.** An out-of-date calendar gives false confidence, which may be worse than a well-kept memory.

## Why it matters

The business case is fewer missed deadlines, fewer penalties and less exposure to one person's absence. The human case is about what is freed up. Attention that is no longer standing guard over a hundred dates can go to the work that needs judgement, or simply be at rest. A person whose obligations are recorded rather than remembered can take two weeks off without briefing a stand-in on the contents of their head.

That is the dividend: attention returned, and the predictability of knowing that the systems will remember even on the days the person does not.
