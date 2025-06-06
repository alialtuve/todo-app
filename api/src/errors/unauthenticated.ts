import { StatusCodes } from "http-status-codes";
import { CustomErr } from "./custom-errors";

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
