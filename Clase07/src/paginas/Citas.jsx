import { Link } from 'react-router-dom'

const listaCitas = [
    { id: 1, paciente: 'Juan Pérez', fecha: '2025-09-20', hora: '10:00' },
    { id: 2, paciente: 'María López', fecha: '2025-09-21', hora: '12:30' },
    { id: 3, paciente: 'Carlos Ramírez', fecha: '2025-09-22', hora: '15:00' }
    ]

    function Citas() {
    return (
        <div className="contenedor">
        <h2>Lista de Citas</h2>
        <ul>
            {listaCitas.map(cita => (
            <li key={cita.id}>
                {cita.paciente} - {cita.fecha} {cita.hora} 
                <Link to={`/cita/${cita.id}`} className="boton">Ver Detalles</Link>
            </li>
            ))}
        </ul>
        </div>
    )
}

export default Citas
