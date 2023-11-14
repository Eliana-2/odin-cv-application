import styles from '../../styles/Input.module.css'

export default function Input({labelName, inputId, inputType = 'text', inputName, inputValue, onChange}) {

  return (
    <div className={styles["input-container"]}>
      <label htmlFor={inputId}> {labelName} </label>
      {(inputType === "textarea") ? 
      <textarea id={inputId} name={inputName} onChange={onChange} value={inputValue} className={styles["textarea"]}></textarea> :
      <input type={inputType} id={inputId} name={inputName} onChange={onChange} value={inputValue} className={styles["input"]}></input>
      }
    </div>
  )
}