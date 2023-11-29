const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Route to get user profile
router.get('/:username', (req, res) => {
  const username = req.params.username;

  // Assuming getUserByUsername is a method in your User model
  const user = User.getUserByUsername(username);

  if (user) {
    res.render('profile', { user });
  } else {
    res.status(404).send('User not found');
  }
});

// Route to edit user profile
router.get('/:username/edit', (req, res) => {
  const username = req.params.username;

  // Assuming getUserByUsername is a method in your User model
  const user = User.getUserByUsername(username);

  if (user) {
    res.render('editProfile', { user });
  } else {
    res.status(404).send('User not found');
  }
});

// Route to update user profile
router.post('/:username/edit', (req, res) => {
  const username = req.params.username;
  const updatedInfo = req.body; // Assuming you have a form to update user info

  // Assuming updateUser is a method in your User model
  const success = User.updateUser(username, updatedInfo);

  if (success) {
    res.redirect(`/user/${username}`);
  } else {
    res.status(500).send('Error updating user');
  }
});

module.exports = router;
