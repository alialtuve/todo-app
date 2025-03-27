import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const { PORT, NODE_ENV } = process.env;

const app = express()

app.use(express.json())
app.get('/', (req, res) => {
  res.send(`Hello Node, Typescript and Docker... ${NODE_ENV} and mongoooo`)  
})

app.listen(PORT, () => {
  return console.log(`To-Do App  Running on port... ${PORT} enviroment... ${NODE_ENV} and mongoose`);
})
