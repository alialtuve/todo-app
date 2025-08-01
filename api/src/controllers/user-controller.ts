import { Request, Response } from 'express'
import UserModel from '../models/user-model'
import { StatusCodes } from 'http-status-codes'

export const getCurrentUserInfo = async(req: Request, res:Response ) => {
   
  const name = req.user.name
  const email = req.user.email

  res.status(StatusCodes.OK).json({name, email})
}
