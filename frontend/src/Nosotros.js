import React, { useState } from "react";
import { Link } from "react-router-dom";

const Nosotros = () => {
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
    <>
      {/* CDN de Font Awesome */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />

      {/* CDN de Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* CDN de Bootstrap */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KyZXEJ6Haq4fVXf7Xw7xvvczf8vcnfd8j5LfUAW5A3v5Xr8V1BvLMth82A1ZcYpG"
        crossorigin="anonymous"
      />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta
        name="keywords"
        content="​Book your outdoor adventure, About Us, ​Find your next getaway, Our Services, ​Plan Your Camping Trip, ​How to plan a camping trip, Contact Us"
      />
      <meta name="description" content />
      <title>Atalanta | Login</title>
      <link rel="stylesheet" href="nicepage.css" media="screen" />
      <link rel="stylesheet" href="index.css" media="screen" />
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
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Sansita:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      <meta name="theme-color" content="#478ac9" />
      <meta property="og:title" content="Atalanta" />
      <meta property="og:type" content="website" />
      <meta data-intl-tel-input-cdn-path="intlTelInput/" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    body {\n      font-family: 'Inter', sans-serif;\n      background-color: white;\n      color: #1f2937; /* Tailwind gray-900 */\n    }\n    h1, h2 {\n      font-weight: 600;\n      font-size: 22px;\n      line-height: 28px;\n      color: #1f2937;\n    }\n    p {\n      font-weight: 400;\n      margin-bottom: 0.25rem;\n    }\n    .text-strong {\n      font-weight: 600;\n      font-size: 13px;\n      line-height: 18px;\n      color: #374151; /* Tailwind gray-700 */\n    }\n    .text-small {\n      font-weight: 400;\n      font-size: 11px;\n      line-height: 16px;\n      color: #4b5563; /* Tailwind gray-600 */\n    }\n    .btn-custom {\n      font-weight: 600;\n      font-size: 11px;\n      line-height: 16px;\n      color: #1f2937;\n      border: 1px solid #1f2937;\n      border-radius: 9999px;\n      padding: 0.375rem 1.5rem;\n      background-color: transparent;\n      transition: background-color 0.2s ease;\n    }\n    .btn-custom:hover {\n      background-color: #f3f4f6; /* Tailwind gray-100 */\n      color: #1f2937;\n    }\n    .img-rounded {\n      border-radius: 0.375rem;\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n    }\n    .bottom-img {\n      aspect-ratio: 1 / 2;\n      object-fit: cover;\n      border-radius: 0.375rem;\n      width: 100%;\n      height: 240px;\n    }\n    @media (max-width: 575.98px) {\n      h1, h2 {\n        font-size: 20px;\n        line-height: 26px;\n      }\n      .text-strong {\n        font-size: 12px;\n        line-height: 16px;\n      }\n      .text-small {\n        font-size: 10px;\n        line-height: 14px;\n      }\n      .btn-custom {\n        font-size: 10px;\n        line-height: 14px;\n        padding: 0.3rem 1.2rem;\n      }\n    }\n  ",
        }}
      />
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
                <li className="nav-item">
                  <Link to="/" className="nav-link" onClick={closeMenu}>
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contacto" className="nav-link" onClick={closeMenu}>
                    Contacto
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/proyecto" className="nav-link" onClick={closeMenu}>
                    Proyecto
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Link to="/login" className="btn btn-primary me-5 rounded-pill">
            Iniciar Sesión
          </Link>
        </div>
      </header>
      <main className="container py-4 py-md-5">
      <h1 className="titulo-nosotros text-center mt-0">Nosotros</h1>
      <br></br>
        {/* Top Section */}
        <section className="container mb-5">
          <div className="row align-items-center">
            <div className="col-lg-5 order-lg-1 order-2">
            <h1 className="mb-3 fs-2 titulo-nosotros text-center text-sm-start">¡Hola caracola!</h1>
              <p className="mb-1 text-muted p-nosotros" style={{ fontSize: "0.8rem" }}>
                <strong>
                  Soy Lourdes, una apasionada del turismo, con alma nómada y
                  corazón inquieto. Desde siempre he sentido una conexión
                  profunda con el mundo y las historias que se esconden detrás
                  de cada destino. Insaciable cuando se trata de descubrir,
                  compartir y crear experiencias que dejan huella.
                </strong>
              </p>
              <p className="mb-1 text-muted p-nosotros" style={{ fontSize: "0.8rem" }}>
                Mi trayectoria tanto académica como profesional, me han enseñado
                que los viajes no solo se viven sino que se sienten. He tenido
                la suerte de recorrer más de una decena de países, siempre
                buscando algo más allá de lo turístico. La búsqueda de algo más
                auténtico, que me conectara con cada lugar.
              </p>
              <p className="mb-1 text-muted p-nosotros" style={{ fontSize: "0.8rem" }}>
                Amante del deporte y de la naturaleza desde pequeñita, he ido
                estableciendo a lo largo de mi vida ambas cosas como una
                relación entre valores y experiencias que ahora pasan a ser
                parte de ATALANTA.
              </p>
              <p className="mb-1 text-muted p-nosotros" style={{ fontSize: "0.8rem" }}>
                Creo firmemente que viajar cambia la forma en la que percibimos
                el mundo y como nos vemos a nosotros mismos. Por eso nace este
                proyecto, para ayudarte a conectar con otras culturas y lugares,
                pero sobre todo contigo mismo.
              </p>
              <p className="mb-1 text-muted p-nosotros" style={{ fontSize: "0.8rem" }}>
                ¿Nos vamos?
              </p>
            </div>

            <div className="col-lg-7 order-lg-2 order-1 mb-4 mb-lg-0">
              <img
                src="https://storage.googleapis.com/a1aa/image/14f8d29b-cc2a-4a48-e8a8-6e8548496739.jpg"
                alt="Dos personas, una mujer y un hombre, en un ambiente natural con estructura de madera"
                className="img-fluid rounded w-100"
                style={{ maxHeight: 500, objectFit: "cover" }}
              />
            </div>
          </div>
        </section>

        {/* Bottom Section */}
        <section className="row align-items-center bg-light p-4 rounded-3">
          <div className="col-lg-6 d-flex gap-3 mb-4 mb-lg-0">
            <img
              src="https://storage.googleapis.com/a1aa/image/1b455fa1-5f53-45ba-3ae8-f4b932d8654c.jpg"
              alt="Buceador bajo agua con rayos de luz azulados"
              className="bottom-img"
              style={{ flex: "1 1 0", maxWidth: "33.3333%" }}
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/eec6375a-7bbc-4471-761e-23aaee690d9e.jpg"
              alt="Mujer de espaldas con chaqueta amarilla frente a una cascada"
              className="bottom-img"
              style={{ flex: "1 1 0", maxWidth: "33.3333%" }}
            />
            <img
              src="https://storage.googleapis.com/a1aa/image/4e5a57e4-7159-4f99-1804-53b56e010e79.jpg"
              alt="Vista aérea de un volcán con vehículos estacionados cerca"
              className="bottom-img"
              style={{ flex: "1 1 0", maxWidth: "33.3333%" }}
            />
          </div>
          <div className="col-lg-6">
            <h2 className="mb-3">
              ¿Tienes una idea?
              <br />
              Hagámosla visual
            </h2>
            <p className="text-strong mb-1">
              Además de viajar y producir en nuestro medio, creamos contenido
              audiovisual para empresas.
            </p>
            <p className="text-small mb-1">
              Nos especializamos en Lifestyle, Gastronomía y Turismo, trabajando
              desde el concepto hasta el paso de producción final, el resultado
              se difunde en redes.
            </p>
            <p className="text-small mb-4">
              Creamos contenido colectivo y/o productos (largometrajes de
              ficción y spots, con procesos realizados con actores y/o en
              animación, con un estudio o en un paisaje remoto).
            </p>
            <button type="button" className="btn-custom">
              ir a Welcome Studio
            </button>
          </div>
        </section>
      </main>
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

      {/* CDN de Bootstrap JS (opcional, si necesitas interactividad como modales, dropdowns, etc.) */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-KyZXEJ6Haq4fVXf7Xw7xvvczf8vcnfd8j5LfUAW5A3v5Xr8V1BvLMth82A1ZcYpG"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default Nosotros;
