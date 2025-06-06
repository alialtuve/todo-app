import { useState, useEffect } from "react"
import { Form, TaskList } from "../components"
import { type Task } from "../types/TaskTypes"

function loadTask():Task[] {
  const storedTasks = localStorage.getItem('tasks')
  return storedTasks? JSON.parse(storedTasks) : []
} 

function updateStorage(tasks: Task[]) :void {
  localStorage.setItem('tasks', JSON.stringify(tasks))
}

function AddTask() {
  const [ tasks, setTasks ] = useState<Task []> (() => loadTask())

  const addTask = ( task:Task ): void => {
    setTasks([...tasks, task])
  }
  
  const toggleTask = ({id}:{id:string}) => {
    setTasks(tasks.map((task)=> {
      if(task.id === id){
        return {...task, status:task.status}
      }
      return task  
     })
    )
  }

  useEffect(() => {
    updateStorage(tasks)
  }, [tasks])

  return (
    <section>
      <h1>AddTask</h1>
      <Form addTask={addTask}/>
      <TaskList tasks={tasks} toggleTask={toggleTask}/>
    </section>
  )
}

export default AddTask
