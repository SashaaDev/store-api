import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import router from './src/router.js';
import connection from './src/dbConfig.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

app.use('/', router);
app.get('/', (req, res) => {
  console.log(req.query.app);
  res.status(200).send('Hello from express');
});

app.listen(port, () => {
  console.log(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST, process.env.DB_NAME);

  console.log(`Server is running on http://localhost:${port}`);
});