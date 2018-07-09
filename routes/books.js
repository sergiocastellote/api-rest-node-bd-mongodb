import mongojs from 'mongojs';

//if db and collection isn't exit will be crate
const db = mongojs('DatabaseBooks', [
    'books'
]);

module.exports = app => {

    //next step will be add validations and check errors

    //get books
    app.get('/books', (req, res) => {
        db.books.find((err, books) => {
            res.json({
                books
            })
        });
    });

    //get one book
    app.get('/books/:id', (req, res) => {
        db.books.find({
            _id: mongojs.ObjectId(req.params.id)

        }, (err, books) => {
            res.json({
                books
            })
        });
    });

    //add book
    app.post('/books', (req, res) => {
        let newBook = req.body;
        db.books.insert(newBook, (err, book) => {
            res.json({
                book
            })
        })
    });

    //modify book
    app.put('/books/:id', (req, res) => {
        let updateBook = req.body;
        db.books.update(
            {
                _id: mongojs.ObjectId(req.params.id)
            },
            updateBook,
            {},
            (err, response) => {
                res.json({
                    response
                })
            }

        )
    });

    //delete book
    app.delete('/books/:id', (req, res) => {
        db.books.remove({
            _id: mongojs.ObjectId(req.params.id)

        }, (err, response) => {
            res.json({
                response
            })
        })
    });
}