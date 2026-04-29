const express = require("express");
const cors = require("cors");

const app = express();

// 🔥 pehle try WITHOUT cors (error dekhne ke liye)
app.use(cors());

app.get("/data", (req, res) => {
  res.json({ message: "Hello from server" });
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});