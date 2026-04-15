const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const Participant = require('./models/Participant');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
// If no MONGO_URI is specified, use a local mongodb instance
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || "mongodb://mongo:27017/AIBusinessDB";

// 'mongodb+srv://nextteachnow:nextteachnow@cluster0.ozfyjn7.mongodb.net/AIBusinessDB?appName=Cluster0';

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Routes

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/users', async(req, res) => {

  const users = await Participant.find();
  res.send(users);
});

app.post('/api/register', async (req, res) => {
  try {
    const { name, email, jobTitle, company } = req.body;

    // Simple validation
    if (!name || !email || !jobTitle || !company) {
      return res.status(400).json({ error: 'All fields are required.' });
    }

    // Check if participant already exists
    const existingParticipant = await Participant.findOne({ email });
    if (existingParticipant) {
      return res.status(400).json({ error: 'Email already registered.' });
    }

    const newParticipant = new Participant({
      name,
      email,
      jobTitle,
      company
    });

    await newParticipant.save();

    res.status(201).json({ message: 'Registration successful!', participant: newParticipant });
  } catch (error) {
    console.error('Registration error:', error);
    res.status(500).json({ error: 'Server error during registration.' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
