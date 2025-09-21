import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import Inicio from './paginas/Inicio'
import Citas from './paginas/Citas'
import CitaDetalle from './paginas/CitaDetalle'
import NoEncontrado from './paginas/NoEncontrado'

const enrutador = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NoEncontrado />,
    children: [
      { path: '/', element: <Inicio /> },
      { path: '/citas', element: <Citas /> },
      { path: '/cita/:id', element: <CitaDetalle /> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={enrutador} />
  </React.StrictMode>
)
