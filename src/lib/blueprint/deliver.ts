/**
 * Blueprint delivery: generate, store, and email in one step.
 *
 * Shared by the admin route, where the coach's click is the approval, and by
 * quiz submission, which delivers a Blueprint automatically once she finishes.
 */

import { sendEmail } from '../email';
import { generateBlueprint, subjectFromResult } from './generate';
import { saveBlueprint, updateBlueprintEmailStatus } from './storage';
import { generateBlueprintEmail } from './email';
import type { StyleResult } from '../types';

export interface BlueprintRecipient {
  submissionId: string;
  clientName: string;
  clientEmail: string;
  results: StyleResult;
  /** Site origin for the "view online" link. */
  origin?: string;
  generatedBy: 'admin' | 'auto';
}

export type DeliveryResult =
  | {
      saved: true;
      blueprintId: string;
      archetype: string | null;
      markdown: string;
      emailed: boolean;
      emailError?: string;
      usage: { inputTokens: number; outputTokens: number; cacheReadTokens: number };
    }
  | { saved: false; error: string; markdown: string };

/**
 * Generate, store and email a Blueprint.
 *
 * Throws `BlueprintError` when generation fails. A storage failure returns the
 * prose unsaved rather than discarding it; an email failure is recorded on the
 * stored Blueprint so it can be resent.
 */
export async function deliverBlueprint(
  recipient: BlueprintRecipient,
): Promise<DeliveryResult> {
  const subject = subjectFromResult(recipient.clientName, recipient.results);
  const blueprint = await generateBlueprint(subject);

  const stored = await saveBlueprint(
    recipient.submissionId,
    blueprint,
    recipient.generatedBy,
  );
  if (!stored.success) {
    return {
      saved: false,
      error: stored.error ?? 'unknown error',
      markdown: blueprint.markdown,
    };
  }

  const email = generateBlueprintEmail({
    clientName: recipient.clientName,
    clientEmail: recipient.clientEmail,
    markdown: blueprint.markdown,
    archetype: blueprint.archetype,
    primary: blueprint.primary,
    secondary: blueprint.secondary,
    supporting: blueprint.supporting,
    viewUrl: recipient.origin
      ? `${recipient.origin}/blueprint/${stored.blueprintId}`
      : undefined,
  });

  let emailed = false;
  let emailError: string | undefined;
  try {
    emailed = await sendEmail(email);
    if (!emailed) emailError = 'Email was not sent (disabled or rate limited)';
  } catch (err: unknown) {
    emailError = err instanceof Error ? err.message : 'Email failed';
  }

  await updateBlueprintEmailStatus(stored.blueprintId!, emailed, emailError);

  return {
    saved: true,
    blueprintId: stored.blueprintId!,
    archetype: blueprint.archetype,
    markdown: blueprint.markdown,
    emailed,
    emailError,
    usage: {
      inputTokens: blueprint.inputTokens,
      outputTokens: blueprint.outputTokens,
      cacheReadTokens: blueprint.cacheReadTokens,
    },
  };
}
