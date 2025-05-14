import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  // Estado para almacenar los valores del formulario y los errores
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [rememberMe, setRememberMe] = useState(false); // Estado para el checkbox

  // Manejo de los cambios en los inputs
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleRememberChange = (e) => {
    setRememberMe(e.target.checked); // Actualizar el estado del checkbox
  };

  // Manejo del submit del formulario
  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar que la página se recargue

    const credentials = {
      email: email,
      password: password,
    };

    try {
      const response = await fetch("http://localhost:8080/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(credentials),
      });

      // Lee la respuesta una sola vez
      const responseBody = await response.text();
      console.log("Response Status:", response.status);
      console.log("Response Text:", responseBody);

      if (!response.ok) {
        throw new Error("Error en la autenticación");
      }

      // Intenta parsear el responseBody a JSON
      const data = JSON.parse(responseBody);
      console.log("Token recibido:", data.token);

      // Guardamos el token en localStorage si el login es exitoso
      localStorage.setItem("token", data.token);

      // Si el usuario marca 'Recordarme', puedes almacenar el token a largo plazo
      if (rememberMe) {
        // Aquí, por ejemplo, podrías guardar en cookies o también en localStorage con un tiempo de expiración
        localStorage.setItem("token", data.token); // Este paso ya está hecho arriba
      }

      // Redirigir al usuario al dashboard
      // O usa React Router para navegar

      if (data.rol === "USER") {
        window.location.href = "/dashboard";
      } else {
        window.location.href = "/dashboard-admin";
      }
    } catch (error) {
      console.error("Error durante el login:", error);
      setError("Credenciales incorrectas o error al iniciar sesión");
    }
  };

  return (
    <div
      className="container-fluid p-0"
      style={{
        backgroundImage:
          'url("https://storage.googleapis.com/a1aa/image/oqTaDTBpKDQdyWXWfAPF9ApcqAx6whdth46xW_bzT6g.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
    >
      {/* Contenedor principal */}
      <div className="position-relative d-flex flex-column flex-md-row justify-content-between align-items-center w-100 h-100 p-5">
        <div className="text-white col-md-6 text-center text-md-start">
          <h1 className="display-4 fw-bold mb-4 titulo-nosotros">
            Bienvenido de nuevo
          </h1>
          <p className="lead mb-4 p-nosotros">
            ¡Qué bueno verte de nuevo! Inicia sesión para continuar.
          </p>
          <div className="d-flex justify-content-center justify-content-md-start">
            <a className="text-white me-3 fs-3" href="#">
              <i className="fab fa-facebook"></i>
            </a>
            <a className="text-white me-3 fs-3" href="#">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="text-white me-3 fs-3" href="#">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="text-white me-3 fs-3" href="#">
              <i className="fab fa-whatsapp"></i>
            </a>
          </div>
        </div>

        {/* Formulario de login */}
        <div className="bg-white p-5 rounded-5 shadow-lg col-12 col-md-6 col-lg-4 mt-5 mt-md-0">
          <h4 className="h4 mb-4 text-center titulo-nosotros">
            Iniciar Sesión
          </h4>
          {error && (
            <div className="alert alert-danger p-nosotros">{error}</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label p-nosotros" htmlFor="email">
                Correo electrónico
              </label>
              <input
                className="form-control"
                id="email"
                type="email"
                value={email}
                onChange={handleChangeEmail}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label p-nosotros" htmlFor="password">
                Password
              </label>
              <input
                className="form-control"
                id="password"
                type="password"
                value={password}
                onChange={handleChangePassword}
                required
              />
            </div>
            <div className="form-check mb-4">
              <input
                className="form-check-input border-dark"
                id="remember"
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberChange} // Agregar el manejador para el checkbox
              />
              <label className="form-check-label p-nosotros" htmlFor="remember">
                Recordarme
              </label>
            </div>
            <div className="d-flex align-items-center">
              <button
                className="btn btn-warning w-auto text-white me-3 p-nosotros"
                type="submit"
              >
                Iniciar sesión ahora
              </button>
              <a href="/register">
                <button
                  className="btn btn-secondary w-auto text-white p-nosotros"
                  type="button"
                >
                  Registrar
                </button>
              </a>
            </div>
          </form>

          <div className="d-flex justify-content-start mt-3">
            <Link to="/olvidaste" className="text-dark p-nosotros">
              ¿Olvidaste tu contraseña?
            </Link>
          </div>

          <div className="text-center mt-4 small p-nosotros">
            Al hacer clic en "Iniciar sesión ahora", acepta nuestros
            <Link to="/terminos"> Términos de servicios</Link> y
            <Link to="/privacidad"> Política de privacidad</Link>.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
