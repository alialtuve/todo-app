import { Form, LoaderFunctionArgs, redirect } from "react-router-dom"
import FormInput from "../components/Forms/FormInput"
import Wrapper from "../assets/wrappers/TaskWrapp"
import { BtnSubmit } from "../components/Forms/BtnSubmit"
import baseUrl from "../utils/baseUrl"
import { isAxiosError } from "axios"
import { toast } from "react-toastify"


export const action = async({request}: LoaderFunctionArgs)  =>  {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await baseUrl.post('/task', data)
    toast.success('New task created successfully!')
    return redirect('/dashboard')
  } catch(error) {
    if(isAxiosError(error) && error.response){
      toast.error(error.response.data.error)
    }
    return error
  }
}

function AddTask() {
  return (
    <Wrapper>
     <h4 className="form-title">AddTask</h4>
     <Form method='post' className="form-task">
          <div className="form-task-content">
            <FormInput 
              type="text"
              name='name'
              labelText="Task name"
              defaultValue={''}
            />

            <FormInput
              type="text"
              name='description'
              labelText="Description"
              defaultValue={''}
            />

            <FormInput
              type="text"
              name='comments'
              labelText="Comments"
              defaultValue={''}
            />
            <div className="form-row">
              <BtnSubmit/>
            </div>
          </div>
     </Form>
    </Wrapper>
  )
}

export default AddTask
