//DEFINTIONS

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { reset } = require('nodemon');
const router = require('./routes/routes');
const app = express();
app.use(bodyParser.json());
app.use('/',router);

const connectionString = 'mongodb://localhost/ReactShoppingCart';
mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(res => console.log("Connection Done"))

app.listen(5001, () => {
    console.log("Running on Port 5001");
})