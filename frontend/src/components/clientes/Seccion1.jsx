import React, { useState } from "react";
import { Link } from "react-router-dom";

const Seccion1 = () => {
  return (
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
  );
};

export default Seccion1;
