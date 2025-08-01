import { NextFunction, Request, Response } from 'express'
import { AuthenticatedErr } from '../errors/custom-errors'
import jwt from 'jsonwebtoken'
import { StatusCodes } from 'http-status-codes'
import UserModel from '../models/user-model'
import { IUser } from '../interfaces/user-interface'


declare global {
  namespace Express {
    interface Request {
      user: IUser
    }
  }
}

export const authenticate = async ( 
    req: Request,
    res: Response,
    next: NextFunction
  ) => {


    const token = req.headers?.cookie?.split('token=')[1] || false;

    if(!token) {
      res.status(StatusCodes.UNAUTHORIZED).json({error:'Not Authorized'})
      return
    }
    const secretKey = process.env.SECRET_KEY
    
    try{
      const result = jwt.verify(token, secretKey)
      
      if(typeof result === 'object' && result.id ){
        const user = await UserModel.findById(result.id).select('-password')
        if(!user) {
          res.status(StatusCodes.NOT_FOUND).json({error: 'User does not exist'})
          return
        }
        req.user = user
        next()
      }
    } catch(error) {
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({error:'Invalid token'})
      return
    }
  }
