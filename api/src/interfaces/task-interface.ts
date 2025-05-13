import { Document } from "mongoose"; 

export  interface ITask {
  name: string;
  description: string;
  status: string,
  comments?: string,
  stardDate?: string,
  endDate?: string
}

export interface ITaskModel extends ITask, Document {}
