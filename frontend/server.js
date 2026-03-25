import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import nodemailer from "nodemailer";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ── Reusable Gmail transporter ──
const createTransporter = () =>
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

// ─────────────────────────────────────────
// ROUTE 1: /api/send-email  (Contact Us page)
// ─────────────────────────────────────────
app.post("/api/send-email", async (req, res) => {
  const { from, subject, message } = req.body;

  if (!from || !subject || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const transporter = createTransporter();

  try {
    await transporter.verify();

    // Internal notification
    await transporter.sendMail({
      from: `"Flyintake Contact Form" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `📩 Contact Form: ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#1a3c6e,#2563eb);padding:28px 24px;text-align:center;">
            <h2 style="color:white;margin:0;">📩 New Contact Form Message</h2>
          </div>
          <div style="padding:28px 24px;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr style="background:#f0f4ff;"><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;width:38%;">From</td><td style="padding:12px 14px;border:1px solid #e0e0e0;"><a href="mailto:${from}" style="color:#2563eb;">${from}</a></td></tr>
              <tr><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Subject</td><td style="padding:12px 14px;border:1px solid #e0e0e0;">${subject}</td></tr>
            </table>
            <div style="margin-top:20px;padding:18px;background:#f8faff;border:1px solid #e0e0e0;border-radius:8px;">
              <p style="margin:0 0 8px;font-weight:bold;color:#555;">Message:</p>
              <p style="margin:0;color:#222;font-size:15px;line-height:1.7;white-space:pre-line;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"Flyintake" <${process.env.EMAIL_USER}>`,
      to: from,
      subject: `We received your message! ✅`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#1a3c6e,#2563eb);padding:32px 24px;text-align:center;">
            <h2 style="color:white;margin:0;">Thank you for reaching out! 🙏</h2>
          </div>
          <div style="padding:28px 24px;">
            <p style="font-size:16px;color:#333;line-height:1.6;">Thank you for contacting <strong>Flyintake Global Consulting</strong>. Our team will get back to you within <strong>24 hours</strong>.</p>
            <div style="margin-top:24px;padding:16px 18px;background:#f0fdf4;border-left:4px solid #2c7a3f;border-radius:6px;">
              <p style="margin:0;color:#166534;">💚 Need urgent help? Call us:<br/><strong>+44 7741020217</strong> | <strong>+91 9121767948</strong></p>
            </div>
            <p style="margin-top:24px;color:#555;font-size:14px;">Best regards,<br/><strong style="color:#2563eb;">The Flyintake Team</strong></p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (error) {
    console.error("❌ send-email error:", error.message);
    return res.status(500).json({ message: "Failed to send message: " + error.message });
  }
});

// ─────────────────────────────────────────
// ROUTE 2: /api/counselling  (Free Counselling form)
// ─────────────────────────────────────────
app.post("/api/counselling", async (req, res) => {
  const { firstName, lastName, email, mobile, destination, startTime, studyLevel, funding } = req.body;

  if (!firstName || !lastName || !email || !mobile) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  const transporter = createTransporter();

  try {
    await transporter.verify();

    // Internal notification
    await transporter.sendMail({
      from: `"Flyintake Forms" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🎓 New Lead: ${firstName} ${lastName}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#2c7a3f,#4caf50);padding:28px 24px;text-align:center;">
            <h2 style="color:white;margin:0;">📋 New Counselling Request</h2>
          </div>
          <div style="padding:28px 24px;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr style="background:#f8fdf9;"><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;width:38%;">Full Name</td><td style="padding:12px 14px;border:1px solid #e0e0e0;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Email</td><td style="padding:12px 14px;border:1px solid #e0e0e0;"><a href="mailto:${email}" style="color:#2c7a3f;">${email}</a></td></tr>
              <tr style="background:#f8fdf9;"><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Mobile</td><td style="padding:12px 14px;border:1px solid #e0e0e0;">${mobile}</td></tr>
              <tr><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Destination</td><td style="padding:12px 14px;border:1px solid #e0e0e0;">${destination || "N/A"}</td></tr>
              <tr style="background:#f8fdf9;"><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Start Time</td><td style="padding:12px 14px;border:1px solid #e0e0e0;">${startTime || "N/A"}</td></tr>
              <tr><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Study Level</td><td style="padding:12px 14px;border:1px solid #e0e0e0;">${studyLevel || "N/A"}</td></tr>
              <tr style="background:#f8fdf9;"><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Funding</td><td style="padding:12px 14px;border:1px solid #e0e0e0;">${funding || "N/A"}</td></tr>
            </table>
            <div style="margin-top:20px;padding:14px 16px;background:#fff8e1;border-left:4px solid #f59e0b;border-radius:4px;">
              <p style="margin:0;color:#92400e;font-size:14px;">⚡ Please follow up with this student as soon as possible.</p>
            </div>
          </div>
        </div>
      `,
    });

    // Confirmation to student
    await transporter.sendMail({
      from: `"Flyintake" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We received your request, ${firstName}! 🎓`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#2c7a3f,#4caf50);padding:32px 24px;text-align:center;">
            <h2 style="color:white;margin:0;">Thank you, ${firstName}! 🎉</h2>
          </div>
          <div style="padding:28px 24px;">
            <p style="font-size:16px;color:#333;line-height:1.6;">Hi <strong>${firstName}</strong>, one of our expert counsellors will contact you shortly on <strong>${mobile}</strong>.</p>
            <div style="margin-top:24px;padding:16px 18px;background:#f0fdf4;border-left:4px solid #2c7a3f;border-radius:6px;">
              <p style="margin:0;color:#166534;font-size:15px;font-weight:bold;">💚 All our services are completely FREE!</p>
            </div>
            <p style="margin-top:24px;color:#555;font-size:14px;">Best regards,<br/><strong style="color:#2c7a3f;">The Flyintake Team</strong></p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ message: "Emails sent successfully!" });
  } catch (error) {
    console.error("❌ counselling error:", error.message);
    return res.status(500).json({ message: "Failed to send emails: " + error.message });
  }
});

// ─────────────────────────────────────────
// ROUTE 3: /api/notify-careers  (Careers page)
// ─────────────────────────────────────────
app.post("/api/notify-careers", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const transporter = createTransporter();

  try {
    await transporter.verify();

    // Internal notification
    await transporter.sendMail({
      from: `"Flyintake Careers" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🔔 New Career Notification Signup`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#4f1d96,#7c3aed);padding:28px 24px;text-align:center;">
            <h2 style="color:white;margin:0;">🔔 New Career Subscriber</h2>
          </div>
          <div style="padding:28px 24px;">
            <table style="width:100%;border-collapse:collapse;font-size:15px;">
              <tr style="background:#faf5ff;"><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;width:38%;">Email</td><td style="padding:12px 14px;border:1px solid #e0e0e0;"><a href="mailto:${email}" style="color:#7c3aed;">${email}</a></td></tr>
              <tr><td style="padding:12px 14px;border:1px solid #e0e0e0;font-weight:bold;color:#555;">Signed Up At</td><td style="padding:12px 14px;border:1px solid #e0e0e0;">${new Date().toLocaleString("en-GB", { timeZone: "Europe/London" })}</td></tr>
            </table>
          </div>
        </div>
      `,
    });

    // Confirmation to subscriber
    await transporter.sendMail({
      from: `"Flyintake Careers" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `You're on the list! 🔔`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:620px;margin:0 auto;border:1px solid #e0e0e0;border-radius:10px;overflow:hidden;">
          <div style="background:linear-gradient(135deg,#4f1d96,#7c3aed);padding:32px 24px;text-align:center;">
            <h2 style="color:white;margin:0;">You're on the list! 🎉</h2>
          </div>
          <div style="padding:28px 24px;">
            <p style="font-size:16px;color:#333;line-height:1.6;">Thank you for your interest in joining <strong>Flyintake Global Consulting</strong>! We'll notify you as soon as a new career opportunity becomes available.</p>
            <div style="margin-top:24px;padding:16px 18px;background:#faf5ff;border-left:4px solid #7c3aed;border-radius:6px;">
              <p style="margin:0;color:#4f1d96;">💼 Can't wait? Send your CV directly to:<br/><strong>office@flyintakegc.com</strong></p>
            </div>
            <p style="margin-top:24px;color:#555;font-size:14px;">Best regards,<br/><strong style="color:#7c3aed;">The Flyintake Team</strong></p>
          </div>
        </div>
      `,
    });

    return res.status(200).json({ message: "Subscribed successfully!" });
  } catch (error) {
    console.error("❌ notify-careers error:", error.message);
    return res.status(500).json({ message: "Failed to subscribe: " + error.message });
  }
});

// ── Start server ──
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Backend server running on http://localhost:${PORT}`);
});