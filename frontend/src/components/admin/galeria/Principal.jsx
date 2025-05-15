import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const Principal = () => {
  const [images, setImages] = useState([]); // Lista completa de imágenes
  const [filteredImages, setFilteredImages] = useState([]); // Resultados de búsqueda
  const [searchTerm, setSearchTerm] = useState(""); // Término de búsqueda
  const [currentPage, setCurrentPage] = useState(1); // Página actual
  const [entriesPerPage] = useState(10); // Cantidad de imágenes por página

  // Estado para el modal de edición
  const [showModal, setShowModal] = useState(false);
  const [editData, setEditData] = useState({
    id: null,
    titulo: "",
    fecha: "",
    ubicacion: "",
    mapa: "",
    imagenFile: null,
    imagenUrl: "",
  });

  // Obtener imágenes desde la API (solo al cargar)
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/imagenes/obtener-galeria") // Cambia a tu endpoint real
      .then((res) => {
        setImages(res.data);
        setFilteredImages(res.data);
      })
      .catch((err) => {
        console.error("Error al obtener imágenes", err);
      });
  }, []);

  // Búsqueda con debounce
  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      if (searchTerm.trim() === "") {
        setFilteredImages(images);
        return;
      }
      axios
        .get(`http://localhost:8080/api/galeria/buscar?query=${searchTerm}`) // Cambia a tu endpoint real
        .then((res) => {
          const data = Array.isArray(res.data) ? res.data : [res.data];
          setFilteredImages(data);
          setCurrentPage(1); // Reiniciar página en nueva búsqueda
        })
        .catch((err) => console.error(err));
    }, 300);

    return () => clearTimeout(delayDebounce);
  }, [searchTerm, images]);

  // Paginación
  const indexOfLastImage = currentPage * entriesPerPage;
  const indexOfFirstImage = indexOfLastImage - entriesPerPage;
  const currentImages = filteredImages.slice(indexOfFirstImage, indexOfLastImage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(filteredImages.length / entriesPerPage); i++) {
    pageNumbers.push(i);
  }

  // Función para eliminar imagen
  const handleDelete = (id) => {
    Swal.fire({
      title: "¿Eliminar imagen?",
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
          .delete(`http://localhost:8080/api/galeria/eliminar/${id}`)
          .then(() => {
            setImages((prev) => prev.filter((img) => img.id !== id));
            setFilteredImages((prev) => prev.filter((img) => img.id !== id));
            Swal.fire("Eliminado", "La imagen ha sido eliminada.", "success");
          })
          .catch(() => {
            Swal.fire("Error", "No se pudo eliminar la imagen.", "error");
          });
      }
    });
  };

  // Función para abrir modal y cargar datos a editar
  const openEditModal = (img) => {
    setEditData({
      id: img.id,
      titulo: img.titulo,
      fecha: img.fecha,
      ubicacion: img.ubicacion,
      mapa: img.mapa,
      imagenFile: null,
      imagenUrl: `http://localhost:8080/images/${img.imagen}`,
    });
    setShowModal(true);
  };

  // Manejo de inputs del formulario de edición
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData((prev) => ({ ...prev, [name]: value }));
  };

  // Manejo del input de archivo imagen
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setEditData((prev) => ({
        ...prev,
        imagenFile: file,
        imagenUrl: URL.createObjectURL(file),
      }));
    }
  };

  // Guardar cambios de edición
  const handleSaveEdit = () => {
    if (!editData.titulo.trim()) {
      Swal.fire("Error", "El título es obligatorio", "error");
      return;
    }

    const formData = new FormData();
    formData.append("titulo", editData.titulo);
    formData.append("fecha", editData.fecha);
    formData.append("ubicacion", editData.ubicacion);
    formData.append("mapa", editData.mapa);
    if (editData.imagenFile) {
      formData.append("imagen", editData.imagenFile);
    }

    axios
      .put(`http://localhost:8080/api/galeria/editar/${editData.id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((res) => {
        setImages((prev) =>
          prev.map((img) =>
            img.id === editData.id
              ? {
                  ...img,
                  titulo: editData.titulo,
                  fecha: editData.fecha,
                  ubicacion: editData.ubicacion,
                  mapa: editData.mapa,
                  imagen: editData.imagenFile ? res.data.imagen : img.imagen,
                }
              : img
          )
        );
        setFilteredImages((prev) =>
          prev.map((img) =>
            img.id === editData.id
              ? {
                  ...img,
                  titulo: editData.titulo,
                  fecha: editData.fecha,
                  ubicacion: editData.ubicacion,
                  mapa: editData.mapa,
                  imagen: editData.imagenFile ? res.data.imagen : img.imagen,
                }
              : img
          )
        );
        Swal.fire("Guardado", "La imagen ha sido actualizada.", "success");
        setShowModal(false);
      })
      .catch(() => {
        Swal.fire("Error", "No se pudo actualizar la imagen.", "error");
      });
  };

  return (
    <div className="content-page">
      <div className="content">
        <div className="container-fluid">
          <h4 className="page-title text-center">Galería de Imágenes</h4>

          <div className="d-flex justify-content-end mb-3">
            <input
              type="search"
              className="form-control form-control-sm"
              style={{ width: 200 }}
              placeholder="Buscar..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="table-responsive">
            <table className="table table-sm align-middle mb-0 bordered-table">
              <thead>
                <tr className="text-secondary text-nowrap">
                  <th>ID</th>
                  <th>Imagen</th>
                  <th>Título</th>
                  <th>Fecha</th>
                  <th>Ubicación</th>
                  <th>Mapa</th>
                  <th>Operaciones</th>
                </tr>
              </thead>
              <tbody>
                {currentImages.length > 0 ? (
                  currentImages.map((img) => (
                    <tr key={img.id}>
                      <td>{img.id}</td>
                      <td>
                        <img
                          src={`http://localhost:8080/images/${img.imagen}`}
                          alt={img.titulo}
                          style={{ width: 80, height: 50, objectFit: "cover" }}
                        />
                      </td>
                      <td>{img.titulo}</td>
                      <td>{img.fecha}</td>
                      <td>{img.ubicacion}</td>
                      <td>{img.mapa}</td>
                      <td>
                        <button
                          className="btn btn-warning btn-sm me-2"
                          onClick={() => openEditModal(img)}
                          title="Editar"
                        >
                          <i className="fas fa-pencil-alt"></i>
                        </button>
                        <button
                          className="btn btn-danger btn-sm"
                          onClick={() => handleDelete(img.id)}
                          title="Eliminar"
                        >
                          <i className="fas fa-trash-alt"></i>
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="7" className="text-center text-muted">
                      No se encontraron resultados.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>

          {/* Paginación */}
          <nav aria-label="Page navigation">
            <ul className="pagination justify-content-center mt-3">
              <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                >
                  &laquo;
                </button>
              </li>
              {pageNumbers.map((num) => (
                <li
                  key={num}
                  className={`page-item ${num === currentPage ? "active" : ""}`}
                >
                  <button className="page-link" onClick={() => paginate(num)}>
                    {num}
                  </button>
                </li>
              ))}
              <li
                className={`page-item ${
                  currentPage === pageNumbers.length ? "disabled" : ""
                }`}
              >
                <button
                  className="page-link"
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage === pageNumbers.length}
                >
                  &raquo;
                </button>
              </li>
            </ul>
          </nav>

          {/* Modal edición */}
          {showModal && (
            <div
              className="modal fade show d-block"
              tabIndex="-1"
              role="dialog"
              aria-modal="true"
              style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            >
              <div className="modal-dialog">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title">Editar Imagen</h5>
                    <button
                      type="button"
                      className="btn-close"
                      onClick={() => setShowModal(false)}
                    ></button>
                  </div>
                  <div className="modal-body">
                    <form>
                      <div className="mb-3">
                        <label className="form-label">Título</label>
                        <input
                          type="text"
                          name="titulo"
                          className="form-control"
                          value={editData.titulo}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Fecha</label>
                        <input
                          type="date"
                          name="fecha"
                          className="form-control"
                          value={editData.fecha}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Ubicación</label>
                        <input
                          type="text"
                          name="ubicacion"
                          className="form-control"
                          value={editData.ubicacion}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Mapa</label>
                        <input
                          type="text"
                          name="mapa"
                          className="form-control"
                          value={editData.mapa}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="mb-3">
                        <label className="form-label">Imagen</label>
                        <input
                          type="file"
                          accept="image/*"
                          className="form-control"
                          onChange={handleFileChange}
                        />
                        {editData.imagenUrl && (
                          <img
                            src={editData.imagenUrl}
                            alt="Previsualización"
                            style={{ marginTop: "10px", maxWidth: "100px", height: "100px" }}
                          />
                        )}
                      </div>
                    </form>
                  </div>
                  <div className="modal-footer">
                    <button
                      className="btn btn-secondary"
                      onClick={() => setShowModal(false)}
                    >
                      Cancelar
                    </button>
                    <button className="btn btn-primary" onClick={handleSaveEdit}>
                      Guardar
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Principal;
