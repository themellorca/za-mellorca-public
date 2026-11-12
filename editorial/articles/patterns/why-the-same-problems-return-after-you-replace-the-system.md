---
hub: patterns
record_id: PAT-036
slug: why-the-same-problems-return-after-you-replace-the-system
title: Why the Same Problems Return After You Replace the System
description: The old system was blamed for missed orders, late reports and duplicate capture. A year after the new one went live, the same complaints are back. When information flow is broken, replacing the software usually moves the break rather than fixing it.
lead: The old system was blamed for missed orders, late reports and duplicate capture. A year after the new one went live, the same complaints are back. When information flow is broken, replacing the software usually moves the break rather than fixing it.
category: Disconnected Systems & Integration Friction
published_date: 2026-10-05
updated_date: 2026-10-05
eyebrow: Disconnected Systems & Integration Friction
pattern_family: Disconnected Systems & Integration Friction
observable_condition: A business replaces a system to solve recurring operational problems, and within months the same delays, errors and workarounds reappear around the new system.
primary_identification: A broken information flow, where the problem lies in how, when and by whom information moves between steps, misattributed to the software that happens to hold it.
commercial_value_dimensions: Cost, capacity, speed, risk and return on technology investment
sources:
  - Value Stream Mapping Overview - Lean Enterprise Institute | https://www.lean.org/lexicon-terms/value-stream-mapping/
  - How the discovery phase works | https://www.gov.uk/service-manual/agile-delivery/how-the-discovery-phase-works
  - About the Business Process Model and Notation Specification Version 2.0.2 | https://www.omg.org/spec/BPMN/2.0.2/About-BPMN
related:
  - When Staff Get Blamed for Errors Their Systems Created | /patterns/when-staff-get-blamed-for-errors-their-systems-created/
  - When One Change Has to Be Made in Every System You Own | /patterns/when-one-change-has-to-be-made-in-every-system-you-own/
  - Why Information Has to Be Copied From One System to Another | /patterns/why-information-has-to-be-copied-from-one-system-to-another/
summary: The old system was blamed for missed orders, late reports and duplicate capture. A year after the new one went live, the same complaints are back. When information flow is broken, replacing the software usually moves the break rather than fixing it.
layout: plain
---
## Observable condition

For two years, staff complained about the old system. Orders went missing, reports were late, information had to be captured twice and nobody trusted the stock figures. Management agreed it was time to replace it. A new platform was chosen after demonstrations, data was migrated, staff were trained and the business went live.

The first months felt better. The screens were cleaner and some reports were faster. Then the familiar complaints came back. Orders still waited for someone to approve them. Branches still kept their own spreadsheets. Stock figures still disagreed with what was on the shelves. The new system was now being described in the same terms as the old one.

An illustrative example: a KwaZulu-Natal manufacturer with about ninety staff replaced its ageing order and production system because production planners never had accurate order information. After go-live, planners still worked from a printed list prepared each afternoon by the sales office, because sales orders were still only confirmed once a customer's emailed purchase order had been checked by hand. The new system held the information well. It still received it too late.

## Realisation

Software holds and processes information. It does not decide when information is captured, who is responsible for it, what happens when it is incomplete or how it reaches the next person who needs it. Those decisions make up the information flow, and they usually survive a system replacement intact, because nobody looked at them separately from the software.

Lean practice has long separated the two. The Lean Enterprise Institute describes value stream mapping as a diagram of every step in both the material flow and the information flow from order to delivery, and defines the information flow as what tells each process what to make or do next and when. A business can replace every screen in that diagram and leave the information flow unchanged.

Public-sector digital teams have learned the same lesson the hard way. The UK Government Digital Service guidance on discovery says teams should understand the problem before committing to a solution, and should not start building in discovery. The point is not bureaucracy. It is that the shape of the problem decides whether new software can solve it.

**Realisation prompt:** which of the complaints about your current system would still be true if the same people followed the same steps in a different system?

## Identification

This is a pattern of misattributed information flow problems: delays, errors and workarounds caused by how information moves between people and steps, blamed on the system that holds it. The visible symptom is recurring operational frustration. The common assumption is that the software is inadequate. The structural cause is that information is captured late, incompletely or in the wrong place, passed on by hand, or depends on steps outside the system altogether.

It is related to [signs your business needs an operating system, not another app](/patterns/signs-your-business-needs-an-operating-system-not-another-app/), which looks at adding tools. This Pattern concerns the decision to replace one, and why that decision so often disappoints.

## Diagnosis

- **Information enters too late.** Key facts arrive by email, phone or paper and are only captured after someone checks them, so downstream steps wait regardless of how good the system is.
- **Steps live outside the system.** Approvals, checks and handovers happen in conversation or spreadsheets. Migration moves the data but not these steps, which continue unchanged beside the new platform.
- **The old process was configured into the new system.** To ease adoption, the new platform is set up to mirror existing forms and stages, including their weaknesses.
- **Ownership of information was never defined.** It is unclear who is responsible for capturing, correcting and releasing each piece of information.
- **Requirements came from screens, not flow.** Selection focused on features and demonstrations rather than on how work and information need to move.

## Commercial impact

The commercial value at stake is the return on technology investment, capacity, speed and risk.

A replacement that does not address the flow carries the full cost of selection, licensing, migration, training and disruption, while leaving the original problem in place. Staff confidence in change drops, which makes the next improvement harder. Workarounds return and are now harder to see, because management believes the problem was solved. The business may also lose time it could have spent fixing the flow directly, which is often cheaper than replacing software.

The related Impact analysis on [buying software for every process problem](/impact/buying-software-for-every-process-problem/) examines the cost side of this habit.

## Common misidentification

When problems return after go-live, the usual explanations are poor adoption, inadequate training or a weak vendor. Each can contribute. But if staff are bypassing the new system to keep work moving, they may be responding sensibly to a flow that the system does not support. The Insight on [why technology implementations fail after go-live](/insights/why-technology-implementations-fail-after-go-live/) covers these explanations in more detail.

The opposite mistake is also common: concluding that the business has chosen the wrong product and starting another selection.

## Possibility

In a better state, the business maps how information moves before it decides what software to buy. It knows where each important piece of information is created, who owns it, when it must reach the next step and what happens when it is wrong or missing. Some problems turn out to be fixable inside the current system. Others clearly need new capability, and the requirements for that capability describe the flow rather than a list of features.

For the manufacturer, the decisive change was not the platform but a rule that customer purchase orders were captured and confirmed in the system on the day they arrived, with exceptions flagged to a named person.

## Intervention

1. **List the complaints.** Collect the specific problems that are driving the wish to replace the system.
2. **Trace each one to the flow.** For each complaint, follow the information involved from where it originates to where it is used. Note every delay, handover, re-capture and step outside the system.
3. **Map current state simply.** A clear diagram of who does what, with what information, is enough. Standards such as BPMN, which the Object Management Group describes as the de facto standard for business process diagrams, help where precision matters. The Insight on [how to map a business workflow without making it complicated](/insights/how-to-map-a-business-workflow-without-making-it-complicated/) offers a lighter approach.
4. **Separate flow faults from software faults.** Mark which problems would persist in any system and which are genuinely limits of the current one.
5. **Fix flow faults first.** Change capture points, ownership and handovers. Many improvements need no new software.
6. **Write requirements from the flow.** If replacement is still justified, describe how information must move, and test vendors against that.

## Practical diagnostic questions

- Have you replaced a system before and seen the same problems return?
- Where does the most important information in your process first arrive, and how long before it is captured?
- Which steps in your process happen outside any system?
- Were your current system's requirements written as features or as how work and information must flow?
- Who owns the accuracy of the information each step depends on?

## Bottom line

New software can only work with the information it is given, when it is given it. If information arrives late, sits outside the system or has no owner, a replacement inherits the same problems at considerable cost. Mapping and fixing the information flow first either solves the problem without a new system or makes sure the next system is chosen for the right reasons.
