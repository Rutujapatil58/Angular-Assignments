'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class stationery_products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  stationery_products.init({
    product_name: DataTypes.STRING,
    product_price: DataTypes.FLOAT,
    product_quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'stationery_products',
  });
  return stationery_products;
};