import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const CrearImagen = () => {
  const [titulo, setTitulo] = useState("");
  const [imagen, setImagen] = useState(null);
  const [preview, setPreview] = useState(null);
  const [fecha, setFecha] = useState("");
  const [ubicacion, setUbicacion] = useState("");
  const [mapa, setMapa] = useState("");
  const [error, setError] = useState("");

  const handleImagenChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (!file.type.startsWith("image/")) {
        setError("Por favor, selecciona un archivo de imagen válido.");
        setImagen(null);
        setPreview(null);
        return;
      }

      setError("");
      setImagen(file);
      setPreview(URL.createObjectURL(file));
    } else {
      setImagen(null);
      setPreview(null);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!titulo.trim() || !imagen || !fecha || !ubicacion || !mapa ) {
      setError("Todos los campos son obligatorios.");
      return;
    }

    setError("");

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("imagen", imagen);
    formData.append("fecha", fecha);
    formData.append("ubicacion", ubicacion);
    formData.append("mapa", mapa);

    try {
      const response = await axios.post(
        "http://localhost:8080/api/imagenes/api/imagenes",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200 || response.status === 201) {
        Swal.fire({
          icon: "success",
          title: "Imagen agregada",
          text: `La imagen "${titulo}" se ha agregado correctamente a la galería.`,
          confirmButtonColor: "#28a745",
        });

        setTitulo("");
        setImagen(null);
        setPreview(null);
        setFecha("");
        setUbicacion("");
        setMapa("");
      }
    } catch (error) {
      console.error("Error al subir la imagen:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al agregar la imagen. Inténtalo de nuevo.",
        confirmButtonColor: "#d33",
      });
    }
  };

  return (
    <div className="content-page">
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="page-title-box">
                <h4 className="page-title text-center">Agregar Imagen a Galería</h4>
              </div>
            </div>
          </div>

          <div className="bg-white p-5 rounded-5 shadow-lg col-12 col-md-8 col-lg-6 mx-auto">
            {error && <div className="alert alert-danger">{error}</div>}

            <form onSubmit={handleSubmit} encType="multipart/form-data">
              <div className="mb-3">
                <label className="form-label" htmlFor="titulo">Título de la imagen</label>
                <input
                  type="text"
                  id="titulo"
                  className="form-control"
                  value={titulo}
                  onChange={(e) => setTitulo(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="imagen">Selecciona una imagen</label>
                <input
                  type="file"
                  id="imagen"
                  className="form-control"
                  accept="image/*"
                  onChange={handleImagenChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="fecha">Fecha</label>
                <input
                  type="date"
                  id="fecha"
                  className="form-control"
                  value={fecha}
                  onChange={(e) => setFecha(e.target.value)}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label" htmlFor="ubicacion">Ubicación (nombre del lugar)</label>
                <input
                  type="text"
                  id="ubicacion"
                  className="form-control"
                  value={ubicacion}
                  onChange={(e) => setUbicacion(e.target.value)}
                  required
                />
              </div>

              <div className="row">
                <div className="col-md-6 mb-3">
                  <label className="form-label" htmlFor="mapa">Mapa (Coordenadas) </label>
                  <input
                    type="text"
                    id="mapa"
                    className="form-control"
                    value={mapa}
                    onChange={(e) => setMapa(e.target.value)}
                    required
                  />
                </div>
              </div>

              {preview && (
                <div className="mb-3 text-center">
                  <p>Previsualización:</p>
                  <img
                    src={preview}
                    alt="Previsualización"
                    style={{ maxWidth: "100%", maxHeight: "300px", borderRadius: "8px" }}
                  />
                </div>
              )}

              <button type="submit" className="btn btn-success w-100 mt-3">
                Agregar Imagen
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CrearImagen;
