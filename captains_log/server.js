// load express
const express = require('express');

const methodOverride = require('method-override');

// bring in mongoConfig
const mongoConfig = require('./config')

// establish port
require('dotenv').config()

// create express app
const app = express();

// bring in packaged route
const logRoutes = require('./routes/logRoutes');

// port
const port = process.env.PORT;


// setup our view engine
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// middleware
app.use(express.urlencoded({extended:false}))
app.use(express.static("public"))
app.use(express.json())
app.use(methodOverride("_method"))


app.use('/logs', logRoutes);

//listen to port
app.listen(port, () => {
    console.log('listening on port: ', port)
})


mongoConfig()

