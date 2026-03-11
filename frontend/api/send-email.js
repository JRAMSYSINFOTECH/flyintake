import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { from, subject, message } = req.body;

  if (!from || !subject || !message) {
    return res.status(400).json({ message: "Missing required fields" });
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
    await transporter.sendMail({
      from: `"Flyintake Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 Contact Form: ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#1a3c6e,#2563eb);padding:28px 24px;text-align:center;">
            <h2 style="color:white;margin:0;font-size:22px;">📩 New Contact Form Message</h2>
            <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:14px;">Someone reached out via the Contact Us page</p>
          </div>
          <div style="padding:28px 24px;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr style="background:#f0f4ff;"><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;width:38%;">From</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;"><a href="mailto:${from}" style="color:#2563eb;">${from}</a></td></tr>
              <tr><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Subject</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">${subject}</td></tr>
            </table>
            <div style="margin-top:20px;padding:18px;background:#f8faff;border:1px solid #e0e0e0;border-radius:8px;">
              <p style="margin:0 0 8px;font-weight:bold;color:#555;font-size:14px;">Message:</p>
              <p style="margin:0;color:#222;font-size:15px;line-height:1.7;white-space:pre-line;">${message}</p>
            </div>
            <div style="margin-top:20px;padding:14px 16px;background:#fff8e1;border-left:4px solid #f59e0b;border-radius:4px;">
              <p style="margin:0;color:#92400e;font-size:14px;">⚡ Please reply to this person as soon as possible.</p>
            </div>
          </div>
          <div style="background:#f5f5f5;padding:14px;text-align:center;color:#aaa;font-size:12px;">Flyintake Contact System — Internal Notification</div>
        </div>
      `,
    });

    await transporter.sendMail({
      from: `"Flyintake" <${process.env.EMAIL_USER}>`,
      to: from,
      subject: `We received your message! ✅`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#1a3c6e,#2563eb);padding:32px 24px;text-align:center;">
            <h2 style="color:white;margin:0;font-size:24px;">Thank you for reaching out! 🙏</h2>
            <p style="color:rgba(255,255,255,0.9);margin:8px 0 0;font-size:15px;">We've received your message</p>
          </div>
          <div style="padding:28px 24px;">
            <p style="font-size:16px;color:#333;line-height:1.6;">Thank you for contacting <strong>Flyintake Global Consulting</strong>. Our team will get back to you within <strong>24 hours</strong>.</p>
            <div style="margin-top:20px;padding:18px;background:#f8faff;border:1px solid #e0e0e0;border-radius:8px;">
              <p style="margin:0 0 8px;font-weight:bold;color:#555;font-size:14px;">Your message regarding:</p>
              <p style="margin:0;color:#2563eb;font-size:15px;font-weight:bold;">${subject}</p>
            </div>
            <div style="margin-top:24px;padding:16px 18px;background:#f0fdf4;border-left:4px solid #2c7a3f;border-radius:6px;">
              <p style="margin:0;color:#166534;font-size:15px;">💚 Need urgent help? Call us:<br/><strong>+44 7741020217</strong> | <strong>+91 9121767948</strong></p>
            </div>
            <p style="margin-top:24px;color:#555;font-size:14px;line-height:1.6;">Best regards,<br/><strong style="color:#2563eb;">The Flyintake Team</strong></p>
          </div>
          <div style="background:#f5f5f5;padding:14px;text-align:center;color:#aaa;font-size:12px;">© Flyintake Global Consulting — office@flyintakegc.com</div>
        </div>
      `,
    });

    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("Nodemailer error:", error);
    return res.status(500).json({ message: "Failed to send message. Please try again." });
  }
}