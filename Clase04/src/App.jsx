import React, { useState, useEffect, useMemo, useRef } from 'react'
import Planeta from './Planeta'

function App() {
  const [distancia, setDistancia] = useState(0)
  const [combustible, setCombustible] = useState(100)
  const [estadoNave, setEstadoNave] = useState('En órbita')
  const [planetasVisitados, setPlanetasVisitados] = useState([])
  const [planetas, setPlanetas] = useState(
    JSON.parse(localStorage.getItem('planetas')) || []
  )
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')
  const [imagen, setImagen] = useState(null)
  const inputImagenRef = useRef(null)

  useEffect(() => {
    console.log('¡El panel de control está listo!')
    const intervalo = setInterval(() => {
      setDistancia((d) => d + 10)
      setCombustible((c) => (c > 0 ? c - 1 : 0))
    }, 1000)
    return () => {
      clearInterval(intervalo)
      console.log('El panel de control se ha apagado.')
    }
  }, [])

  useEffect(() => {
    console.log('¡Combustible actualizado!')
  }, [combustible])

  useEffect(() => {
    localStorage.setItem('planetas', JSON.stringify(planetas))
  }, [planetas])

  const mensajeEstado = useMemo(() => {
    return `Estado: ${estadoNave}`
  }, [estadoNave])

  const aterrizar = () => {
    setEstadoNave('Aterrizando')
    const nombrePlaneta = `Planeta ${planetasVisitados.length + 1}`
    setPlanetasVisitados([...planetasVisitados, nombrePlaneta])
  }

  const guardarPlaneta = (e) => {
    e.preventDefault()
    const nuevoPlaneta = {
      nombre,
      descripcion,
      imagen: imagen ? URL.createObjectURL(imagen) : null,
    }
    setPlanetas([...planetas, nuevoPlaneta])
    setNombre('')
    setDescripcion('')
    setImagen(null)
    if (inputImagenRef.current) {
      inputImagenRef.current.value = ''
    }
  }

  const eliminarPlaneta = (index) => {
    const nuevos = [...planetas]
    nuevos.splice(index, 1)
    setPlanetas(nuevos)
  }

  return (
    <div className="contenedor">
      <h1>Panel de Control del Explorador Espacial</h1>
      <p>Distancia: {distancia} km</p>
      <p>Combustible: {combustible}%</p>
      <p>{mensajeEstado}</p>
      <button onClick={aterrizar}>Aterrizar</button>

      <h2>Planetas Visitados</h2>
      <div className="planetas">
        {planetasVisitados.map((planeta, index) => (
          <Planeta key={index} nombre={planeta} />
        ))}
      </div>

      <h2>Bitácora de Exploración</h2>
      <form onSubmit={guardarPlaneta} className="formulario">
        <input
          type="text"
          placeholder="Nombre del planeta"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <textarea
          placeholder="Descripción del planeta"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
          required
        />
        <input
          type="file"
          onChange={(e) => setImagen(e.target.files[0])}
          ref={inputImagenRef}
        />
        <button type="submit">Guardar</button>
      </form>

      <h2>Planetas Registrados</h2>
      <ul className="lista">
        {planetas.map((planeta, index) => (
          <li key={index} className="item-planeta">
            <h3>{planeta.nombre}</h3>
            <p>{planeta.descripcion}</p>
            {planeta.imagen && (
              <img src={planeta.imagen} alt={planeta.nombre} />
            )}
            <button onClick={() => eliminarPlaneta(index)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
