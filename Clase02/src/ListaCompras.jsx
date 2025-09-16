import { useState } from "react";
import "./ListaCompras.css";

function ListaCompras() {
    const [productos, setProductos] = useState([]);
    const [nuevoProducto, setNuevoProducto] = useState("");

    const agregarProducto = () => {
        if (nuevoProducto.trim() !== "") {
        setProductos([...productos, { nombre: nuevoProducto, comprado: false }]);
        setNuevoProducto("");
        }
    };

    const eliminarProducto = (indice) => {
        const productosActualizados = productos.filter((_, i) => i !== indice);
        setProductos(productosActualizados);
    };

    const alternarComprado = (indice) => {
        const productosActualizados = productos.map((producto, i) =>
        i === indice ? { ...producto, comprado: !producto.comprado } : producto
        );
        setProductos(productosActualizados);
    };

    return (
        <div className="contenedor-lista">
        <h2>Lista de Compras</h2>
        <input
            type="text"
            value={nuevoProducto}
            placeholder="Escribe un producto"
            onChange={(e) => setNuevoProducto(e.target.value)}
            className="input-producto"
        />
        <button onClick={agregarProducto} className="boton-agregar">
            Agregar
        </button>

        <ul className="lista-productos">
            {productos.map((producto, indice) => (
            <li key={indice}>
                <span
                className={`texto-producto ${
                    producto.comprado ? "texto-comprado" : ""
                }`}
                >
                {producto.nombre}
                </span>
                <div className="botones-acciones">
                <button
                    onClick={() => alternarComprado(indice)}
                    className="boton-comprado"
                >
                    {producto.comprado ? "Desmarcar" : "Comprado"}
                </button>
                <button
                    onClick={() => eliminarProducto(indice)}
                    className="boton-eliminar"
                >
                    Eliminar
                </button>
                </div>
            </li>
            ))}
        </ul>
        </div>
    );
}

export default ListaCompras;
