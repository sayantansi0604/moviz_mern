const dns = require('dns');
dns.setServers(['8.8.8.8', '8.8.4.4']); // Forces Node to use Google's DNS
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Essential for receiving JSON from React
const movieRoutes = require('./routes/movieRoutes'); 
app.use('/api/movies', movieRoutes);

// Connect to Local MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    // This will tell us exactly which database we are hitting
    const dbType = process.env.MONGO_URI.includes('mongodb+srv') ? "Cloud (Atlas)" : "Local (Compass)";
    console.log(`✅ MongoDB Connected: ${dbType}`);
  })
  .catch(err => console.error("❌ Connection Error:", err));

// Test Route
app.get('/', (req, res) => res.send("Server is running!"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server on http://localhost:${PORT}`));