'use strict';
var bcrypt = require('bcryptjs')
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Favorite, { foreignKey: 'userId' })
      User.belongsToMany(models.Movie, { through: models.Favorite })
    }
  }
  User.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
    email: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    birthDate: DataTypes.DATE
  },


    {
      hooks: {
        beforeCreate(instance, options) {
          const salt = bcrypt.genSaltSync(8);
          const hash = bcrypt.hashSync(instance.password, salt);

          instance.password = hash

        }
      },


      sequelize,
      modelName: 'User',
    });
  return User;
};