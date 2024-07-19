'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pointDeCharge extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pointDeCharge.init({
    id: DataTypes.STRING(5),
    name: DataTypes.STRING(15),
    locaux: DataTypes.ENUM('bureaux', 'domicile')
  }, {
    sequelize,
    modelName: 'pointDeCharge',
  });
  return pointDeCharge;
};