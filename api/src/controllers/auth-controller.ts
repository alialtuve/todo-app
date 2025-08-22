import { Request, Response } from 'express'
import UserModel from '../models/user-model'
import { StatusCodes } from 'http-status-codes'



export const registerUser = async (req:Request, res:Response) => {

  const user = await UserModel.create(req.body)
  res.status(StatusCodes.CREATED).json({msg:'Successfully Registration'})
}

export const login = async (req:Request, res:Response) => {
  
  const {
    email,
    password
  } = req.body

  const user = await UserModel.findOne({email: email})
  const isRightPassword = user && ( await user.comparePassword(password) )
  
  if(!isRightPassword) {
    res.status(StatusCodes.UNAUTHORIZED).json({error:'Invalid Credentials'})
    return
  }
  const token = await user?.generateJWT()
  const cookieDuration = 1000*60*60*8;
  res.cookie('token', token, {
    httpOnly:true,
    expires:new Date(Date.now() + cookieDuration),
    secure:process.env.NODE_ENV === 'development'
  })
  res.json(token)
  //res.status(StatusCodes.OK).json({msg:'User logged'})
}

export const logout = async (req:Request, res:Response) => {
  res.cookie('token', logout, {
    httpOnly:true,
    expires:new Date(Date.now()),
  })
  res.status(StatusCodes.OK).json({msg:'User logged'})
}
