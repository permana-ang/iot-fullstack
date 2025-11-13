import mysql from "mysql2/promise";
import dotenv from "dotenv";

dotenv.config();

const pool = mysql.createPool({
  host: process.env.DB_HOST || "db",        // nama service di docker-compose
  user: process.env.DB_USER || "peserta",
  password: process.env.DB_PASSWORD || "password",
  database: process.env.DB_NAME || "training",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// ✅ Tes koneksi awal
(async () => {
  try {
    const conn = await pool.getConnection();
    console.log("✅ Connected to MySQL Database");
    conn.release();
  } catch (err) {
    console.error("❌ Database connection failed:", err.message);
  }
})();

export default pool;
