'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MovieDetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      MovieDetail.hasOne(models.Movie, { foreignKey: 'MovieDetailId' })
      MovieDetail.belongsToMany(models.User, { through: models.Favorite })
    }
  }
  MovieDetail.init({
    title: DataTypes.STRING,
    released_year: DataTypes.STRING,
    sutradara: DataTypes.STRING,
    category: DataTypes.STRING,
    img: DataTypes.STRING,
    url: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'MovieDetail',
  });
  return MovieDetail;
};