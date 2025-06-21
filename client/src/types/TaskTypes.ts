
type statusType = 'Active' | 'Canceled' | 'On Process' | 'Stand by' | 'Completed'

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
  tasks: TaskType[]
}
