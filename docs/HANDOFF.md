# StyleFinder quiz: session handoff

Last updated 2026-10-23. Read this before you change the quiz or the Blueprint.

## What this app does

Someone takes the StyleFinder ID® quiz at https://stylefinder-quiz.vercel.app. The app
scores their answers into three StyleTypes (Primary, Secondary, Supporting) and sends two
emails:

1. **The coach results email.** Goes to `COACH_EMAIL` right away with the scores.
2. **The Blueprint.** A written style report from Claude (`claude-opus-5`), emailed to
   the taker about a minute later. Mary Michele Nidiffer, the coach, created the system,
   and the report must sound like her.

## Where things live

| What | Where |
|---|---|
| Repo | `Zunosai/stylefinder-quiz`, default branch `main` |
| Hosting | Vercel project `stylefinder-quiz` (team `zunosai`). A merge to `main` deploys production. |
| Database | Supabase project **Quiz**, `pfqyyegbmovcrpajucak`. Tables: `quiz_submissions`, `style_blueprints`, `email_queue`. |
| Email | Gmail SMTP, sent from `marymichelenidiffer@gmail.com` |
| Checks on a PR | Vercel build and CodeRabbit review. No GitHub Actions; run tests yourself. |

## How the Blueprint is built

| File | Role |
|---|---|
| `src/app/api/submit-quiz/route.ts` | Saves the quiz, sends the coach email, then calls `scheduleBlueprint()`, which runs in `after()` once the response is sent. `maxDuration = 300`. |
| `src/lib/blueprint/deliver.ts` | `deliverBlueprint()`: generate, save, email. The admin **Generate** button (`src/app/api/admin/blueprint/route.ts`) calls it too. |
| `src/lib/blueprint/generate.ts` | Calls Claude. The system prompt is two cached blocks: `BLUEPRINT_INSTRUCTIONS`, then `BLUEPRINT_EXAMPLES`. |
| `src/lib/blueprint/prompt.ts` | The brief (`BLUEPRINT_INSTRUCTIONS`) and the per-client request with reference material. |
| `src/lib/blueprint/samples.ts` | Six Blueprints Mary Michele wrote by hand, sent as voice examples. The model must not copy them. |
| `src/lib/blueprint/reference.ts` | StyleType and archetype reference sheets: colors, icons, hallmarks, Top 10 items. |
| `src/lib/blueprint/house-style.ts` | `applyHouseStyle()` swaps banned phrases in the generated text before it's saved. |
| `src/lib/blueprint/boilerplate.ts` | Fixed text around every report: cover letter, About Mary Michele with **Let's Connect** links, closing page. |
| `src/lib/blueprint/render.ts` | Hand-rolled Markdown to HTML for the email and the `/blueprint/[id]` page. Supports headings, paragraphs, bulleted and numbered lists, bold, italic, and http(s) links. Web styles are in `src/app/globals.css` under `.blueprint-body`. |
| `src/lib/email.ts` | `sendEmail()`; every report email goes through it. |

## What shipped in the last session

| PR | Change |
|---|---|
| #2 | Tab title reads "StyleFinder ID® Personal Style Assessment". |
| #3 | The generator gets Mary Michele's six authored Blueprints as examples. Adds about 9,300 cached input tokens per request. |
| #4 | **Testing only:** every report email BCCs `marymichelenidiffer@gmail.com`. |
| #5 | The Blueprint sends automatically after every quiz. Rows are marked `generated_by = 'auto'`. |
| #6 | Mary Michele's review: "native language", never "mother tongue"; a Romantic palette is "rich hues and metallics", never "dusk and metal"; the Top 10 renders as a numbered list; **Let's Connect** links to Substack, Instagram, the podcast, and LinkedIn (Facebook removed). |

A real test run on 2026-10-20 worked: the quiz was submitted at 18:28:15 UTC, and the
Blueprint was emailed at 18:29:04 UTC.

## Open items

- **Confirm #6 in a real report.** No Blueprint has been created since #6 deployed. After the
  next quiz, check the newest `style_blueprints` row: no "mother tongue" or "dusk and metal",
  and the Top 10 is a numbered list.
- **Remove the testing BCC when Jim says testing is over.** Delete `REPORT_COPY_RECIPIENT` and
  `withReportCopy()` from `src/lib/email.ts`, and delete `src/lib/__tests__/email.test.ts`.
- **Page wording is out of date.** `src/app/page.tsx` and `src/app/results/[style]/page.tsx`
  still say a style coach will reach out with the results. Takers now get the Blueprint by
  email. Don't change this until Jim or Mary Michele approves new wording.
- **Facebook.** It was removed from **Let's Connect** because Mary Michele's list left it out.
  Add it back only if she asks and supplies the link.

## Traps

- **Don't overwrite Mary Michele's wording.** The cover letter, About page, and closing page are
  her words (`boilerplate.ts`). Change them only as she asks.
- **New banned phrases go in two places:** the word-choice list in `BLUEPRINT_INSTRUCTIONS`
  (`prompt.ts`) and `REPLACEMENTS` in `house-style.ts`, with a test in
  `src/lib/blueprint/__tests__/house-style.test.ts`.
- **Cache cost.** Any edit to `BLUEPRINT_INSTRUCTIONS` or `BLUEPRINT_EXAMPLES` invalidates
  the prompt cache for the next request. That's fine, but don't churn them.
- **Gmail self-copies.** Mail sends from the same Gmail account as the BCC, so her copies can
  land in **Sent** or **All Mail** instead of the inbox. "Emailed" in the database means SMTP
  accepted the message, not that it reached an inbox.
- **The tester's quiz address** is `marymichele68@gmail.com`. The coach address is a different
  inbox, so the score summary and the Blueprint arrive in different places.
- **Every quiz now costs money.** Each one triggers a paid Blueprint generation.
- **GitHub access from Jim's Mac:** the `GITHUB_TOKEN` account `Jim-Nidiffer` is read-only on
  this repo. The keyring account `StyleFinder` has admin. Unset `GITHUB_TOKEN` before using
  `gh` or pushing.

## How to work on it

- `npx vitest run` runs all tests (94 at handoff). `src/lib/__tests__/scoring.test.ts` is
  excluded on purpose; it predates the test runner.
- `npx tsc --noEmit` type-checks. `npm run build` is the full build check.
- `src/app/api/submit-quiz/route.ts` already had two lint errors (`any`) before this work.
- Jim's standing rule: merge your own PRs once the Vercel build and CodeRabbit pass, then
  confirm the production deploy finished. End commits with the co-author line and PR bodies
  with the Claude Code line.
