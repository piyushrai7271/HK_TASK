const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');

// Routes
const exportRoutes = require('./routes/exportRoutes');
const userRoutes = require('./routes/userRoutes');
const taskRoutes = require('./routes/taskRoutes');
const viewRoutes = require('./routes/viewRoutes');

// Initialize app
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// View engine setup with helper
const hbs = exphbs.create({
  extname: '.hbs',
  defaultLayout: false, // ✅ disable layout
  layoutsDir: false,     // ✅ don't look for layouts folder
  helpers: {
    eq: (a, b) => a === b
  }
});

app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));


// Routes usage
app.use('/api', userRoutes);
app.use('/api', taskRoutes);
app.use('/', viewRoutes);
app.use('/', exportRoutes);

module.exports = app;
