import { Form, useSubmit, useNavigate } from 'react-router-dom'
import FormInput from "./Forms/FormInput"
import FormSelect from "./Forms/FormSelect"
import Wrapper from "../assets/wrappers/TaskSearchWrapp"
import { useAllTaskContext } from '../pages/AllTask'
import { TASK_STATUS, SORT_OPTIONS } from '../utils/constants'

type onChangeFunc = {
  (formArg: HTMLFormElement):void
}

const TaskSearchContainer = () => {
  const navigate = useNavigate()
  const { sort, status, name } = useAllTaskContext().searchValues

  const submit = useSubmit()

  const cleanFields = () => {
    navigate('/dashboard')
  }

  const debounce = (onChange: onChangeFunc) => {
    let timeout=0
    return (e: HTMLFormElement) => {
      const form = e.currentTarget.form
      clearTimeout(timeout)
      timeout = setTimeout(() => {
        onChange(form)
      }, 2000)
    }
  }

  return (
    <Wrapper>
      <Form className="form">
        <h4 className='form-title'>search and sort</h4>
        <div className='form-content'>
          <FormInput 
            name='name'
            type="text"
            labelText="Task name"
            defaultValue={name}
            onChange={debounce((form: HTMLFormElement)=>{
              submit(form)
            })}
          />
          <FormSelect 
            labelText='Task status'
            name='status'
            list={['',...Object.values(TASK_STATUS)]}
            defaultValue={status}
            onChange={(e: HTMLFormElement)=> {
              submit(e.currentTarget.form)
            }}
          />
          <FormSelect 
            labelText='Sort by'
            name='sort'
            list={['',...Object.values(SORT_OPTIONS)]}
            defaultValue={sort}
            onChange={(e: HTMLFormElement)=> {
              submit(e.currentTarget.form)
            }}
          />
          <div className='form-row'>
            <button
              type='reset'
              className='btn btn-reset'
              onClick={cleanFields}  
            >
              Reset Values
            </button>
          </div>
        </div>
      </Form>
    </Wrapper>
  )
}

export default TaskSearchContainer