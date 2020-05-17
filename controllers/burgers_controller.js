var express = require("express");
var burger = require("../models/burger.js");

var router = express.Router();

router.get("/", function(req, res) {
    burger.selectAll(function(burgerData) {
        res.render("index", { burger_data: burgerData });
    });
});

router.post("/burger", function(req, res) {
    burger.insertOne(req.body.burger_name, function(data) {
        res.redirect("/");
    });
});
  
router.put("/api/:id", function(req, res) {
    burger.updateOne(req.params.id, function(data) {
        res.sendStatus(200);
    });
});
  
module.exports = router;