const express = require("express");
const rateLimit = require("express-rate-limit");
const pool = require("../config/db");

const router = express.Router();

// Rate limit: max 5 contact submissions per IP per 15 minutes
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    error: "Too many contact submissions. Please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// POST /api/contact — save contact form submission
router.post("/", contactLimiter, async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({
        error: "Name, email, and message are required fields.",
      });
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: "Please provide a valid email address.",
      });
    }

    // Save to PostgreSQL
    const query = `
      INSERT INTO contacts (name, email, subject, message)
      VALUES ($1, $2, $3, $4)
      RETURNING id, created_at
    `;
    const values = [name, email, subject || null, message];
    const result = await pool.query(query, values);

    // Return success with EmailJS config so the frontend can send the email
    res.status(201).json({
      success: true,
      message: "Contact form submitted successfully!",
      contact: {
        id: result.rows[0].id,
        created_at: result.rows[0].created_at,
      },
      emailjs: {
        serviceId: process.env.EMAILJS_SERVICE_ID,
        templateId: process.env.EMAILJS_TEMPLATE_ID,
        publicKey: process.env.EMAILJS_PUBLIC_KEY,
      },
    });
  } catch (err) {
    console.error("❌ Error saving contact:", err.message);
    res.status(500).json({
      error: "Internal server error. Please try again later.",
    });
  }
});

module.exports = router;
