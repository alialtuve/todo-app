import { NextFunction, Request, Response } from 'express'
import TaskModel from '../models/task-model'
import { StatusCodes } from 'http-status-codes'
import { BadRequestErr } from '../errors/bad-request'


export const createTask = async (req: Request, res: Response, next: NextFunction ) => {
  const {
    name,
    description
  } = req.body

   if(name ==='' || description === ''){
     next (new BadRequestErr ('Fields name and description are required'))
   }
  const task = await TaskModel.create(req.body)
  res.status(StatusCodes.CREATED).json({task})
}

export const getAllTasks = async (req: Request, res: Response) => {
  const tasks = await TaskModel.find()
  res.status(StatusCodes.OK).json({tasks})
}

export const getTask = async (req: Request, res: Response, next: NextFunction ) => {
  const taskId = req.params.id
  const task = await TaskModel.findById({ _id:taskId })
  res.status(StatusCodes.OK).json({task})
}

export const updateTask = async (req: Request, res: Response ) => {
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

export const deleteTask = async(req: Request, res:Response ) => {
  const taskId = req.params.id
  const task = await TaskModel.findOneAndDelete({ _id:taskId})
  res.status(StatusCodes.OK).json({msg: 'task deleted', task})
}
