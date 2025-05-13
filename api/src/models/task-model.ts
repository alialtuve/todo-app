import { Schema, model } from "mongoose";
import { Status } from '../enums/task-status'
import { ITaskModel } from '../interfaces/task-interface'

const TaskSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    status: {
      type: String,
      default: Status.Active
    },
    comments : {
      type: String
    },
    startDate : {
      type: Date
    },
    endDate: {
      type: Date
    }
  }, { timestamps: true, versionKey: false }
)

const TaskModel = model<ITaskModel>('Task', TaskSchema)

export default TaskModel
