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

//Live Server Installation
// var liveServer = require("live-server");

// var params = {
//     port: 8181, // Set the server port. Defaults to 8080.
//     host: "0.0.0.0", // Set the address to bind to. Defaults to 0.0.0.0 or process.env.IP.
//     root: "/public", // Set root directory that's being served. Defaults to cwd.
//     open: false, // When false, it won't load your browser by default.
//     ignore: 'scss,my/templates', // comma-separated string for paths to ignore
//     file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
//     wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
//     mount: [['/components', './node_modules']], // Mount a directory to a route.
//     logLevel: 2, // 0 = errors only, 1 = some, 2 = lots
//     middleware: [function (req, res, next) { next(); }] // Takes an array of Connect-compatible middleware that are injected into the server middleware stack
// };
// liveServer.start(params);