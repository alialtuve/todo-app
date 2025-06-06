import { StatusCodes } from "http-status-codes";
import { CustomErr } from "./custom-errors";

export class DatabaseError extends CustomErr {
  statusCode = StatusCodes.INTERNAL_SERVER_ERROR
  constructor(public message: string){
    super(message)
    Object.setPrototypeOf(this, DatabaseError.prototype)
  }
  serialize(): { msg: string } {
      return {msg: this.message }
  }
}
