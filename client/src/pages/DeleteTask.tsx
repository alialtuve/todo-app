import { LoaderFunctionArgs, redirect } from "react-router-dom"
import baseUrl from "../utils/baseUrl"
import { toast } from "react-toastify"
import { isAxiosError } from "axios"

export const action = async({params}: LoaderFunctionArgs)  =>  {
  
  try {
    await baseUrl.delete(`/task/${params.id}`,)
    toast.success('Task deleted!')
    return redirect('/dashboard')
  } catch(error) {
    if(isAxiosError(error) && error.response){
      toast.error(error.response.data.error)
    }
    return error
  }
}
