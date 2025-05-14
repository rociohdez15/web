import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

    const [isNavOpen, setIsNavOpen] = useState(false); // Estado para el menú

  // Función para cambiar el estado del menú
  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Función para cerrar el menú cuando se hace clic en un enlace
  const closeMenu = () => {
    setIsNavOpen(false); // Cierra el menú
  };
  
  return (
    <header className="u-header">
            <div className="container-fluid d-flex justify-content-between align-items-center py-3">
              {/* Logo con más margen izquierdo */}
              <a href="#" className="u-image u-logo ms-5">
                <img
                  src="images/default-logo.png"
                  className="u-logo-image"
                  alt="Logo"
                />
              </a>
    
              {/* Navbar */}
              <nav className="navbar navbar-expand-lg navbar-light w-200">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded={isNavOpen ? "true" : "false"}
                  aria-label="Toggle navigation"
                  onClick={toggleMenu}
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
                  id="navbarNav"
                >
                  <ul className="navbar-nav w-100 d-flex justify-content-center">
                    {" "}
                    {/* Centrado del menú */}
                    <li className="nav-item p-nosotros">
                      <Link to="/" className="nav-link" onClick={closeMenu}>
                        Inicio
                      </Link>
                    </li>
                    <li className="nav-item p-nosotros">
                      <Link to="/contacto" className="nav-link" onClick={closeMenu}>
                        Contacto
                      </Link>
                    </li>
                    <li className="nav-item p-nosotros">
                      <Link to="/proyecto" className="nav-link" onClick={closeMenu}>
                        Proyecto
                      </Link>
                    </li>
                  </ul>
                </div>
              </nav>
    
              <Link
                to="/login"
                className="btn btn-primary me-5 rounded-pill p-nosotros"
              >
                Iniciar Sesión
              </Link>
            </div>
          </header>
  );
};

export default Navbar;