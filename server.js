var express = require("express");

var PORT = process.env.PORT || 8080;

// Set up npm express as a function
var app = express();

// Parse the application body as json data
app.use(express.urlencoded({extended: true }));
app.use(express.json());

// Set up Handlebars html views
var expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Serve static content for the app from the "public" folder
app.use(express.static("public"));

// Import routes and give the server access to them.
var router = require("./controllers/burgers_controller.js");

app.use(router);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
})