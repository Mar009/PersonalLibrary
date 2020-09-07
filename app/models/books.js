//Sequelize
const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

//Books model for the DB
const Books = sequelize.define("book", {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    genre: Sequelize.STRING,
    read: Sequelize.BOOLEAN
})

Books.sync();

module.exports = Books;