const Book = require('../models/book.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

//Create Controller
exports.book_create = function (req, res, next) {
    let book = new Book(
        {
            name: req.body.name,
            price: req.body.price
        }
    );

    book.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Book Created successfully');
    });
};

//Read Controller
exports.book_details = function (req, res, next) {
    Book.findById(req.params.id, function (err, book) {
        if (err) return next(err);
        res.send(book);
    });
};

//Update Controller
exports.book_update = function (req, res, next) {
    Book.findByIdAndUpdate(req.params.id, { $set: req.body }, function (err, book) {
        if (err) return next(err);
        res.send('Book udpated.');
    });
};

// Delete Controller
exports.book_delete = function (req, res, next) {
    Book.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Deleted successfully!');
    });
};