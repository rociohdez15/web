import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Crear = () => {
  const [nombre, setNombre] = useState("");
  const [fecha, setFecha] = useState("");
  const [hora, setHora] = useState("");
  const [error2, setError2] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validación básica
    if (!nombre || !fecha || !hora) {
      Swal.fire({
        icon: "error",
        title: "Campos requeridos",
        text: "Por favor, completa todos los campos.",
        confirmButtonColor: "#d33",
      });
      return;
    }

    const params = new URLSearchParams();
    params.append("nombre", nombre);
    params.append("fecha", fecha);
    params.append("hora", hora);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/eventos/crear-evento",
        params,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Evento creado",
          text: `El evento "${nombre}" fue creado correctamente.`,
          confirmButtonColor: "#28a745",
        });

        // Limpiar campos
        setNombre("");
        setFecha("");
        setHora("");
      }
    } catch (err) {
      console.error("Error al crear el evento:", err);
      let mensaje = "Hubo un problema al crear el evento.";

      if (err.response?.status === 409) {
        mensaje = err.response.data;
      }

      Swal.fire({
        icon: "error",
        title: "Error",
        text: mensaje,
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="content-page">
      <div className="content">
        {/* Start Content*/}
        <div className="container-fluid">
          {/* start page title */}
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <h4 className="page-title text-center">Crear Evento</h4>
              </div>
            </div>
          </div>

          {/* Tabla */}

          <div className="bg-white p-5 rounded-5 shadow-lg col-12 col-md-8 col-lg-6 mx-auto">
            {error2 && (
              <div className="alert alert-danger p-nosotros">{error2}</div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label p-nosotros" htmlFor="nombre">
                  Nombre del evento
                </label>
                <input
                  className="form-control"
                  id="nombre"
                  type="text"
                  value={nombre}
                  onChange={(e) => setNombre(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label p-nosotros" htmlFor="fecha">
                  Fecha
                </label>
                <input
                  className="form-control"
                  id="fecha"
                  type="date"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label p-nosotros" htmlFor="hora">
                  Hora
                </label>
                <input
                  className="form-control"
                  id="hora"
                  type="time"
                  value={hora}
                  onChange={(e) => setHora(e.target.value)}
                  required
                />
              </div>

              <button
                className="btn btn-success w-100 p-nosotros mt-3"
                type="submit"
              >
                Crear evento
              </button>
            </form>
          </div>
        </div>
        {/* container */}
      </div>
      {/* content */}
      {/* Footer Start */}
      <footer className="footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12 text-center">2025 © Atalanta</div>
          </div>
        </div>
      </footer>
      {/* end Footer */}
    </div>
  );
};

export default Crear;
