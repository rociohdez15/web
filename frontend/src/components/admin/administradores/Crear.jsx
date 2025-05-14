import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import Swal from 'sweetalert2';

const Crear = () => {
  const [email, setEmail] = useState("");
  const [emailExists, setEmailExists] = useState(false);
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error2, setError2] = useState("");

  useEffect(() => {
    // Generar contraseña aleatoria al cargar el componente
    const generarPassword = () => {
      const caracteres =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
      return Array.from(
        { length: 12 },
        () => caracteres[Math.floor(Math.random() * caracteres.length)]
      ).join("");
    };
    setPassword(generarPassword());
  }, []);

  // Verificar si el email ya existe al cambiar el valor del campo de email
  const handleChangeEmail = async (e) => {
    const value = e.target.value;
    setEmail(value);

    // Validación por backend: comprobar si el email ya existe
    if (value.includes("@")) {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/rol-admin/existe?email=${value}`
        );
        const data = response.data; // Aquí obtienes los datos de la respuesta

        // Actualizar el estado de si el email ya está registrado
        setEmailExists(data.exists);
      } catch (error) {
        console.error("Hubo un error al verificar el correo:", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificar si el correo ya está registrado
    if (emailExists) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "El correo ya está registrado",
        confirmButtonColor: "#d33",
      });
      return; // Evitar que el formulario se envíe si el correo está registrado
    }

    try {
      // Construir la URL con los parámetros necesarios
      const url = `http://localhost:8080/api/rol-admin/alta?email=${email}&password=${password}`;

      // Realizar la petición POST con los parámetros en la URL
      const response = await axios.post(url);

      if (response.status === 200) {
        // Si la creación del admin es exitosa, muestra un SweetAlert de éxito
        Swal.fire({
          icon: "success",
          title: "Administrador creado con éxito",
          text: `El administrador con el correo ${email} ha sido creado correctamente.`,
          confirmButtonColor: "#28a745",
        });

        setEmail(""); // Vaciar el campo email
      }
    } catch (error) {
      console.error("Error al crear el administrador:", error);

      // Mostrar un error específico si ocurre uno al crear el administrador
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al dar de alta al administrador.",
        confirmButtonColor: "#d33",
      });
    }
  };

  // Manejador de errores global, si existe algún error en el formulario
  useEffect(() => {
    if (error2) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: error2,
        confirmButtonColor: "#d33",
      });
    }
  }, [error2]);

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
                  Alta de Administradores
                </h4>
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
                <label className="form-label p-nosotros" htmlFor="email">
                  Correo electrónico
                </label>
                <input
                  className={`form-control ${emailExists ? "is-invalid" : ""}`}
                  id="email"
                  type="email"
                  value={email}
                  onChange={handleChangeEmail}
                  required
                />
                {emailExists && (
                  <div className="invalid-feedback">
                    Este correo ya está registrado.
                  </div>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label p-nosotros" htmlFor="password">
                  Contraseña generada
                </label>
                <div className="input-group">
                  <input
                    className="form-control"
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    readOnly
                  />
                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? "Ocultar" : "Mostrar"}
                  </button>
                </div>
              </div>
              <button
                className="btn btn-success w-100 p-nosotros mt-3"
                type="submit"
              >
                Dar de alta
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
