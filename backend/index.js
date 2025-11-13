import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./config/database.js"; // ⬅️ gunakan koneksi dari file config

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Route test backend atau Tes koneksi API
app.get("/api", (req, res) => {
  res.json({ message: "Hello from backend" });
});

// ✅ Root route atau 
app.get("/", (req, res) => {
  res.send("Backend API is running 🚀");
});

// ✅ Route test koneksi database
app.get("/api/dbcheck", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT NOW() AS time");
    res.json({ message: "Database OK ✅", time: rows[0].time });
  } catch (err) {
    console.error("❌ DB check error:", err);
    res.status(500).json({ error: err.message });
  }
});

app.listen(5000, () => console.log("🚀 Backend running on port 5000"));
