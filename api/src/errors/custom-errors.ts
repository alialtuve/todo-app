import { StatusCodes } from "http-status-codes";

export abstract class CustomErr  extends Error {
  abstract statusCode: StatusCodes
  constructor(public message:string){
    super(message)
  }

  abstract serialize(): {msg:string}
}
