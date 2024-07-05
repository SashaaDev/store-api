import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const connection = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
  logging: false,
});

const connectDB = async () => {
  try {
    await connection.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

connectDB();

export default connection;
