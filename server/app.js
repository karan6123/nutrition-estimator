const express = require('express');
const cors = require('cors');
const nutritionRoutes = require('./routes/nutritionRoutes');

const app = express();

app.use(cors());
app.use(express.json());
app.use('/api/estimate', nutritionRoutes);

module.exports = app;