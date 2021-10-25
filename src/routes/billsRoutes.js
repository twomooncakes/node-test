const express = require('express');
const { authenticateToken } = require('../utils/validator')
const billsControllers = require('../controllers/billsControllers');

const router = express.Router();

router.get('/:id', authenticateToken, billsControllers.bills);
// router.post('/:id', authenticateToken, billsControllers.bills);

module.exports = router;