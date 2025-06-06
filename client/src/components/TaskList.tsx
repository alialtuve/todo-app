
import { type Task } from "../types/TaskTypes"

type ListProps = {
  tasks: Task[],
  toggleTask: ({id}: {id:string}) => void
}

function TaskList({tasks, toggleTask}: ListProps) {
  return (
    <ul>
      {tasks.map((task) => {
        return <li key={task.id}>
          <p> {task.name} </p>
          <input type="checkbox" checked={task.status==='Completed'} 
            onChange={()=> { 
              toggleTask({id: task.id })
            }} 
          />
        </li>
      })}
    </ul>
  )
}

export default TaskList
