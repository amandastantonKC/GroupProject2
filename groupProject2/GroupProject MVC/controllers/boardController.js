var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var todo = require("../models/todo.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(req, res) {
  todo.all(function(data) {
    var hbsObject = {
      todos: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.get("/api/todos/:id", function(req, res) {
  var condition = `id = ${req.params.id}`;
  todo.selectOne(condition, function (result) {
    res.json(result);
  });
});

router.post("/api/todos", function(req, res) {
  todo.create(["task", "status"],
   [req.body.task, req.body.status],
    function() {
    // Send back the ID of the new quote
    // res.json({ id: result.insertId });
    // res.json({id: res.insertId});
    res.redirect("../");
  });
});

router.put("/api/todos/:id/:status", function(req, res) {
  var condition = `id = ${req.params.id}`;

  console.log("condition", condition);

  todo.update(
    {
      status: `"${req.params.status}"`,
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
  );
});

// Export routes for server.js to use.
module.exports = router;