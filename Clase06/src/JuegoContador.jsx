import { useReducer, useRef, useCallback, useEffect } from "react"

const estadoInicial = { contador: 0, historial: [] }

function reducer(estado, accion) {
    switch (accion.tipo) {
        case "incrementar":
        return { 
            contador: estado.contador + 1, 
            historial: [...estado.historial, `+1 (Nuevo valor: ${estado.contador + 1})`] 
        }
        case "decrementar":
        return { 
            contador: estado.contador - 1, 
            historial: [...estado.historial, `-1 (Nuevo valor: ${estado.contador - 1})`] 
        }
        case "reiniciar":
        return estadoInicial
        default:
        return estado
    }
    }

    function JuegoContador() {
    const [estado, dispatch] = useReducer(reducer, estadoInicial)
    const botonIncrementoRef = useRef(null)

    useEffect(() => {
        botonIncrementoRef.current.focus()
    }, [])

    const manejarIncremento = useCallback(() => {
        dispatch({ tipo: "incrementar" })
    }, [])

    const manejarDecremento = useCallback(() => {
        dispatch({ tipo: "decrementar" })
    }, [])

    const manejarReinicio = useCallback(() => {
        dispatch({ tipo: "reiniciar" })
    }, [])

    return (
        <div className="contenedor">
        <h3>Contador: {estado.contador}</h3>
        <button ref={botonIncrementoRef} onClick={manejarIncremento}>+</button>
        <button onClick={manejarDecremento}>-</button>
        <button onClick={manejarReinicio}>Reiniciar</button>
        <h4>Historial de cambios:</h4>
        <ul>
            {estado.historial.map((entrada, indice) => (
            <li key={indice}>{entrada}</li>
            ))}
        </ul>
        </div>
    )
}

export default JuegoContador
