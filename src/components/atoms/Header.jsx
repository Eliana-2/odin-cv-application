import styles from '../../styles/Header.module.css'

export default function Header({heading, children}) {

  return (
    <header className={styles["header"]}>
      <h1>{heading}</h1>
      {children}
    </header>
  )
}