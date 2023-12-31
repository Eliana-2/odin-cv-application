import styles from '../../styles/Paragraph.module.css'

export default function Paragraph({className, children}) {
  return (
    <p className={styles[className]}>{children}</p>
  )
}