const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const transporter = nodemailer.createTransport({
    host: "smtp.zoho.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // EMAIL 1 — Notify your team of new career subscriber
    await transporter.sendMail({
      from: '"Flyintake Careers" <office@flyintakegc.com>',
      to: "office@flyintakegc.com",
      subject: `🔔 New Career Notification Signup`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#4f1d96,#7c3aed);padding:28px 24px;text-align:center;">
            <h2 style="color:white;margin:0;font-size:22px;">🔔 New Career Subscriber</h2>
            <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:14px;">Someone signed up for job opening notifications</p>
          </div>
          <div style="padding:28px 24px;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr style="background:#faf5ff;">
                <td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;width:38%;">Email</td>
                <td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">
                  <a href="mailto:${email}" style="color:#7c3aed;">${email}</a>
                </td>
              </tr>
              <tr>
                <td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Signed Up At</td>
                <td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}</td>
              </tr>
            </table>
            <div style="margin-top:20px;padding:14px 16px;background:#fff8e1;border-left:4px solid #f59e0b;border-radius:4px;">
              <p style="margin:0;color:#92400e;font-size:14px;">📋 Add this person to your careers mailing list.</p>
            </div>
          </div>
          <div style="background:#f5f5f5;padding:14px;text-align:center;color:#aaa;font-size:12px;">
            Flyintake Careers System — Internal Notification
          </div>
        </div>
      `,
    });

    // EMAIL 2 — Confirmation to the subscriber
    await transporter.sendMail({
      from: '"Flyintake Careers" <office@flyintakegc.com>',
      to: email,
      subject: `You're on the list! 🔔`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#4f1d96,#7c3aed);padding:32px 24px;text-align:center;">
            <h2 style="color:white;margin:0;font-size:24px;">You're on the list! 🎉</h2>
            <p style="color:rgba(255,255,255,0.9);margin:8px 0 0;font-size:15px;">Career notification subscription confirmed</p>
          </div>
          <div style="padding:28px 24px;">
            <p style="font-size:16px;color:#333;line-height:1.6;">
              Thank you for your interest in joining <strong>Flyintake Global Consulting</strong>!
              We'll notify you as soon as a new career opportunity becomes available.
            </p>
            <div style="margin-top:24px;padding:16px 18px;background:#faf5ff;border-left:4px solid #7c3aed;border-radius:6px;">
              <p style="margin:0;color:#4f1d96;font-size:15px;">
                💼 Can't wait? Send your CV directly to:<br/>
                <strong>office@flyintakegc.com</strong>
              </p>
            </div>
            <p style="margin-top:24px;color:#555;font-size:14px;line-height:1.6;">
              Best regards,<br/>
              <strong style="color:#7c3aed;">The Flyintake Team</strong>
            </p>
          </div>
          <div style="background:#f5f5f5;padding:14px;text-align:center;color:#aaa;font-size:12px;">
            © Flyintake Global Consulting — You can unsubscribe by emailing us
          </div>
        </div>
      `,
    });

    return res.status(200).json({ message: "Subscribed successfully!" });

  } catch (error) {
    console.error("Nodemailer error:", error);
    return res.status(500).json({ message: "Failed to subscribe. Please try again." });
  }
}