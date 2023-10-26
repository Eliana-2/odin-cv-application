import '../styles/main.css'

export default function Main({children}) {
  return (
    <main className="main">
      <div className="container">
        {children}
      </div>
      </main>
  )
}