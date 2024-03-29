'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('user', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};
