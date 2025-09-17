import React, { useState, useEffect, useMemo } from 'react'

function App() {
  const [tareas, setTareas] = useState(() => {
    const guardadas = localStorage.getItem('tareas')
    return guardadas ? JSON.parse(guardadas) : []
  })
  const [nuevaTarea, setNuevaTarea] = useState('')
  const [duracion, setDuracion] = useState('')
  const [filtroMinimo, setFiltroMinimo] = useState(0)

  const calcularTiempoTotal = useMemo(() => {
    return tareas.reduce((total, tarea) => total + tarea.duracion, 0)
  }, [tareas])

  const tareasFiltradas = useMemo(() => {
    return tareas.filter(tarea => tarea.duracion >= filtroMinimo)
  }, [tareas, filtroMinimo])

  useEffect(() => {
    document.title = `Total: ${calcularTiempoTotal} minutos`
    localStorage.setItem('tareas', JSON.stringify(tareas))
  }, [tareas, calcularTiempoTotal])

  const agregarTarea = () => {
    if (nuevaTarea && duracion) {
      const nuevaTareaObj = {
        nombre: nuevaTarea,
        duracion: parseInt(duracion)
      }
      setTareas([...tareas, nuevaTareaObj])
      setNuevaTarea('')
      setDuracion('')
    }
  }

  const eliminarTarea = (index) => {
    const nuevas = tareas.filter((_, i) => i !== index)
    setTareas(nuevas)
  }

  return (
    <div className="contenedor">
      <h1>Contador de Tareas</h1>
      <div className="formulario">
        <input 
          type="text" 
          value={nuevaTarea} 
          onChange={(e) => setNuevaTarea(e.target.value)} 
          placeholder="Nombre de la tarea" 
        />
        <input 
          type="number" 
          value={duracion} 
          onChange={(e) => setDuracion(e.target.value)} 
          placeholder="Duración en minutos" 
        />
        <button onClick={agregarTarea}>Agregar tarea</button>
      </div>

      <div className="filtro">
        <label>Duración mínima:</label>
        <input 
          type="number" 
          value={filtroMinimo} 
          onChange={(e) => setFiltroMinimo(parseInt(e.target.value) || 0)} 
          placeholder="Ej: 10" 
        />
      </div>

      <h2>Lista de Tareas</h2>
      <ul className="lista">
        {tareasFiltradas.map((tarea, index) => (
          <li key={index}>
            {tarea.nombre}: {tarea.duracion} minutos
            <button className="eliminar" onClick={() => eliminarTarea(index)}>✖</button>
          </li>
        ))}
      </ul>

      <h3>Total de tiempo: {calcularTiempoTotal} minutos</h3>
    </div>
  )
}

export default App
