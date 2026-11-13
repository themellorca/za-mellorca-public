---
hub: discovery
record_id: DISC-378
slug: restore-tests-prove-the-files-return-not-that-the-service-works
title: Restore tests prove the files return, not that the service works
description: Restore tests pass one server at a time, yet the service may not run. Map each critical service's chain, restore it in order and time how long it takes to work.
lead: Restore tests pass one server at a time, yet the service may not run. Map each critical service's chain, restore it in order and time how long it takes to work.
category: Business Continuity & Resilience
published_date: 2026-11-13
updated_date: 2026-11-13
eyebrow: Business Continuity & Resilience
problem_domain: Business Continuity & Resilience
problem_owner: IT operations or infrastructure manager
budget_owner: CIO, with the CFO for insurance
sources:
  - Restore testing - AWS Backup | https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing.html
  - Restore testing validation - AWS Backup | https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing-validation.html
  - https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf | https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf
related:
  - Recovery only works while one specialist is reachable | /discovery/recovery-only-works-while-one-specialist-is-reachable/
  - Manual recovery steps are not timed during tests | /discovery/why-manual-recovery-steps-need-a-stopwatch-during-every-test/
  - Continuity and cyber recovery plans disagree on what comes first | /discovery/continuity-and-cyber-recovery-plans-disagree-on-what-comes-first/
summary: Restore tests pass one server at a time, yet the service may not run. Map each critical service's chain, restore it in order and time how long it takes to work.
layout: plain
---
Picture a Durban distributor that has just moved its ERP, file shares and customer portal into the cloud. Every month the IT team runs its restore tests. A database backup is restored to a scratch server and the row counts match. A file share is restored and a sample of documents opens. The report goes to the CIO with a row of green ticks, and the cyber-insurance questionnaire is answered "yes" to "do you test your backups?"

Then a bad change corrupts the ERP's data and the team decides to restore the whole system. The database comes back, and so does the application server, but the ERP will not start. The application expects a database version and a set of settings that no longer match. Its service accounts live in the identity system, which was not part of the restore. A licence service has a new address. The bank file transfer is blocked because the restored server has a different network address. It takes three days to get a working ERP, against a plan that said four hours.

The operating condition is plain: the business tests that its backups restore, but not that the restored pieces work together as a service. That matters to the CIO and the CFO because the gap is invisible while everything is green, and appears only when the business has no time left to fix it.

## The problem in plain language

A critical business service such as order processing, payroll or the customer portal is rarely one server. It is a chain: an application, a database, a place where files are stored, an identity system that says who may log in, certificates that prove the system is genuine, network rules that say what may talk to what, connections to other systems and a set of configuration settings that tie everything together.

Backups are usually taken and tested piece by piece, because that is how the tools and the teams are organised. The database administrator restores the database. The infrastructure team restores a server image. The storage team restores files. Each test checks that its own piece came back, and each passes.

What is not tested is the order in which the pieces must return, whether they still fit together, and whether the service actually works for a user once they do. The test proves that the data exists. It does not prove that the service can run on it.

This is related to, but different from, [recovery plans organised around servers instead of business services](/discovery/why-recovery-plans-should-be-organised-around-business-services-not-servers/). That topic is about how the plan is written. This article is about what the tests prove: a plan organised around services still fails if the tests never restore the service.

## What the buyer is actually trying to solve

IT operations managers and continuity leads put this in practical terms. If we lost this system tonight, how long until people could work again? Do we know, or do we only know that the backups run? What did the last test actually prove? What will we tell the insurer or the auditor?

The outcome they want is a number they can defend: for each critical service, the measured time from the start of a restore to a service a real user can use, tested end to end at least once, with the gaps from each test recorded and fixed. They do not need every system tested every month. They need the important ones tested properly.

## Evidence and system mechanism

### Restore tools test resources, one at a time

Cloud backup tools now offer automated restore testing, which is a real improvement, but its scope matters. AWS's documentation on [restore testing in AWS Backup](https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing.html) describes it as automated and periodic evaluation of restore viability, with the ability to monitor how long restore jobs take. The resource types you can include in a testing plan are individual services and resources such as database engines, virtual machine disks, file systems and storage buckets. The tool restores each one, and the measurement it offers is the restore job's duration.

That is useful evidence that each piece can be restored and how long it takes. It does not, by itself, tell you whether the pieces work together as an application.

### Validation is the part you have to design

The same documentation set describes a [validation step](https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing-validation.html) that runs after a restore test. It explains that you create a validation workflow and gives the example of a restored virtual machine instance, for which the code might ping a health-check endpoint. The workflow reports a success or failure status back to the backup tool, and the result can be viewed alongside the restore job.

This is the right place to prove that something works, but what counts as "works" is defined by whoever writes the validation. A health check that only confirms a server is answering is a long way from proving that an order can be entered, a payment file can be generated and a user can log in. The tooling provides the hook, and the business has to decide what to hang on it.

| Part of the chain | What a single-resource restore test misses |
| --- | --- |
| Application and database versions | The application starts against a database it was not built for |
| Identity and service accounts | Users and service accounts cannot sign in after the restore |
| Certificates and secrets | Connections fail because certificates or keys are missing or expired |
| Network rules and addresses | Restored systems cannot reach each other or the outside world |
| Integrations and file transfers | Banks, couriers and portals cannot talk to the restored service |
| Configuration and settings | The service starts but behaves differently, or not at all |
| Restore order | Components restored in the wrong order fail and are restored again |

### What South African law expects of the safeguards

POPIA puts the stakes in legal terms where the service holds personal information. The [Protection of Personal Information Act, 4 of 2013](https://www.gov.za/sites/default/files/gcis_document/201409/3706726-11act4of2013protectionofpersonalinforcorrect.pdf) requires, in section 19, that a responsible party secure the integrity and confidentiality of personal information in its possession by taking appropriate, reasonable technical and organisational measures to prevent, among other things, loss of or damage to that information. It also expects the responsible party to identify foreseeable risks, put safeguards in place, verify regularly that they work and update them.

A backup that has never been restored into a working service has not been verified in any useful sense. A restore test that covers the whole chain is practical evidence that the safeguard works. The Act does not prescribe how often or how, so confirm what is appropriate for your own systems with your information officer or legal adviser.

## Why this becomes urgent

A cloud migration is the usual trigger. In the old environment, the team knew its servers and its restore routines, and many dependencies were implicit: a database on the same rack, a certificate on the same machine, a service account in the local directory. A migration moves the pieces to different places and changes how they connect, and the restore procedures that were trusted no longer match the new layout.

The migration project plans for getting the service running in the cloud, not for getting it back after a failure there. Then someone asks the obvious question: if this fails, how do we restore it, and how long will it take? The team finds that restores were proven for single servers and never for a whole working service, and that nobody has a measured time.

Insurance and audit add pressure. A questionnaire that asks whether backups are tested is easy to answer truthfully with "yes". A claim after a serious incident will test whether the answer meant anything.

## Economic consequence

The cost of untested chains shows up when it is largest:

- **Longer outages than planned.** The plan says hours and the reality is days, because gaps in the chain are discovered during the incident.
- **Data that restores but will not run.** A complete, intact set of data and a service that cannot use it.
- **Failed claims or audits.** An insurer or auditor finds that the testing described in the questionnaire did not prove recovery of the service, which can complicate a claim.
- **Improvisation.** Staff make decisions under pressure, without a rehearsed order of steps, and some of those decisions create new problems.
- **Business impact.** Orders, payroll, deliveries or customer service stop for longer than the business had agreed to tolerate.

As an illustrative example only, suppose the planned recovery time for the ERP is four hours and an unrehearsed restore takes three days. Seventy-two hours of lost order processing, staff idle or working on paper, and customers waiting is far larger than the cost of a few days of testing spread across the year. The numbers are invented for illustration, but the pattern is the point: the cost of finding the gaps in a test is small, and the cost of finding them in an incident is not.

Test environments that differ from production hide these gaps even in tests, as described in [test environments that do not match production](/discovery/integration-test-environments-do-not-match-production/), because a restore into a simplified environment proves less than it appears to.

## Root cause

The root cause is that restore tests check that files or single systems come back, not that the application works with its database, identity, integrations and settings. The test was designed around what the backup tool can restore, and the success criterion is "the restore completed", not "a user can do their job".

A second cause is that nobody owns the whole chain. The database team, the infrastructure team, the identity team and the application owner each own a piece and test it. Nobody is responsible for restoring and proving the service as a whole, so nobody writes that test.

A third cause is that the chain is not written down. Dependencies live in people's heads and in diagrams that were accurate when a project finished, which is the pattern in [infrastructure diagrams out of date when projects end](/discovery/infrastructure-diagrams-out-of-date-when-projects-end/). A test cannot cover a dependency that nobody knows about.

## Practical intervention

### Practical next actions

1. **Pick the critical services.** Choose the few business services whose loss would stop the business: for example order processing, payroll, the customer portal and finance. Name an owner for each.
2. **Map each service's dependency chain.** For every critical service, list the application, the database, file storage, identity and service accounts, certificates and secrets, network rules, integrations and configuration it needs. Check the map against how the service really runs, by following a transaction through it and asking the people who support it.
3. **Write down the restore order.** Decide which components must be restored first, which depend on which, and where manual steps are needed. Record it as a runbook that someone who did not build the system could follow.
4. **Define what "working" means.** For each service, write a short list of real actions that prove it works after a restore: a user signs in, an order is entered, an invoice is produced, a file reaches the bank. Automate the checks where possible, using the validation hooks your backup tool provides.
5. **Restore the whole chain in a test.** Rebuild the service in an isolated environment from the backups, in the documented order, and run the "working" checks. Use an environment that matches production closely enough for the result to mean something.
6. **Time it.** Record the time from the start of the restore to the first successful working check, and the time spent on each step. Compare it with the recovery time the business has agreed to accept.
7. **Fix the gaps and test again.** Record every problem found, such as a missing certificate, an unbacked-up configuration or a manual step nobody had written down. Fix them, update the runbook and repeat the test until the measured time meets the target.
8. **Set a rhythm and keep the evidence.** Repeat full-chain tests for each critical service at a frequency the business agrees, and after significant changes such as a migration. Keep the results where an insurer or auditor can see what was tested and when.

## Diagnostic questions

- For our most important service, can we state how long a full restore takes, and was that measured or estimated?
- When did we last restore a whole service, in order, and prove that a user could work on it?
- Do our restore tests check anything beyond "the restore job completed"?
- Where are identity, certificates, secrets, network rules and configuration in our backups, and have they been restored in a test?
- Who owns the end-to-end restore of each critical service, and who writes the checks that prove it works?
- What would we tell the insurer if asked exactly what our last restore test proved?

## What good looks like

For each critical service, there is a one-page map of its dependencies, a runbook with the restore order, a short list of checks that prove the service works, and a record of the last full-chain test with its measured time. Gaps found in tests are recorded, fixed and retested. The CIO can state a recovery time for each critical service and say how it was measured.

You can measure the result. The measured time to a working service is close to the agreed target. The number of unexpected problems found in each test falls over successive tests. Questions from insurers and auditors are answered with evidence, not assurances. When an incident happens, the team follows a rehearsed runbook instead of discovering the chain as it goes.

## Where Mellorca fits

If you do not know what each critical service depends on, a [digital systems audit](/services/digital-systems-audit/) can map the chain for your priority services, show which parts are covered by backups and which are not, and identify what your current tests actually prove. To agree the test rhythm, the "working" checks and who is responsible for each service's end-to-end restore, [digital operations improvement](/services/digital-operations-improvement/) can build the practice into the way your IT operations team already runs.

## Method note

This article draws on Amazon's documentation on restore testing and restore testing validation in AWS Backup, and on the text of the Protection of Personal Information Act. The scenario, the recovery times and the effort comparison are illustrative and not measured. The article does not claim that any product is needed to fix the problem or that it behaves the same way in your environment, so check the documentation for the backup tools you use. It is general information and not legal advice: confirm your obligations under section 19 of the Protection of Personal Information Act with your information officer or legal adviser.
