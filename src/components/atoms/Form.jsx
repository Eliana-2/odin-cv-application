import styles from '../../styles/Form.module.css'

export default function Form({children}) {
  return (
    <form className={styles["form"]}>{children}</form>
  )
}