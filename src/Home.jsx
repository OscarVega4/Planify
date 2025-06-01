import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./Home.css"; 

const Home = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="wrapper">
      <nav className="nav">
        <div className="nav-logo">
          <a href="/">
            <img src="/Logos/PLANify with rocco.png" alt="PLANIFY" />
          </a>
        </div>
        <div className="nav-button">
          <button className="btn white-btn" onClick={() => navigate("/")}>Inicio</button>
          <button className="btn" onClick={() => navigate("/proyectos")}>Proyectos</button>
          <button className="btn" onClick={() => navigate("/calendario")}>Calendario</button>
          <button className="btn" onClick={() => navigate("/planes")}>Planes</button>
          <button className="btn" onClick={handleLogout}>Cerrar Sesión</button>
        </div>
      </nav>

      <main style={{ marginTop: "120px", width: "100%", display: "flex", justifyContent: "center" }}>
        <div className="form-box">
          <section id="dashboard">
            <div className="summary" style={{ display: "flex", gap: "20px", justifyContent: "space-between" }}>
              <div className="card">
                <h2>Proyectos Activos</h2>
                <p>0 proyectos en curso</p>
              </div>
              <div className="card">
                <h2>Tareas Pendientes</h2>
                <p>5 tareas sin completar</p>
              </div>
              <div className="card">
                <h2>Próximas Fechas Límite</h2>
                <p>3 tareas con fechas próximas</p>
              </div>
            </div>
          </section>

          <section id="proyectos" style={{ marginTop: "40px", width: "100%" }}>
            <h2>Lista de Proyectos</h2>
            <table className="styled-table">
              <thead>
                <tr>
                  <th>Nombre del Proyecto</th>
                  <th>Fecha de Inicio</th>
                  <th>Fecha de Vencimiento</th>
                  <th>Importancia</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Proyecto de ejemplo</td>
                  <td>2024-06-01</td>
                  <td>2024-12-31</td>
                  <td>Alta</td>
                  <td>
                    <button className="btn">Ver</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={() => navigate("/proyectos")}
              className="btn white-btn"
              style={{ marginTop: "20px" }}
            >
              Agregar Proyecto
            </button>
          </section>
        </div>
      </main>

      <footer className="footer">
        <p>&copy; PLANIFY - 2025 (EEMSJ)</p>
      </footer>
    </div>
  );
};

export default Home;

