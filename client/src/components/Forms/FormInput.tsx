
const FormInput = ({type, name, labelText, defaultValue, onChange}:any) => {
  return (
    <div className="form-row">
      <label htmlFor="{name}" className="form-label">
        {labelText || name}
      </label>
      <input 
        type={type}
        id={name}
        className="form-input"
        defaultValue={defaultValue}
        onChange={onChange}
        required
      />
    </div>
  )
}

export default FormInput