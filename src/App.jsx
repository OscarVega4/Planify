import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Register from "./Register";
import InicioDeSesion from "./InicioDeSesion";
import Home from "./Home"; // Importa el componente Home
import { useAuth } from "./AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<InicioDeSesion />} />
        <Route path="/register" element={<Register />} />
        <Route 
          path="/home" 
          element={user ? <Home /> : <Navigate to="/login" replace />} 
        />
        <Route 
          path="/" 
          element={<Navigate to={user ? "/home" : "/login"} replace />} 
        />
      </Routes>
    </Router>
  );
}

export default App;







