// app.js
const express = require('express');
const bodyParser = require('body-parser');

const book = require('./routes/book.route'); // Imports routes for the products

// initialize our express app
const app = express();

// Set up mongoose connection
const username = 'ArnabRC';
const password = encodeURIComponent('A_RC@kol-90');
// const urlEncodedPassword = 'A_RC%40kol-90';
const dbName = 'bookstutorial';

const mongoose = require('mongoose');
let dev_db_url = `mongodb+srv://${username}:${encodeURIComponent(password)}@cluster0-oguj3.mongodb.net/bookstutorial?retryWrites=true&w=majority`;
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/books', book);

let port = 1234;

app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});