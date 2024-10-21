const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 5000; // Your backend port

// Middleware
app.use(cors()); // Allow all origins
app.use(bodyParser.json());

let users = []; // This will store user data

// Register route
app.post('/register', (req, res) => {
  const { email, password } = req.body;

  // Check if user already exists
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Save new user
  users.push({ email, password });
  res.status(201).json({ message: 'User registered successfully' });
});

// Login route
app.post('/login', (req, res) => {
  const { email, password } = req.body;

  // Check user credentials
  const user = users.find(user => user.email === email && user.password === password);
  if (!user) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }

  // Generate a token (optional, for protected routes)
  const token = jwt.sign({ email }, 'your_jwt_secret', { expiresIn: '1h' });
  res.json({ token }); // Send token back to the client
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
