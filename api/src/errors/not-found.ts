import { StatusCodes } from "http-status-codes";
import { CustomErr } from "./custom-errors";

export class NotFoundError extends CustomErr {
  statusCode = StatusCodes.NOT_FOUND
  constructor(public message: string){
    super(message)
    Object.setPrototypeOf(this, NotFoundError.prototype)
  }

  serialize(): { msg: string; } {
      return { msg: this.message }
  }
}
