const Expense = require('../Model/expense');

exports.getExpense = (req,res,next) => {
    Expense.findAll()
    .then((expenses) => {
        res.json(expenses);
    })
    .catch(err => console.log(err));
}

exports.addExpense = (req,res,next) =>{
    const amount = req.body.amount;
    const description = req.body.description;
    const category = req.body.category;
    
    Expense.create({
        amount:amount,
        description:description,
        category:category
    })
    .then((data) => {
        res.json(data);
    })
    .catch(err => console.log(err));
}

exports.deleteExpense = (req,res,next) =>{
    const expenseid = req.params.expenseid;
    Expense.findByPk(expenseid)
    .then((expense)=>{
        expense.destroy();
        res.redirect('/');
    })
    .catch(err => console.log(err));
}