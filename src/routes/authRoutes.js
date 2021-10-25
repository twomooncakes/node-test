const express = require('express');
const { validateUser } = require('../utils/validator');
const userController = require('../controllers/userControllers');

const router = express.Router();

// GET Register & Login
router.post('/register', validateUser, userController.register);
router.post('/login', userController.login);

module.exports = router;