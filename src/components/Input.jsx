import {useState} from 'react'

export default function Input({labelName, inputId, inputType = 'text', inputName, inputValue, onChange}) {

  return (
    <div>
      <label htmlFor={inputId}> {labelName} </label>
      <input type={inputType} id={inputId} name={inputName} onChange={onChange} value={inputValue}></input>
    </div>
  )
}