import { Form, Link } from "react-router-dom"
import { FaPencilAlt } from "react-icons/fa"
import { RiDeleteBin2Fill } from "react-icons/ri"
import Wrapper from '../assets/wrappers/TaskListWrap'
import { TaskType } from "../types/TaskTypes"
import TaskHeader from './TaskHeader'

const Task = ({ _id, name, description,  status}: TaskType) => {
  
  return (
    <Wrapper>
      <TaskHeader title={name}/>
      <div className='task-content'>
        <p>
          <span className='title-content'>{'Description:'}</span>
          <span>{description}</span>
        </p>
        <p>
          <span className='title-content'>{'Status: '}</span>
          <span className="task-status">{status}</span>
        </p>
        <footer className="main-actions" >
          <Link to={`/dashboard/edit-task/${_id}`} className="btn btn-edit ">
            <FaPencilAlt />
            <span className="btn-text">Edit</span>
          </Link>
          <Form method="post" action={`/dashboard/delete-task/${_id}`}>
            <button type="submit" className="btn btn-delete">
              <RiDeleteBin2Fill />
              <span className="btn-text"> Delete </span>
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  )
}

export default Task
