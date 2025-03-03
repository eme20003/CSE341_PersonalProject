const express = require('express');
// Initialize express app
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./backend/db/connect');
require('dotenv').config();
const { auth, requiresAuth } = require('express-openid-connect');

const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASE_URL,
  clientID: process.env.CLIENT_ID,
  issuerBaseURL: process.env.ISSUER_BASE_URL,
};

// auth router attaches /login, /logout, and /callback routes to the baseURL
app.use(auth(config));

// req.isAuthenticated is provided from the auth router
app.get('/', (req, res) => {
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
});


// Now you can call setupSwagger
const setupSwagger = require('./swagger');
setupSwagger(app);

const port = process.env.PORT || 8080;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use('/api/users', requiresAuth(), require('./backend/routes/users'));

// Connect to Database and Start Server
db.initDb((err) => {
  if (err) {
    console.error('Database connection failed:', err);
    process.exit(1);
  } else {
    app.listen(port, () => console.log(`Server running on port ${port}`));
  }
});
