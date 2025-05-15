import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import axios from "axios";
import ApexCharts from "react-apexcharts";
import ReactApexChart2 from "react-apexcharts";
import { Outlet } from "react-router-dom";

const Topbar = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/obtener-form-contactos"
        );
        setMessages(response.data); // Asegúrate de que la estructura de datos sea la esperada
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  // Contar mensajes no leídos
  const unreadCount = messages.filter((message) => !message.read).length;

  const clearAllMessages = () => {
    // Vaciar el array de mensajes solo en el frontend
    setMessages([]);
  };

  const [showAll, setShowAll] = useState(false); // Para controlar la visualización de todos los mensajes

  // Controlar si se deben mostrar todos los mensajes o solo los primeros 4
  const displayedMessages = showAll ? messages : messages.slice(0, 4);

  const [notifications, setNotifications] = useState([]);
  const [loadingNotificaciones, setLoadingNotificaciones] = useState(true);
  const [errorNotificaciones, setErrorNotificaciones] = useState(null);
  const [verTodasNotificaciones, setVerTodasNotificaciones] = useState(false);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/obtener-notificaciones"
        );
        setNotifications(response.data);
      } catch (err) {
        setErrorNotificaciones(err.message);
      } finally {
        setLoadingNotificaciones(false);
      }
    };

    fetchNotifications();
  }, []);

  const clearAllNotifications = () => {
    setNotifications([]);
  };

  const getNotificationText = (noti) => {
    const nombreCompleto = `${noti.nombreCompleto}`;
    switch (noti.tipo) {
      case "like":
        return `${nombreCompleto} ha dado like`;

      case "reseña":
        return `${nombreCompleto} ha dejado una reseña`;
      case "reserva":
        return `${nombreCompleto} ha realizado una reserva`;
      default:
        return `${nombreCompleto} ha realizado una acción`;
    }
  };

  const getNotificationIcon = (tipo) => {
    switch (tipo) {
      case "like":
        return {
          icon: "mdi-heart",
          bg: "bg-danger-subtle",
          color: "text-danger",
        };
      case "reseña":
        return {
          icon: "mdi-comment-account-outline",
          bg: "bg-warning-subtle",
          color: "text-warning",
        };
      case "reserva":
        return {
          icon: "mdi-calendar-check",
          bg: "bg-success-subtle",
          color: "text-success",
        };
      default:
        return {
          icon: "mdi-bell-outline",
          bg: "bg-secondary-subtle",
          color: "text-secondary",
        };
    }
  };

  const displayedNotifications = verTodasNotificaciones
    ? notifications
    : notifications.slice(0, 4);

  // Contar mensajes no leídos
  const unreadCountNoti = notifications.filter(
    (notification) => !notification.read
  ).length;

  const navigate = useNavigate();

  const handleLogout = () => {
    // Eliminar el token de localStorage o sessionStorage
    localStorage.removeItem("token"); // Si usas localStorage para almacenar el token
    // sessionStorage.removeItem("token");  // Si usas sessionStorage

    // O también puedes eliminar cookies si las usas:
    // document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    // Redirigir al usuario a la página de inicio (u otra página de login)
    navigate("/login");
  };

  const [verTodos, setVerTodos] = useState(false);
  return (
    <div className="navbar-custom bg-white">
      <div className="topbar container-fluid">
        <div className="d-flex align-items-center gap-1">
          {/* Horizontal Menu Toggle Button */}
          <button
            className="navbar-toggle"
            data-bs-toggle="collapse"
            data-bs-target="#topnav-menu-content"
          >
            <div className="lines">
              <span />
              <span />
              <span />
            </div>
          </button>
        </div>
        <ul className="topbar-menu d-flex align-items-center gap-3">
          <li className="dropdown d-lg-none">
            <a
              className="nav-link dropdown-toggle arrow-none"
              data-bs-toggle="dropdown"
              href="https://techzaa.in/velonic/layouts/index.html#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="ri-search-line fs-22" />
            </a>
            <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
              <form className="p-3">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search ..."
                  aria-label="Recipient's username"
                />
              </form>
            </div>
          </li>

          <li className="dropdown notification-list">
            <a
              className="nav-link dropdown-toggle arrow-none"
              data-bs-toggle="dropdown"
              href="https://techzaa.in/velonic/layouts/index.html#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="ri-mail-line fs-22" />
              <span className="noti-icon-badge badge text-bg-purple">
                {unreadCount}
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
              <div className="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="m-0 fs-16 fw-semibold">Mensajes</h6>
                  </div>
                  <div className="col-auto">
                    <button
                      onClick={clearAllMessages}
                      className="text-dark text-decoration-underline"
                      style={{ background: "none", border: "none" }}
                    >
                      <small>Limpiar Todo</small>
                    </button>
                  </div>
                </div>
              </div>
              <div style={{ maxHeight: 300 }} data-simplebar="init">
                <div className="simplebar-content">
                  {loading ? (
                    <div className="text-center text-muted">
                      Cargando mensajes...
                    </div>
                  ) : error ? (
                    <div className="text-center text-danger">{error}</div>
                  ) : messages.length > 0 ? (
                    displayedMessages.map((message) => (
                      <a
                        key={message.id}
                        href="javascript:void(0);"
                        className={`dropdown-item p-0 notify-item read-noti card m-0 shadow-none ${
                          !message.read ? "new-message" : ""
                        }`} // Aplica la clase "new-message" si el mensaje no ha sido leído
                        style={{
                          backgroundColor: !message.read
                            ? "#f0f0f0"
                            : "transparent", // Gris claro para mensajes no leídos
                          boxShadow: !message.read
                            ? "0 0 10px rgba(0, 0, 0, 0.1)"
                            : "none", // Sombra sutil
                          position: "relative", // Necesario para posicionar el punto
                          paddingLeft: "25px", // Añadido espacio para el punto
                        }}
                      >
                        <div
                          style={{
                            position: "absolute", // Para posicionar el punto
                            left: "10px", // Distancia desde la izquierda
                            top: "50%", // Centrar el punto verticalmente
                            transform: "translateY(-50%)", // Ajustar para centrar exactamente
                            width: "8px", // Tamaño del punto
                            height: "8px", // Tamaño del punto
                            backgroundColor: !message.read ? "#007bff" : "#ccc", // Color según si está leído
                            borderRadius: "50%", // Hacerlo redondo
                          }}
                        />
                        <div className="card-body">
                          <div className="d-flex align-items-center">
                            <div className="flex-grow-1 text-truncate ms-2">
                              <h5 className="noti-item-title fw-semibold fs-14">
                                {message.nombre}{" "}
                                <small className="fw-normal text-muted float-end ms-1">
                                  {new Date(
                                    message.fecha[0],
                                    message.fecha[1] - 1,
                                    message.fecha[2]
                                  ).toLocaleDateString()}
                                </small>
                              </h5>
                              <small className="noti-item-subtitle text-muted">
                                {message.mensaje}
                              </small>
                            </div>
                          </div>
                        </div>
                      </a>
                    ))
                  ) : (
                    <div className="text-center text-muted">
                      No hay mensajes
                    </div>
                  )}
                </div>
              </div>
              {messages.length > 4 && !showAll && (
                <a
                  href="/mensajes"
                  className="dropdown-item text-center text-primary text-decoration-underline fw-bold notify-item border-top border-light py-2"
                >
                  Ver Todos
                </a>
              )}
            </div>
          </li>
          <li className="dropdown notification-list">
            <a
              className="nav-link dropdown-toggle arrow-none"
              data-bs-toggle="dropdown"
              href="https://techzaa.in/velonic/layouts/index.html#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <i className="ri-notification-3-line fs-22" />
              <span className="noti-icon-badge badge text-bg-pink">
                {unreadCountNoti}
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
              <div className="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="m-0 fs-16 fw-semibold">Notificaciones</h6>
                  </div>
                  <div className="col-auto">
                    <button
                      onClick={clearAllNotifications}
                      className="text-dark text-decoration-underline"
                      style={{ background: "none", border: "none" }}
                    >
                      <small>Limpiar Todo</small>
                    </button>
                  </div>
                </div>
              </div>

              <div style={{ maxHeight: 300 }} data-simplebar="init">
                <div className="simplebar-content" style={{ padding: 0 }}>
                  {loadingNotificaciones ? (
                    <p className="text-center my-3">Cargando...</p>
                  ) : errorNotificaciones ? (
                    <p className="text-danger text-center my-3">
                      Error: {errorNotificaciones}
                    </p>
                  ) : (
                    displayedNotifications.map((noti) => {
                      const { icon, bg, color } = getNotificationIcon(
                        noti.tipo
                      );
                      return (
                        <a
                          key={noti.id}
                          href="#"
                          className={`dropdown-item notify-item card m-0 shadow-none ${
                            !noti.read ? "new-noti" : ""
                          }`}
                          style={{
                            backgroundColor: !noti.read
                              ? "#f0f0f0"
                              : "transparent",
                            boxShadow: !noti.read
                              ? "0 0 10px rgba(0, 0, 0, 0.1)"
                              : "none",
                            position: "relative",
                            paddingLeft: "25px",
                          }}
                        >
                          {!noti.read && (
                            <div
                              style={{
                                position: "absolute",
                                left: "10px",
                                top: "50%",
                                transform: "translateY(-50%)",
                                width: "8px",
                                height: "8px",
                                backgroundColor: "#007bff",
                                borderRadius: "50%",
                              }}
                            />
                          )}
                          <div className="d-flex align-items-center">
                            <div className={`notify-icon ${bg}`}>
                              <i className={`mdi ${icon} ${color}`}></i>
                            </div>
                            <p
                              className="notify-details mb-0 ms-2"
                              style={{
                                whiteSpace: "normal",
                                wordBreak: "break-word",
                                lineHeight: "1.3",
                                marginBottom: 0,
                              }}
                            >
                              {getNotificationText(noti)}
                            </p>
                          </div>
                        </a>
                      );
                    })
                  )}
                </div>
              </div>

              {notifications.length > 4 && (
                <a
                  href="/notificaciones"
                  className="dropdown-item text-center text-primary text-decoration-underline fw-bold notify-item border-top border-light py-2"
                >
                  {verTodasNotificaciones ? "Mostrar Menos" : "Ver Todas"}
                </a>
              )}
            </div>
          </li>
          <li className="dropdown">
            <a
              className="nav-link dropdown-toggle arrow-none nav-user"
              data-bs-toggle="dropdown"
              href="https://techzaa.in/velonic/layouts/index.html#"
              role="button"
              aria-haspopup="false"
              aria-expanded="false"
            >
              <span className="account-user-avatar">
                <i className="ri-account-circle-line fs-24 align-middle me-1" />
                <i className="ri-arrow-down-s-line d-none d-sm-inline-block align-middle" />
              </span>
            </a>
            <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated profile-dropdown">
              {/* item*/}
              <div className=" dropdown-header noti-title">
                <h6 className="text-overflow m-0">¡Bienvenido!</h6>
              </div>
              {/* item*/}
              <a
                href="https://techzaa.in/velonic/layouts/pages-profile.html"
                className="dropdown-item"
              >
                <i className="ri-account-circle-line fs-18 align-middle me-1" />
                <span>My Account</span>
              </a>
              {/* item*/}

              <button onClick={handleLogout} className="dropdown-item">
                <i className="ri-logout-box-line fs-18 align-middle me-1" />
                <span>Logout</span>
              </button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Topbar;
