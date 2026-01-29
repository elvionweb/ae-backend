import nodemailer from "nodemailer";

export const sendEmail = async ({ to, subject, html }) => {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false, // TLS
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // ✅ Verify SMTP connection (VERY IMPORTANT)
    console.log("✅ SMTP server is ready to send emails");

    await transporter.sendMail({
      from: `"Wedding 💍" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });

    // console.log("📧 Email sent to:", to);
  } catch (error) {
    console.error("❌ Email failed:", error.message);
    throw error; // bubble error to controller
  }
};
