import Contact from "../models/Contact.js";
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

// Configure Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER, // from .env
    pass: process.env.EMAIL_PASS, // Gmail App Password from .env
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export const submitContactForm = async (req, res) => {
  const { name, email, message, phone, company } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please fill all required fields." });
  }

  try {
    // Save to database
    const newContact = await Contact.create({ name, email, message, phone, company });

    // Email to user
    await transporter.sendMail({
      from: `"MusiTechHub" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "Thank you for contacting MusiTechHub",
      html: `<p>Hi ${name},</p>
             <p>Thank you for reaching out. We have received your message:</p>
             <p>Company: ${company || "N/A"}</p>
             <p>Phone: ${phone || "N/A"}</p>
             <blockquote>${message}</blockquote>
             <p>We will get back to you shortly.</p>
             <p>Best regards,<br/>MusiTechHub Team</p>`,
    });

    // Email to admin
    await transporter.sendMail({
      from: `"MusiTechHub Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Form Submission",
      html: `<p>New contact form submitted:</p>
             <p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Company:</strong> ${company || "N/A"}</p>
             <p><strong>Phone:</strong> ${phone || "N/A"}</p>
             <p><strong>Message:</strong><br/>${message}</p>`,
    });

    res.status(201).json({ message: "Message sent successfully!", contact: newContact });
  } catch (error) {
    console.error("🔥 Contact form error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};