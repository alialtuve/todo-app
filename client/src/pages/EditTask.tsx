import { Form, LoaderFunctionArgs, redirect, useLoaderData } from "react-router-dom"
import { FormInput, FormSelect, BtnSubmit } from "../components/Forms"
import Wrapper from "../assets/wrappers/TaskWrapp"
import baseUrl from "../utils/baseUrl"
import { TASK_STATUS } from '../utils/constants'
import { toast } from "react-toastify"
import { isAxiosError } from "axios"


export const loader = async({params}: LoaderFunctionArgs)  =>  {
  try {
    const { data } = await baseUrl.get(`/task/${params.id}`)
    return data
  } catch(error) {
      if(isAxiosError(error) && error.response){
        toast.error(error.response.data.error)
      }
    return redirect('/dashboard')
  }
}

export const action = async({request, params}: LoaderFunctionArgs)  =>  {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await baseUrl.patch(`/task/${params.id}`, data)
    toast.success('Task updated successfully')
    return redirect('/dashboard')
  } catch(error) {
      if(isAxiosError(error) && error.response){
        toast.error(error.response.data.error)
      }
    return error
  }
}

export default function EditTask() {
  const {task} = useLoaderData()
  
  return (
    <Wrapper>
     <h4 className="form-title">Update Task</h4>
     <Form method='post' className="form-task">
          <div className="form-task-content">
            <FormInput 
              type="text"
              name='name'
              labelText="Task name"
              defaultValue={task.name}
            />

            <FormInput
              type="text"
              name='description'
              labelText="Description"
              defaultValue={task.description}
            />

            <FormInput
              type="text"
              name='comments'
              labelText="Comments"
              defaultValue={task.comments}
            />
            <FormSelect
              type="text"
              name='status'
              labelText="Status"
              defaultValue={task.status}
              list={Object.values(TASK_STATUS)}
            />
            <div className="form-row">
              <BtnSubmit/>
            </div>
          </div>
     </Form>
    </Wrapper>
  )
}
