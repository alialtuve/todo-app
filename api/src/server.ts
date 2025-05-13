import express from 'express';
import {client} from './config/db-config'
import  taskRouter from './routes/task-route'

const { PORT } = process.env;

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use('/api/v1/task', taskRouter)

async function start() {
  try {
    await client
    console.log('Connected to Mongo Db...!');
    app.listen(PORT, () => {
      return console.log(`To-Do App  Running on port... ${PORT}`);
    })
    
  } catch (error) {
    console.log(error);
  }
}

start()
