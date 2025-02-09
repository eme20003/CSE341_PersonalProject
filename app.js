const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./backend/db/connect');
require('dotenv').config();

// Initialize express app
const app = express();

// Now you can call setupSwagger
const setupSwagger = require('./swagger');
setupSwagger(app);

const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', require('./backend/routes/users'));

// Connect to Database and Start Server
db.initDb((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  } else {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  }
});


//THISS SUCKS
