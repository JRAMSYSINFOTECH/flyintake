import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // ── CORS headers (helps with form submission issues) ──
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(200).end();

  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { firstName, lastName, email, mobile, destination, startTime, studyLevel, funding } = req.body;

  // ── Validation ──
  if (!firstName || !lastName || !email || !mobile) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  // ── Gmail transporter ──
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,   // your Gmail: e.g. yourname@gmail.com
      pass: process.env.EMAIL_PASS,   // Gmail App Password (16 chars, no spaces)
    },
  });

  try {
    // ── Verify connection before sending ──
    await transporter.verify();

    // ── Internal notification email ──
    await transporter.sendMail({
      from: `"Flyintake Forms" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🎓 New Lead: ${firstName} ${lastName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#2c7a3f,#4caf50);padding:28px 24px;text-align:center;">
            <h2 style="color:white;margin:0;font-size:22px;">📋 New Counselling Request</h2>
            <p style="color:rgba(255,255,255,0.85);margin:6px 0 0;font-size:14px;">A new student has submitted their details</p>
          </div>
          <div style="padding:28px 24px;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr style="background:#f8fdf9;"><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;width:38%;">Full Name</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Email</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;"><a href="mailto:${email}" style="color:#2c7a3f;">${email}</a></td></tr>
              <tr style="background:#f8fdf9;"><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Mobile</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">${mobile}</td></tr>
              <tr><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Destination</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">${destination || "N/A"}</td></tr>
              <tr style="background:#f8fdf9;"><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Start Time</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">${startTime || "N/A"}</td></tr>
              <tr><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Study Level</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">${studyLevel || "N/A"}</td></tr>
              <tr style="background:#f8fdf9;"><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Funding</td><td style="padding:12px 14px;border:1px solid #e0e0e0;color:#222;">${funding || "N/A"}</td></tr>
            </table>
            <div style="margin-top:20px;padding:14px 16px;background:#fff8e1;border-left:4px solid #f59e0b;border-radius:4px;">
              <p style="margin:0;color:#92400e;font-size:14px;">⚡ Please follow up with this student as soon as possible.</p>
            </div>
          </div>
          <div style="background:#f5f5f5;padding:14px;text-align:center;color:#aaa;font-size:12px;">Flyintake Counselling System — Internal Notification</div>
        </div>
      `,
    });

    // ── Confirmation email to student ──
    await transporter.sendMail({
      from: `"Flyintake" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We received your request, ${firstName}! 🎓`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#2c7a3f,#4caf50);padding:32px 24px;text-align:center;">
            <h2 style="color:white;margin:0;font-size:24px;">Thank you, ${firstName}! 🎉</h2>
            <p style="color:rgba(255,255,255,0.9);margin:8px 0 0;font-size:15px;">Your counselling request has been received</p>
          </div>
          <div style="padding:28px 24px;">
            <p style="font-size:16px;color:#333;line-height:1.6;">Hi <strong>${firstName}</strong>, one of our expert counsellors will contact you shortly on <strong>${mobile}</strong>.</p>
            <table style="width:100%;border-collapse:collapse;font-size:15px;margin-top:16px;">
              <tr style="background:#f8fdf9;"><td style="padding:11px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;width:40%;">Study Destination</td><td style="padding:11px 14px;border:1px solid #e0e0e0;color:#222;">${destination || "N/A"}</td></tr>
              <tr><td style="padding:11px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Preferred Start</td><td style="padding:11px 14px;border:1px solid #e0e0e0;color:#222;">${startTime || "N/A"}</td></tr>
              <tr style="background:#f8fdf9;"><td style="padding:11px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Study Level</td><td style="padding:11px 14px;border:1px solid #e0e0e0;color:#222;">${studyLevel || "N/A"}</td></tr>
              <tr><td style="padding:11px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Funding Method</td><td style="padding:11px 14px;border:1px solid #e0e0e0;color:#222;">${funding || "N/A"}</td></tr>
            </table>
            <div style="margin-top:24px;padding:16px 18px;background:#f0fdf4;border-left:4px solid #2c7a3f;border-radius:6px;">
              <p style="margin:0;color:#166534;font-size:15px;font-weight:bold;">💚 All our services are completely FREE!</p>
            </div>
            <p style="margin-top:24px;color:#555;font-size:14px;line-height:1.6;">Best regards,<br/><strong style="color:#2c7a3f;">The Flyintake Team</strong></p>
          </div>
          <div style="background:#f5f5f5;padding:14px;text-align:center;color:#aaa;font-size:12px;">© Flyintake — Free Study Abroad Counselling</div>
        </div>
      `,
    });

    return res.status(200).json({ message: "Emails sent successfully!" });

  } catch (error) {
    console.error("Gmail SMTP error:", error.message);
    return res.status(500).json({
      message: "Failed to send emails. Please check your Gmail App Password in .env",
    });
  }
}