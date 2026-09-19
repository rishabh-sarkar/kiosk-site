// index.js
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// 1. Middleware to parse JSON data
app.use(bodyParser.json());

// 2. Middleware to parse URL-encoded form data
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static('public'));

// Handle GET requests at the root URL
app.get("/", (req, res) => {
    res.send("Hello World!!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});