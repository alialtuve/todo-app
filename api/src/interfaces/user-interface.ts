import { Types} from 'mongoose'

export interface IUser {
  _id: Types.ObjectId,
  name: string,
  email: string,
  password: string,
  generateJWT() : string,
  comparePassword(pass: string) : boolean
}

export type IUserModel = IUser & Omit<IUser, '_id'>
