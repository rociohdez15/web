import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; // Usamos Routes en lugar de Switch
import Home from "./pages/clientes/Home"; // Asegúrate de ajustar la ruta si es necesario
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Blog from "./Blog";
import Contacto from "./Contacto";
import Experiencias from "./Experiencias";
import Galeria from "./pages/clientes/Galeria";
import Nosotros from "./pages/clientes/Nosotros";
import Olvidaste from "./Olvidaste";
import Privacidad from "./Privacidad";
import Proyecto from "./Proyecto";
import Terminos from "./Terminos";
import PrivateRoute from "./PrivateRoute";
import DashboardAdmin from "./pages/admin/dashboard/DashboardAdmin";
import AdminTodos from "./pages/admin/administradores/AdminTodos";
import AdminAlta from "./pages/admin/administradores/AdminAlta";
import EventosTodos from "./pages/admin/eventos/EventosTodos";
import CrearEventos from "./pages/admin/eventos/CrearEventos";
import Mensajes from "./pages/admin/mensajes/MensajesTodos";
import MensajeSolo from "./pages/admin/mensajes/MensajeSolo";
import Notificaciones from "./pages/admin/notificaciones/NotificacionesTodas";
import NotificacionSola from "./pages/admin/notificaciones/NotificacionSola";
import GaleriaTodos from "./pages/admin/galeria/GaleriaTodos";
import AgregarImagen from "./pages/admin/galeria/AgregarImagen";

const App = () => {
  const token = localStorage.getItem("token"); // Verificar si hay token
  console.log(token);
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />{" "}
        {/* Cambié "component" por "element" */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/experiencias" element={<Experiencias />} />
        <Route path="/galeria" element={<Galeria />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/olvidaste" element={<Olvidaste />} />
        <Route path="/privacidad" element={<Privacidad />} />
        <Route path="/proyecto" element={<Proyecto />} />
        <Route path="/terminos" element={<Terminos />} />
        <Route
          path="/dashboard-admin"
          element={
            <PrivateRoute>
              <DashboardAdmin />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-todos"
          element={
            <PrivateRoute>
              <AdminTodos/>
            </PrivateRoute>
          }
        />
        <Route
          path="/admin-alta"
          element={
            <PrivateRoute>
              <AdminAlta/>
            </PrivateRoute>
          }
        />
        <Route
          path="/eventos-todos"
          element={
            <PrivateRoute>
              <EventosTodos/>
            </PrivateRoute>
          }
        />
        <Route
          path="/crear-eventos"
          element={
            <PrivateRoute>
              <CrearEventos/>
            </PrivateRoute>
          }
        />
        <Route
          path="/mensajes"
          element={
            <PrivateRoute>
              <Mensajes/>
            </PrivateRoute>
          }
        />
        <Route
          path="/mensaje/:id"
          element={
            <PrivateRoute>
              <MensajeSolo/>
            </PrivateRoute>
          }
        />
        <Route
          path="/notificaciones"
          element={
            <PrivateRoute>
              <Notificaciones/>
            </PrivateRoute>
          }
        />
        <Route
          path="/notificacion/:id"
          element={
            <PrivateRoute>
              <NotificacionSola/>
            </PrivateRoute>
          }
        />
        <Route
          path="/galeria-listado"
          element={
            <PrivateRoute>
              <GaleriaTodos/>
            </PrivateRoute>
          }
        />
        <Route
          path="/agregar-imagen"
          element={
            <PrivateRoute>
              <AgregarImagen/>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
