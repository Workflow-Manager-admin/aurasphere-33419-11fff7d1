const express = require('express');
const authController = require('../controllers/auth');

const router = express.Router();

// PUBLIC_INTERFACE
// Define authentication routes (login, signup, OAuth, etc.)
// e.g., router.post('/login', authController.login);

module.exports = router;
