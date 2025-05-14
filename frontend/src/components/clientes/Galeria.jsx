import React, { useState,  useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Galeria = () => {
  const [imagenes, setImagenes] = useState([]);
  const [pagina, setPagina] = useState(0);
  const [totalPaginas, setTotalPaginas] = useState(0);
  const tamañoPagina = 4;

  useEffect(() => {
    axios
      .get(
        `http://localhost:8080/api/imagenes?page=${pagina}&size=${tamañoPagina}`
      )
      .then((res) => {
        setImagenes(res.data.content);
        setTotalPaginas(res.data.totalPages);
      })
      .catch((err) => console.error("Error al cargar imágenes:", err));
  }, [pagina]);
  return (
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
              <div
                key={index}
                className="col-md-6 d-flex justify-content-center mb-4"
              >
                <div
                  className="border rounded-4 p-3 text-center"
                  style={{
                    width: "350px",
                    borderColor: "#313336",
                    borderWidth: "2px",
                  }}
                >
                  <img
                    src={`http://localhost:8080/images/${img.imagen}`}
                    alt={img.titulo}
                    className="img-fluid rounded-3 mb-3"
                    style={{
                      height: "200px",
                      objectFit: "cover",
                      width: "100%",
                    }}
                  />
                  <p
                    className="fw-bold mb-1 titulo-nosotros"
                    style={{ fontSize: "20px" }}
                  >
                    {img.titulo}
                  </p>
                  <p className="mb-1 p-nosotros" style={{ fontSize: "15px" }}>
                    {img.fecha}
                  </p>
                  <p className="mb-1 p-nosotros" style={{ fontSize: "15px" }}>
                    {img.ubicacion}
                  </p>
                  <div className="d-flex justify-content-center">
                    <div style={{ width: "170px", height: "170px" }}>
                      <iframe
                        src={`https://www.google.com/maps?q=${encodeURIComponent(
                          img.mapa
                        )}&output=embed`}
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
            onClick={() =>
              setPagina((prev) => Math.min(prev + 1, totalPaginas - 1))
            }
            disabled={pagina >= totalPaginas - 1}
          >
            Siguiente
          </button>
        </div>
      </div>
    </div>
  );
};

export default Galeria;
