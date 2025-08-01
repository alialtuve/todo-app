import express from 'express'
import { createTask, getAllTasks, getTask, updateTask,
         deleteTask } from '../controllers/task-controller'
import { validateTaskRegistration } from '../middleware/validation'

const taskRouter = express.Router()

taskRouter.route('/')
  .post(validateTaskRegistration, createTask)
  .get(getAllTasks)

taskRouter.route('/:id')
  .get(getTask)
  .patch(updateTask)
  .delete(deleteTask)

export default taskRouter
