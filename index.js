const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.status(200).send("Hello from NodeJS App!");
});

app.get("/status", (req, res) => {
  res.status(200).json({ status: "running", version: "1.0" });
});

// Start server and store in variable
const server = app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
  console.log("Testing your code");
});

// Export the server for testing
module.exports = server;
