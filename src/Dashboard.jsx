import React from "react";
import { useAuth } from "./AuthContext";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  if (!user) {
    return <p>No autorizado. Por favor, inicia sesión.</p>;
  }

  return (
    <div style={{ padding: "20px", color: "white" }}>
      <h1>Bienvenido, {user.nombre}!</h1>
      <p>Esta es la página protegida solo para usuarios registrados.</p>
      <button onClick={handleLogout}>Cerrar sesión</button>
    </div>
  );
};

export default Dashboard;
