var express = require("express");
var handlebars = require("express-handlebars");

var PORT = process.env.PORT || 3000;
var app = express();

app.use(express.static("assets"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
