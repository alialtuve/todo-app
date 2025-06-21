import Task from "./Task"
import { useAllTaskContext } from "../pages/AllTask"
import { TaskType } from "../types/TaskTypes"
import Wrapper from "../assets/wrappers/TaskContainerWrap"

const TasksContainer = () => {
  const  data  = useAllTaskContext()
  const { tasks } = data
  
  if(tasks.length === 0 ){
    return (
      <h3> No Tasks to display...</h3>
    )
  }
  return (  
    <Wrapper>
      <h5 className="task-amount"> {tasks.length} tasks found</h5>
      <div className="tasks">
        { tasks.map((task:TaskType) => {
           return <Task key={task._id} {...task}/>
          })
        }
      </div>
    </Wrapper>
  )
}

export default TasksContainer
