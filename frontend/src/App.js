import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Usamos Routes en lugar de Switch
import Home from './Home'; // Asegúrate de ajustar la ruta si es necesario
import Login from './Login';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Cambié "component" por "element" */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
