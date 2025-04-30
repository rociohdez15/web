import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [isNavOpen, setIsNavOpen] = useState(false); // Estado para el menú
  const toggleMenu = () => setIsNavOpen(!isNavOpen); // Función para cambiar el estado del menú
  const closeMenu = () => setIsNavOpen(false); // Función para cerrar el menú cuando se hace clic en un enlace

  // Estado para almacenar los valores del formulario y los errores
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dni, setDni] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  // Manejo de los cambios en los inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "dni":
        setDni(value);
        break;
      case "address":
        setAddress(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "birthdate":
        setBirthdate(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;
      default:
        break;
    }
  };

  // Validaciones
  const validateForm = () => {
    // Validar DNI (asumimos formato de 8 dígitos seguidos de una letra)
    const dniPattern = /^\d{8}[A-Za-z]$/;
    if (!dniPattern.test(dni)) {
      setError("DNI inválido");
      return false;
    }

    // Validar correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
      setError("Correo electrónico inválido");
      return false;
    }

    // Validar contraseña (mínimo 8 caracteres, una mayúscula, una minúscula y un número)
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "La contraseña debe tener al menos 8 caracteres, una mayúscula, una minúscula y un número"
      );
      return false;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
      setError("Las contraseñas no coinciden");
      return false;
    }

    // Validar fecha de nacimiento (que sea mayor de 18 años)
    const today = new Date();
    const birthDate = new Date(birthdate);
    const age = today.getFullYear() - birthDate.getFullYear();
    const month = today.getMonth() - birthDate.getMonth();
    if (age < 18 || (age === 18 && month < 0)) {
      setError("Debes ser mayor de 18 años");
      return false;
    }

    setError(null); // Si no hay errores, se limpia el mensaje
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar formulario
    if (!validateForm()) {
      return;
    }

    const userDetails = {
      nombre: name, // Cambiado 'name' a 'nombre'
      apellidos: lastName, // Cambiado 'lastName' a 'apellidos'
      dni,
      direccion: address, // Cambiado 'address' a 'direccion'
      telefono: phone, // Cambiado 'phone' a 'telefono'
      fechaNacimiento: birthdate, // Cambiado 'birthdate' a 'fechaNacimiento'
      email,
      password,
    };

    try {
      const response = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      });

      const responseBody = await response.text();
      console.log("Response Status:", response.status);
      console.log("Response Text:", responseBody);

      if (!response.ok) {
        throw new Error("Error al registrar usuario");
      }

      // Si el registro es exitoso, redirigir al login
      window.location.href = "/login"; // O usa React Router para navegar
    } catch (error) {
      console.error("Error durante el registro:", error);
      setError("Hubo un error al registrar el usuario");
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
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Sansita:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
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

      {/* Header */}
      <header className="u-header">
        <div className="container-fluid d-flex justify-content-between align-items-center py-3">
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
                  <Link to="/" className="nav-link p-nosotros" onClick={closeMenu}>
                    Inicio
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/contacto" className="nav-link p-nosotros" onClick={closeMenu}>
                    Contacto
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/proyecto" className="nav-link p-nosotros" onClick={closeMenu}>
                    Proyecto
                  </Link>
                </li>
              </ul>
            </div>
          </nav>

          <Link to="/login" className="btn btn-primary me-5 rounded-pill p-nosotros">
            Iniciar Sesión
          </Link>
        </div>
      </header>

      {/* Contenedor principal */}
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
        <div className="position-relative d-flex flex-column flex-md-row justify-content-between align-items-center w-100 h-100 p-5">
          <div className="text-white col-md-6 text-center text-md-start">
            <h1 className="display-4 fw-bold mb-4 titulo-nosotros">Únete hoy a nosotros</h1>
            <p className="lead mb-4 p-nosotros">
            Regístrate para disfrutar de nuestros increíbles servicios y comenzar tu viaje.
            </p>
          </div>

          {/* Formulario de registro */}
          <div className="bg-white p-4 rounded-5 shadow-lg col-12 col-md-8 col-lg-6 mt-5 mt-md-0">
            <h4 className="h4 mb-4 text-center titulo-nosotros">Registrarse</h4>
            {error && (
              <div className="alert alert-danger" role="alert">
                {error}
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="name" className="form-label p-nosotros">
                  Nombre
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="lastName" className="form-label p-nosotros">
                  Apellidos
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  name="lastName"
                  value={lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="dni" className="form-label p-nosotros">
                  DNI
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="dni"
                  name="dni"
                  value={dni}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="address" className="form-label p-nosotros">
                  Dirección
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  name="address"
                  value={address}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="phone" className="form-label p-nosotros">
                  Teléfono
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="phone"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="birthdate" className="form-label p-nosotros">
                  Fecha de nacimiento
                </label>
                <input
                  type="date"
                  className="form-control"
                  id="birthdate"
                  name="birthdate"
                  value={birthdate}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label p-nosotros">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label p-nosotros">
                  Contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label p-nosotros">
                  Confirmar contraseña
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="d-flex align-items-center">
                <button
                  className="btn btn-primary w-auto text-white me-3 p-nosotros"
                  type="submit"
                >
                  Registrar
                </button>
                <a href="/login">
                  <button
                    className="btn btn-success w-auto text-white p-nosotros"
                    type="button"
                  >
                    Ya tengo una cuenta
                  </button>
                </a>
              </div>
            </form>
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
    </>
  );
};

export default Register;
