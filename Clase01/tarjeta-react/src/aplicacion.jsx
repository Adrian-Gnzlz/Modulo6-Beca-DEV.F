import TarjetaPresentacion from './componentes/tarjeta-presentacion.jsx'

function Aplicacion() {
    return (
        <main className="contenedor-principal">
        <h1>Mi Tarjeta de Presentación</h1>
        <TarjetaPresentacion
            nombre="Ana Pérez"
            profesion="Desarrolladora Frontend"
            mensaje="Me apasiona construir interfaces simples, accesibles y veloces con React."
        />
        </main>
    )
}

export default Aplicacion
