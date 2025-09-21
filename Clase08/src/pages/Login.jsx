import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
    const [username, setUsername] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() === "") return;
        onLogin(username);
        navigate("/");
    };

    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
        <h2>Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
            <input
            type="text"
            placeholder="Nombre de usuario"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={{ padding: "8px", margin: "10px" }}
            />
            <button type="submit" style={{ padding: "8px 16px" }}>
            Entrar
            </button>
        </form>
        </div>
    );
};

export default Login;
