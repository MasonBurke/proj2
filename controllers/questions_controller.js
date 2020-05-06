var express = require("express");
var router = express.Router();

router.get("/", function(req, res) {
    //insert some stuff in here for the landing page
})

router.post("/api/questions", function (req, res) {
    //insert some stuff in here for post's if we end up using them :)
    //reference things in here and post to the page, ie like updates to the questions table ect
})

router.put("/api/questions/:id", function(req, res) {
    //insert some stuff in here for the put's. ideally like targeting the q id and putting it on the page
    //this would be for updates of the score in the DB ect <3
})

router.delete("/api/questions/:id", function(req, res) {
    //ya know... put the delete stuff here if we need it
    //not quick maths tbh
})
router.get("/questions", function (req,res) {
    res.render("questions");
})

module.exports = router;