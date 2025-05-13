import { NextFunction, Request, Response } from 'express'
import TaskModel from '../models/task-model'
import { StatusCodes } from 'http-status-codes'

export const createTask = async (req: Request, res: Response, next: NextFunction) => {
  console.log('body', req.body);
  const task = await TaskModel.create(req.body)
  res.status(StatusCodes.CREATED).json({task})
}

export const getAllTasks = async (req: Request, res: Response, next: NextFunction) => {
  const tasks = await TaskModel.find()
  res.status(StatusCodes.OK).json({tasks})
}

export const getTask = async (req: Request, res: Response, next: NextFunction) => {
  const taskId = req.params.id
  console.log(taskId);
  
  const task = await TaskModel.findById({ _id:taskId })
  console.log(task);
  
  res.status(StatusCodes.OK).json({task})
}

export const updateTask = async (req: Request, res: Response, next: NextFunction) => {
  const {
    body,
    params: {id:taskId},
  } = req
  const task = await TaskModel.findByIdAndUpdate(
    { _id: taskId },
    body,
    { new:true, runValidators: true }
  )
  res.status(StatusCodes.OK).json({task})
}

export const deleteTask = async(req: Request, res:Response, next: NextFunction) => {
  const taskId = req.params.id
  const task = await TaskModel.findOneAndDelete({ _id:taskId})

  res.status(StatusCodes.OK).json({msg: 'task deleted', task})
}
