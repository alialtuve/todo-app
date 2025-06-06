
type Status = 'Active' | 'Canceled' | 'On Process' | 'Stand by' | 'Completed'

export type Task = {
  id: string,
  name: string,
  description?: string,
  comments?: string,
  status: Status,
  startDate?: Date,
  endDate?: Date
}
