import React, {  useContext } from "react";
import { useLoaderData } from "react-router-dom";
import baseUrl from "../utils/baseUrl"
import { TasksContainer, TaskSearchContainer } from "../components";
import { type TaskContextType } from '../types/TaskTypes'

export const loader = async() => {
  const { data } = await baseUrl.get('/task')
  return data
}

const AllTaskContext = React.createContext<TaskContextType>({tasks:[]})

const  AllTask = () => {
  const data = useLoaderData()
  const {tasks}= data
  
  return (
    <AllTaskContext.Provider value={{tasks}}>
      <TaskSearchContainer />
      <TasksContainer />
    </AllTaskContext.Provider>
  )
}

export const useAllTaskContext = () => useContext(AllTaskContext)

export default AllTask
