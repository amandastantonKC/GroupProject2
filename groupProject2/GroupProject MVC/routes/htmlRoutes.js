var db = require("../models");
var path = require("path")

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Todo.findAll({}).then(function(dbTodo) {
      res.render("index", {
        msg: "Welcome!",
        todos: dbTodo
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/api/todos/:id", function(req, res) {
    db.Todo.findOne({ where: { id: req.params.id } }).then(function(dbTodo) {
      res.render("todos", {
        todos: dbTodo
      });
    });
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
