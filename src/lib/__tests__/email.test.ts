import { describe, it, expect, vi, beforeEach } from 'vitest';

const sendMail = vi.fn().mockResolvedValue({ messageId: 'test' });
vi.mock('nodemailer', () => ({
  default: {
    createTransport: () => ({ sendMail, verify: vi.fn().mockResolvedValue(true) }),
  },
}));

import { sendEmail, withReportCopy, REPORT_COPY_RECIPIENT } from '../email';

const email = {
  to: 'client@example.com',
  subject: 'Your Signature Style Blueprint',
  html: '<p>Blueprint</p>',
  text: 'Blueprint',
};

describe('report testing copy', () => {
  beforeEach(() => {
    sendMail.mockClear();
    process.env.EMAIL_ENABLED = 'true';
    process.env.SMTP_HOST = 'smtp.example.com';
  });

  it('copies Mary Michele as a hidden recipient', () => {
    expect(REPORT_COPY_RECIPIENT).toBe('marymichelenidiffer@gmail.com');
    expect(withReportCopy(email).bcc).toBe(REPORT_COPY_RECIPIENT);
  });

  it('keeps the original recipient and content', () => {
    expect(withReportCopy(email)).toMatchObject(email);
  });

  it('skips the copy when she is already the recipient', () => {
    expect(withReportCopy({ ...email, to: 'MaryMicheleNidiffer@gmail.com' }).bcc).toBeUndefined();
    expect(
      withReportCopy({ ...email, to: `coach@example.com, ${REPORT_COPY_RECIPIENT}` }).bcc,
    ).toBeUndefined();
  });

  it('sends the copy through sendEmail', async () => {
    await expect(sendEmail(email)).resolves.toBe(true);
    expect(sendMail).toHaveBeenCalledOnce();
    expect(sendMail.mock.calls[0][0]).toMatchObject({
      to: 'client@example.com',
      bcc: REPORT_COPY_RECIPIENT,
    });
  });
});
