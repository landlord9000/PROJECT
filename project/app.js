const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./models/db');
const userRoutes = require('./routes/user');
const exerciseRoutes = require('./routes/exercise');

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(
  session({
    secret: 'your_secret_key',
    resave: true,
    saveUninitialized: true,
  })
);

// Database connection
db.connect((err) => {
  if (err) {
    console.log('Error connecting to MySQL:', err);
    return;
  }
  console.log('Connected to MySQL');
});

// Routes
app.use('/', require('./routes/index'));
app.use('/user', userRoutes);
app.use('/exercise', exerciseRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
