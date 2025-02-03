// Imported modules
const express = require("express");
const cors = require("cors");

// Instance of express app
const app = express();
const PORT = 3500;

// Enable CORS to allow cross-origin requests
app.use(cors()); 

// Middleware to parse incoming requests with JSON payloads
app.use(express.json()); 


// Route for the root path | Test the working of backend server
app.get("/", (req, res) => {
  res.send("Backend is running...");
});


// Running server on PORT 3500
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
