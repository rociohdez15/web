import React, { useState } from "react";
import { Link } from "react-router-dom";

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

      <section
        className="skrollable skrollable-between u-align-center u-clearfix u-image u-shading u-section-1"
        id="sec-0609"
        data-image-width={1980}
        data-image-height={1131}
      >
        <div className="container-fluid d-flex justify-content-center align-items-center u-clearfix u-sheet u-valign-middle">
          <div className="text-center">
            <h1
              className="u-text u-text-default u-text-1 titulo-nosotros"
              data-animation-name="customAnimationIn"
              data-animation-duration={1500}
              data-animation-delay={250}
            >
              Haz de cada aventura, una historia que contar
            </h1>
            <p
              className="u-large-text u-text u-text-variant u-text-2 p-nosotros"
              data-animation-name="customAnimationIn"
              data-animation-duration={1500}
              data-animation-delay={250}
              style={{ marginBottom: "0.2rem" }} // Reducido el margen inferior
            >
              Viaja con la seguridad de quienes conocen el camino&nbsp;
            </p>
            <p
              className="u-large-text u-text u-text-variant u-text-2 p-nosotros"
              data-animation-name="customAnimationIn"
              data-animation-duration={1500}
              data-animation-delay={250}
              style={{ marginTop: "0.2rem" }} // Reducido el margen superior
            >
              Descúbrelo&nbsp;
            </p>

            <br></br>
            <div className="d-flex justify-content-center">
              <div className="row row-cols-1 row-cols-md-4 g-4">
                {/* Repeater Items */}
                <div className="col d-flex justify-content-center">
                  <Link
                    to="/nosotros"
                    className="btn botones-inicio btn-secondary py-3 px-6 border-4 border-white fs-4 d-flex flex-column align-items-center"
                  >
                    <span className="u-align-center u-file-icon u-icon u-text-white u-icon-3">
                      <i className="fa-solid fa-users fa-2x"></i>
                    </span>
                    <span className="u-align-center u-custom-font u-text p-nosotros u-text-5 mb-3 text-white">
                      <strong>Nosotros</strong>
                    </span>
                  </Link>
                </div>
                <div className="col d-flex justify-content-center">
                  <Link
                    to="/experiencias"
                    className="btn botones-inicio btn-secondary py-3 px-6 border-4 border-white fs-4 d-flex flex-column align-items-center"
                  >
                    <span className="u-align-center u-file-icon u-icon u-text-white u-icon-3 mt-3">
                      <i className="fa-solid fa-earth-americas fa-2x"></i>
                    </span>
                    <span className="u-align-center u-custom-font u-text p-nosotros u-text-5 mb-3 text-white">
                      <strong>Experincias</strong>
                    </span>
                  </Link>
                </div>
                <div className="col d-flex justify-content-center align-items-center text-center">
                  <Link
                    to="/blog"
                    className="btn botones-inicio btn-secondary py-3 px-6 border-4 border-white fs-4 d-flex flex-column align-items-center"
                  >
                    <span className="u-align-center u-file-icon u-icon u-text-white u-icon-3 mt-3">
                      <i className="fa-solid fa-pencil fa-2x"></i>
                    </span>
                    <span className="u-align-center u-custom-font u-text p-nosotros u-text-5 mb-3 text-white">
                      <strong>Blog</strong>
                    </span>
                  </Link>
                </div>
                <div className="col d-flex justify-content-center">
                  <Link
                    to="/galeria"
                    className="btn botones-inicio btn-secondary py-3 px-6 border-4 border-white fs-4 d-flex flex-column align-items-center"
                  >
                    <span className="u-align-center u-file-icon u-icon u-text-white u-icon-3 mt-3">
                      <i className="fa-solid fa-photo-film fa-2x"></i>
                    </span>
                    <span className="u-align-center u-custom-font u-text p-nosotros u-text-5 mb-3 text-white">
                      <strong>Galería</strong>
                    </span>
                  </Link>
                </div>
              </div>
            </div>

            <div className="d-flex justify-content-center gap-3 mt-4">
              <div>
                <Link
                  to="/experiencias"
                  className="u-active-white p-nosotros u-border-2 u-border-white u-btn u-btn-round u-button-style u-hover-white u-none u-radius-50 u-text-active-black u-text-hover-black u-btn-2"
                >
                  Reservar Ahora
                </Link>
              </div>
            </div>
          </div>
        </div>

        <br></br>

        <br></br>
      </section>

      <section
        className="u-clearfix u-container-align-center u-section-2"
        id="sec-d117"
      >
        <div className="container py-5">
          <div className="row align-items-center justify-content-center">
            {/* Imagen */}
            <div className="col-12 col-md-6 d-flex justify-content-center mb-4 mb-md-0">
              <img
                alt="Sobre Nosotros"
                className="img-fluid custom-border rounded-image imagen-redonda"
                src="images/e4.jpg"
                data-image-width={740}
                data-image-height={1110}
              />
            </div>

            {/* Texto */}
            <div className="col-12 col-md-6 text-center text-md-start">
              <h2 className="u-text u-text-1 texto-1 titulo-nosotros">
                Sobre Nosotros
              </h2>
              <p className="u-text u-text-2 p-nosotros">
                En Atalanta creamos aventuras más allá de lo convencional.
                Nuestros viajes tienen una conexión directa con el lugar y con
                su gente. Valoramos la dedicación al 100% y hacemos que cada
                detalle cuente. Por eso el objetivo no es solo llevarte a nuevos
                destinos, sino que tu viaje se convierta en una experiencia
                enriquecedora antes, durante y después de realizarlo. ¿TE
                ATREVES A VIVIRLO?
              </p>
              <br></br>
              <Link
                to="/nosotros"
                className="btn btn-primary rounded-pill p-nosotros"
              >
                Saber Más
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="u-align-center u-clearfix u-container-align-center u-palette-2-base u-section-3"
        id="sec-4bf5"
      >
        <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
          <h2
            className="text-center u-text u-text-default u-text-1 titulo-nosotros"
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={0}
          >
            Find your next getaway
          </h2>
          <p
            className="text-center u-text texto2 p-nosotros"
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={250}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="container py-5">
            <div className="row">
              {/* Card 1 */}
              <div className="col-12 col-md-4 mb-4">
                <div className="card position-relative">
                  <img
                    alt="RV camping with a white camper van in a forest setting"
                    className="card-img-top"
                    src="https://storage.googleapis.com/a1aa/image/Xwnbcc0VwAim7ib4uM7_HnkgN-Il11uVY6c-5gY-Ilk.jpg"
                  />
                  <div className="card-img-overlay d-flex flex-column justify-content-end">
                    <div
                      className="bg-dark bg-opacity-50 p-3"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                      }}
                    >
                      <h5 className="card-title titulo-nosotros2">
                        Best RV camping
                      </h5>
                      <p className="card-text p-nosotros">
                        Sample text. Click to select the Text Element.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="col-12 col-md-4 mb-4">
                <div className="card position-relative">
                  <img
                    alt="Person camping by a lake with a tent and camping gear"
                    className="card-img-top"
                    src="https://storage.googleapis.com/a1aa/image/tJ6FDfTlVTSIIA0N17jFgIkrTd3WRNbyEl8cWrMkx_Q.jpg"
                  />
                  <div className="card-img-overlay d-flex flex-column justify-content-end">
                    <div
                      className="bg-dark bg-opacity-50 p-3"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                      }}
                    >
                      <h5 className="card-title titulo-nosotros2">
                        Lake camping
                      </h5>
                      <p className="card-text p-nosotros">
                        Sample text. Click to select the Text Element.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="col-12 col-md-4 mb-4">
                <div className="card position-relative">
                  <img
                    alt="Person reading a book on a beach with camping gear"
                    className="card-img-top"
                    src="https://storage.googleapis.com/a1aa/image/9zr58Zb3EsJpqnn8MH8t9VOy__fXtlmDrmmNEcj4opM.jpg"
                  />
                  <div className="card-img-overlay d-flex flex-column justify-content-end">
                    <div
                      className="bg-dark bg-opacity-50 p-3"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                      }}
                    >
                      <h5 className="card-title titulo-nosotros2">
                        Beach stays
                      </h5>
                      <p className="card-text p-nosotros">
                        Sample text. Click to select the Text Element.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="u-clearfix u-container-align-left u-image u-shading u-section-4"
        id="sec-5cb4"
        data-image-width={1380}
        data-image-height={920}
      >
        <div className="u-clearfix u-sheet u-valign-middle u-sheet-1">
          <h2
            className="u-align-left u-text u-text-default u-text-1 titulo-nosotros"
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={500}
          >
            Plan Your Camping Trip
          </h2>
          <ul
            className="u-align-left u-custom-list u-file-icon u-large-text u-text u-text-body-alt-color u-text-variant u-text-2"
            data-animation-name="customAnimationIn"
            data-animation-duration={1250}
            data-animation-delay={500}
          >
            <li style={{ paddingLeft: "11px" }} className="p-nosotros">
              <div className="u-list-icon u-text-palette-2-base">
                <svg
                  className="u-svg-content"
                  viewBox="0 0 512 512"
                  id="svg-acb8"
                  style={{ fontSize: "0.9em", margin: "-0.9em" }}
                >
                  <path
                    d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              Lorem ipsum dolor sit amet
            </li>
            <li style={{ paddingLeft: "11px" }} className="p-nosotros">
              <div className="u-list-icon u-text-palette-2-base">
                <svg
                  className="u-svg-content"
                  viewBox="0 0 512 512"
                  id="svg-acb8"
                  style={{ fontSize: "0.9em", margin: "-0.9em" }}
                >
                  <path
                    d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              Ut enim ad minim veniam
            </li>
            <li style={{ paddingLeft: "11px" }} className="p-nosotros">
              <div className="u-list-icon u-text-palette-2-base">
                <svg
                  className="u-svg-content"
                  viewBox="0 0 512 512"
                  id="svg-acb8"
                  style={{ fontSize: "0.9em", margin: "-0.9em" }}
                >
                  <path
                    d="m202.6 478-202.6-186.6 70.5-76.6 121.5 111.9 239.4-292.7 80.6 65.9z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              Excepteur sint occaecat cupidatat
            </li>
          </ul>
          <Link
            to="/experiencias"
            className="u-align-left u-border-2 p-nosotros u-border-palette-2-base u-btn u-btn-round u-button-style u-palette-2-base u-radius-50 u-btn-2"
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={500}
          >
            Book now
          </Link>
        </div>
      </section>
      <section
        className="u-align-center u-clearfix u-container-align-center u-section-5"
        id="sec-55f1"
      >
        <div className="u-clearfix u-sheet u-valign-middle-lg u-valign-middle-md u-valign-middle-sm u-valign-middle-xs u-sheet-1">
          <h2
            className="u-align-center u-text u-text-1 titulo-nosotros"
            data-animation-name="customAnimationIn"
            data-animation-duration={1500}
            data-animation-delay={250}
          >
            How to plan a camping trip
          </h2>
          <div className="u-clearfix u-expanded-width u-gutter-0 u-layout-wrap u-layout-wrap-1">
            <div className="u-gutter-0 u-layout">
              <div className="u-layout-col">
                <div className="u-size-30">
                  <div className="u-layout-row">
                    <div className="u-align-center u-container-align-center u-container-style u-layout-cell u-size-15 u-layout-cell-1">
                      <div className="u-container-layout u-valign-middle u-container-layout-1">
                        <div
                          className="u-image u-image-circle u-preserve-proportions u-image-1"
                          data-image-width={732}
                          data-image-height={754}
                          data-animation-name="customAnimationIn"
                          data-animation-duration={1500}
                        />
                      </div>
                    </div>
                    <div
                      className="u-align-left u-container-align-left u-container-style u-layout-cell u-size-15 u-layout-cell-2"
                      data-animation-name="customAnimationIn"
                      data-animation-duration={1500}
                      data-animation-delay={0}
                      data-animation-direction
                    >
                      <div className="u-container-layout u-valign-middle u-container-layout-2">
                        <h5 className="u-align-left u-text u-text-2 titulo-nosotros2">
                          Know Your Limits
                        </h5>
                        <p className="u-align-left u-text u-text-3 p-nosotros">
                          Sample text. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit nullam nunc justo sagittis suscipit
                          ultrices.
                        </p>
                      </div>
                    </div>
                    <div
                      className="u-align-center u-container-align-center u-container-style u-layout-cell u-size-15 u-layout-cell-3"
                      data-animation-name
                      data-animation-duration={0}
                      data-animation-delay={0}
                      data-animation-direction
                    >
                      <div className="u-container-layout u-valign-middle u-container-layout-3">
                        <div
                          className="u-image u-image-circle u-preserve-proportions u-image-2"
                          data-image-width={803}
                          data-image-height={803}
                          data-animation-name="customAnimationIn"
                          data-animation-duration={1500}
                        />
                      </div>
                    </div>
                    <div
                      className="u-align-left u-container-align-left u-container-style u-layout-cell u-size-15 u-layout-cell-4"
                      data-animation-name="customAnimationIn"
                      data-animation-duration={1500}
                      data-animation-delay={0}
                      data-animation-direction
                    >
                      <div className="u-container-layout u-valign-middle u-container-layout-4">
                        <h5 className="u-align-left u-text u-text-4 titulo-nosotros2">
                          Prepare – Gear Up!
                        </h5>
                        <p className="u-align-left u-text u-text-5 p-nosotros">
                          Sample text. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit nullam nunc justo sagittis suscipit
                          ultrices.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="u-size-30">
                  <div className="u-layout-row">
                    <div
                      className="u-align-left u-container-align-left u-container-style u-layout-cell u-size-15 u-layout-cell-5"
                      data-animation-name="customAnimationIn"
                      data-animation-duration={1500}
                    >
                      <div className="u-container-layout u-valign-middle u-container-layout-5">
                        <h5 className="u-align-left u-text u-text-6 titulo-nosotros2">
                          Plan Your Trip
                        </h5>
                        <p className="u-align-left u-text u-text-7 p-nosotros">
                          Sample text. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit nullam nunc justo sagittis suscipit
                          ultrices.
                        </p>
                      </div>
                    </div>
                    <div
                      className="u-align-center u-container-align-center u-container-align-center-sm u-container-align-center-xs u-container-align-left-lg u-container-align-left-md u-container-align-left-xl u-container-style u-layout-cell u-size-15 u-layout-cell-6"
                      data-animation-name
                      data-animation-duration={0}
                      data-animation-delay={0}
                      data-animation-direction
                    >
                      <div className="u-container-layout u-valign-middle u-container-layout-6">
                        <div
                          className="u-image u-image-circle u-preserve-proportions u-image-3"
                          data-image-width={700}
                          data-image-height={652}
                          data-animation-name="customAnimationIn"
                          data-animation-duration={1500}
                        />
                      </div>
                    </div>
                    <div
                      className="u-align-left u-container-align-left u-container-style u-layout-cell u-size-15 u-layout-cell-7"
                      data-animation-name="customAnimationIn"
                      data-animation-duration={1500}
                      data-animation-delay={0}
                      data-animation-direction
                    >
                      <div className="u-container-layout u-valign-middle u-container-layout-7">
                        <h5 className="u-align-left u-text u-text-8 titulo-nosotros2">
                          In Case of Emergency
                        </h5>
                        <p className="u-align-left u-text u-text-9 p-nosotros">
                          Sample text. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit nullam nunc justo sagittis suscipit
                          ultrices.
                        </p>
                      </div>
                    </div>
                    <div
                      className="u-align-center u-container-align-center u-container-style u-layout-cell u-size-15 u-layout-cell-8"
                      data-animation-name
                      data-animation-duration={0}
                      data-animation-delay={0}
                      data-animation-direction
                    >
                      <div className="u-container-layout u-valign-middle u-container-layout-8">
                        <div
                          className="u-image u-image-circle u-image-4"
                          data-image-width={700}
                          data-image-height={652}
                          data-animation-name="customAnimationIn"
                          data-animation-duration={1500}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
