import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // Estado para el menú

  // Función para cambiar el estado del menú
  const toggleMenu = () => {
    setIsNavOpen(!isNavOpen);
  };

  // Función para cerrar el menú cuando se hace clic en un enlace
  const closeMenu = () => {
    setIsNavOpen(false); // Cierra el menú
  };

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
    <>
      {/* CDN de Font Awesome */}
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        rel="stylesheet"
      />

      {/* CDN de Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
        rel="stylesheet"
      />

      {/* CDN de Bootstrap */}
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-KyZXEJ6Haq4fVXf7Xw7xvvczf8vcnfd8j5LfUAW5A3v5Xr8V1BvLMth82A1ZcYpG"
        crossorigin="anonymous"
      />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta
        name="keywords"
        content="​Book your outdoor adventure, About Us, ​Find your next getaway, Our Services, ​Plan Your Camping Trip, ​How to plan a camping trip, Contact Us"
      />
      <meta name="description" content />
      <title>Atalanta | Login</title>
      <link rel="stylesheet" href="nicepage.css" media="screen" />
      <link rel="stylesheet" href="index.css" media="screen" />
      <meta name="generator" content="Nicepage 7.6.4, nicepage.com" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        integrity="sha384-k6RqeWeci5ZR/Lv4MR0sA0FfDOM6g0g5z5e5e5e5e5e5e5e5e5e5e5e5e5e5e5e5"
        crossorigin="anonymous"
      />
      <link
        id="u-theme-google-font"
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i|Open+Sans:300,300i,400,400i,500,500i,600,600i,700,700i,800,800i"
      />
      <meta name="theme-color" content="#478ac9" />
      <meta property="og:title" content="Atalanta" />
      <meta property="og:type" content="website" />
      <meta data-intl-tel-input-cdn-path="intlTelInput/" />

      <header className="u-header">
        <div className="container-fluid d-flex justify-content-between align-items-center py-3">
          {/* Logo con más margen izquierdo */}
          <a href="#" className="u-image u-logo ms-5">
            <img
              src="images/default-logo.png"
              className="u-logo-image"
              alt="Logo"
            />
          </a>

          {/* Navbar */}
          <nav className="navbar navbar-expand-lg navbar-light w-200">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded={isNavOpen ? "true" : "false"}
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isNavOpen ? "show" : ""}`}
              id="navbarNav"
            >
              <ul className="navbar-nav w-100 d-flex justify-content-center">
                {" "}
                {/* Centrado del menú */}
                <li className="nav-item">
                  <Link to="/" className="nav-link" onClick={closeMenu}>
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contacto" className="nav-link" onClick={closeMenu}>
                    Contacto
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/proyecto" className="nav-link" onClick={closeMenu}>
                    Proyecto
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Link to="/login" className="btn btn-primary me-5 rounded-pill">
            Iniciar Sesión
          </Link>
        </div>
      </header>

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
            <h1 className="display-4 fw-bold mb-4">Welcome Back</h1>
            <p className="lead mb-4">
              It's great to see you again! Please sign in to continue.
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
            <h4 className="h4 mb-4 text-center">Sign in</h4>
            {error && <div className="alert alert-danger">{error}</div>}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email Address
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
                <label className="form-label" htmlFor="password">
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
                <label className="form-check-label" htmlFor="remember">
                  Remember Me
                </label>
              </div>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-warning w-auto text-white me-3"
                  type="submit"
                >
                  Sign in now
                </button>
                <a href="/register">
                  <button
                    className="btn btn-secondary w-auto text-white"
                    type="button"
                  >
                    Register
                  </button>
                </a>
              </div>
            </form>

            <div className="d-flex justify-content-start mt-3">
              <Link to="/olvidaste" className="text-dark">
                Lost your password?
              </Link>
            </div>

            <div className="text-center mt-4 small">
              By clicking "Sign in now" you agree to our
              <Link to="/terminos"> Terms of Service</Link> and
              <Link to="/privacidad"> Privacy Policy</Link>.
            </div>
          </div>
        </div>
      </div>
      <footer
        className="u-align-center u-clearfix u-container-align-center u-footer u-grey-80 u-footer"
        id="footer"
      >
        <section className="u-backlink u-clearfix u-grey-80">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-12 text-center">
                <p className="u-text">
                  <span>This site was created with the </span>
                  <a
                    className="u-link"
                    href="https://nicepage.com/"
                    target="_blank"
                    rel="nofollow"
                  >
                    <span>Nicepage</span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </footer>

      {/* CDN de Bootstrap JS (opcional, si necesitas interactividad como modales, dropdowns, etc.) */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-KyZXEJ6Haq4fVXf7Xw7xvvczf8vcnfd8j5LfUAW5A3v5Xr8V1BvLMth82A1ZcYpG"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default Login;
