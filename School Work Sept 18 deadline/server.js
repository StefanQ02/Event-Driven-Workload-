const express = require("express");

const app = express();
const PORT = process.env.PORT || 10000;

// Demo data only. Do not use real passwords or personal information.
const users = [
  {
    LastName: "Sampang",
    FirstName: "Stefan Philip",
    Email: "Stefan.Sampang@example.com",
    Password: "DemoPass123!"
  },
  
];

app.get("/", (req, res) => {
  res.json({
    message: "Users API is running",
    endpoint: "/api/users"
  });
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Users API listening on port ${PORT}`);
});
