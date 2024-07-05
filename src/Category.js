import {DataTypes} from "sequelize";
import connection from "./dbConfig.js";

export const Category = connection.define('Category', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'categories',
  timestamps: false
})