const express = require('express');
const { authenticateToken } = require('../utils/validator')
const accountsControllers = require('../controllers/accountsControllers');

const router = express.Router();

router.get('/', authenticateToken, accountsControllers.getData);
router.post('/', authenticateToken, accountsControllers.createAccount);

module.exports = router;