import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./Home.css"; // Estilos base reutilizados
import "./Calendario.css"; // Estilos específicos para Calendario

const Calendario = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="wrapper">
      {/* NAV */}
      <nav className="nav">
        <div className="nav-logo">
          <a href="/">
            <img src="img\PLANify with rocco.png"  />
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

      {/* CONTENIDO DEL CALENDARIO */}
      <main style={{ marginTop: "120px", padding: "20px" }}>
        <h1 className="calendar-title">Calendario del Mes</h1>
        <div style={{ marginTop: "1rem", display: "flex", justifyContent: "center" }}>
          <button
            onClick={() => setIsModalOpen(true)}
            className="calendar-button"
          >
            <b>Agregar fecha de entrega</b>
          </button>
        </div>

        <div id="calendarContainer" style={{ marginTop: "40px" }}>
          {/* Aquí irá el contenido dinámico del calendario */}
        </div>
      </main>

      {/* MODAL */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h2 className="text-2xl font-bold mb-4">Selecciona la fecha de entrega</h2>
            <form onSubmit={(e) => e.preventDefault()}>
              <label htmlFor="deliveryDate" className="block text-lg mb-2">Fecha de entrega:</label>
              <input type="date" id="deliveryDate" className="border p-2 rounded w-full mb-4" />

              <div className="mb-4">
                <p className="font-semibold">Importancia:</p>
                <div className="flex space-x-4">
                  <button type="button" className="py-2 px-4 bg-yellow-400 text-white rounded">Media</button>
                  <button type="button" className="py-2 px-4 bg-red-500 text-white rounded">Alta</button>
                  <button type="button" className="py-2 px-4 bg-green-500 text-white rounded">Entregado</button>
                </div>
              </div>

              <div className="flex justify-between mt-4">
                <button onClick={() => setIsModalOpen(false)} type="button" className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-red-500">Cancelar</button>
                <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded">Guardar</button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="footer">
        <p>&copy; PLANIFY - 2025 (EEMSJ)</p>
      </footer>
    </div>
  );
};

export default Calendario;

