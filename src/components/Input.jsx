import '../styles/Input.css'

export default function Input({labelName, inputId, inputType = 'text', inputName, inputValue, onChange}) {

  return (
    <div className="input-container">
      <label htmlFor={inputId}> {labelName} </label>
      <input type={inputType} id={inputId} name={inputName} onChange={onChange} value={inputValue}></input>
    </div>
  )
}