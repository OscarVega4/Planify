import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";  // Usa el hook personalizado
import "./Register.css";

const InicioDeSesion = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    correo: "",
    contrasena: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = login(form.correo, form.contrasena);
    if (success) {
      navigate("/home");  // ✅ Aquí cambiamos a la nueva ruta
    } else {
      alert("Correo o contraseña incorrectos.");
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-form-box">
        <div className="top">
          <span>
            ¿No tienes cuenta? <Link to="/register">Regístrate</Link>
          </span>
          <header>Iniciar Sesión</header>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-box">
            <input
              type="email"
              name="correo"
              placeholder="Correo"
              className="input-field"
              value={form.correo}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="contrasena"
              placeholder="Contraseña"
              className="input-field"
              value={form.contrasena}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Ingresar" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default InicioDeSesion;





