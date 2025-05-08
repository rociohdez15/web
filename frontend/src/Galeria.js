import React, { useState,  useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // Estado para el menú

  // Función para cambiar el estado del menú
  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Función para cerrar el menú cuando se hace clic en un enlace
  const closeMenu = () => {
    setIsNavOpen(false); // Cierra el menú
  };
  
  const [imagenes, setImagenes] = useState([]);
  const [pagina, setPagina] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const tamañoPagina = 4;

  useEffect(() => {
    axios
      .get(`http://localhost:8080/api/imagenes?page=${pagina}&size=${tamañoPagina}`)
      .then((res) => {
        setImagenes(res.data.content);
        setTotalPaginas(res.data.totalPages);
      })
      .catch((err) => console.error("Error al cargar imágenes:", err));
  }, [pagina]);


  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta
        name="keywords"
        content="​Book your outdoor adventure, About Us, ​Find your next getaway, Our Services, ​Plan Your Camping Trip, ​How to plan a camping trip, Contact Us"
      />
      <meta name="description" content />
      <title>Atalanta | Inicio</title>
      <link rel="stylesheet" href="nicepage.css" media="screen" />
      <link rel="stylesheet" href="index.css" media="screen" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Sansita:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <meta name="generator" content="Nicepage 7.6.4, nicepage.com" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM6g0g5z5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5"
        crossorigin="anonymous"
      />
      <link
        id="u-theme-google-font"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
      />
      <meta name="theme-color" content="#478ac9" />
      <meta property="og:title" content="Atalanta" />
      <meta property="og:type" content="website" />
      <meta data-intl-tel-input-cdn-path="intlTelInput/" />

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

      <div className="container py-5">
        <h2
          className="text-center fw-bold mb-5 titulo-nosotros"
          style={{ marginTop: "-60px" }}
        >
          Galería
        </h2>

        <div className="container mt-5">
      {Array.from({ length: Math.ceil(imagenes.length / 2) }, (_, fila) => (
        <div className="row justify-content-center gx-0" key={fila}>
          {imagenes.slice(fila * 2, fila * 2 + 2).map((img, index) => (
            <div key={index} className="col-md-6 d-flex justify-content-center mb-4">
              <div
                className="border rounded-4 p-3 text-center"
                style={{
                  width: "350px",
                  borderColor: "#313336",
                  borderWidth: "2px",
                }}
              >
                <img
                  src={img.src}
                  alt={img.titulo}
                  className="img-fluid rounded-3 mb-3"
                  style={{ height: "200px", objectFit: "cover", width: "100%" }}
                />
                <p className="fw-bold mb-1" style={{ fontSize: "20px" }}>{img.titulo}</p>
                <p className="mb-1" style={{ fontSize: "15px" }}>{img.fecha}</p>
                <p className="mb-1" style={{ fontSize: "15px" }}>{img.ubicacion}</p>
                <div className="d-flex justify-content-center">
                  <div style={{ width: "170px", height: "170px" }}>
                    <iframe
                      src={`https://www.google.com/maps?q=${encodeURIComponent(img.ubicacion)}&output=embed`}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ))}

      {/* Controles de paginación */}
      <div className="d-flex justify-content-center mt-4">
        <button
          className="btn btn-outline-primary me-2"
          onClick={() => setPagina((prev) => Math.max(prev - 1, 0))}
          disabled={pagina === 0}
        >
          Anterior
        </button>
        <span className="align-self-center">
          Página {pagina + 1} de {totalPaginas}
        </span>
        <button
          className="btn btn-outline-primary ms-2"
          onClick={() => setPagina((prev) => Math.min(prev + 1, totalPaginas - 1))}
          disabled={pagina >= totalPaginas - 1}
        >
          Siguiente
        </button>
      </div>
    </div>
      </div>
      <footer
        className="u-align-center u-clearfix u-container-align-center u-footer u-grey-80 u-footer"
        id="footer"
      >
        <section className="u-backlink u-clearfix u-grey-80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <p className="u-text">
                  <span>This site was created with the </span>
                  <a
                    className="u-link"
                    href="https://nicepage.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    <span>Nicepage</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Home;
