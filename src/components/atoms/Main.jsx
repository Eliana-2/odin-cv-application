import styles from '../../styles/Main.module.css'

export default function Main({children}) {
  return (
    <main>
      <div className={styles["container"]}>
        {children}
      </div>
      </main>
  )
}