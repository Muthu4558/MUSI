import Contact from "../models/Contact.js";
import dotenv from "dotenv";
dotenv.config();

export const submitContactForm = async (req, res) => {
  const { name, email, message, phone, company } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please fill all required fields." });
  }

  try {
    // Save to database only
    const newContact = await Contact.create({ name, email, message, phone, company });

    res.status(201).json({ message: "Message saved successfully!", contact: newContact });
  } catch (error) {
    console.error("🔥 Contact form error:", error);
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
