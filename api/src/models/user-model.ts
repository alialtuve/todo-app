import { Schema, model } from "mongoose";
import { IUserModel } from '../interfaces/user-interface'
import bcrypt from 'bcrypt'
import jwt, { Secret} from 'jsonwebtoken'


const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      'Please provide a valid email',
    ],
  },
  password: {
    type: String,
    required: true,
    minlength: 8 
  }
}, {timestamps: true, versionKey: false})

UserSchema.pre('save', async function() {
  const saltcode = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, saltcode)
})

UserSchema.methods.generateJWT = async function () {
  
  const SECRET_KEY : Secret = process.env.SECRET_KEY as string
  const token : string = jwt.sign({ id: this._id }, SECRET_KEY, {
    expiresIn: '1d'
  })
  
  return token
}

UserSchema.methods.comparePassword = async function (typedPass:string) {

  const isMatch = await bcrypt.compare(typedPass, this.password)
  
  return isMatch
}


const UserModel = model<IUserModel>('User', UserSchema)

export default UserModel
