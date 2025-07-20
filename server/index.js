require('dotenv').config();
const express = require('express');
const exphbs = require('express-handlebars');
const exportRoutes = require('./routes/exportRoutes');
const path = require('path');
const app = express();

// DB connection
const knex = require('./database/db');

// Routes
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const viewRoutes = require('./routes/viewRoutes');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View engine
app.engine('hbs', exphbs.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

// Routes usage
app.use('/api', userRoutes);
app.use('/api', taskRoutes);
app.use('/', viewRoutes);
app.use('/', exportRoutes);

// Start server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
