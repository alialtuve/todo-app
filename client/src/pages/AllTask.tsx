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
    <>
      <h2> Task list</h2>
      <div className="task-list">
        <ul>
          {
            tasks.map((task:any) => {
              return  <li key={task._id}> {task.name} </li>
            })
          }
        </ul>
      </div>
    </>
  )
}

export default AllTask
