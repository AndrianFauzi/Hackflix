'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.hasOne(models.Show, { foreignKey: 'MovieId' })
    }
  }
  Movie.init({
    title: DataTypes.STRING,
    released_year: DataTypes.STRING,
    sutradara: DataTypes.STRING,
    category: DataTypes.STRING,
    img: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};