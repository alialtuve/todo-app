import { Form, Link, LoaderFunctionArgs, redirect } from "react-router-dom"
import Wrapper from "../assets/wrappers/RegisLginWrapp"
import todoText from '../assets/images/todo-text.png'
import Logo from "../components/Logo"
import FormInput from "../components/Forms/FormInput"
import baseUrl from "../utils/baseUrl"
import { toast } from 'react-toastify'
import {  isAxiosError } from "axios"


export const action = async({request}: LoaderFunctionArgs)  =>  {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  
  try {
    await baseUrl.post('/auth/login', data)
    toast.success('Logged successfully')
    return redirect('/dashboard')

  } catch(error) {
    if(isAxiosError(error) && error.response){
      toast.error(error.response.data.error)
    }
    return error
  }
}

const Login = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <div className="header-register">
          <Logo />
          <img src={todoText} className="text" />
        </div>
        <h3> Login </h3>

        <FormInput
          type="text"
          name="email"
          labelText="Email"
          defaultValue={""}
        />

        <FormInput
          type="password"
          name="password"
          labelText="password"
          defaultValue={""}
        />

        <button type="submit" className="btn btn-register">
          Send
        </button>

        <p>
          Not a member yet?
          <Link to="/register" className="link-login">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  )
}

export default Login