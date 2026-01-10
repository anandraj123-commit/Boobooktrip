import nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // true for 465, false for 587
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendMail({ to, subject, html }) {
  return transporter.sendMail({
    from: `"Boobook Trip" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    html,
  });
}
