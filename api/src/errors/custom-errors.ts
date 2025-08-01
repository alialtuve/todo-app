import { StatusCodes } from "http-status-codes";

export abstract class CustomErr  extends Error {
  abstract statusCode: StatusCodes
  constructor(public message:string){
    super(message)
  }

  abstract serialize(): {msg:string}
}


export class BadRequestErr extends CustomErr {
  statusCode = StatusCodes.BAD_REQUEST;
  constructor(public message: string){
    super(message)
    Object.setPrototypeOf(this, BadRequestErr.prototype)
  }
  serialize(): { msg: string } {
      return { msg: this.message }
  }
}


export class AuthenticatedErr extends CustomErr {
  statusCode = StatusCodes.UNAUTHORIZED;
  constructor(public message: string){
    super(message)
    Object.setPrototypeOf(this, AuthenticatedErr.prototype)
  }
  serialize(): { msg: string } {
      return { msg: this.message }
  }
}

export class ForbidenError extends CustomErr {
  statusCode = StatusCodes.FORBIDDEN
  constructor(public message: string){
    super(message)
    Object.setPrototypeOf(this, ForbidenError.prototype)
  }

  serialize(): { msg: string; } {
      return { msg: this.message }
  }
}

