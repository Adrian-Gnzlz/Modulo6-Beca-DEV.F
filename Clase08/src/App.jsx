import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState(null);

  // Recuperar usuario desde localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Función login
  const login = (username) => {
    const userData = { username };
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Función logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <Router>
      <nav style={{ padding: "10px", background: "#222", color: "#fff" }}>
        <Link to="/" style={{ marginRight: "10px", color: "#fff" }}>Inicio</Link>
        <Link to="/profile" style={{ marginRight: "10px", color: "#fff" }}>Perfil</Link>
        {user ? (
          <button onClick={logout} style={{ marginLeft: "10px" }}>Cerrar sesión</button>
        ) : (
          <Link to="/login" style={{ color: "#fff" }}>Login</Link>
        )}
      </nav>

      <Routes>
        <Route path="/login" element={<Login onLogin={login} />} />
        <Route path="/" element={<Home user={user} />} />
        <Route
          path="/profile"
          element={user ? <Profile user={user} /> : <Navigate to="/login" />}
        />
      </Routes>
    </Router>
  );
};

export default App;
