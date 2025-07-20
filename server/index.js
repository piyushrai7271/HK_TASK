require('dotenv').config();
const express = require('express');
const app = express();
const knex = require('./database/db'); // initializes DB
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');

app.use(express.json()); // for JSON body

app.use('/api', userRoutes);
app.use('/api', taskRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
