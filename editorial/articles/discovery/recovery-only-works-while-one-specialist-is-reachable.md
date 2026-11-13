---
hub: discovery
record_id: DISC-379
slug: recovery-only-works-while-one-specialist-is-reachable
title: Recovery only works while one specialist is reachable
description: Recovery steps live in one specialist's head and only they run the tests. Write runbooks per critical service, have someone else run the next test from the page alone and rotate the role.
lead: Recovery steps live in one specialist's head and only they run the tests. Write runbooks per critical service, have someone else run the next test from the page alone and rotate the role.
category: Business Continuity & Resilience
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: IT operations manager or continuity lead
budget_owner: CIO
sources:
  - https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf | https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf
  - https://learn.microsoft.com/en-us/power-platform/well-architected/reliability/disaster-recovery | https://learn.microsoft.com/en-us/power-platform/well-architected/reliability/disaster-recovery
  - https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf | https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf
summary: Recovery steps live in one specialist's head and only they run the tests. Write runbooks per critical service, have someone else run the next test from the page alone and rotate the role.
layout: plain
---
Picture a Johannesburg insurer a fortnight before a new payments platform goes live. The continuity lead runs the go-live review and asks a simple question: if this platform failed at two o'clock on a Saturday morning, who would bring it back? The room answers with one name, a senior infrastructure engineer. She built the environment, she knows the order in which its parts must start, and she ran the last recovery test herself. The steps are in her head and in a private notebook on her laptop.

Two months later the platform's database fails on a Saturday while she is on a long-haul flight. The on-call team can see the failure but not the way back. They spend most of the day reconstructing the steps from old tickets and half-remembered conversations, and the platform is down until she lands and logs in from the airport. Nobody did anything wrong, and nobody was careless. The recovery simply depended on one person being reachable.

The operating condition is plain: recovery for a critical service depends on a single specialist, and the only person who has ever tested it is that same specialist. That matters to the CIO because the business has a recovery time on paper that is really a measure of how quickly one person can be found, and because that person is carrying a burden that will eventually become a resignation.

## The problem in plain language

Critical systems usually have a person who understands them better than anyone else. That person built the environment, solved its early problems and holds in their head a long list of details that never made it into a document: which service must start first, which setting must be changed after a restore, which manual step cannot be skipped.

When the system fails, the business turns to that person. It works as long as they are available. It stops working when they are on leave, ill, off the grid, in a different time zone, or have left the company.

The problem is hard to see because the system appears to be covered. There is a backup, there may be a recovery plan, and there has been a test. The test was run by the specialist, who filled in the gaps from memory as they went, so it passed. The plan has never been run by anyone who did not already know the answer.

This is related to [application owners who leave without handing over](/discovery/application-owners-leave-without-transfer/), but different. That topic is about what is lost permanently when an owner goes. This one is about what fails temporarily, and repeatedly, whenever one person cannot be reached, even though they still work for the company.

## What the buyer is actually trying to solve

IT operations managers and continuity leads ask practical questions. If our best engineer is unavailable, can someone else bring this service back, and how long would it take? When did anyone other than the expert last attempt it? What do we tell the board and the auditors about recovery time? How do we stop depending on one person without a long, expensive project?

The outcome they want is modest and specific. For each critical service, a written recovery runbook that a competent colleague can follow without help from the author, tested by that colleague, with the gaps recorded and fixed, and with the person who runs the test changing from one test to the next.

## Evidence and system mechanism

### A plan is meant to be a user's manual for someone else

NIST's [Contingency Planning Guide for Federal Information Systems](https://nvlpubs.nist.gov/nistpubs/legacy/sp/nistspecialpublication800-34r1.pdf) describes the resulting plan as a "user's manual" for executing the recovery strategy. That framing matters. A manual is written for someone who does not already know the answer.

The guide is explicit about the risk of relying on particular people. It says recovery teams should be large enough to remain viable if some members are unavailable, or that alternate team members may be designated, and that team leaders should have a designated alternate to act if the primary leader is unavailable. It notes that a disruption could make some personnel unavailable, so that executing the plan may be possible only by using people from elsewhere in the organisation or by bringing in contractors or vendors, who may be coordinated and trained as an alternate team. It also says training should aim at personnel being able to carry out their recovery roles without the plan document in front of them, in case the document itself is unavailable for the first hours.

### Testing is how the gaps are found

The same guide treats testing as the way to find what a plan lacks. It says testing enables plan deficiencies to be identified and addressed, that initial tests should take place during implementation to validate recovery procedures, and that testing should recur periodically and after organisational or system changes. A test plan should state objectives and success criteria, a schedule and the participants, and the results should be written up in an after-action report whose lessons are fed back into the plan.

Seen this way, a test run by the specialist is a weak test. It cannot reveal what is missing from the document, because the person running it supplies the missing parts without noticing.

Microsoft's guidance in the [Power Platform Well-Architected reliability pillar](https://learn.microsoft.com/en-us/power-platform/well-architected/reliability/disaster-recovery) makes related points for cloud workloads. It says that when a stage of recovery needs manual intervention, the manual steps must be documented. It says drills help operators build familiarity with recovery processes, that dry-run drills are a way to educate new operators, and that recovery procedures should be tested in non-production environments during initial deployments.

| Gap | Effect |
| --- | --- |
| Recovery steps held in one person's head or notes | Nobody else can follow them |
| Tests always run by the specialist | Missing steps are filled in silently and never found |
| No named alternate for each recovery role | Recovery waits until the one person is reachable |
| Manual steps not documented | The one step that cannot be automated is the one that gets forgotten |
| No after-action record | The same gaps appear again in the next test |
| No cross-training | The specialist carries all the knowledge and all the pressure |

### What South African law expects of the safeguards

POPIA adds a legal dimension where the service holds personal information. The [Protection of Personal Information Act, 4 of 2013](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) requires, in section 19, that a responsible party secure the integrity and confidentiality of personal information in its possession through appropriate, reasonable technical and organisational measures, including measures to prevent loss of or damage to that information. It also expects the responsible party to identify foreseeable risks, establish safeguards, verify regularly that they are effectively implemented and update them.

A recovery capability that only one person can execute is a foreseeable risk, and a test that only that person has ever run is weak evidence that the safeguard works. A documented runbook, a test run by someone else and a record of fixes are practical evidence of reasonable measures. Confirm how the Act applies to your own systems with your information officer.

## Why this becomes urgent

A new critical service going live is the usual trigger. Until then, the business can tell itself that the arrangements are good enough. When a service is about to carry real transactions, someone asks the direct question, "who can bring this back?", and the room gives a single name.

The answer is uncomfortable for everyone. The specialist knows it and is often the first to say so. The CIO realises that the recovery time in the continuity plan is really an estimate of one person's travel and sleep. The continuity lead sees a failed audit waiting to happen.

The pressure builds because the same pattern repeats across systems. The person who knows the payments platform is also the person who knows the data warehouse and the integration layer, and the team has never counted how many services depend on the same person.

## Economic consequence

The costs of key-person dependence arrive in several forms:

- **Longer outages.** Recovery waits for one person to be found, reach a laptop and get connected, or for the team to rebuild the steps without them.
- **Staff strain.** The specialist cannot take leave without risk, is called out of hours, and carries a constant background anxiety that raises the chance of burnout and resignation.
- **Key-person loss.** If the specialist leaves, the recovery capability leaves too, and the business discovers the dependence at the worst possible time.
- **Failed tests and audits.** An auditor or insurer who asks someone else to run a recovery from the documentation finds that it cannot be done, or watches a test that only works when the specialist steps in.
- **Business impact.** Payments, orders or customer service stay down for longer than the business agreed to tolerate.

As an illustrative example only, suppose the planned recovery time for a service is four hours, and the specialist is unreachable for half a day. The recovery time that the business actually has is not four hours but whatever it takes to find her, so every hour of outage is an hour that the plan did not allow for. The figures are invented, but the principle holds: the real recovery time includes the time to reach the one person who can do it.

Where the knowledge sits in people's heads, incident response also becomes improvised, which is the pattern described in [incident response that is improvised every time](/discovery/automation-incident-response-improvised/). The team makes it up each time, with the specialist's memory as the only reference.

## Root cause

The root cause is that recovery steps live in one specialist's head or private notes, and tests are always run by that same person. Neither the writing down nor the testing by someone else was ever required, so neither happened.

A second cause is that the specialist is the most efficient way to do the work. It is quicker to ask them than to write the steps, and quicker for them to run the test than to coach a colleague through it. Each shortcut is rational on the day, and together they entrench the dependence.

A third cause is that nobody is accountable for the gap. The specialist has no time to document and is not asked to. Managers see a passed test and a plan on file. Nothing in the process asks who else could do it.

## Practical intervention

### Practical next actions

1. **List the critical services and their recovery owners.** For each service the business cannot do without, write down who would bring it back today. Where the answer is one person, mark it as a key-person risk.
2. **Write a runbook for each critical service.** Cover how to decide to start recovery, who to contact, the order of the steps, every manual step, how to check that the service works and how to hand back. Write it for a competent colleague who has never seen the service, organised around the service rather than around individual servers, as in [recovery plans organised around servers instead of business services](/discovery/why-recovery-plans-should-be-organised-around-business-services-not-servers/).
3. **Have the specialist write it down, then step back.** Ask the specialist to draft the runbook, and then to stay silent during the next test. The point of the exercise is to find what is missing.
4. **Run the next test with someone else.** Choose a competent colleague who has not done the recovery before, give them the runbook alone and observe. Record every place where they get stuck, ask a question or make a guess.
5. **Fix what they could not do.** Update the runbook for each gap, add screenshots or commands where needed, and capture the manual steps. Repeat the test until the colleague can complete it without help.
6. **Name alternates and rotate the tester.** For each recovery role, name at least one alternate. From now on, change who runs each test, so that over a year several people have done it. Keep the specialist as a reviewer, not the operator.
7. **Test in the open and write it up.** Use a written test plan with an objective, success criteria, a schedule and the participants. After each test, record what was found, who will fix it and by when, and check that the fixes were made.
8. **Re-test after changes.** Treat a major change to the service, the team or the environment as a reason to review the runbook and repeat the test.
9. **Cover the first hours.** Keep a copy of the runbook where it can be reached when your normal systems are down, and train people so that they understand the logic and do not depend on reading every line.

## Diagnostic questions

- For each critical service, who could bring it back if our usual specialist were unreachable for a day?
- When did someone other than the person who built the recovery last run it, using only the documentation?
- Where are the manual steps written down, and could a colleague find them at three in the morning?
- Who is the named alternate for each recovery role, and have they ever done it?
- If our specialist resigned tomorrow, what recovery capability would leave with them?
- What would we show an auditor if asked for evidence that recovery can be done by someone other than its author?

## What good looks like

Each critical service has a runbook written for a competent colleague, with every manual step included, stored where it can be reached during an outage. At least two people can recover each service, and the last test was run by someone other than the author, using the runbook alone. Gaps found in the test were recorded, fixed and re-tested. The person who runs the next test is different again.

You can measure the result. The number of critical services with a single recovery owner falls to zero. The time for a colleague to complete a recovery from the runbook alone falls with each test and approaches the target. The number of questions the colleague has to ask the specialist during a test drops towards none. The specialist takes leave without the business holding its breath.

## Where Mellorca fits

If you are not sure how many of your critical services depend on one person, a [digital systems audit](/services/digital-systems-audit/) can list them, show who holds the recovery knowledge for each and flag the services where nobody else has ever run a recovery. To put the runbooks, the rotation of testers and the after-action routine into the way your IT operations team already works, [digital operations improvement](/services/digital-operations-improvement/) can design the practice with your team and help it stick.

## Method note

This article draws on NIST Special Publication 800-34 Revision 1, Microsoft's Power Platform Well-Architected guidance on disaster recovery and the text of the Protection of Personal Information Act. The scenario, the recovery times and the effort example are illustrative and not measured. The article does not claim that any framework or product is required to fix the problem or that any recovery behaves the same way in your environment, so check the guidance and documentation for the systems you run. It is general information and not legal advice: confirm your obligations under section 19 of the Protection of Personal Information Act with your information officer or legal adviser.
