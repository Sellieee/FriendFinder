// Get the dependencies we need and run the necessary npm packages.
var express = require("express");
var path = require("path");

// Configure Express
var app = express();

//Configure the Port
var PORT = process.env.PORT || 8090;

app.use(express.static(path.join(__dirname, "./app/public")));

// Parsing the data
app.use(express.urlencoded({
   extended: true
}));
app.use(express.json());

// Displaying the route files
require(path.join(__dirname, "./app/routing/apiRoutes"))(app);
require(path.join(__dirname, "./app/routing/htmlRoutes"))(app);

// Start listening on the port
app.listen(PORT, function () {
   console.log("Friend Finder is listening on PORT: " + PORT);
});