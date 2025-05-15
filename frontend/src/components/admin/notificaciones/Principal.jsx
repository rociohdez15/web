import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Principal = () => {
  const navigate = useNavigate();

  const handleRowClick = (id) => {
    navigate(`/notificacion/${id}`);
  };

  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [entriesPerPage] = useState(10); // Número de registros por página

  // Inicialización
  const [notificaciones, setNotificaciones] = useState([]); // Lista original
  const [notificacionesFiltradas, setNotificacionesFiltradas] = useState([]); // Lista visible (filtrada)
  const [searchTerm, setSearchTerm] = useState("");

  // Al cargar los notificaciones
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/notificaciones/obtener-notificaciones")
      .then((res) => {
        setNotificaciones(res.data); // Guardamos todos los notificaciones originales
        setNotificacionesFiltradas(res.data); // Mostramos todos al principio
      })
      .catch((err) => {
        console.error("Error al obtener los notificaciones", err);
      });
  }, []);

  // Efecto de búsqueda
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setNotificacionesFiltradas(notificaciones); // Restaurar todos los notificaciones
        return;
      }

      axios
        .get(
          `http://localhost:8080/api/notificaciones/notificaciones/buscar?input=${searchTerm}`
        )
        .then((res) => {
          const data = Array.isArray(res.data) ? res.data : [res.data];
          setNotificacionesFiltradas(data); // Actualizar la lista visible
        })
        .catch((err) => console.error(err));
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, notificaciones]); // Asegúrate de tener notificaciones como dependencia por si cambia

  // Cálculo de los registros para mostrar según la página actual
  const indexOfLastAdmin = currentPage * entriesPerPage;
  const indexOfFirstAdmin = indexOfLastAdmin - entriesPerPage;
  const currentAdmins = notificacionesFiltradas.slice(
    indexOfFirstAdmin,
    indexOfLastAdmin
  ); // Slice para mostrar solo los admins de la página actual

  // Función para manejar el cambio de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Número total de páginas
  const pageNumbers = [];
  for (
    let i = 1;
    i <= Math.ceil(notificacionesFiltradas.length / entriesPerPage);
    i++
  ) {
    pageNumbers.push(i);
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Eliminar notificacion?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`http://localhost:8080/api/notificaciones/eliminar/${id}`)
          .then(() => {
            setNotificaciones((prev) =>
              prev.filter((admin) => admin.id !== id)
            );
            setNotificacionesFiltradas((prev) =>
              prev.filter((admin) => admin.id !== id)
            );

            Swal.fire(
              "Eliminada",
              "La notificacion ha sido eliminada correctamente.",
              "success"
            );
          })
          .catch((err) => {
            console.error("Error al eliminar:", err);
            Swal.fire("Error", "No se pudo eliminar el notificacion.", "error");
          });
      }
    });
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
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-3">
              <div className="d-flex align-items-center mb-2 mb-md-0"></div>
              <div className="d-flex align-items-center">
                <label htmlFor="searchInput" className="me-2 mb-0">
                  Buscar:
                </label>
                <input
                  id="searchInput"
                  type="search"
                  className="form-control form-control-sm"
                  style={{ width: 150 }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="table-responsive">
              <table className="table table-sm align-middle mb-0 bordered-table">
                <thead>
                  <tr className="text-secondary text-nowrap">
                    <th scope="col" className="text-start">
                      ID
                    </th>
                    <th scope="col" className="text-start">
                      Tipo
                    </th>
                    <th scope="col" className="text-start">
                      Cliente
                    </th>
                    <th scope="col" className="text-start">
                      Fecha
                    </th>
                    <th scope="col" className="text-start">
                      Leído
                    </th>
                    <th scope="col" className="text-start">
                      Operaciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentAdmins.length > 0 ? (
                    currentAdmins.map((notificacion) => (
                      <tr
                        key={notificacion.id}
                        onClick={() => handleRowClick(notificacion.id)}
                        style={{
                          cursor: "pointer",
                          position: "relative",
                          backgroundColor: notificacion.read
                            ? "transparent"
                            : "#f2f2f2",
                        }}
                      >
                        <td
                          style={{
                            paddingLeft: "25px",
                            position: "relative",
                          }}
                        >
                          <span
                            style={{
                              position: "absolute",
                              left: "10px",
                              top: "50%",
                              transform: "translateY(-50%)",
                              width: "8px",
                              height: "8px",
                              backgroundColor: !notificacion.read
                                ? "#007bff"
                                : "#ccc",
                              borderRadius: "50%",
                            }}
                          />
                          {notificacion.id}
                        </td>
                        <td>
                          {notificacion.tipo === "resena"
                            ? "Reseña"
                            : notificacion.tipo === "reserva"
                            ? "Reserva"
                            : notificacion.tipo === "like"
                            ? "Like"
                            : notificacion.tipo}
                        </td>
                        <td>
                          {notificacion.cliente
                            ? `${notificacion.cliente.nombre} ${notificacion.cliente.apellidos}`
                            : "Sin datos"}
                        </td>
                        <td>{notificacion.fecha}</td>
                        <td>{notificacion.read ? "Sí" : "No"}</td>
                        <td>
                          <button
                            className="btn btn-success btn-sm"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDelete(notificacion.id);
                            }}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="8" className="text-center text-muted">
                        No se encontraron resultados.
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div
              className="d-flex justify-content-center align-items-center mt-3 text-secondary"
              style={{ fontSize: "0.75rem" }}
            >
              {/* Paginación */}
              <nav aria-label="Page navigation example">
                <ul className="pagination mb-0">
                  <li className="page-item">
                    <button
                      className="page-link"
                      aria-label="Previous"
                      onClick={() => setCurrentPage(currentPage - 1)}
                      disabled={currentPage === 1}
                    >
                      <i className="fas fa-chevron-left" />
                    </button>
                  </li>
                  {pageNumbers.map((number) => (
                    <li
                      key={number}
                      className={`page-item ${
                        number === currentPage ? "active" : ""
                      }`}
                    >
                      <button
                        className="page-link"
                        onClick={() => paginate(number)}
                      >
                        {number}
                      </button>
                    </li>
                  ))}
                  <li className="page-item">
                    <button
                      className="page-link"
                      aria-label="Next"
                      onClick={() => setCurrentPage(currentPage + 1)}
                      disabled={currentPage === pageNumbers.length}
                    >
                      <i className="fas fa-chevron-right" />
                    </button>
                  </li>
                </ul>
              </nav>
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

export default Principal;
