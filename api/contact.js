// /api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Only POST requests allowed" });
  }

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail", // or use SMTP if you want
    auth: {
      user: "maviajabbar460@gmail.com", // replace
      pass: "jmpf vqol yafi uzfy",    // replace with Gmail App Password
    },
  });

  try {
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: "maviajabbar460@gmail.com", // where you want to receive the email
      subject: "New Contact Form Message",
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong><br>${message}</p>`,
    });

    res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Something went wrong." });
  }
}
