import '../styles/Icon.css'

export default function Icon({className="icon", src}) {
  return (
    <img src={src} className={className} alt=""></img>
  )
}