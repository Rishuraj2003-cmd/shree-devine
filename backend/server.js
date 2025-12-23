require("dotenv").config();

const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

// DB CONNECT
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch((err) => console.error("❌ MongoDB Error:", err));


// CORS
app.use(
  cors({
    origin: "http://localhost:5173",
     methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
     allowedHeaders: ["Content-Type", "Authorization"],
    // credentials: true,
  })
);

app.use(express.json());

// ROUTES
app.use("/api/properties", require("./routes/propertyRoutes"));
app.use("/api/leads", require("./routes/lead.routes")); // ✅ NEW

app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Backend running on port ${PORT}`);
});
