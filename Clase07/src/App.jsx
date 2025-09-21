import { Link, Outlet } from 'react-router-dom'
import './estilos/estilo.css'

function App() {
  return (
    <div>
      <nav className="barra-navegacion">
        <Link to="/">Inicio</Link>
        <Link to="/citas">Ver Citas</Link>
      </nav>
      <Outlet />
    </div>
  )
}

export default App
