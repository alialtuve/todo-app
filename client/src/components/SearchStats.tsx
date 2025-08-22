import { Form, useSubmit } from "react-router-dom"
import Wrapper from "../assets/wrappers/SearchStatsWrap"
import { MONTHS } from '../utils/constants'
import { ChangeEvent } from "react"


const SearchStats = () => {
  
  const submit = useSubmit()

  const handleChange = (e: ChangeEvent<HTMLSelectElement>)=> {
      submit(e.currentTarget.form)
  }

  return (
    <Wrapper>
      <h4 className="form-title"> Task stats</h4>
      <Form className="form">
        <div className="form-row">
          <label htmlFor="month" className="form-label">
            {"Select month"}
          </label>
          <select
            id={"month"}
            name={"month"}
            className="form-select"
            defaultValue={"  "}
            onChange={handleChange}
            required
          >
            {MONTHS.map((item: any) => {
              return (
                <option key={item.id} value={item.id}>
                  {item.month}
                </option>
              );
            })}
          </select>
        </div>
      </Form>
    </Wrapper>
  );
}

export default SearchStats
