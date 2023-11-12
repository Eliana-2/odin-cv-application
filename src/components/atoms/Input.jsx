import styles from '../../styles/Input.module.css'

export default function Input({labelName, inputId, inputType = 'text', inputName, inputValue, onChange}) {

  return (
    <div className={styles["input-container"]}>
      <label htmlFor={inputId}> {labelName} </label>
      <input type={inputType} id={inputId} name={inputName} onChange={onChange} value={inputValue} className={styles["input"]}></input>
    </div>
  )
}