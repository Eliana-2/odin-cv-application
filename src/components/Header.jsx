import '../styles/Header.css'

export default function Header({heading, children}) {

  return (
    <header className="header">
      <h1 className="header-heading heading">{heading}</h1>
      {children}
    </header>
  )
}