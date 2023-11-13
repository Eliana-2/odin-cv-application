import styles from '../../styles/Container.module.css'

export default function Container({className, children}) {

  return (
    <div className={styles[className]}>
      {children}
    </div>
  )
}