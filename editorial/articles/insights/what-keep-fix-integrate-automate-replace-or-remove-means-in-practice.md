---
hub: insights
record_id: INS-018
slug: what-keep-fix-integrate-automate-replace-or-remove-means-in-practice
title: What Keep, Fix, Integrate, Automate, Replace or Remove Means in Practice
description: Every systems review ends with a decision for each tool and process. What keep, fix, integrate, automate, replace and remove actually mean, the evidence each needs, what each commits the business to, and why fixing and integrating usually deliver more than replacing.
lead: Every systems review ends with a decision for each tool and process. What keep, fix, integrate, automate, replace and remove actually mean, the evidence each needs, what each commits the business to, and why fixing and integrating usually deliver more than replacing.
category: Systems & Strategy
published_date: 2026-10-04
updated_date: 2026-10-04
eyebrow: Systems & Strategy
sources:
  - Gartner® TIME Model: Effective Application Portfolio Mgmt - LeanIX | https://www.leanix.net/en/wiki/apm/gartner-time-model
  - About the migration strategies - AWS Prescriptive Guidance | https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html
  - Asset management | https://www.ncsc.gov.uk/collection/10-steps/asset-management
related:
  - Piling on more software is not digital maturity | /insights/piling-on-more-software-is-not-digital-maturity/
  - The hidden cost of operational friction in digital systems | /insights/hidden-cost-of-operational-friction/
  - How to buy business software without letting the demo make the decision | /insights/how-to-buy-business-software-without-letting-the-demo-make-the-decision/
summary: Every systems review ends with a decision for each tool and process. What keep, fix, integrate, automate, replace and remove actually mean, the evidence each needs, what each commits the business to, and why fixing and integrating usually deliver more than replacing.
layout: plain
---
Any serious review of a business's systems ends with a set of decisions. For each application, spreadsheet, integration and process, something has to happen next, even if that something is "leave it alone". Six words cover almost every option: keep, fix, integrate, automate, replace or remove.

The words are simple. The trouble is that they are often used loosely. "Replace" gets chosen when "fix" would do. "Automate" is applied to processes that need fixing first. "Keep" quietly becomes "ignore". This article sets out what each decision actually means, what evidence should support it and what it commits the business to.

## Where the six decisions come from

Larger organisations use similar frameworks to rationalise their application portfolios. Gartner's TIME model, explained in this [overview from LeanIX](https://www.leanix.net/en/wiki/apm/gartner-time-model), sorts applications into tolerate, invest, migrate and eliminate according to two dimensions: how well the application supports the business, and how sound it is technically. Amazon Web Services' guidance on [migration strategies](https://docs.aws.amazon.com/prescriptive-guidance/latest/large-migration-guide/migration-strategies.html) uses seven options, including retire, retain and repurchase, with clear use cases for each.

Those frameworks were built for large IT estates. Small and mid-sized businesses need something closer to the work. The six decisions here apply to processes and the tools around them, not only to software, and they deliberately separate integrate and automate, because for smaller businesses those are often the most valuable moves.

## The six decisions at a glance

| Decision | Use it when | It commits you to |
| --- | --- | --- |
| Keep | It does the job well enough and changing it would cost more than it returns | An owner, a review date and normal maintenance |
| Fix | The tool is right but the way it is set up or used is causing problems | Configuration, data clean-up, training and process changes |
| Integrate | Two sound systems hold related information and people move it by hand | A defined data flow, an owner and monitoring |
| Automate | A stable, well-understood process involves repetitive, rule-based steps | Clear rules, exception handling and a failure path |
| Replace | The tool cannot meet a real requirement even after reasonable fixing | Selection, migration, retraining and a period of disruption |
| Remove | It no longer serves a purpose, duplicates another tool or adds risk | Data retention or export, access removal and cancelling the contract |

## Keep

Keep is a positive decision, not a default. It means the business has looked at the system and concluded that it does its job well enough and that changing it would cost more than it returns. That is often the right call: a basic tool that people use reliably is worth more than a better one that nobody adopts.

What keep should never mean is "nobody looked at it". A kept system still needs a named owner, someone responsible for its renewals and access, and a date when the decision will be revisited.

## Fix

Fix applies when the tool is fundamentally right but the way it has been set up or used is the problem. Typical signs are unused features that would solve current complaints, inconsistent data entry, duplicate records, permissions that do not match roles or a process that bypasses the system for one step.

Fix is the most underused decision. Businesses often reach for replacement when the issues would follow them to any new system, because they are caused by configuration, data or habits, not the product. A fair test: if you replaced this tool tomorrow, would the same problems appear in the new one within six months?

## Integrate

Integrate means connecting two systems so that information flows between them without being re-keyed. It is the right decision when both systems are sound in their own right, they hold related information and people are currently acting as the link between them.

Integration is not just a technical connection. It requires a decision about which system owns each piece of data, what happens when the connection fails and who notices. [What a good system integration actually does](/insights/what-a-good-system-integration-actually-does/) covers those requirements in more detail.

## Automate

Automate means letting a system perform steps that people currently do by hand: sending reminders, routing approvals, creating records, generating documents. It suits work that is frequent, rule-based and stable.

The critical condition is that the process must already work. Automating a process with unclear rules or frequent exceptions speeds up the confusion and hides it from view, which is why [automating a broken process makes the problem worse](/insights/why-automating-a-broken-process-makes-the-problem-worse/). In practice, many items that start as automate candidates become fix first, automate second.

## Replace

Replace means moving to a different product. It is justified when the current system genuinely cannot meet an important requirement after reasonable fixing, when it is no longer supported, when its costs have become disproportionate or when it blocks integration the business needs.

Replacement is the most expensive and disruptive of the six. AWS's own guidance notes that replacing an application involves training users, migrating data, integrating authentication and configuring connections, on top of the purchase itself. For a smaller business, the hidden cost is usually the months of reduced productivity while people learn the new system and the old one's quirks are rediscovered in the new one. Choose replace when the evidence is strong, not because a demo looked better.

## Remove

Remove means retiring a system, spreadsheet, integration or process entirely. Candidates include tools that duplicate another, subscriptions nobody uses, automations for processes that no longer exist and old systems kept running "just in case". The UK National Cyber Security Centre's [asset management guidance](https://www.ncsc.gov.uk/collection/10-steps/asset-management) recommends decommissioning systems that are no longer needed, because unused systems still carry risk.

Removal needs an exit plan: what data must be kept or exported, who still has access, what depends on it and when the contract ends. [How to decide which software to remove](/insights/how-to-decide-which-software-to-remove/) sets out the tests to apply first.

## An illustrative example

Consider a hypothetical Bloemfontein property management company with about 35 staff, reviewing eight tools and processes after a period of growth. Its decisions might look like this: keep the accounting package, which works well; fix the property management system, where half the features were never configured and tenant records were duplicated; integrate the property system with accounting so rental invoices stop being re-keyed; automate lease renewal reminders once renewal rules were written down; replace a desktop maintenance-request tool that the vendor no longer supported; and remove two overlapping file-sharing subscriptions and an old spreadsheet that had been superseded but was still being updated by one person.

Only one of the eight items needed new software. Most of the value came from fixing, integrating and removing, which is typical.

## Making the decisions well

1. **Decide per item, not per system category.** Two tools of the same type can deserve opposite decisions.
2. **Base each decision on evidence.** Workarounds, error rates, re-keying, cost and user complaints, not preferences.
3. **Respect the order.** Fix before automate. Decide data ownership before integrate. Plan the exit before remove.
4. **Record the reason and the owner.** A decision without an owner is not a decision.
5. **Sequence the work.** Some decisions depend on others, such as an integration that should wait until a replacement is in place.
6. **Review annually.** Today's keep can become next year's replace as the business changes.

## The trade-offs

Every decision has a cost of doing it and a cost of not doing it. Keep risks complacency; replace risks disruption; automate risks speeding up a flaw; remove risks losing something that turned out to matter. The value of using six clear words is that it forces each of those trade-offs into the open, item by item, instead of leaving them buried in a general sense that "the systems need sorting out". Turning those decisions into a sequenced plan is the purpose of a [systems architecture roadmap](/services/digital-systems-architecture-roadmap/).
