// Import necessary packages
const express = require('express');
const mongoose = require('mongoose');

// Create Express application
const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/newsletter', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Define Mongoose schema for email subscription
const subscriptionSchema = new mongoose.Schema({
  email: String,
});

const Subscription = mongoose.model('Subscription', subscriptionSchema);

// Middleware to parse JSON requests
app.use(express.json());

// POST route to handle subscription form submission
app.post('/subscribe', async (req, res) => {
  try {
    // Extract email from request body
    const { email } = req.body;

    // Create new subscription document
    const subscription = new Subscription({
      email,
    });

    // Save subscription to MongoDB
    await subscription.save();

    // Send response
    res.status(201).json({ message: 'Subscription successful!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
