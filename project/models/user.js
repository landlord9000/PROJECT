const db = require('./db');

class User {
  static createUser(username, password, email) {
    // Implement user creation logic with SQL INSERT query
  }

  static getUserByUsername(username) {
    // Implement logic to retrieve user by username from the database
  }
}

module.exports = User;
