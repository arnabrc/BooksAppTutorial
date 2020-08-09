const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const book_controller = require('../controllers/book.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', book_controller.test);

//Create API
router.post('/create', book_controller.book_create);

//Read API
router.get('/:id', book_controller.book_details);

//Update API
router.put('/:id/update', book_controller.book_update);

//Delete API
router.delete('/:id/delete', book_controller.book_delete);

module.exports = router;