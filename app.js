const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const config = require('./config/dbconfig');
const productRoute = require('./routes/product.route'); // Imports routes for the products
// initialize our express app
const app = express();

//let mongoDB = 'mongodb://shoppingcart:shoppingcart1@ds119150.mlab.com:19150/shoppingcart';

mongoose.connect(config.dburl);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log("its open now");
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// set public path for assets
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use('/products', productRoute); //Route Defination

let port = 3000;

app.listen(port, () => {
    console.log('Server is up and running on port number ' + port);
});
