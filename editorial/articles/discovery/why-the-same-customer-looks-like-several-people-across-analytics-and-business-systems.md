---
hub: discovery
record_id: DISC-265
slug: why-the-same-customer-looks-like-several-people-across-analytics-and-business-systems
title: Customer identity differs across analytics domains
description: Marketing, finance and support each count customers differently. Why identity fragments across domains and how a shared definition and identifier produce one defensible number.
lead: Marketing, finance and support each count customers differently. Why identity fragments across domains and how a shared definition and identifier produce one defensible number.
category: Data, Reporting & Decision Systems
published_date: 2026-11-01
updated_date: 2026-11-01
eyebrow: Data, Reporting & Decision Systems
problem_domain: Data, Reporting & Decision Systems
problem_owner: Head of data or analytics, working with the finance director
budget_owner: Chief financial officer, finance director or managing director
sources:
  - User-ID - Analytics Help | https://support.google.com/analytics/answer/9355972
  - Set up cross-domain measurement - Analytics Help | https://support.google.com/analytics/answer/10071811
  - Data unification overview - Dynamics 365 Customer Insights | https://learn.microsoft.com/en-us/dynamics365/customer-insights/data/data-unification
related:
  - Why sales, finance and operations each define revenue differently | /discovery/sales-finance-and-operations-define-revenue-differently/
  - Why analysts keep rebuilding the same data joins in separate spreadsheets | /discovery/why-analysts-keep-rebuilding-the-same-data-joins-in-spreadsheets/
  - Why reports keep recalculating figures your systems already produce | /discovery/reports-recalculate-figures-already-available-upstream/
summary: Marketing, finance and support each count customers differently. Why identity fragments across domains and how a shared definition and identifier produce one defensible number.
layout: plain
---
The marketing dashboard says the business had 9,400 customers last quarter. The finance report says 6,100. The support tool counts 7,800 people who contacted it. The e-commerce platform has its own total, and none of them match. Each number is correct inside its own system. The trouble starts in the management meeting, when someone asks how many customers there are and the room spends twenty minutes on why the figures disagree instead of on what to do about them.

## The problem in plain language

Each system identifies a customer in its own way. A website analytics tool counts a browser cookie or a signed-in user. An accounting system counts a debtor account. A CRM counts contacts or companies. A support tool counts email addresses. When the same person buys on a laptop, calls from a mobile number and is invoiced through their employer, four systems record four different identities for one human being, and nothing joins them up.

Growth makes this worse. New brands, regional sites, an acquired business or a second storefront each add another domain with its own way of recognising customers.

## What the buyer is actually trying to solve

A head of data, finance director or operations executive searching for this problem wants a number they can defend. They want to know what a customer acquisition costs, how often customers come back, and which segments are profitable, and they cannot answer without agreement on who counts as a customer. They are usually not asking for a large data platform. They want a clear rule about identity and a modest piece of plumbing to apply it.

## Evidence and system mechanism

### Anonymous identifiers fragment a visit into many people

Google's help page on [User-ID in Analytics](https://support.google.com/analytics/answer/9355972) explains that an analytics property can recognise a person across devices and sessions when the site supplies its own signed-in identifier. Without one, activity is attributed to device-level identifiers, so one person on a phone and a laptop appears as two. The identifier has to be supplied by the business and used consistently. If one site sends an email hash and another sends an internal account number, the same person still looks like two users.

### Separate domains need deliberate joining

Google also documents [cross-domain measurement](https://support.google.com/analytics/answer/10071811), which exists because a visitor moving from one domain to another would otherwise start a new session and be counted as a new visitor. The setup must be configured for each domain, and it applies to web traffic only. It says nothing about the person who later phones, emails or is invoiced under another name. Analytics tools deal with browsing behaviour, not with the identity that the rest of the business uses.

### Unification is a matching problem with rules

Microsoft's documentation on [data unification in Customer Insights](https://learn.microsoft.com/en-us/dynamics365/customer-insights/data/data-unification) describes a staged process: map the fields from each source, define the matching rules that decide whether two records are the same customer, and merge them into a unified profile. The details belong to one product, but the shape of the work applies to any approach. Someone must decide which fields identify a person, in what order they are trusted, and what to do when two records conflict. Software applies those rules. It cannot make them up.

### Warning signs

- Customer totals differ between marketing, finance and support, and each team has a reason it is right.
- Repeat-purchase rates cannot be computed without a manual spreadsheet match.
- The same company appears under several spellings and accounts.
- Group reporting needs a monthly manual exercise to reconcile customers across brands or regions.

## Why this becomes urgent

Rapid growth is the usual trigger. An additional site, a new product line, a distributor network or an acquisition each add systems with their own definitions. The old workaround, a person who knew most customers by name, no longer scales. Urgency also rises when someone wants a customer-level view for pricing, credit exposure or retention, because those decisions need a whole-customer figure.

## Economic consequence

Marketing money is spent twice on the same person: acquisition campaigns reach existing customers, and loyal customers are treated as strangers. Credit exposure is understated when a group of related accounts is assessed separately. Customer lifetime figures are understated because the repeat purchases are attributed to other identities. Analysts spend their week matching rather than analysing. And decisions made with inconsistent totals are made more cautiously, or revisited, which costs time. The financial effects of separate records are examined in [departments keeping separate customer records](/impact/departments-separate-customer-records-financial-impact/).

## Root cause

- **No customer definition.** Is a customer a person, a household, a company or an account? Each system answered for itself. Compare [metric definitions that live in slide decks](/discovery/metric-definitions-live-in-slide-decks-not-governed-models/).
- **No shared key.** Without an identifier that every system stores, matching relies on names and emails, which change.
- **Duplicates at source.** Records are created twice at the point of entry, as explained in [how duplicate customer records are created](/insights/how-duplicate-customer-records-are-created/).
- **Nobody owns the rule.** Marketing, finance and IT each assume another team maintains the customer list.

## Practical intervention

1. **Write the definition of a customer.** One sentence per level: person, company, account. Decide which level each report uses.
2. **Choose a master identifier.** Typically the CRM or accounting customer number. Add that field to every system that can hold it, including the website sign-in.
3. **Pass the identifier into analytics.** Send a signed-in identifier to the analytics tool for known users, using a consistent format and no raw personal details.
4. **Define matching rules in order.** Exact identifier first, then verified email, then phone, and a review queue for anything fuzzy. Do not merge on name alone.
5. **Publish one customer count with a lineage note.** State which sources were used and which rules were applied, so others can see why it differs from their own.

### Trade-offs

Aggressive matching merges people who are not the same, which is worse in some contexts than leaving duplicates, especially in credit or compliance work. Conservative matching leaves duplicates that need a person to resolve. Where you set the threshold should reflect the cost of each kind of error. Also consider your privacy obligations under the Protection of Personal Information Act when combining records, and confirm purpose and consent with your information officer.

## Diagnostic questions

- How many customers do you have, and do marketing, finance and support give the same answer?
- Which field links a customer across your main systems?
- Can you compute repeat purchase rate without a manual spreadsheet match?
- Who is accountable for the matching rules?

## What good looks like

There is one written definition of a customer and one identifier that appears in every important system. Analytics, finance and support can be joined on that identifier, and the monthly customer count is the same in every report that uses it. Differences are explained by stated rules, not by surprise. The business sees a customer once, as described in [one customer record and three useful views](/insights/one-customer-record-three-teams-three-useful-views/).

## Practical next actions

1. Ask marketing, finance and support for their latest customer count and document how each system defines a customer.
2. Pick a sample of fifty customers and trace each across all systems, noting where the identifier changes or disappears.
3. Decide on the master identifier and add it as a field to the systems that lack it.
4. Configure your analytics tool to receive the identifier for signed-in visitors, and test with two known accounts.
5. Agree a named owner for matching rules and a monthly review of unresolved duplicates.

## Where Mellorca fits

Mellorca helps businesses define what a customer is, find where identities diverge between systems, and design the identifier, matching rules and reporting that bring them together. The work is deliberately incremental, so that the first reliable customer count arrives before any large platform decision. The broader condition is described in [why plenty of data still gives no single view of operations](/patterns/why-a-business-with-plenty-of-data-still-has-no-single-view-of-operations/).

## Method note

The sources describe how one analytics product handles user and cross-domain identity and how one platform unifies customer profiles. They do not measure how widespread identity mismatch is. The figures in the opening scenario are illustrative.
