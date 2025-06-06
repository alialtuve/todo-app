import { StatusCodes } from "http-status-codes";
import { CustomErr } from "./custom-errors";

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
