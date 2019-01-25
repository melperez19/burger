// Import express and create the router for the app
var express = require("express");
var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(request, response){
    burger.selectAll(function(data){
        var handlebarsObject = {
            burgers: data
        };
    
        console.log(handlebarsObject);
        response.render("index", handlebarsObject);
    });
});

router.post("/api/burgers", function(request, response){
    // console.log(request.body);
    burger.insertOne([
        "burger_name"
    ], [
        request.body.burger_name
    ], function(result){
        response.json(result);
    });
    

});

router.put("/api/burgers/:id", function(request, response){
    var condition = "id = " + request.params.id;
    // console.log("condition", condition);
    // console.log(request.body.devoured);
 burger.updateOne({
        devoured: request.body.devoured
    }, condition, function(result){
        // console.log(result);
        if (result.changedRows == 0){
            return response.status(404).end();
        } else {
            // console.log(condition);
            response.status(200).end();
        }
    });
});

router.delete("/api/burgers/:id", function(request, response) {
    var condition = "id = " + request.params.id;
  
    burger.delete(condition, function(result) {
      if (result.affectedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return response.status(404).end();
      } else {
        response.status(200).end();
      }
    });
  });
  
  // Export routes for server.js to use.
  module.exports = router;
  