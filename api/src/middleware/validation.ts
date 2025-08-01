import { validationResult, body } from 'express-validator'
import {Request, Response, NextFunction} from 'express'
import UserModel from '../models/user-model'
import { BadRequestErr} from '../errors/custom-errors'


const validateResult = (req:Request, res:Response, next:NextFunction)=> {
    const errors = validationResult(req)
    
    if(!errors.isEmpty()){
      const errorMsg = errors.array().map((error) => error.msg )
      res.status(400).json({error: errorMsg[0]})
      return
    }
    next()
  }


export const validateUserRegistration = [
  body('name').notEmpty().withMessage('Name can not be empty'),
  body('password').isLength({min:8}).withMessage('password must have at least 8 characters'),
  body('email').isEmail().withMessage('Invalid email format')
                .custom(async(email)=>{
                   const user = await UserModel.findOne({email})
                   if(user) {
                      throw new BadRequestErr('This email already exist')
                   }
                }),
    validateResult
  ]

export const validateLogin = [
  body('password').notEmpty().withMessage('Password is required'),
  body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Invalid email format')
                  .custom(async(email)=>{
                    const user = await UserModel.findOne({email: email})
                    if(user === null) {
                      throw new BadRequestErr('User does not exist') 
                    }
                  }),
  validateResult
]


export const validateTaskRegistration = [
    body('name').notEmpty().withMessage('Name can not be empty'),
    body('description').notEmpty().withMessage('Description can not be empty'),
    validateResult
  ]
