
export type statusType = 'Active' | 'Canceled' | 'On Process' | 'Stand By' | 'Completed'

export type TaskType = {
  _id: string,
  name: string,
  description?: string,
  comments?: string,
  status: statusType,
  startDate?: Date,
  endDate?: Date,
  createdAt: Date
}


export type TaskContextType = {
  data : data,
  searchValues: searchValues
}

type searchValues = {
  name: string,
  status: string,
  sort: string
}

type data = {
  tasks: TaskType[],
  totalTasks: number,
  numOfPages: number,
  currentPage: number,
}

export interface IStat {
    _id: statusType,
    count: number
  }

export type statsType = {
  data: IStat[],
  month: string
}
