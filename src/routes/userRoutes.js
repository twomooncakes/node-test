const express = require('express');
const userController = require('../controllers/userControllers');

const router = express.Router();

// GET Register & Login
router.get('/register', userController.register);
router.get('/login', userController.login);

module.exports = router;