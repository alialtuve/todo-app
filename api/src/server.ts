import dotenv from 'dotenv'
import 'express-async-errors'
import express from 'express';
import {client} from './config/db-config'

dotenv.config()

const { PORT } = process.env;
const app = express()

// Router
import  taskRouter from './routes/task-route'
import { authRouter, userRouter } from './routes/user-route';

// error handler
import routeNotFound from './middleware/route-not-found'
import { authenticate } from './middleware/auth';

app.use(express.json())

// routes
app.use('/api/v1/task', authenticate, taskRouter)
app.use('/api/v1/user', authenticate, userRouter)
app.use('/api/v1/auth', authRouter)


app.use(routeNotFound)

async function start() {
  try {
    await client
    console.log('Connected to Mongo Db...');
    app.listen(PORT, () => {
      return console.log(`To-Do App  Running on port... ${PORT}`);
    })
  } catch (error) {
    console.log(error);
  }
}

start()
