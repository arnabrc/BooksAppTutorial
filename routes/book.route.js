const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const book_controller = require('../controllers/book.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', book_controller.test);
module.exports = router;