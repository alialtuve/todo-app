import { createContext, useContext } from "react";
import { LoaderFunctionArgs, useLoaderData } from "react-router-dom";
import baseUrl from "../utils/baseUrl"
import { TasksContainer, TaskSearchContainer } from "../components";
import { type TaskContextType } from '../types/TaskTypes'
import { isAxiosError } from "axios";
import { toast } from "react-toastify";


export const loader = async({request}: LoaderFunctionArgs)  =>  {

  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ])
  
  try {
    const { data } = await baseUrl.get('/task', {
      params
    })
    return { data, searchValues: {...params}}
  } catch(error) {
      if(isAxiosError(error) && error.response){
        toast.error(error.response.data.error)
      }
    return error
  }
}

const TaskContextInitValues = {
  data : {
    tasks :[],
    totalTasks: 0,
    numOfPages: 0,
    currentPage:0,
  },
  searchValues: {
    name: '',
    status: '',
    sort: ''
  }
}

const AllTaskContext = createContext<TaskContextType>(TaskContextInitValues)

const  AllTask = () => {

  const {data, searchValues} = useLoaderData()
  
  return (
    <AllTaskContext.Provider value={{data, searchValues}}>
      <TaskSearchContainer />
      <TasksContainer />
    </AllTaskContext.Provider>
  )
}

export const useAllTaskContext = () => useContext(AllTaskContext)

export default AllTask
