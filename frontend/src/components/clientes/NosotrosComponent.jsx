import React, { useState } from "react";
import { Link } from "react-router-dom";

const NosotrosComponent = () => {
  return (
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
      </main>
  );
};

export default NosotrosComponent;