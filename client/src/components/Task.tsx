import { TaskType } from "../types/TaskTypes"
import TaskHeader from './TaskHeader'
import Wrapper from '../assets/wrappers/TaskListWrap'

const Task = ({ name, description,  status}: TaskType) => {
  
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
        <p className="main-actions" >
          <span className='actions'>{'Status'}</span>
          <span className='actions'>{'Edit'}</span>
          <span className='actions'>{'Delete'}</span>
        </p>
      </div>
    </Wrapper>
  )
}

export default Task
