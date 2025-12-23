require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

/* ---------- DATABASE ---------- */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => {
    console.error("❌ MongoDB Error:", err.message);
    process.exit(1); // stop app if DB fails
  });

/* ---------- MIDDLEWARE ---------- */
app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://shree-devine.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

/* ---------- ROUTES ---------- */
app.use("/api/properties", require("./routes/propertyRoutes"));
app.use("/api/leads", require("./routes/lead.routes"));

/* ---------- HEALTH CHECK ---------- */
app.get("/", (req, res) => {
  res.status(200).send("Backend API is running 🚀");
});

/* ---------- SERVER ---------- */
const PORT = process.env.PORT; // Render injects this

app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
