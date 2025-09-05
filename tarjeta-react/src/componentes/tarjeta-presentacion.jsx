function TarjetaPresentacion({ nombre, profesion, mensaje }) {
    return (
        <section className="tarjeta">
        <div className="tarjeta-encabezado">
            <img
            className="tarjeta-foto"
            src="https://via.placeholder.com/96"
            alt={`Foto de ${nombre}`}
            />
            <div>
            <h2 className="tarjeta-nombre">{nombre}</h2>
            <p className="tarjeta-profesion">{profesion}</p>
            </div>
        </div>

        <p className="tarjeta-mensaje">{mensaje}</p>

        <div className="tarjeta-acciones">
            <button className="boton">Contactar</button>
            <button className="boton boton-secundario">Ver portafolio</button>
        </div>
        </section>
    )
}

export default TarjetaPresentacion
