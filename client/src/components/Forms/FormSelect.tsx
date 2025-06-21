
const FormSelect = ({ name, labelText, defaultValue, onChange}: any) => {
  return (
    <div className="form-row">
      <label htmlFor="taskStatus" className="form-label">
        { labelText || name}
      </label>
      <select 
        id={name}
        name={name} 
        className="form-select"
        defaultValue={defaultValue || ''}
        onChange={onChange}
        required
      >
        return(
          <option 
            key={'1'}
            value={'option one'}
          >
            {'option one'}
          </option>
        )
      </select>
    </div>
  )
}

export default FormSelect