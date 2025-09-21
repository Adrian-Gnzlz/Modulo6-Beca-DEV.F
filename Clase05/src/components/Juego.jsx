import { useState } from "react"
import EntradaNumero from "./EntradaNumero"
import Mensaje from "./Mensaje"
import BotonReiniciar from "./BotonReiniciar"

function Juego() {
    const [numeroSecreto, setNumeroSecreto] = useState(Math.floor(Math.random() * 100) + 1)
    const [numeroUsuario, setNumeroUsuario] = useState("")
    const [mensaje, setMensaje] = useState("")
    const [ganador, setGanador] = useState(false)

    const verificarNumero = () => {
        const numero = parseInt(numeroUsuario)
        if (numero === numeroSecreto) {
        setMensaje("¡Correcto! Adivinaste el número 🎉")
        setGanador(true)
        } else if (numero < numeroSecreto) {
        setMensaje("El número es mayor ⬆️")
        } else {
        setMensaje("El número es menor ⬇️")
        }
    }

    const reiniciarJuego = () => {
        setNumeroSecreto(Math.floor(Math.random() * 100) + 1)
        setNumeroUsuario("")
        setMensaje("")
        setGanador(false)
    }

    return (
        <div className="juego">
        <EntradaNumero
            valor={numeroUsuario}
            cambiarValor={setNumeroUsuario}
            verificar={verificarNumero}
            deshabilitado={ganador}
        />
        <Mensaje texto={mensaje} />
        {ganador && <BotonReiniciar reiniciar={reiniciarJuego} />}
        </div>
    )
}

export default Juego
