require('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://ashishkpdh881:ashishd881@clustercarbon.l7kv3bc.mongodb.net/?retryWrites=true&w=majority&appName=Clustercarbon", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch((err) => console.error('MongoDB connection error:', err));

const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use('/api', require('./routes'));

// Placeholder route
app.get('/', (req, res) => {
  res.send('Carbon Challenge API is running');
});

// TODO: Add routes for auth, activities, leaderboard, etc.

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
}); 