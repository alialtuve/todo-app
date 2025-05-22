import { TaskProps } from "../types/TaskProps";

function AddTask(props: TaskProps) {
  return (
    <div>
      <h1>AddTask</h1>
      <h2> Task name: {props.name} </h2>
      <h3> Description: {props.description} </h3>
    </div>
  )
}

export default AddTask
