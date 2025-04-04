import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Usamos Routes en lugar de Switch
import Home from './Home'; // Asegúrate de ajustar la ruta si es necesario


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Cambié "component" por "element" */}
        {/* Puedes agregar otras rutas aquí */}
      </Routes>
    </Router>
  );
};

export default App;
