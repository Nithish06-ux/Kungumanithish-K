require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const corsMiddleware = require("./middleware/cors");

// Route imports
const portfolioRoutes = require("./routes/portfolio");
const contactRoutes = require("./routes/contact");

const app = express();
const PORT = process.env.PORT || 5000;

// --------------- Middleware ---------------
app.use(helmet());
app.use(corsMiddleware);
app.use(morgan("dev"));
app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

// --------------- Routes ---------------

// Health check
app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
  });
});

// Portfolio data
app.use("/api/portfolio", portfolioRoutes);

// Contact form
app.use("/api/contact", contactRoutes);

// --------------- 404 Handler ---------------
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// --------------- Global Error Handler ---------------
app.use((err, req, res, _next) => {
  console.error("💥 Unhandled error:", err.stack);
  res.status(500).json({ error: "Something went wrong on the server." });
});

// --------------- Start Server ---------------
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log(`📋 Health check: http://localhost:${PORT}/api/health`);
  console.log(`📁 Portfolio API: http://localhost:${PORT}/api/portfolio`);
  console.log(`📬 Contact API:   http://localhost:${PORT}/api/contact`);
});
