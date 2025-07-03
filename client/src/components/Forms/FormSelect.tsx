
const FormSelect = ({ name, labelText, list, defaultValue, onChange}: any) => {
  
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
        {
          list && list.length > 0 ? (
            list.map((item:any)=>{
              return (
                <option 
                  key={item}   
                  value={item}
                >
                  {item}
                </option>
                ) 
                })
          ) : (
            <option> Loading options ...</option>
          )
        }
        
      </select>
    </div>
  )
}

export default FormSelect