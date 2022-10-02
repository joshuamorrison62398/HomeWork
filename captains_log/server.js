//require modules
const express = require('express');

//create express app
const app = express();
const methodOverride = require('method-override');
const mongoose  = require('mongoose');
const dotenv = require('dotenv')
require('dotenv').config()

const Port = process.env.PORT
//configure the app(app.set)

app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());


//mount the middleware(app.use)


//mount routes
app.get('/', function(req, res) {
    res.send('<h1>Hello Express</h1>');
});

app.get('/new', function(req, res) {
    res.render('new')
})

//PORT = 3000

//tell app to listen on port 3000
app.listen(3000, function () {
    console.log('listening on port 3000');
});
