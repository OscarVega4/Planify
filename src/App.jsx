import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./Register";
import InicioDeSesion from "./InicioDeSesion";
import Home from "./Home";
import Proyectos from "./Proyectos";
import Calendario from "./Calendario"; // ✅ Importar Calendario
import { useAuth } from "./AuthContext";

function App() {
  const { user } = useAuth(); // Obtiene el usuario autenticado (null si no hay)

  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/login" element={<InicioDeSesion />} />
        <Route path="/register" element={<Register />} />

        {/* Rutas protegidas */}
        <Route 
          path="/home" 
          element={user ? <Home /> : <Navigate to="/login" replace />} 
        />
        <Route 
          path="/proyectos" 
          element={user ? <Proyectos /> : <Navigate to="/login" replace />} 
        />
        <Route 
          path="/calendario" 
          element={user ? <Calendario /> : <Navigate to="/login" replace />} 
        /> {/* ✅ Ruta protegida para Calendario */}

        {/* Ruta raíz */}
        <Route 
          path="/" 
          element={<Navigate to={user ? "/home" : "/login"} replace />} 
        />
      </Routes>
    </Router>
  );
}

export default App;










