import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Principal = () => {
  const [eventos, setEventos] = useState([]); // Lista completa de administradores
  const [eventos2, setEventos2] = useState([]); // Resultados de búsqueda
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [entriesPerPage] = useState(10); // Definido a 1 para mostrar solo 1 registro por página

  // Obtener admins desde la API (solo una vez al cargar la página)
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/eventos/obtener-eventos")
      .then((res) => {
        setEventos(res.data); // Guardamos todos los admins
        setEventos2(res.data); // Inicializamos admins2 con todos los admins
      })
      .catch((err) => {
        console.error("Error al obtener los eventos", err);
      });
  }, []); // Solo se ejecuta una vez cuando el componente se monta

  // Filtrar por searchTerm usando debounce
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      console.log("Buscando:", searchTerm); // Agrega esta línea para verificar el término de búsqueda

      if (searchTerm.trim() === "") {
        setEventos2(eventos); // Si no hay búsqueda, mostramos todos los admins
        return;
      }

      axios
        .get(`http://localhost:8080/api/eventos/buscar?input=${searchTerm}`)
        .then((res) => {
          console.log("Resultados de la búsqueda:", res.data); // Agrega esta línea para verificar los resultados de la búsqueda
          // Asegúrate de que res.data sea un array
          const data = Array.isArray(res.data) ? res.data : [res.data]; // Si es un solo objeto, lo convertimos en un array
          setEventos2(data); // Actualizamos admins2 con los resultados de búsqueda
        })
        .catch((err) => console.error(err));
    }, 300); // Espera 300ms tras el último cambio

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, eventos]); // Dependemos de `admins` solo cuando se inicializa, no en cada búsqueda

  // Cálculo de los registros para mostrar según la página actual
  const indexOfLastAdmin = currentPage * entriesPerPage;
  const indexOfFirstAdmin = indexOfLastAdmin - entriesPerPage;
  const currentAdmins = eventos2.slice(indexOfFirstAdmin, indexOfLastAdmin); // Slice para mostrar solo los admins de la página actual

  // Función para manejar el cambio de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Número total de páginas
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(eventos2.length / entriesPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Eliminar evento?",
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
          .delete(`http://localhost:8080/api/eventos/eliminar/${id}`)
          .then(() => {
            setEventos((prev) => prev.filter((evento) => evento.id !== id));
            setEventos2((prev) => prev.filter((evento) => evento.id !== id));

            Swal.fire(
              "Eliminado",
              "El evento ha sido eliminado correctamente.",
              "success"
            );
          })
          .catch((err) => {
            console.error("Error al eliminar:", err);
            Swal.fire("Error", "No se pudo eliminar el evento.", "error");
          });
      }
    });
  };

  const handleEdit = (eventoId) => {
    const evento = eventos.find((a) => a.id === eventoId);

    Swal.fire({
      title: "Editar evento",
      html:
        `<input id="nombre" class="swal2-input" placeholder="Nombre" value="${evento.nombre}">` +
        `<input id="fecha" type="date" class="swal2-input" value="${evento.fecha}">` +
        `<input id="hora" type="time" class="swal2-input" value="${evento.hora}">`,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: "Guardar",
      cancelButtonText: "Cancelar",
      preConfirm: () => {
        const nuevoNombre = document.getElementById("nombre").value;
        const nuevaFecha = document.getElementById("fecha").value;
        const nuevaHora = document.getElementById("hora").value;

        if (!nuevoNombre || !nuevaFecha || !nuevaHora) {
          Swal.showValidationMessage("Todos los campos son obligatorios");
          return false;
        }

        return { nuevoNombre, nuevaFecha, nuevaHora };
      },
    }).then((result) => {
      if (result.isConfirmed) {
        const { nuevoNombre, nuevaFecha, nuevaHora } = result.value;

        axios
          .put(
            `http://localhost:8080/api/eventos/editar/${eventoId}?nombre=${nuevoNombre}&fecha=${nuevaFecha}&hora=${nuevaHora}`
          )
          .then(() => {
            setEventos((prev) =>
              prev.map((a) =>
                a.id === eventoId
                  ? {
                      ...a,
                      nombre: nuevoNombre,
                      fecha: nuevaFecha,
                      hora: nuevaHora,
                    }
                  : a
              )
            );
            setEventos2((prev) =>
              prev.map((a) =>
                a.id === eventoId
                  ? {
                      ...a,
                      nombre: nuevoNombre,
                      fecha: nuevaFecha,
                      hora: nuevaHora,
                    }
                  : a
              )
            );
            Swal.fire(
              "Actualizado",
              "El evento ha sido actualizado.",
              "success"
            );
          })
          .catch(() => {
            Swal.fire("Error", "No se pudo actualizar el evento.", "error");
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
                <h4 className="page-title text-center">Listado de Eventos</h4>
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
                      Nombre
                    </th>
                    <th scope="col" className="text-start">
                      Fecha
                    </th>
                    <th scope="col" className="text-start">
                      Hora
                    </th>
                    <th scope="col" className="text-start">
                      Operaciones
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {currentAdmins.length > 0 ? (
                    currentAdmins.map((evento) => (
                      <tr key={evento.id}>
                        <td>{evento.id}</td>
                        <td>{evento.nombre}</td>
                        <td>{evento.fecha}</td>
                        <td>{evento.hora}</td>
                        <td>
                          <button
                            className="btn btn-warning btn-sm me-2"
                            onClick={() => handleEdit(evento.id)}
                          >
                            <i className="fas fa-pencil-alt"></i>
                          </button>
                          <button
                            className="btn btn-success btn-sm"
                            onClick={() => handleDelete(evento.id)}
                          >
                            <i className="fas fa-trash-alt"></i>
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan="2" className="text-center text-muted">
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
