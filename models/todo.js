// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var todo = {
  all: function(cb) {
    orm.selectAll("todos", function(res) {
      cb(res);
    });
  },

  selectOne: function (condition, cb) {
    orm.selectOne("todos", condition, function(res) {
      cb(res);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.insertOne("todos", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.updateOne("todos", objColVals, condition, function(res) {
      cb(res);
    });
  },
  deleteOne: function(condition, cb) {
    orm.deleteOne("todos", condition, function(res) {
      cb(res);
    });
  },
};

// Export the database functions for the controller (catsController.js).

module.exports = todo;
