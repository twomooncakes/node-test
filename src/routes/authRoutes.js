const express = require('express');
const { validateUser } = require('../utils/validator');
const authController = require('../controllers/authControllers');

const router = express.Router();

// GET Register & Login
router.post('/register', validateUser, authController.register);
router.post('/login', authController.login);

module.exports = router;