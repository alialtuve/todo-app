import express from "express";
import { login, registerUser, logout } from '../controllers/auth-controller'
import { getCurrentUserInfo} from '../controllers/user-controller'
import { validateUserRegistration, validateLogin } from '../middleware/validation'
export const userRouter = express.Router()
export const authRouter = express.Router()

// You can do it in this way 
authRouter.post('/register', validateUserRegistration, registerUser)
authRouter.post('/login', validateLogin, login)
authRouter.get('/logout', logout )

// Or do it like this
userRouter.route('/current-user').get(getCurrentUserInfo)
