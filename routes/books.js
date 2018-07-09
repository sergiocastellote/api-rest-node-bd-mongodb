import mongojs from 'mongojs';

//if db and collection isn't exit will be crate
const db = mongojs('DatabaseBooks', [
    'books'
]);

module.exports = app => {

    //next step will be add validations and check errors

    //get books
    app.get('/books', (req, res) => {
        db.movies.find((err, movies) => {
            res.json({
                movies
            })
        });
    });

    //get one book
    app.get('/books/:id', (req, res) => {
        db.movies.find({
            _id: mongojs.ObjectId(req.params.id)

        }, (err, movies) => {
            res.json({
                movies
            })
        });
    });

    //add book
    app.post('/books', (req, res) => {
        let newMovie = req.body;
        db.movies.insert(newMovie, (err, movie) => {
            res.json({
                movie
            })
        })
    });

    //modify book
    app.put('/books/:id', (req, res) => {
        let updateMovie = req.body;
        db.movies.update(
            {
                _id: mongojs.ObjectId(req.params.id)
            },
            updateMovie,
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
        db.movies.remove({
            _id: mongojs.ObjectId(req.params.id)

        }, (err, response) => {
            res.json({
                response
            })
        })
    });
}