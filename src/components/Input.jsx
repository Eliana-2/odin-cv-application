function Input({labelName, inputId, inputType = 'text', inputName, onChange, inputValue = ''}) {

  return (
    <div>
      <label htmlFor={inputId}> {labelName} </label>
      <input type={inputType} id={inputId} name={inputName} onChange={onChange} value={inputValue}></input>
    </div>
  )
}

export {Input}