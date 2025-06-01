import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Proyectos.css";

const Proyectos = () => {
  const [nuevoProyecto, setNuevoProyecto] = useState({
    nombre: "",
    importancia: "Alta",
    fechaInicio: "",
    fechaLimite: ""
  });

  const [proyectos, setProyectos] = useState([]);

  const mapIdToKey = (id) => {
    switch (id) {
      case "nombre-proyecto":
        return "nombre";
      case "importancia":
        return "importancia";
      case "fecha-inicio":
        return "fechaInicio";
      case "fecha-limite":
        return "fechaLimite";
      default:
        return id;
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setNuevoProyecto((prev) => ({
      ...prev,
      [mapIdToKey(id)]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (nuevoProyecto.nombre.trim() === "") {
      alert("El nombre del proyecto es obligatorio");
      return;
    }

    // Clonamos el objeto para evitar referencias al estado actual
    setProyectos((prev) => [...prev, { ...nuevoProyecto }]);

    // Reseteamos el formulario
    setNuevoProyecto({
      nombre: "",
      importancia: "Alta",
      fechaInicio: "",
      fechaLimite: ""
    });
  };

  const eliminarProyecto = (index) => {
    setProyectos((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="proyectos-page min-h-full">
      {/* Navbar */}
      <nav className="color">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-xF8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link to="/">
                <img className="h-20 w-25" src="Logos/roco.png" alt="PLANIFY" />
              </Link>
            </div>
            <div className="flex-shrink-0">
              <Link to="/">
                <img className="h-40 w-25" src="Logos/PLANify.png" alt="PLANIFY" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/"
                  className="rounded-md px-3 py-2 text-sm text-black font-medium hover:bg-green-600 hover:text-white"
                >
                  Inicio
                </Link>
                <Link
                  to="/proyectos"
                  className="rounded-md px-3 py-2 text-sm font-medium bg-green-600 text-white"
                >
                  Proyectos
                </Link>
                <Link
                  to="/calendario"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-green-600 hover:text-white"
                >
                  Calendario
                </Link>
                <Link
                  to="/planes"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-green-600 hover:text-white"
                >
                  Planes
                </Link>
                <Link
                  to="/login"
                  className="rounded-md px-3 py-2 text-sm font-medium text-black-300 hover:bg-red-600 hover:text-white"
                >
                  Cerrar Sesión
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="bg-white shadow">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 text-center">
            ¡Gestiona tus Proyectos!
          </h1>
        </div>
      </header>

      {/* Main content */}
      <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <section id="proyectos" className="content-section">
          <h2 className="text-xl font-semibold mb-4">Agregar Nuevo Proyecto</h2>

          <form id="form-proyecto" className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="nombre-proyecto"
                  className="block text-sm font-medium text-gray-700"
                >
                  Nombre del Proyecto
                </label>
                <input
                  type="text"
                  id="nombre-proyecto"
                  className="mt-1 block w-full px-4 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black rounded-md"
                  value={nuevoProyecto.nombre}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="importancia"
                  className="block text-sm font-medium text-gray-700"
                >
                  Importancia
                </label>
                <select
                  id="importancia"
                  className="mt-1 block w-full px-4 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black rounded-md"
                  value={nuevoProyecto.importancia}
                  onChange={handleChange}
                  required
                >
                  <option value="Alta">Alta</option>
                  <option value="Media">Media</option>
                  <option value="Baja">Baja</option>
                </select>
              </div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/2">
                <label
                  htmlFor="fecha-inicio"
                  className="block text-sm font-medium text-gray-700"
                >
                  Fecha de Inicio
                </label>
                <input
                  type="date"
                  id="fecha-inicio"
                  className="mt-1 block w-full px-4 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black rounded-md"
                  value={nuevoProyecto.fechaInicio}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="w-1/2">
                <label
                  htmlFor="fecha-limite"
                  className="block text-sm font-medium text-gray-700"
                >
                  Fecha Límite
                </label>
                <input
                  type="date"
                  id="fecha-limite"
                  className="mt-1 block w-full px-4 py-2 border-2 border-black focus:outline-none focus:ring-2 focus:ring-black rounded-md"
                  value={nuevoProyecto.fechaLimite}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-4 w-full bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              Agregar Proyecto
            </button>
          </form>
        </section>

        <section id="lista-proyectos" className="content-section mt-12">
          <h2 className="text-xl font-semibold mb-4">Proyectos Actuales</h2>
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr>
                <th className="px-4 py-2 border">Nombre del Proyecto</th>
                <th className="px-4 py-2 border">Fecha de Inicio</th>
                <th className="px-4 py-2 border">Fecha Límite</th>
                <th className="px-4 py-2 border">Importancia</th>
                <th className="px-4 py-2 border">Acciones</th>
                <th className="px-4 py-2 border">Tareas</th>
                <th className="px-4 py-2 border">Asignar Tarea</th>
              </tr>
            </thead>
            <tbody id="tabla-body">
              {proyectos.map((proyecto, index) => (
                <tr key={index}>
                  <td className="px-4 py-2 border">{proyecto.nombre}</td>
                  <td className="px-4 py-2 border">{proyecto.fechaInicio}</td>
                  <td className="px-4 py-2 border">{proyecto.fechaLimite}</td>
                  <td className="px-4 py-2 border">{proyecto.importancia}</td>
                  <td className="px-4 py-2 border">
                    <button
                      className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
                      onClick={() => eliminarProyecto(index)}
                    >
                      Eliminar
                    </button>
                  </td>
                  <td className="px-4 py-2 border">-</td>
                  <td className="px-4 py-2 border">-</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-center py-4">
        <p>&copy; PLANIFY - 2024 (EEMSJ)</p>
      </footer>
    </div>
  );
};

export default Proyectos;







