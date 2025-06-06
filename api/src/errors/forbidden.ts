import { StatusCodes } from "http-status-codes";
import { CustomErr } from "./custom-errors";

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
