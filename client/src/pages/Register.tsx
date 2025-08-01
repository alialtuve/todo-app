import { Form, Link, LoaderFunctionArgs, redirect } from 'react-router-dom'
import Wrapper from '../assets/wrappers/RegisLginWrapp'
import FormInput from '../components/Forms/FormInput'
import Logo from '../components/Logo'
import todoText from '../assets/images/todo-text.png'
import baseUrl from '../utils/baseUrl'

export const action = async({request}: LoaderFunctionArgs)  =>  {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await baseUrl.post('/auth/register', data)    
    return redirect('/')

  } catch(error) {
    return error
  }
}

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        <div className="header-register">
          <Logo />
          <img src={todoText} className="text" />
        </div>
        <h3> Register </h3>

        <FormInput type="text" name="name" labelText="user" defaultValue={""} />

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
          Already a member?
          <Link to="/" className="link-login">
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
}

export default Register