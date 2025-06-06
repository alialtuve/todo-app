import { useState } from "react"
import { type Task } from '../types/TaskTypes'

type FormProps = {
  addTask:(task:Task) => void
}

function TaskForm({ addTask }: FormProps) {
  const [ name, setName ] = useState('')

  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(!name){
      alert('please enter task')
      return
    }
    addTask({
      id: new Date().getTime().toString(),
      name: name,
      status: 'Active'
    })
    setName('')    
  }

  return (
    <form onSubmit={handleSubmit}>
      <input 
        type="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit" className="btn">
        add task
      </button>
    </form>

  ) 
}

export default TaskForm
