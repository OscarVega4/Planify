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
    <div className="min-h-full">
      <nav className="color">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center"></div>
            <div className="flex-shrink-0">
              <a href="/">
                <img
                  className="h-40 w-25"
                  src="/Logos/PLANify with rocco.png"
                  alt="PLANIFY"
                />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="rounded-md bg-green-600 px-3 py-2 text-sm font-medium text-white"
                >
                  Inicio
                </a>
                <a
                  href="/proyectoss"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-green-600 hover:text-white"
                >
                  Proyectos
                </a>
                <a
                  href="/calendario"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-green-600 hover:text-white"
                >
                  Calendario
                </a>
                <a
                  href="/planes"
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-green-600 hover:text-white"
                >
                  Planes
                </a>
                <button
                  onClick={handleLogout}
                  className="rounded-md px-3 py-2 text-sm font-medium hover:bg-red-600 hover:text-white"
                >
                  Cerrar Sesión
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main>
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <section id="dashboard" className="content-section">
            <div className="summary grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="card p-4 border rounded shadow">
                <h2 className="text-lg font-semibold">Proyectos Activos</h2>
                <p id="total-proyectos">0 proyectos en curso</p>
              </div>
              <div className="card p-4 border rounded shadow">
                <h2 className="text-lg font-semibold">Tareas Pendientes</h2>
                <p id="total-tareas">5 tareas sin completar</p>
              </div>
              <div className="card p-4 border rounded shadow">
                <h2 className="text-lg font-semibold">Próximas Fechas Límite</h2>
                <p id="total-fechas-proximas">3 tareas con fechas próximas</p>
              </div>
            </div>
          </section>

          <section id="proyectos" className="content-section mt-10">
            <h2 className="text-xl font-semibold mb-4">Lista de Proyectos</h2>
            <table className="w-full table-auto border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Nombre del Proyecto</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Fecha de Inicio</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Fecha de Vencimiento</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Importancia</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {/* Aquí puedes mapear tus proyectos si los tienes */}
                <tr>
                  <td className="border border-gray-300 px-4 py-2">Proyecto de ejemplo</td>
                  <td className="border border-gray-300 px-4 py-2">2024-06-01</td>
                  <td className="border border-gray-300 px-4 py-2">2024-12-31</td>
                  <td className="border border-gray-300 px-4 py-2">Alta</td>
                  <td className="border border-gray-300 px-4 py-2">
                    <button className="text-blue-600 hover:underline">Ver</button>
                  </td>
                </tr>
              </tbody>
            </table>
            <button
              onClick={() => navigate("/proyectoss")}
              className="mt-4 rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
            >
              Agregar Proyecto
            </button>
          </section>
        </div>
      </main>

      <footer className="text-center py-4 border-t mt-10">
        <p>&copy; PLANIFY - 2025 (EEMSJ)</p>
      </footer>
    </div>
  );
};

export default Home;

