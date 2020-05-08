var path = require("path");

module.exports = function(app) {
    app.get("/", function(req, res) {
        res.render("index");
    });

    app.get("/questions", function(app) {
        res.sendFile(path.join(__dirname, "../public/questions.html"))
    });

    app.get("/highscores", function(app) {
        res.sendFile(path.join(__dirname, "/public/highscores.html"))
    })

    //index.html
    //questions.html
    //highscores.html

}