---
hub: moments
record_id: STORY-ANGLE-000212
slug: the-stress-of-not-knowing-if-the-backup-worked
title: The Stress of Not Knowing if the Backup Worked
description: In a crisis, the person responsible for the backup finds out whether it works at the worst possible moment. What changes when recovery is tested and visible in advance.
lead: In a crisis, the person responsible for the backup finds out whether it works at the worst possible moment. What changes when recovery is tested and visible in advance.
category: Health, Safety & Wellbeing
published_date: 2026-10-03
updated_date: 2026-10-03
eyebrow: Health, Safety & Wellbeing
thematic_domain: health_safety_and_wellbeing
human_situation: After a laptop failure, ransomware or accidental deletion, the person who looks after the backups discovers in real time whether a restore will actually work.
human_dividend: Predictability: knowing in advance what can be recovered and how long it takes, so a crisis is a procedure rather than a gamble.
trade_off: Restore testing takes time and sometimes money; tests can disrupt work; a passed test can create overconfidence if it covers too little; offline copies add handling effort.
epistemic_state: INFERRED: backup and testing practice is observed in NCSC and CISA guidance; the stress carried by responsible individuals is inferred and not measured.
sources:
  - Backing up your data | https://www.ncsc.gov.uk/collection/small-organisations-guide-to-cyber-security/backing-up-your-data
related:
  - The Inbox That Follows You Home | /moments/the-inbox-that-follows-you-home/
  - The Report Someone Rebuilds by Hand Every Friday | /moments/the-report-someone-rebuilds-by-hand-every-friday/
  - The Skilled Professional Reduced to Copy-and-Paste | /moments/the-skilled-professional-reduced-to-copy-and-paste/
summary: In a crisis, the person responsible for the backup finds out whether it works at the worst possible moment. What changes when recovery is tested and visible in advance.
layout: plain
---
Most of the time, backups are invisible. A job runs overnight. A small icon shows a green tick, or did the last time anyone looked. Nobody thinks about it much.

Then a laptop dies, or a file server stops responding, or every document on the shared drive has an unfamiliar extension and a note demanding payment. In that moment, one person in the business becomes the focus of everyone's attention. Often it is an office manager, a bookkeeper or a technically minded owner who took on the backups because somebody had to. Everyone is asking the same question: can we get it back?

And very often, the honest answer in that first hour is: I think so. I hope so.

This piece is about that gap between thinking and knowing, and about the person who stands in it.

## What the guidance says a backup needs

Security guidance has been consistent about one point: a backup is only as good as the ability to restore from it.

The UK's National Cyber Security Centre, in its guidance for small organisations, stresses that it is important to know how to restore your data and to check that the backup contains all your important data. It recommends keeping more than one backup, for example online and on a storage device, and advises that a storage device should not stay connected when not in use, because some malware can reach connected devices.

The US Cybersecurity and Infrastructure Security Agency, in its ransomware guide, makes a similar case more sharply. It recommends maintaining offline, encrypted backups of critical data and regularly testing their availability and integrity in a disaster recovery scenario. It explains why: many ransomware variants attempt to find and delete or encrypt any backups they can reach.

Neither source suggests that a backup job reporting success is enough. Both point to a second, separate activity: proving that recovery works.

## How uncertainty builds up

Consider an illustrative case: a Bloemfontein architectural practice with about twelve staff. Its drawings and client files sit on a small network storage device in the office, which copies itself each night to an external drive that is always plugged in. A cloud sync tool also runs on some laptops, but not all. The practice manager set it up with help from a contractor four years ago.

No restore has ever been tested. The external drive is permanently connected. Nobody is sure whether the cloud sync covers the project folders or only personal documents. The practice manager receives backup reports by email, but they go to a folder she rarely opens.

The causes are common and understandable:

- **Success is measured at the wrong point.** A backup job that completes is treated as proof of recovery, when it only proves that something was copied.
- **Responsibility without time.** The person in charge of backups has a different main job, and testing never rises to the top of the list.
- **Configuration drift.** New folders, new laptops and new applications appear, and nobody checks whether the backup still covers them.
- **Single points of failure.** A permanently connected drive can be affected by the same incident that hits the original data.

Mellorca has looked at the financial side of this in [backups that are never tested](/impact/backups-never-tested-restore-financial-cost/) and the false confidence that unmonitored backups create in [unmonitored backups](/impact/unmonitored-backups-false-recovery-confidence/). The human side deserves its own attention.

## The human tax: uncertainty carried by one person

The person responsible for an untested backup carries an unresolved question. Most of the time it stays in the background. Some people may never think about it until the day it matters. Others may feel a low-level unease every time they see an unopened backup report or hear about a ransomware attack on another business. Mellorca cannot say which is typical, and does not claim to.

What is more defensible is what happens during an incident. The responsible person must make decisions under pressure, with colleagues waiting and clients possibly affected, without knowing whether the safety net exists. They may be the one who has to tell the owner that a project's files are gone. They may feel, fairly or not, that the outcome is their fault, even though the arrangement was never designed to give them certainty.

That is the tax: cognitive load and, at the moment of crisis, a strain on wellbeing that the business has placed on one person by default. It is not the backup software's fault, nor the person's. It is a consequence of treating recovery as something that will be worked out when needed.

## What could change

The interventions are mostly routine, not dramatic.

1. **Test a restore on a schedule.** Pick a folder, a project or a mailbox each month or quarter and restore it to a separate location. Record how long it took and whether everything was there.
2. **Decide what must be recoverable, and how quickly.** Agree with the owner which data matters most and what a tolerable wait would be.
3. **Keep at least one copy separate.** Disconnect storage devices when not in use, or use an offline or immutable copy, as both NCSC and CISA advise.
4. **Make reports visible.** Send backup results somewhere that is reviewed, and flag failures as exceptions rather than burying them in a folder.
5. **Write the restore steps down.** A short procedure means recovery does not depend on one person's memory, which reduces the load on them.
6. **Share the responsibility.** A second person, or an external provider under a clear agreement, should know how to restore.

In the illustrative practice, a quarterly restore test of one live project, a rotated external drive kept off-site, and a one-page restore procedure would change the answer in that first hour of a crisis from I hope so to: yes, and it takes about this long.

As [why backups do not equal business resilience](/patterns/why-backups-do-not-equal-business-resilience/) argues, the backup is only one part of recovery. People, procedures and priorities matter as much as the copy itself.

## Trade-offs

- **Testing takes time.** A meaningful restore test can take hours, and in a small business those hours come from someone's normal work.
- **Tests can disrupt.** Restoring to the wrong place can overwrite live data. Tests need care and a safe target.
- **A passed test can mislead.** Restoring one folder successfully does not prove that a full recovery would work. Tests should vary.
- **Offline copies need handling.** Rotating drives or managing immutable storage adds steps, and missed rotations quietly reduce protection.
- **Cost.** Additional storage, cloud services or provider support all cost money, which must be weighed against the value of the data.

## Why it matters

The business outcome of tested backups is clear: shorter downtime, less data lost and a better position if an attacker demands payment. CISA's emphasis on offline copies reflects the same logic: a copy the attacker cannot reach is one the business can still use.

The human outcome is quieter. The person who looks after the backups no longer has to carry an unanswered question. When something goes wrong, they have a procedure, a known recovery time and evidence from the last test. The crisis is still unpleasant, but it is no longer a gamble.

That is the dividend: predictability. Not the absence of incidents, which no backup can promise, but the replacement of hope with knowledge, earned in advance on an ordinary day rather than discovered on the worst one.
