// dependencies
const express = require("express");

//setting up express
const app = express();
const PORT = process.env.PORT || 8080;


//Data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Static directory
app.use(express.static("app/public"));

//Routes
require("./app/routes/api-routes.js")(app);
require("./app/routes/html-routes")(app);

//Start the server
app.listen(PORT, () => {
    console.log("app is listening on " + PORT);
}); 