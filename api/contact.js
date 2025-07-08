const nodemailer = require("nodemailer");

export default async function handler(req, res) {
  if (req.method !== "POST") return res.status(405).send("Method Not Allowed");

  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "maviajabbar460@gmail.com",        // ⛔ HARDCODED
      pass: "azso hfnk itgd yliv",     // ⛔ HARDCODED
    },
  });

  const mailOptions = {
    from: email,
    to: "maviajabbar460@gmail.com",
    subject: `New message from ${name}`,
    text: message,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).send("Message sent!");
  } catch (error) {
    console.error(error);
    res.status(500).send("Message failed.");
  }
}
