import React from 'react';
import './Proyectos.css';

function Proyectos() {
  return (
    <div className="proyectos-page">
      <div className="contenido-central">
        {/* Barra de navegación */}
        <div className="color">
          <a href="/"><img src="/logo.png" alt="Logo" /></a>
          <nav>
            <a href="/">Inicio</a>
            <a href="/proyectos" className="activo">Proyectos</a>
            <a href="/calendario">Calendario</a>
            <a href="/planes">Planes</a>
            <a href="/logout">Cerrar Sesión</a>
          </nav>
        </div>

        <header className="bg-white shadow">
          <h1>¡Gestiona tus Proyectos!</h1>
        </header>

        <main>
          <h2>Agregar Nuevo Proyecto</h2>
          <form>
            <div className="flex">
              <div className="w-1/2">
                <label>Nombre del Proyecto</label>
                <input type="text" placeholder="Nombre del Proyecto" />
              </div>
              <div className="w-1/2">
                <label>Importancia</label>
                <select>
                  <option>Alta</option>
                  <option>Media</option>
                  <option>Baja</option>
                </select>
              </div>
            </div>
            <div className="flex">
              <div className="w-1/2">
                <label>Fecha de Inicio</label>
                <input type="date" />
              </div>
              <div className="w-1/2">
                <label>Fecha Límite</label>
                <input type="date" />
              </div>
            </div>
            <button type="submit">Agregar Proyecto</button>
          </form>

          <h2>Proyectos Actuales</h2>
          <table>
            <thead>
              <tr>
                <th>Nombre del Proyecto</th>
                <th>Fecha de Inicio</th>
                <th>Fecha Límite</th>
                <th>Importancia</th>
                <th>Acciones</th>
                <th>Tareas</th>
                <th>Asignar Tarea</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>calendario</td>
                <td>2025-06-01</td>
                <td>2025-06-01</td>
                <td>Alta</td>
                <td><button className="bg-red-500">Eliminar Proyecto</button></td>
                <td></td>
                <td><button>Asignar Tarea</button></td>
              </tr>
            </tbody>
          </table>
        </main>

        <footer>
          ©PLANIFY - 2024 (EEMSJ)
        </footer>
      </div>
    </div>
  );
}

export default Proyectos;
