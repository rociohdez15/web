import React, { useState } from "react";
import { Link } from "react-router-dom";

const Seccion2 = () => {
  return (
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
              Nuestros viajes tienen una conexión directa con el lugar y con su
              gente. Valoramos la dedicación al 100% y hacemos que cada detalle
              cuente. Por eso el objetivo no es solo llevarte a nuevos destinos,
              sino que tu viaje se convierta en una experiencia enriquecedora
              antes, durante y después de realizarlo. ¿TE ATREVES A VIVIRLO?
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
  );
};

export default Seccion2;
