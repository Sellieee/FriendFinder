// GET route /api/friends to display JSON of all possible friends
// POST /api/friends - handles incoming survey results. Also handles compatibility logic

//Require path
var path = require("path");

// Import the friend arrays
var friends = require("../data/friends.js");

// Export API 
module.exports = function (app) {
   // Get Request
   app.get("/api/friends", function (req, res) {
      res.json(friends);
   });

   // POST Request
   app.post("/api/friends", function (req, res) {
      var inputBody = req.body;
      var input = inputBody.scores;
      var matchName = "";
      var matchPic = "";
      var totalDifference = 50; //Setting the limit before the friends can be matched
      for (var i = 0; i < friends.length; i++) { //Loops through the friendsArray
         var difference = 0; //Difference for each question
         for (var a = 0; a < input.length; a++) {
            difference += Math.abs(friends[i].scores[a] - input[a])
         }
         if (difference < totalDifference) {
            console.log("You've been matched!!")
            totalDifference = difference;
            matchName = friends[i].name;
            matchPic = friends[i].photo;
         }
      }
      friends.push(inputBody);
      res.json({
         status: "OK",
         matchName: matchName,
         matchPic: matchPic
      })
   });
}