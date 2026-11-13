---
hub: patterns
record_id: PAT-283
slug: why-special-customer-arrangements-get-harder-as-the-business-grows
title: The Cost of Scaling Exceptions
description: Special prices, terms and delivery rules are easy at ten customers and costly at two hundred. Here is why exceptions multiply, and how to keep the useful ones.
lead: Special prices, terms and delivery rules are easy at ten customers and costly at two hundred. Here is why exceptions multiply, and how to keep the useful ones.
category: Scaling & Growth Constraints
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Scaling & Growth Constraints
pattern_family: Scaling & Growth Constraints
observable_condition: Special prices, payment terms and delivery rules for individual customers live in notes and in experienced staff memory, and new staff make errors or interrupt colleagues.
primary_identification: Unmanaged exceptions: concessions are agreed informally, not recorded where the process can see them, and never reviewed, so handling cost rises faster than customer numbers.
commercial_value_dimensions: Margin, error rates, training time, staff capacity and growth efficiency
sources:
  - https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/ | https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/
  - https://learn.microsoft.com/en-us/power-automate/modern-approvals | https://learn.microsoft.com/en-us/power-automate/modern-approvals
  - https://learn.microsoft.com/en-us/power-automate/overview-cloud | https://learn.microsoft.com/en-us/power-automate/overview-cloud
summary: Special prices, terms and delivery rules are easy at ten customers and costly at two hundred. Here is why exceptions multiply, and how to keep the useful ones.
layout: plain
---
## Observable condition

When the business had ten customers, saying yes to an unusual request was easy. One customer wanted invoices on the 25th instead of month end. Another wanted a part-delivered order held for a later truck. A third wanted a special price on one line. The owner or an experienced administrator handled each by hand, and each customer was delighted.

Now there are two hundred customers, and the exceptions have grown with them. The administrator keeps a mental list of who gets what. A new employee sends a standard invoice and receives a phone call. Someone is always the person who knows the one customer who has to be treated differently, and the business slows down in ways that are hard to point at.

An illustrative example: a Bloemfontein agricultural supplies company that grew from three to thirty staff. Its pricing, payment terms and delivery conditions now differ for most large customers, and the rules sit in emails, notes and the head of the senior bookkeeper.

## Realisation

The realisation is that an exception is a promise to repeat a special effort. A single exception costs almost nothing. The cost appears when exceptions accumulate, because each one has to be remembered, found and applied correctly every time, by someone who often was not there when it was agreed.

Growth makes this worse in a particular way. The number of customers, products and staff all rise together, and the number of combinations rises faster than any of them. The business that managed ten special cases by memory cannot manage two hundred by memory, yet nobody ever decided to stop relying on it.

Microsoft's guidance on building operationally sound workloads, in the [Azure Well-Architected operational excellence pillar](https://learn.microsoft.com/en-us/azure/well-architected/operational-excellence/), stresses standardised, repeatable processes and automation as the way to reduce errors as systems grow. That guidance is written for cloud workloads, but the principle applies to any operation: what must be done by hand and remembered does not scale.

**Realisation prompt:** how many customers or suppliers get special treatment in your business, and where is that treatment written down?

## Identification

This is a pattern of unmanaged exceptions. The visible symptom is a growing number of special cases that depend on particular people. The common assumption is that this is the price of good service, or that new staff simply need time to learn the customers. The structural cause is that exceptions are granted informally, are not recorded where the process can see them, and are never reviewed.

It extends the situation in [when manual exceptions become the normal process](/patterns/when-manual-exceptions-become-the-normal-process/), which describes how exceptions take over. This pattern concentrates on the cost that appears when a business grows while its exceptions are still handled by hand.

## Diagnosis

- **Exceptions are agreed in conversation.** A promise made on a call or in a message is not recorded anywhere the next person will look. The memory of the person who made it becomes the system.
- **There is no standard to compare against.** Without a clear default, nobody can tell whether a customer's treatment is an exception or simply how things are done.
- **Nobody has authority to decline.** Staff grant exceptions to keep a customer happy, and each one is reasonable in isolation. No one is asked what the total looks like.
- **Exceptions never expire.** A temporary concession during a difficult month becomes permanent because nobody scheduled its end.
- **Systems cannot hold them.** The invoicing or order tool has fields for the standard case, so exceptions live in notes, flags and workarounds around it.
- **Handling them is invisible work.** Checking a note, adjusting an invoice by hand and answering a query take minutes each, and nobody records the sum. Approval and routing tools such as [Power Automate approvals](https://learn.microsoft.com/en-us/power-automate/modern-approvals) can make a decision and its owner visible, but only if the business has first defined what needs approval.

## Commercial impact

The value at stake is margin, error rates, staff capacity, the speed at which new people become effective and the ability to grow without adding overhead in proportion.

The first cost is errors. A special price applied to the wrong invoice, a hold ignored, a payment term forgotten: each produces a credit note, an apology or a dispute. The more exceptions, the more of these there are, and they rise faster than customer numbers.

The second is training time. A new employee must learn the standard process and then the long tail of exceptions. Until they do, they depend on a few experienced colleagues, who become interrupted constantly. The Moment [the manager who can't act without the founder](/moments/the-manager-who-cant-act-without-the-founder/) describes the dependence this creates.

The third is margin leakage. Discounts and concessions that were never reviewed continue indefinitely. Nobody can say what the exceptions together cost, because nobody has added them up.

The fourth is a ceiling on growth. If every new customer brings new special handling, the business needs more experienced people to cope, and the cost of each additional customer stops falling. The Discovery note on [human exception queues growing faster than automated throughput](/discovery/human-exception-queues-grow-faster-than-automated-throughput/) shows the same pattern at the level of queues.

## Common misidentification

The usual belief is that flexibility is a competitive advantage and should not be touched. Some of it is. But treating all exceptions as valuable stops anyone from asking which ones are. Another reaction is to tighten up and refuse all special requests, which loses good customers for no benefit. A third is to buy a larger system, expecting it to absorb the complexity, when the real issue is that nobody knows what the exceptions are.

## Possibility

In a better state, every exception is recorded where the process can see it, with an owner, a reason, a value and a review date. The standard process is clear, so deviations stand out. Common exceptions that repeat are turned into options in the process, such as an alternative invoicing date, and are no longer treated as favours. Rare ones stay manual but are visible.

Growth then adds customers without adding a matching amount of special knowledge. The Insight on [how to diagnose a business that runs on exceptions](/insights/how-to-diagnose-a-business-that-runs-on-exceptions/) and the one on [how to build automation that expects exceptions from the start](/insights/how-to-build-automation-that-expects-exceptions-from-the-start/) give practical ways to reach that state.

## Intervention

You do not need to remove exceptions. You need to know what they are and decide which to keep.

## Practical next actions

1. **Build an exception register.** List every customer or supplier treated differently from the standard, with what is different, who agreed it and when.
2. **Estimate the cost.** For the ten largest exceptions, estimate the minutes of extra handling per month and any discount or margin given up.
3. **Sort into three groups.** Mark each as worth keeping, to be turned into a standard option, or to be ended.
4. **Set review dates.** Give every retained exception an expiry or review date so concessions do not become permanent by default.
5. **Decide who may grant exceptions.** Name the roles with authority, and require that any exception granted is entered in the register the same day.
6. **Put the rules where staff will see them.** Attach the exception to the customer record or order, so the person invoicing sees it without having to ask.

## Diagnostic questions

- How many customers or suppliers are treated differently from the standard?
- Could a new employee find those differences without asking a colleague?
- Who is allowed to grant an exception, and where is it recorded?
- Which exceptions have outlived the reason they were granted?
- What would the cost of handling exceptions be if the business doubled in size?

## Bottom line

Exceptions are cheap when there are few and costly when they accumulate in memory. Recording them, costing them and deciding which to keep lets the business stay responsive to customers without making every extra customer harder to serve than the last.
