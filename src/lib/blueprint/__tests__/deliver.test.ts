import { describe, it, expect, vi, beforeEach } from 'vitest';

const generateBlueprint = vi.fn();
const saveBlueprint = vi.fn();
const updateBlueprintEmailStatus = vi.fn();
const sendEmail = vi.fn();

vi.mock('../generate', async (importOriginal) => ({
  ...(await importOriginal<typeof import('../generate')>()),
  generateBlueprint: (...args: unknown[]) => generateBlueprint(...args),
}));
vi.mock('../storage', () => ({
  saveBlueprint: (...args: unknown[]) => saveBlueprint(...args),
  updateBlueprintEmailStatus: (...args: unknown[]) => updateBlueprintEmailStatus(...args),
}));
vi.mock('../../email', () => ({
  sendEmail: (...args: unknown[]) => sendEmail(...args),
}));

import { deliverBlueprint } from '../deliver';

const recipient = {
  submissionId: 'sub-1',
  clientName: 'Dana Smith',
  clientEmail: 'dana@example.com',
  results: {
    primary: { id: 'H', name: 'Natural', score: 20 },
    secondary: { id: 'C', name: 'Classic', score: 15 },
    supporting: { id: 'E', name: 'Sporty', score: 10 },
    allScores: {},
  },
  origin: 'https://quiz.example.com',
  generatedBy: 'auto' as const,
};

const blueprint = {
  markdown: '# Blueprint',
  body: 'Body',
  primary: 'Natural',
  secondary: 'Classic',
  supporting: 'Sporty',
  archetype: 'The Girl Next Door',
  model: 'claude-opus-5',
  inputTokens: 1,
  outputTokens: 2,
  cacheReadTokens: 3,
  generatedAt: '2026-10-20T00:00:00Z',
};

describe('deliverBlueprint', () => {
  beforeEach(() => {
    vi.clearAllMocks();
    generateBlueprint.mockResolvedValue(blueprint);
    saveBlueprint.mockResolvedValue({ success: true, blueprintId: 'bp-1' });
    sendEmail.mockResolvedValue(true);
  });

  it('writes from her first name and three StyleTypes', async () => {
    await deliverBlueprint(recipient);
    expect(generateBlueprint).toHaveBeenCalledWith({
      clientFirstName: 'Dana',
      primary: 'Natural',
      secondary: 'Classic',
      supporting: 'Sporty',
    });
  });

  it('records who triggered it', async () => {
    await deliverBlueprint(recipient);
    expect(saveBlueprint).toHaveBeenCalledWith('sub-1', blueprint, 'auto');
  });

  it('emails the client with a link to the stored Blueprint', async () => {
    const result = await deliverBlueprint(recipient);
    const email = sendEmail.mock.calls[0][0];
    expect(email.to).toBe('dana@example.com');
    expect(email.html).toContain('https://quiz.example.com/blueprint/bp-1');
    expect(updateBlueprintEmailStatus).toHaveBeenCalledWith('bp-1', true, undefined);
    expect(result).toMatchObject({ saved: true, blueprintId: 'bp-1', emailed: true });
  });

  it('records an email that was not sent', async () => {
    sendEmail.mockResolvedValue(false);
    const result = await deliverBlueprint(recipient);
    expect(result).toMatchObject({ saved: true, emailed: false });
    expect(updateBlueprintEmailStatus).toHaveBeenCalledWith(
      'bp-1',
      false,
      'Email was not sent (disabled or rate limited)',
    );
  });

  it('returns the prose unsaved, without emailing, when storage fails', async () => {
    saveBlueprint.mockResolvedValue({ success: false, error: 'db down' });
    const result = await deliverBlueprint(recipient);
    expect(result).toEqual({ saved: false, error: 'db down', markdown: '# Blueprint' });
    expect(sendEmail).not.toHaveBeenCalled();
  });

  it('rejects an unknown StyleType before calling the model', async () => {
    await expect(
      deliverBlueprint({
        ...recipient,
        results: { ...recipient.results, primary: { id: 'X', name: 'Boho', score: 1 } },
      }),
    ).rejects.toThrow('unrecognized StyleTypes');
    expect(generateBlueprint).not.toHaveBeenCalled();
  });
});
