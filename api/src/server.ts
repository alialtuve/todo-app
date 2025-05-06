import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

const { PORT, NODE_ENV } = process.env;

const app = express()

app.use(express.json())
app.get('/', (req, res) => {
  res.send(`TO DO APP ${NODE_ENV} MERN STACK `)  
})

app.listen(PORT, () => {
  return console.log(`To-Do App  Running on port... ${PORT}`);
})
