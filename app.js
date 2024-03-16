const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const expenseRoutes = require('./Routes/expense');

const sequelize = require('./util/database');

const cors = require('cors');

app.use(bodyParser.json({extended:false}));

app.use(cors());

app.use(expenseRoutes);

sequelize.sync()
.then((result) => {
    app.listen(4500);
})
.catch(err => console.log(err));