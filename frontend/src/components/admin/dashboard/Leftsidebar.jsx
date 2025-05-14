import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";

const Leftsidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname.startsWith(path);
  return (
    <div className="leftside-menu menuitem-active">
      {/* Brand Logo Light */}
      <a
        href="https://techzaa.in/velonic/layouts/index.html"
        className="logo logo-light"
      >
        <span className="logo-lg">
          <img src="./administracion_files/logo.png" alt="logo" />
        </span>
        <span className="logo-sm">
          <img src="./administracion_files/logo-sm.png" alt="small logo" />
        </span>
      </a>
      {/* Brand Logo Dark */}
      <a
        href="https://techzaa.in/velonic/layouts/index.html"
        className="logo logo-dark"
        style={{ backgroundColor: "#143852" }}
      >
        <span className="logo-lg">
          <img src="./administracion_files/logo-dark.png" alt="dark logo" />
        </span>
        <span className="logo-sm">
          <img src="./administracion_files/logo-sm.png" alt="small logo" />
        </span>
      </a>
      {/* Sidebar -left */}
      <div
        className="h-100 show"
        id="leftside-menu-container"
        data-simplebar="init"
        style={{ backgroundColor: "#143852" }}
      >
        <div className="simplebar-wrapper" style={{ margin: 0 }}>
          <div className="simplebar-height-auto-observer-wrapper">
            <div className="simplebar-height-auto-observer" />
          </div>
          <div className="simplebar-mask">
            <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
              <div
                className="simplebar-content-wrapper text-white"
                tabIndex={0}
                role="region"
                aria-label="scrollable content"
                style={{ height: "100%", overflow: "hidden" }}
              >
                <div className="simplebar-content" style={{ padding: 0 }}>
                  {/*- Sidemenu */}
                  <ul className="side-nav">
                    <li className="side-nav-item menuitem-active">
                      <Link
                        to="/dashboard-admin"
                        className={`side-nav-link ${
                          isActive("/dashboard-admin") ? "active-link" : ""
                        }`}
                      >
                        <i className="ri-dashboard-3-line" />
                        <span> Dashboard </span>
                      </Link>
                    </li>
                    <li className="side-nav-item">
                      <a
                        data-bs-toggle="collapse"
                        href="https://techzaa.in/velonic/layouts/index.html#sidebarPages"
                        aria-expanded={isActive("/facturas")}
                        aria-controls="sidebarPages"
                        className={`side-nav-link ${
                          isActive("#") ? "active-link" : ""
                        }`}
                      >
                        <i className="ri-pages-line" />
                        <span> Facturas </span>
                        <span className="menu-arrow" />
                      </a>
                      <div
                        className={`collapse ${
                          isActive("/facturas") ? "show" : ""
                        }`}
                        id="sidebarPages"
                        style={{}}
                      >
                        <ul className="side-nav-second-level">
                          <li>
                            <a
                              href="https://techzaa.in/velonic/layouts/pages-starter.html"
                              className={
                                isActive("/facturas/clientes")
                                  ? "active-link2"
                                  : ""
                              }
                            >
                              Facturas clientes
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://techzaa.in/velonic/layouts/pages-contact-list.html"
                              className={
                                isActive("/facturas/proveedores")
                                  ? "active-link2"
                                  : ""
                              }
                            >
                              Facturas proveedores
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="side-nav-item">
                      <a
                        data-bs-toggle="collapse"
                        href="https://techzaa.in/velonic/layouts/index.html#sidebarPagesAuth"
                        aria-expanded={isActive("/paquetes")}
                        aria-controls="sidebarPagesAuth"
                        className="side-nav-link collapsed"
                      >
                        <i className="ri-earth-line" />
                        <span> Paquetes </span>
                        <span className="menu-arrow" />
                      </a>
                      <div
                        className={`collapse ${
                          isActive("/paquetes") ? "show" : ""
                        }`}
                        id="sidebarPagesAuth"
                        style={{}}
                      >
                        <ul className="side-nav-second-level">
                          <li>
                            <a
                              href="https://techzaa.in/velonic/layouts/auth-login.html"
                              className={
                                isActive("/paquetes/listado")
                                  ? "active-link2"
                                  : ""
                              }
                            >
                              Listado
                            </a>
                          </li>
                          <li>
                            <a
                              href="https://techzaa.in/velonic/layouts/auth-login.html"
                              className={
                                isActive("/paquetes/agregar")
                                  ? "active-link2"
                                  : ""
                              }
                            >
                              Agregar
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="side-nav-item">
                      <a
                        data-bs-toggle="collapse"
                        href="https://techzaa.in/velonic/layouts/index.html#sidebarLayouts"
                        aria-expanded={isActive("/blog")}
                        aria-controls="sidebarLayouts"
                        className="side-nav-link"
                      >
                        <i className="ri-layout-line" />
                        <span> Blog </span>
                        <span className="menu-arrow" />
                      </a>

                      <div
                        className={`collapse ${
                          isActive("/blog") ? "show" : ""
                        }`}
                        id="sidebarLayouts"
                      >
                        <ul className="side-nav-second-level">
                          <li>
                            <a
                              href="#"
                              target="_blank"
                              className={
                                isActive("/blog/listado") ? "active-link2" : ""
                              }
                            >
                              Listado
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              target="_blank"
                              className={
                                isActive("/blog/agregar") ? "active-link2" : ""
                              }
                            >
                              Agregar entradas
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="side-nav-item">
                      <a
                        data-bs-toggle="collapse"
                        href="https://techzaa.in/velonic/layouts/index.html#sidebarBaseUI"
                        aria-expanded={isActive("/reservas")}
                        aria-controls="sidebarBaseUI"
                        className="side-nav-link collapsed"
                      >
                        <i className="ri-briefcase-line" />
                        <span> Reservas </span>
                        <span className="menu-arrow" />
                      </a>
                      <div
                        className={`collapse ${
                          isActive("/reservas") ? "show" : ""
                        }`}
                        id="sidebarBaseUI"
                        style={{}}
                      >
                        <ul className="side-nav-second-level">
                          <li>
                            <a
                              href="#"
                              className={
                                isActive("/reservas/confirmadas")
                                  ? "active-link2"
                                  : ""
                              }
                            >
                              Confirmadas
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className={
                                isActive("/reservas/en-proceso")
                                  ? "active-link2"
                                  : ""
                              }
                            >
                              En Proceso
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className={
                                isActive("/reservas/canceladas")
                                  ? "active-link2"
                                  : ""
                              }
                            >
                              Canceladas
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="side-nav-item">
                      <a
                        data-bs-toggle="collapse"
                        href="https://techzaa.in/velonic/layouts/index.html#sidebarExtendedUI"
                        aria-expanded={isActive("/admin-todos")}
                        aria-controls="sidebarExtendedUI"
                        className={`side-nav-link ${
                          isActive("/admin-todos") ? "active-link" : ""
                        }`}
                      >
                        <i className="ri-user-line" />
                        <span> Administradores </span>
                        <span className="menu-arrow" />
                      </a>
                      <div
                        className={`collapse ${
                          isActive("/admin-todos") ? "show" : ""
                        }`}
                        id="sidebarExtendedUI"
                      >
                        <ul className="side-nav-second-level">
                          <li>
                            <a
                              href="/admin-todos"
                              className={`${
                                isActive("/admin-todos") ? "active-link2" : ""
                              }`}
                            >
                              Todos
                            </a>
                          </li>
                          <li>
                            <a
                              href="/admin-alta"
                              className={
                                isActive("/admin-alta") ? "active-link2" : ""
                              }
                            >
                              Alta Usuarios
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="side-nav-item">
                      <a
                        data-bs-toggle="collapse"
                        href="https://techzaa.in/velonic/layouts/index.html#sidebarIcons"
                        aria-expanded={isActive("/eventos")}
                        aria-controls="sidebarIcons"
                        className={`side-nav-link ${
                          isActive("/eventos-todos") ? "active-link" : ""
                        }`}
                      >
                        <i className="ri-pencil-ruler-2-line" />
                        <span> Eventos </span>
                        <span className="menu-arrow" />
                      </a>
                      <div
                        className={`collapse ${
                          isActive("/eventos-todos") ? "show" : ""
                        }`}
                        id="sidebarIcons"
                      >
                        <ul className="side-nav-second-level">
                          <li>
                            <a
                              href="/eventos-todos"
                              className={
                                isActive("/eventos-todos") ? "active-link2" : ""
                              }
                            >
                              Listado
                            </a>
                          </li>
                          <li>
                            <a
                              href="/crear-eventos"
                              className={
                                isActive("/crear-eventos") ? "active-link2" : ""
                              }
                            >
                              Agregar eventos
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="side-nav-item">
                      <a
                        data-bs-toggle="collapse"
                        href="#sidebarMessages"
                        aria-expanded={isActive("/mensajes")}
                        aria-controls="sidebarMessages"
                        className="side-nav-link"
                      >
                        <i className="ri-message-3-line" />
                        <span> Mensajes </span>
                        <span className="menu-arrow" />
                      </a>
                      <div
                        className={`collapse ${
                          isActive("/mensajes") ? "show" : ""
                        }`}
                        id="sidebarMessages"
                      >
                        <ul className="side-nav-second-level">
                          <li>
                            <a
                              href="/mensajes"
                              className={
                                isActive("/mensajes") ? "active-link2" : ""
                              }
                            >
                              Todos los mensajes
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>

                    <li className="side-nav-item">
                      <a
                        data-bs-toggle="collapse"
                        href="#sidebarNotifications"
                        aria-expanded={isActive("/notificaciones")}
                        aria-controls="sidebarNotifications"
                        className="side-nav-link"
                      >
                        <i className="ri-notification-3-line" />
                        <span> Notificaciones </span>
                        <span className="menu-arrow" />
                      </a>
                      <div
                        className={`collapse ${
                          isActive("/notificaciones") ? "show" : ""
                        }`}
                        id="sidebarNotifications"
                      >
                        <ul className="side-nav-second-level">
                          <li>
                            <a
                              href="#"
                              className={
                                isActive("/notificaciones")
                                  ? "active-link2"
                                  : ""
                              }
                            >
                              Todas las notificaciones
                            </a>
                          </li>
                        </ul>
                      </div>
                    </li>
                  </ul>
                  {/*- End Sidemenu */}
                  <div className="clearfix" />
                </div>
              </div>
            </div>
          </div>
          <div
            className="simplebar-placeholder"
            style={{ width: "auto", height: 679 }}
          />
        </div>
        <div
          className="simplebar-track simplebar-horizontal"
          style={{ visibility: "hidden" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{
              width: 0,
              display: "none",
              transform: "translate3d(0px, 0px, 0px)",
            }}
          />
        </div>
        <div
          className="simplebar-track simplebar-vertical"
          style={{ visibility: "hidden" }}
        >
          <div
            className="simplebar-scrollbar"
            style={{
              height: 0,
              transform: "translate3d(0px, 0px, 0px)",
              display: "none",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Leftsidebar;
