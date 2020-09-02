// dependencies


//routes
module.exports = function (app) {
    // route to view html w/ '/'
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/view.html"));
    });
    // route to additional
    app.get("/additional", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/additional.html"));
    });
    //route to all
    app.get("/all", (req,res) => {
        res.sendFile(path.join(__dirname, "../public/all.html"));
    });

    //route to read books
    app.get("/read", (req,res) => {
        res.sendFile(__dirname, "../public/read.html");
    });
    //route to unread books
    app.get("/unread", (req,res) =>  {
        res.sendFile(__dirname, "../public/unread.html");
    });

};