import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Crear = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // obtenemos el ID del notificacion desde la URL
  console.log("ID de la notificacion:", id);
  const [notificacion, setMensaje] = useState({}); // Inicializamos con un objeto vacío
  const [notificaciones, setNotificaciones] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Llamada a la API para obtener el notificacion
    axios
      .get(`http://localhost:8080/api/notificaciones/notificacion/${id}`)
      .then((res) => {
        setMensaje(res.data); // Guardamos los datos en el estado
        setLoading(false); // Los datos han sido cargados
      })
      .catch((err) => {
        setError("Error al obtener el notificacion.");
        setLoading(false); // Termina la carga aunque haya error
        console.error("Error al obtener el notificacion:", err);
      });
  }, [id]); // El efecto se ejecuta cuando cambia 'id'

  const marcarComoLeido = () => {
    axios
      .put(
        `http://localhost:8080/api/notificaciones/notificaciones/leido?id=${id}`
      )
      .then(() => {
        navigate("/notificaciones"); // Redirige tras marcar como leído
      })
      .catch((err) => {
        console.error("Error al marcar como leído:", err);
      });
  };

  const volver = () => {
    navigate("/notificaciones");
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
                <h4 className="page-title text-center">
                  Listado de Notificaciones
                </h4>
              </div>
            </div>
          </div>

          {/* Tabla */}
          <div className="container-fluid p-3">
            <div
              style={{
                maxWidth: "700px",
                margin: "2rem auto",
                padding: "2rem",
                backgroundColor: "#f8f9fa",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0,0,0,0.1)",
              }}
            >
              <h4
                style={{
                  marginBottom: "1rem",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <div>
                  <strong>
                    {notificacion.cliente
                      ? `${notificacion.cliente.nombre} ${notificacion.cliente.apellidos}`
                      : "Sin datos"}
                  </strong>{" "}
                  <span style={{ color: "#6c757d", fontSize: "0.9rem" }}>
                    &lt;
                    {notificacion.cliente
                      ? `${notificacion.cliente.usuario.email}`
                      : "Sin datos"}
                    &gt;
                  </span>
                </div>
                <span
                  style={{
                    marginLeft: "auto",
                    color: "#6c757d",
                    fontSize: "0.9rem",
                  }}
                >
                  {notificacion.fecha}
                </span>
              </h4>

              <p
                style={{
                  whiteSpace: "pre-wrap",
                  wordBreak: "break-word",
                  overflowWrap: "break-word",
                  marginBottom: "2rem",
                }}
              >
                {notificacion.tipo === "resena"
                  ? "Reseña"
                  : notificacion.tipo === "reserva"
                  ? "Reserva"
                  : notificacion.tipo === "like"
                  ? "Like"
                  : notificacion.tipo}
              </p>

              <div style={{ display: "flex", gap: "1rem" }}>
                {!notificacion.read && (
                  <button className="btn btn-primary" onClick={marcarComoLeido}>
                    Marcar como leído
                  </button>
                )}
                <button className="btn btn-secondary" onClick={volver}>
                  Volver
                </button>
              </div>
            </div>
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
