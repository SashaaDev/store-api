import {DataTypes} from "sequelize";
import connection from "./dbConfig.js";

export const Product = connection.define('Product', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: false
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  imageUrl: {
    type: DataTypes.STRING,
    allowNull: false
  },
  categoryId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  tableName: 'products',
  timestamps: false
})