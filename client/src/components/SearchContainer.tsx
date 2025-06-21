import { Form } from 'react-router-dom'
import FormInput from "./Forms/FormInput"
import FormSelect from "./Forms/FormSelect"
import Wrapper from "../assets/wrappers/TaskSearchWrapp"

const SearchContainer = () => {
  return (
    <Wrapper>
      <Form className="form">
        <h5 className='form-title'>search Options</h5>
        <div className='form-content'>
          <FormInput 
            type="search"
            name="search"
            defaultValue={''}
            onChange={onchange}
          />
          <FormSelect 
            labelText='taskStatus'
            name='taskStatus'
            defaultValue={'none'}
            onChange={onchange}
          />
        </div>
      </Form>
    </Wrapper>
  )
}

export default SearchContainer