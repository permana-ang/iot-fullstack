import React, { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [apiMsg, setApiMsg] = useState("");
  const [dbMsg, setDbMsg] = useState("");

  useEffect(() => {
    // Test koneksi React -> Express
    axios.get("/api")
      .then(res => setApiMsg(res.data.message))
      .catch(err => setApiMsg("❌ Error connecting to backend"));

    // Test koneksi React -> Express -> MySQL
    axios.get("/api/dbcheck")
      .then(res => {
        setDbMsg(`${res.data.message} | Time: ${res.data.time}`);
      })
      .catch(err => {
        setDbMsg("❌ Database connection failed");
        console.error(err);
      });
  }, []);

  return (
    <section className="section has-text-centered">
      <h1 className="title">React → Nginx → Express → MySQL Test</h1>
      <div className="content">
        <p><strong>API Status:</strong> {apiMsg || "Loading..."}</p>
        <p><strong>DB Status:</strong> {dbMsg || "Loading..."}</p>
      </div>
    </section>
  );
}

export default App;
