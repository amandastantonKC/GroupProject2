module.exports = function(sequelize, DataTypes) {
    var Todo = sequelize.define("Todo", {
      text: DataTypes.STRING,
        states: {
          type: DataTypes.ENUM,
          values: ["todo", "in-progress", "complete"]
        
        }
      });
  
    return Todo;
    };
