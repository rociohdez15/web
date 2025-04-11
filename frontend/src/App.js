import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Usamos Routes en lugar de Switch
import Home from './Home'; // Asegúrate de ajustar la ruta si es necesario
import Login from './Login';
import Register from './Register';
import Blog from './Blog';
import Contacto from './Contacto';
import Experiencias from './Experiencias';
import Galeria from './Galeria';
import Nosotros from './Nosotros';
import Olvidaste from './Olvidaste';
import Privacidad from './Privacidad';
import Proyecto from './Proyecto';
import Terminos from './Terminos';
import Dashboard from './DashboardAdmin';
import DashboardAdmin from './DashboardAdmin';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Cambié "component" por "element" */}
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
        <Route path="/dashboard-admin" element={<DashboardAdmin />} />
      </Routes>
    </Router>
  );
};

export default App;
