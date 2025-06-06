import { ErrorRequestHandler, NextFunction, Request, Response } from 'express'
import { CustomErr } from '../errors/custom-errors'

export const errorHandler: ErrorRequestHandler = (
    err: Error,
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
  
  if(err instanceof CustomErr){
    res.status(err.statusCode).json({  msg: err.message})
    return 
  }
    res.status(500).json({msg:'Something happend, call the server admin'})
    return
}
