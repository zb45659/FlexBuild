'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Workout extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Workout.belongsTo(models.User, { foreignKey: "userId" });
      Workout.belongsToMany(models.User, {
        through: "Favorite",
        foreignKey: "workoutId",
        otherKey: "userId",
      });
    }
  };
  Workout.init({
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    time: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Workout',
  });
  return Workout;
};