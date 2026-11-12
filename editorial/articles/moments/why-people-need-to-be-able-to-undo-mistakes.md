---
hub: moments
record_id: STORY-ANGLE-000078
slug: why-people-need-to-be-able-to-undo-mistakes
title: Why People Need to Be Able to Undo Mistakes
description: When an error cannot be taken back, people slow down, over-check and hide mistakes. How reversibility, review steps and clear records change behaviour.
lead: When an error cannot be taken back, people slow down, over-check and hide mistakes. How reversibility, review steps and clear records change behaviour.
category: Human Agency
published_date: 2026-10-10
updated_date: 2026-10-10
eyebrow: Human Agency
thematic_domain: human_agency
human_situation: A person makes an ordinary error in a system where nothing can be taken back without senior help, so they over-check, hide mistakes or delay acting.
human_dividend: Autonomy and predictability: being able to act on judgement and correct errors within known, bounded consequences.
trade_off: Some actions cannot be undone; reversal can hide root causes; easy undo may lower care; reversal rights need rules; too many confirmations become noise.
epistemic_state: HYPOTHESISED: reasoned from usability guidance, accessibility standards and general research on job control, not from a South African survey; the example is illustrative.
sources:
  - 10 Usability Heuristics for User Interface Design | https://www.nngroup.com/articles/ten-usability-heuristics/
  - Understanding Success Criterion 3.3.4: Error Prevention (Legal, Financial, Data) - WAI - W3C | https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html
  - Check answers – GOV.UK Design System | https://design-system.service.gov.uk/patterns/check-answers/
  - Error-Message Guidelines | https://www.nngroup.com/articles/error-message-guidelines/
related:
  - When the System Decides What You Can Do Today | /moments/when-the-system-decides-what-you-can-do-today/
  - Why Approval Chains Make Capable People Wait | /moments/why-approval-chains-make-capable-people-wait/
  - Why Clear Ownership Gives People Room to Decide | /moments/why-clear-ownership-gives-people-room-to-decide/
summary: When an error cannot be taken back, people slow down, over-check and hide mistakes. How reversibility, review steps and clear records change behaviour.
layout: plain
---
A clerk captures a payment against the wrong supplier. A manager approves a leave request for the wrong dates. Someone deletes a folder they thought was a duplicate. In the first few seconds, the mistake is obvious and small. What happens next decides whether it stays small: whether the person can quietly put it right, or whether they must confess, wait for someone with higher access and hope.

This piece argues that the ability to undo mistakes is a quiet foundation of human agency at work. It is a hypothesis, reasoned from usability guidance, accessibility standards and general research on working conditions. It is not a survey of South African workplaces, and the example below is illustrative.

## Why people hesitate when nothing can be taken back

If an action cannot be reversed, every action carries more weight. People slow down, ask for second opinions and avoid anything unfamiliar. In some contexts that is exactly right. Where a payment leaves an account irrevocably, care is proportionate. But where the cost of an error is small and the cost of fear is large, an irreversible system makes people timid for no good reason.

Nielsen Norman Group's usability heuristic on user control and freedom puts it plainly: users often act by mistake and need a clearly marked emergency exit to leave the unwanted action. Good designs support undo and redo, and make the way out easy to find. The same group's guidance on error prevention adds that the best designs stop problems before they happen, either by removing error-prone conditions or by asking for confirmation before a user commits, and that preventing the highest-cost errors first is sensible.

These are usability principles, but they describe a human situation. A person who knows they can step back from an error acts with more confidence. A person who knows they cannot acts with more fear.

## Standards that already say this

The idea is not only a design preference. The Web Content Accessibility Guidelines include a success criterion on error prevention for legal, financial and data submissions. It applies where a page creates a legal commitment or financial transaction, or changes or deletes user-controllable data, and it asks that at least one of three things be true: the submission can be undone, the entered data is checked and the user can correct errors, or the user can review, confirm and correct information before submission is final. The standard is written for websites, but the three safeguards are a useful checklist for any business system that holds consequential data.

The GOV.UK Design System makes a related point in its guidance on the check answers pattern. A page that lets people review their answers before they submit increases confidence, since they can see that everything is complete, and reduces errors by giving a second chance to spot and fix mistakes. It also recommends being transparent that the transaction is not complete until the user confirms.

The common thread is that reversal can happen at three moments: before the action is final, as the action is made, and after it. Each one gives the person a different kind of room.

## An illustrative example

Take a hypothetical South African wholesaler with a small accounts team. The accounting package lets a clerk post a supplier payment batch, and once posted it can only be reversed by the financial manager, who is often out visiting customers. Clerks have learned to check every line three times and to wait for her to look at the batch before posting.

The check is not unreasonable. But it takes a quarter of the clerk's day, and it falls on the same person every week. When a mistake does get through, a payment to the wrong account, the clerk dreads telling anyone. She spends an afternoon trying to fix it quietly before the manager returns, which is the worst possible time to make a second error.

Now imagine the same team where batches are held for review before they are released, where a posted entry can be reversed with a clear audit record, and where the reversal does not require a senior person for routine corrections. The clerk checks once, releases with confidence and reports an error the moment she sees it, because reporting is no longer a confession. The business has not become careless. It has moved some of the safety from fear to design.

This example is illustrative. The mechanism is the point: the reversibility of an action shapes how people behave around it.

## What this does for people

The human dividends are of two kinds.

- **Autonomy.** People can act on their own judgement without needing someone to hold their hand. The HSE standard on control describes the aim of staff feeling able to influence how they carry out their work and to use their initiative. Initiative requires the freedom to be occasionally wrong.
- **Predictability and confidence.** The consequences of an error are bounded and known. People can anticipate what will happen if they get it wrong, which lowers the background anxiety of the job.

There is a learning side too. Reporting errors early depends on a safe route to correct them. A business where mistakes are undone quietly and recorded openly is one where errors can be studied. The thinking behind it is explored in [where operational errors really come from](/insights/where-operational-errors-really-come-from/) and [how to reduce human error without removing human judgment](/insights/how-to-reduce-human-error-without-removing-human-judgment/).

## The trade-offs are real

Undo is not a universal good, and the cases where it fails are instructive.

- **Some actions cannot be undone.** A payment that has left the bank, an email that has been read, a customer who has been given the wrong information. For these, prevention and confirmation have to carry the weight. Reversibility is not the same as safety.
- **Undo can hide problems.** If errors disappear without a trace, the underlying cause is never fixed. A reversal should leave a record of what happened and why.
- **Easy reversal can lower care.** If anything can be undone, people may stop checking. The goal is proportionate care, not no care.
- **Reversal needs rules.** Who may undo what, and within what time? Poorly designed reversal rights can open routes for fraud or manipulation of records.
- **Confirmations can become noise.** A prompt shown for every action is quickly ignored. Confirmation works best when kept for the high-cost cases.

Mellorca has looked at a neighbouring theme in [when software workarounds replace professional discretion](/moments/when-software-workarounds-replace-professional-discretion/), where the lack of a sanctioned route encourages improvised ones.

## Designing for the right to correct

1. **Sort actions by cost of error.** Reserve heavy controls for the few that are costly or irreversible, and make the rest easy to reverse.
2. **Add a review step before finality.** A "check your entry" screen or a held batch is cheap and catches many errors.
3. **Allow routine corrections without escalation.** Give the person who made the entry a defined window to correct it, with a record.
4. **Write down what cannot be undone.** People should know where the point of no return lies.
5. **Make the error message useful.** Nielsen Norman Group advises stating the specific problem, suggesting a way forward and keeping the user's input so they can edit rather than start over.

## Interpreting the pattern

The Mellorca reading is that the ability to undo a mistake is a small structural feature with a large effect on how safe it feels to act. In some businesses, a good deal of slowness and over-checking may trace back to systems that treat every action as final. The remedy is not to remove care but to put the safety where it belongs: in the design, so that people need not carry all of it themselves.
