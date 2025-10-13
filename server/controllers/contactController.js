import Contact from "../models/Contact.js";
import dotenv from "dotenv";
import fetch from "node-fetch";
dotenv.config();

export const submitContactForm = async (req, res) => {
  const { name, email, message, phone, company } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please fill all required fields." });
  }

  try {
    // 1️⃣ Save contact in database
    const newContact = await Contact.create({ name, email, message, phone, company });

    // 2️⃣ Email to user
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: "MusiTechHub", email: process.env.SENDER_EMAIL },
        to: [{ email }],
        subject: "Thank you for contacting MusiTechHub",
        htmlContent: `
          <p>Hi ${name},</p>
          <p>Thank you for reaching out. We have received your message:</p>
          <p><b>Company:</b> ${company || "N/A"}</p>
          <p><b>Phone:</b> ${phone || "N/A"}</p>
          <blockquote>${message}</blockquote>
          <p>We will get back to you shortly.</p>
          <p>Best regards,<br/>MusiTechHub Team</p>
        `,
      }),
    });

    // 3️⃣ Email to admin
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "api-key": process.env.BREVO_API_KEY,
      },
      body: JSON.stringify({
        sender: { name: "MusiTechHub Website", email: process.env.SENDER_EMAIL },
        to: [{ email: process.env.SENDER_EMAIL }],
        subject: "New Contact Form Submission",
        htmlContent: `
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Company:</b> ${company || "N/A"}</p>
          <p><b>Phone:</b> ${phone || "N/A"}</p>
          <p><b>Message:</b></p>
          <blockquote>${message}</blockquote>
        `,
      }),
    });

    // 4️⃣ Send success response
    res.status(201).json({ message: "Message sent successfully!", contact: newContact });
  } catch (error) {
    console.error("🔥 Contact form error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};