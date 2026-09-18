const express = require("express");

const app = express();
const PORT = process.env.PORT || 10000;

// Demo data only. Do not use real passwords or personal information.
const users = [
  {
    LastName: "Santos",
    FirstName: "Juan",
    Email: "juan.santos@example.com",
    Password: "DemoPass123!"
  },
  {
    LastName: "Reyes",
    FirstName: "Maria",
    Email: "maria.reyes@example.com",
    Password: "DemoPass456!"
  },
  {
    LastName: "Garcia",
    FirstName: "Carlos",
    Email: "carlos.garcia@example.com",
    Password: "DemoPass789!"
  },
  {
    LastName: "Dela Cruz",
    FirstName: "Anna",
    Email: "anna.delacruz@example.com",
    Password: "DemoPass321!"
  },
  {
    LastName: "Rivera",
    FirstName: "Mark",
    Email: "mark.rivera@example.com",
    Password: "DemoPass654!"
  }
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
