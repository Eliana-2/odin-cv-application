import styles from '../../styles/Button.module.css'

export default function Button({onClick, className="button", children}) {
  return(
    <button type="button" onClick={onClick} className={styles[className]}>{children}</button>
  )
}