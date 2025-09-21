function EntradaNumero({ valor, cambiarValor, verificar, deshabilitado }) {
    return (
        <div className="entrada">
        <input
            type="number"
            value={valor}
            onChange={(e) => cambiarValor(e.target.value)}
            disabled={deshabilitado}
            placeholder="Escribe un número"
        />
        <button onClick={verificar} disabled={deshabilitado}>
            Probar
        </button>
        </div>
    )
}

export default EntradaNumero
