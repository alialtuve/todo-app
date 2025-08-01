export interface IUserInfo {
  _id: string,
  name: string,
  email: string,
  createdAt: Date,
  updatedAt: Date
}

export type UserInfoType = Pick<IUserInfo,'name' | 'email'>
