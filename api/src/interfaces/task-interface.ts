import { Status } from "enums/task-status";
import { Document, Types } from "mongoose"; 

export  interface ITask {
  name: string;
  description: string;
  status: string,
  comments?: string,
  stardDate?: string,
  endDate?: string,
}

export interface ITaskModel extends ITask, Document {}

export interface IQuery  {
    name?:string | RegExp ;
    status?: Status | RegExp;
    sort?: string
}

export type TypeQuery = IQuery & {
  createdBy: Types.ObjectId
}

export interface ITaskSort {
  [key : string]: string,
}
