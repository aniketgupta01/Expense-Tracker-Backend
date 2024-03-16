const path = require('path');

const express = require('express');

const expenseController = require('../Controller/expense');

const router = express.Router();

router.get('/',expenseController.getExpense);

router.post('/add-expense',expenseController.addExpense);

router.post('/expense/delete/:expenseid',expenseController.deleteExpense);

module.exports = router;