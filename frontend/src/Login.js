import React from "react";

const Login = () => {
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

      <div
        className="container-fluid p-0"
        style={{
          backgroundImage:
            'url("https://storage.googleapis.com/a1aa/image/oqTaDTBpKDQdyWXWfAPF9ApcqAx6whdth46xW_bzT6g.jpg")',
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh", // Asegura que ocupe al menos toda la altura de la ventana
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
            <h2 className="h4 mb-4 text-center">Sign in</h2>
            <form>
              <div className="mb-3">
                <label className="form-label" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="form-control"
                  id="email"
                  type="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label className="form-label" htmlFor="password">
                  Password
                </label>
                <input
                  className="form-control "
                  id="password"
                  type="password"
                  required
                />
              </div>
              <div className="form-check mb-4">
                <input
                  className="form-check-input border-dark"
                  id="remember"
                  type="checkbox"
                />
                <label className="form-check-label" htmlFor="remember">
                  Remember Me
                </label>
              </div>
              <button
                className="btn btn-warning w-auto text-white"
                type="submit"
              >
                Sign in now
              </button>
            </form>

            <div className="d-flex justify-content-start mt-3">
              <a className="text-dark" href="#">
                Lost your password?
              </a>
            </div>

            <div className="text-center mt-4 small">
              By clicking "Sign in now" you agree to our
              <a href="#"> Terms of Service</a> and
              <a href="#"> Privacy Policy</a>.
            </div>
          </div>
        </div>
      </div>

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
