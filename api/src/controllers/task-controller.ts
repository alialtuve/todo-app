import { NextFunction, Request, Response } from 'express'
import TaskModel from '../models/task-model'
import { StatusCodes } from 'http-status-codes'
import { BadRequestErr } from '../errors/custom-errors'
import { IQuery, TypeQuery} from '../interfaces/task-interface'
import { Status, TASK_SORT_OPTIONS} from '../enums/task-status'


export const createTask = async (req: Request, res: Response, next: NextFunction ) => {
  const {
    name,
    description
  } = req.body
  
   req.body.createdBy = req.user._id

   if(name ==='' || description === ''){
     next (new BadRequestErr ('Fields name and description are required'))
   }
  const task = await TaskModel.create(req.body)
  res.status(StatusCodes.CREATED).json({task})
}

export const getAllTasks = async (req: Request, res: Response) => {

  const { name, status, sort } = req.query as IQuery
  

  // Search and Sort 
  let regExp:TypeQuery = {
    createdBy : req.user._id
  }

  if(name) regExp.name = new RegExp(name, 'i')

  if(!status){
    regExp.status = Status.Active    
  } else {
    regExp.status = status
  }


  // SORT  
  const sortKey = sort? TASK_SORT_OPTIONS[sort] : TASK_SORT_OPTIONS.newest 

  // Calculating pagination              
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 12;
  const skip = (page -1) * limit


  const totalTasks = await TaskModel.countDocuments(regExp)
  const numOfPages = Math.ceil(totalTasks / limit)

  const tasks = await TaskModel.find(regExp)
                      .sort(sortKey)
                      .skip(skip)
                      .limit(limit)

  res.status(StatusCodes.OK).json({tasks, totalTasks, numOfPages, currentPage: page})
}

export const getTask = async (req: Request, res: Response, next: NextFunction ) => {

  const  userId = req.user._id
  const taskId = req.params.id
  const task = await TaskModel.findOne({ _id:taskId, createdBy:userId })
  res.status(StatusCodes.OK).json({task})
}

export const updateTask = async (req: Request, res: Response ) => {
  
  const  userId = req.user._id
  const {
    body,
    params: {id:taskId},
  } = req

  const task = await TaskModel.findOneAndUpdate(
    { 
      _id: taskId,
      createdBy: userId
    },
    body,
    { new:true, runValidators: true }
  )
  res.status(StatusCodes.OK).json({task})
}

export const deleteTask = async(req: Request, res:Response ) => {
  
  const  userId = req.user._id
  const taskId = req.params.id
  let msg = 'task deleted'
  const task = await TaskModel.findOneAndDelete({ _id:taskId, createdBy: userId})
  if(task === null){
    msg = 'Any task was deleted'
  }
  res.status(StatusCodes.OK).json({msg})
}
