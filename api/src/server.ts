import 'express-async-errors'
import express from 'express';
import {client} from './config/db-config'

const { PORT } = process.env;
const app = express()

// Router
import  taskRouter from './routes/task-route'

// error handler
import routeNotFound from './middleware/route-not-found'
import { errorHandler } from './middleware/error-handler';

app.use(express.json())

// routes
app.use('/api/v1/task', taskRouter)

app.use(routeNotFound)
app.use(errorHandler)

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
