import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import "./Register.css";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    correo: "",
    contrasena: "",
    recordar: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // Normalizar y guardar al usuario
  const normalizado = {
    ...form,
    correo: form.correo.trim().toLowerCase(),
    contrasena: form.contrasena.trim(),
  };

  register(normalizado);                  
  console.log("Usuario guardado:", localStorage.getItem("user"));
  navigate("/login");                     
};

  return (
    <div className="register-wrapper">
      <div className="register-form-box">
        <div className="top">
          <span>
            ¿Tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
          </span>
          <header>Regístrate</header>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="two-forms">
            <div className="input-box">
              <input
                type="text"
                name="nombre"
                placeholder="Nombre"
                className="input-field"
                onChange={handleChange}
                value={form.nombre}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                name="apellido"
                placeholder="Apellido"
                className="input-field"
                onChange={handleChange}
                value={form.apellido}
                required
              />
            </div>
          </div>
          <div className="input-box">
            <input
              type="email"
              name="correo"
              placeholder="Correo"
              className="input-field"
              onChange={handleChange}
              value={form.correo}
              required
            />
          </div>
          <div className="input-box">
            <input
              type="password"
              name="contrasena"
              placeholder="Contraseña"
              className="input-field"
              onChange={handleChange}
              value={form.contrasena}
              required
            />
          </div>
          <div className="input-box">
            <input type="submit" className="submit" value="Registrarse" />
          </div>
          <div className="two-col">
            <div className="one">
              <input
                type="checkbox"
                name="recordar"
                id="register-check"
                onChange={handleChange}
                checked={form.recordar}
              />
              <label htmlFor="register-check">Recuérdame</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;





