import { ITaskSort } from "interfaces/task-interface";

export enum Status {
  Active = 'Active',
  Canceled = 'Canceled',
  OnProcess = 'On Process',
  StandBy = 'Stand By',
  Completed = 'Completed'
}

export const TASK_SORT_OPTIONS: ITaskSort = { 
    newest : '-createdAt',
    oldest : 'createdAt',
    asc : 'name',
    desc: '-name'
  }
