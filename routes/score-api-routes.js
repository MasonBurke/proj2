var db = require("../models");

module.exports = function(app) {
    //This gets all of the scores for the scoreboard block
    app.get("/api/scores", function(req,res) {
        db.Session.findAll()
        .then(function(dbScores) {
            res.json(dbScores);
        });
    });

    //This gets just one score from the db (if we wanted to include extra stats onclick of the scoreboard block)
    app.get("/api/scores/:category", function(req,res) {
        db.Session.findOne({//~~~~~~~~~~~~~
            where: {
                id: req.params.id
            },
            include: [db.NewScore]//~~~~~~~~~~~~~~
        }).then(function(dbScores) {
            res.json(dbScores);
        });
    });

    //This adds the scores to the database tables
    app.post("/api/scores", function(req,res) {
        db.Session.create(req.body).then(function(dbScores) {
            res.json(dbScores);
        });
    });

    //This is a delete... I don't know if we'll need it, but we have it just in case
    app.delete("/api/scores/:id", function(req, res) {
        db.Score.destroy({
            where: {
                id: req.params.id
            }
        }).then(function(dbScores) {
            res.json(dbScores);
        });
    });

}