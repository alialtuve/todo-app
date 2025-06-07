import { useLoaderData } from "react-router-dom";
import baseUrl from "../utils/baseUrl"


export const loader = async() => {
  const { data } = await baseUrl.get('/task')
  return data
}

const  AllTask = () => {
  const data = useLoaderData()
  const { tasks } = data
  
  return (
    <ul>
      {
        tasks.map((task:any) => {
          return  <li key={task._id}> {task.name} </li>
        })
      }
    </ul>
  )
}

export default AllTask
