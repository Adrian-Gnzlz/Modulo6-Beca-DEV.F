import React from 'react'
import { createRoot } from 'react-dom/client'
import Aplicacion from './aplicacion.jsx'
import './estilos.css'

const contenedor = document.getElementById('raiz')
const raiz = createRoot(contenedor)

raiz.render(
    <React.StrictMode>
        <Aplicacion />
    </React.StrictMode>
)
