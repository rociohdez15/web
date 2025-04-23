import React from "react";
import { Route, Navigate } from "react-router-dom";
import { jwtDecode } from 'jwt-decode';



const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");

  if (!token) {
    // Si no hay token, redirige al login
    return <Navigate to="/login" />;
  }

  // Verifica la validez del token
  const isTokenValid = () => {
    try {
      const decodedToken = jwtDecode(token);
      return decodedToken.exp * 1000 > Date.now(); // Verifica si el token no ha expirado
    } catch (error) {
      return false; // Si no se puede decodificar el token, es inválido
    }
  };

  if (!isTokenValid()) {
    // Si el token es inválido, redirige al login
    localStorage.removeItem("token");
    return <Navigate to="/login" />;
  }

  // Si el token es válido, renderiza la ruta
  return children;
};

export default PrivateRoute;
