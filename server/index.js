require('dotenv').config();
const app = require('./app');
const knex = require('./database/db'); // Initialize DB connection if needed

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
