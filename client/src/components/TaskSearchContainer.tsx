import { Form } from 'react-router-dom'
import FormInput from "./Forms/FormInput"
import FormSelect from "./Forms/FormSelect"
import Wrapper from "../assets/wrappers/TaskSearchWrapp"

const TaskSearchContainer = () => {
  return (
    <Wrapper>
      <Form className="form">
        <h4 className='form-title'>search and sort options</h4>
        <div className='form-content'>
          <FormInput 
            type="search"
            name="search"
            labelText="Task name"
            defaultValue={''}
            onChange={onchange}
          />
          <FormSelect 
            labelText='Task status'
            name='taskStatus'
            defaultValue={'none'}
            onChange={onchange}
          />
          <FormSelect 
            labelText='Sort'
            name='Date'
            defaultValue={'today'}
            onChange={onchange}
          />
        </div>
      </Form>
    </Wrapper>
  )
}

export default TaskSearchContainer