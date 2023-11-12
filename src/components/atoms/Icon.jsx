import styles from '../../styles/Icon.module.css'

export default function Icon({className="icon", src}) {
  return (
    <img src={src} className={styles[className]} alt=""></img>
  )
}