const Books = require("../models/books.js");

module.exports = function (app) {
    //get all books 
    app.get("/api/all", (req, res) => {
        Books.findAll({}).then(function (results) {
            res.json(results);
        });
    });

    //get by specific book
    app.get("/api/:books", (req, res) => {
        Books.findAll({
            where: {
                title: req.params.books
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    //get by author
    app.get("/api/author/:author", (req, res) => {
        Books.findAll({
            where: {
                author: req.params.author
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    //get by genre
    app.get("/api/genre/:genre", (req, res) => {
        Books.findall({
            where: {
                genre: req.params.genre
            }
        }).then(function (results) {
            res.json(results);
        });
    });


    //get by read / unread
    app.get("/api/read/:read", (req, res) => {
        Books.findAll({
            where: {
                read: req.params.read
            }
        }).then(function (results) {
            console.log("Hopefully it should reach this far")
            res.json(results)
        });
    });



    //add a book
    app.post("/api/new", (req,res) =>{
        console.log(req.body);
        Books.create({
            title: req.body.tile,
            author: req.body.author,
            genre: req.body.genre,
            read: req.body.read
        }).then((results) => {
            res.json(results);
        });
    });

    // delete a book
    app.delete("/api/books/:id", (req,res) => {
        console.log(req.params.id);
        Books.destroy({
            where: {
                id: req.params.id
            }
        }).then( () => {
            res.end();
        })
    })

}