const nodemailer = require("nodemailer");

const sendEmail = async (lead) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"Shree Devine Website" <${process.env.EMAIL_USER}>`,
    to: process.env.ADMIN_EMAIL,
    subject: "📩 New Lead Received",
    html: `
      <h3>New Lead Received</h3>
      <p><b>Name:</b> ${lead.name}</p>
      <p><b>Phone:</b> ${lead.phone}</p>
      <p><b>Email:</b> ${lead.email || "N/A"}</p>
      <p><b>Message:</b> ${lead.message}</p>
      <p><b>Source:</b> ${lead.source}</p>
    `,
  });
};

module.exports = sendEmail;
