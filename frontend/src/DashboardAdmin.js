import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import ApexCharts from "react-apexcharts";
import ReactApexChart2 from "react-apexcharts";
import { Outlet } from 'react-router-dom';

const DashboardAdmin = () => {
  /* Hacer una solicitud a la API para saber el número total de proveedores. */
  const [totalProveedores, setTotalProveedores] = useState(0);

  useEffect(() => {
    const fetchTotalProveedores = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/total-proveedores"
        );
        setTotalProveedores(response.data.totalProveedores ?? response.data); // Por si devuelves un JSON o solo el número
      } catch (error) {
        console.error("Error al obtener el total de proveedores:", error);
      }
    };

    fetchTotalProveedores();
  }, []);

  /* Hacer una solicitud a la API para saber la cantidad de ingresos de esta semana. */
  const [totalIngresosSemanaActual, setTotalIngresosSemanaActual] = useState(0);

  useEffect(() => {
    const fetchTotalIngresosSemanaActual = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/ingresos-semana-actual"
        );
        setTotalIngresosSemanaActual(
          response.data.totalIngresosSemanaActual ?? response.data
        ); // Por si devuelves un JSON o solo el número
      } catch (error) {
        console.error(
          "Error al obtener el total de ingresos de la semana actual:",
          error
        );
      }
    };

    fetchTotalIngresosSemanaActual();
  }, []);

  /* Hacer una solicitud a la API para saber la cantidad de ingresos de esta semana. */
  const [totalIngresosSemanaAnterior, setTotalIngresosSemanaAnterior] =
    useState(0);

  useEffect(() => {
    const fetchTotalIngresosSemanaAnterior = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/ingresos-semana-anterior"
        );
        setTotalIngresosSemanaAnterior(
          response.data.totalIngresosSemanaAnterior ?? response.data
        ); // Por si devuelves un JSON o solo el número
      } catch (error) {
        console.error(
          "Error al obtener el total de ingresos de la semana anterior:",
          error
        );
      }
    };

    fetchTotalIngresosSemanaAnterior();
  }, []);
  /* Hacer una solicitud a la API para calcular el total de ingresos. */
  const [totalIngresos, setTotalIngresos] = useState(0);

  useEffect(() => {
    const fecthTotalIngresos = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/total-ingresos"
        );
        setTotalIngresos(response.data.totalIngresos ?? response.data); // Por si devuelves un JSON o solo el número
      } catch (error) {
        console.error("Error al obtener el total de ingresos:", error);
      }
    };

    fecthTotalIngresos();
  }, []);

  /* Hacer una solicitud a la API para calcular el número total de reservas. */
  const [totalReservas, setTotalReservas] = useState(0);

  useEffect(() => {
    const fecthTotalReservas = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/total-reservas"
        );
        setTotalReservas(response.data.totalReservas ?? response.data); // Por si devuelves un JSON o solo el número
      } catch (error) {
        console.error("Error al obtener el total de reservas:", error);
      }
    };

    fecthTotalReservas();
  }, []);

  /* Hacer una solicitud a la API para calcular los ingresos del primer trimestre. */
  const [totalPrimerTrimestre, setTotalPrimerTrismestre] = useState(0);

  useEffect(() => {
    const fecthTotalPrimerTrismestre = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/ingresos-primer-trimestre"
        );
        setTotalPrimerTrismestre(
          response.data.totalPrimerTrismestre ?? response.data
        ); // Por si devuelves un JSON o solo el número
      } catch (error) {
        console.error("Error al obtener el total de Primer Trismestre:", error);
      }
    };

    fecthTotalPrimerTrismestre();
  }, []);

  /* Hacer una solicitud a la API para calcular los ingresos del segundo trimestre. */
  const [totalSegundoTrimestre, setTotalSegundoTrismestre] = useState(0);

  useEffect(() => {
    const fecthTotalSegundoTrismestre = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/ingresos-segundo-trimestre"
        );
        setTotalSegundoTrismestre(
          response.data.totalSegundoTrimestre ?? response.data
        ); // Por si devuelves un JSON o solo el número
      } catch (error) {
        console.error(
          "Error al obtener el total de Segundo Trismestre:",
          error
        );
      }
    };

    fecthTotalSegundoTrismestre();
  }, []);

  /* Hacer una solicitud a la API para calcular los ingresos del tercer trimestre. */
  const [totalTercerTrimestre, setTotalTercerTrismestre] = useState(0);

  useEffect(() => {
    const fecthTotalTercerTrismestre = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/ingresos-tercer-trimestre"
        );
        setTotalTercerTrismestre(
          response.data.totalTercerTrimestre ?? response.data
        ); // Por si devuelves un JSON o solo el número
      } catch (error) {
        console.error("Error al obtener el total de Tercer Trismestre:", error);
      }
    };

    fecthTotalTercerTrismestre();
  }, []);

  /* Hacer una solicitud a la API para calcular el número total de usuarios. */
  const [totalUsuarios, setTotalUsuarios] = useState(0);

  useEffect(() => {
    const fecthTotalUsuarios = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/total-usuarios"
        );
        setTotalUsuarios(response.data.totalUsuarios ?? response.data); // Por si devuelves un JSON o solo el número
      } catch (error) {
        console.error("Error al obtener el total de usuarios:", error);
      }
    };

    fecthTotalUsuarios();
  }, []);

  /*Gráfico de ingresos por semana.*/
  const [data, setData] = useState({ ingresos: [], ventas: [] });

  useEffect(() => {
    const fetchIngresosYReservas = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/ingresos-y-ventas-semana"
        );
        console.log(response.data); // Verifica que los datos lleguen correctamente

        // Convertir las ventas de cadenas a números
        const ingresos = response.data.ingresos;
        const ventas = response.data.ventas.map((venta) => Number(venta)); // Convertir ventas a números

        setData({
          ingresos,
          ventas,
        });
      } catch (error) {
        console.error(
          "Error al obtener los ingresos y reservas de la semana:",
          error
        );
      }
    };

    fetchIngresosYReservas();
  }, []);

  // Configuración de los gráficos
  const opciones = {
    chart: {
      id: "grafico-semana",
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false, // Esto asegura que las barras sean verticales
        columnWidth: "50%", // Ajusta el ancho de las barras
        endingShape: "rounded", // Forma redondeada en los extremos
      },
    },
    stroke: {
      show: true,
      width: 3,
      colors: ["transparent"],
    },
    xaxis: {
      categories: [
        "Lunes",
        "Martes",
        "Miércoles",
        "Jueves",
        "Viernes",
        "Sábado",
        "Domingo",
      ],
    },
    title: {
      text: "Ingresos y Ventas por Día de la Semana",
      align: "center",
    },
    yaxis: [
      {
        title: {
          text: "Ingresos (€)",
        },
      },
      {
        opposite: true,
        title: {
          text: "Ventas",
        },
      },
    ],
    tooltip: {
      shared: true, // Esto hace que el tooltip sea común para ambas barras
      intersect: false,
    },
  };

  const series = [
    {
      name: "Ingresos",
      data: data.ingresos,
    },
    {
      name: "Ventas",
      data: data.ventas,
    },
  ];

  const [ventas, setVentas] = useState([]);
  const [meses, setMeses] = useState([]);

  useEffect(() => {
    const fetchVentas = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/admin/ventas-anuales"
        );

        const data = response.data;
        const labels = Object.keys(data); // ["enero", "febrero", ...]
        const valores = Object.values(data); // [10, 15, ...]

        setMeses(labels);
        setVentas(valores);
      } catch (error) {
        console.error("Error al obtener las ventas anuales:", error);
      }
    };

    fetchVentas();
  }, []);

  const opciones2 = {
    chart: {
      type: "line",
      height: 250,
    },
    xaxis: {
      categories: meses,
    },
    stroke: {
      curve: "smooth",
    },
    title: {
      text: "Ventas Anuales",
      align: "center",
    },
  };

  const series2 = [
    {
      name: "Ventas",
      data: ventas,
    },
  ];

  const getBadgeClass = (estado) => {
    switch (estado) {
      case "Completado":
        return "bg-info-subtle text-info";
      case "Pendiente":
        return "bg-pink-subtle text-pink";
      case "En Progreso":
        return "bg-purple-subtle text-purple";
      default:
        return "bg-secondary-subtle text-secondary";
    }
  };

  const [proyectos, setProyectos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8080/api/admin/obtener-proyectos")
      .then((res) => setProyectos(res.data))
      .catch((err) => console.error("Error al obtener proyectos:", err));
  }, []);

  const formatearFecha = (fecha) => {
    if (!fecha) return "";
    const dateObj = new Date(fecha);
    if (isNaN(dateObj)) return "";

    const dia = String(dateObj.getDate()).padStart(2, "0");
    const mes = String(dateObj.getMonth() + 1).padStart(2, "0");
    const anio = dateObj.getFullYear();

    return `${dia}/${mes}/${anio}`;
  };

  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [eventos, setEventos] = useState([]);

  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Obtener eventos del backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/admin/obtener-eventos")
      .then((response) => {
        const data = response.data;

        // Agrupar eventos por año-mes-dia
        const grouped = {};

        data.forEach((evento) => {
          const [year, month, day] = evento.fecha;
          const key = `${year}-${month}-${day}`;

          if (!grouped[key]) {
            grouped[key] = [];
          }

          grouped[key].push(evento.nombre);
        });

        setEventos(grouped); // esto será un objeto con claves tipo "2024-12-12": ["Evento1", "Evento2"]
      })
      .catch((error) => {
        console.error("Error al obtener eventos", error);
      });
  }, []);

  // Generar los días del mes para mostrar en el calendario
  useEffect(() => {
    const days = [];
    const totalDays = new Date(currentYear, currentMonth + 1, 0).getDate();
    const firstDay = new Date(currentYear, currentMonth, 1).getDay();
    const adjustedFirstDay = firstDay === 0 ? 6 : firstDay - 1;

    for (let i = 0; i < adjustedFirstDay; i++) {
      days.push("");
    }

    for (let i = 1; i <= totalDays; i++) {
      days.push(i);
    }

    setDaysInMonth(days);
  }, [currentMonth, currentYear]);

  // Manejar el cambio de mes
  const handlePrevMonth = () => {
    const newDate = new Date(currentYear, currentMonth - 1, 1);
    setCurrentDate(newDate);
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentYear, currentMonth + 1, 1);
    setCurrentDate(newDate);
  };

  // Función para obtener los eventos de un día específico
  const getEventosDelDia = (day) => {
    const eventosDelDia = eventos.filter((evento) => {
      const fechaEvento = new Date(
        evento.fecha[0],
        evento.fecha[1] - 1,
        evento.fecha[2]
      );
      return (
        fechaEvento.getDate() === day && fechaEvento.getMonth() === currentMonth
      );
    });
    return eventosDelDia;
  };

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
        return `${nombreCompleto} dio like`;
      case "reseña":
        return `${nombreCompleto} dejó una reseña`;
      case "reserva":
        return `${nombreCompleto} realizó una reserva`;
      default:
        return `${nombreCompleto} realizó una acción`;
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
    localStorage.removeItem("token");  // Si usas localStorage para almacenar el token
    // sessionStorage.removeItem("token");  // Si usas sessionStorage

    // O también puedes eliminar cookies si las usas:
    // document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

    // Redirigir al usuario a la página de inicio (u otra página de login)
    navigate("/login");
  };

  return (
    <>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>
        Dashboard Admin | Atalanta
      </title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        content="A fully responsive admin theme which can be used to build CRM, CMS,ERP etc."
        name="description"
      />
      <meta content="Techzaa" name="author" />
      {/* App favicon */}
      <link
        rel="shortcut icon"
        href="https://techzaa.in/velonic/layouts/assets/images/favicon.ico"
      />
      {/* Daterangepicker css */}
      <link
        rel="stylesheet"
        href="./administracion_files/daterangepicker.css"
      />
      {/* Vector Map css */}
      <link
        rel="stylesheet"
        href="./administracion_files/jquery-jvectormap-1.2.2.css"
      />
      {/* Theme Config Js */}
      {/* App css */}
      <link
        href="./administracion_files/app.min.css"
        rel="stylesheet"
        type="text/css"
        id="app-style"
      />
      {/* Icons css */}
      <link
        href="./administracion_files/icons.min.css"
        rel="stylesheet"
        type="text/css"
      />
      <style
        id="apexcharts-css"
        dangerouslySetInnerHTML={{
          __html:
            '.apexcharts-canvas {\n  position: relative;\n  user-select: none;\n  /* cannot give overflow: hidden as it will crop tooltips which overflow outside chart area */\n}\n\n\n/* scrollbar is not visible by default for legend, hence forcing the visibility */\n.apexcharts-canvas ::-webkit-scrollbar {\n  -webkit-appearance: none;\n  width: 6px;\n}\n\n.apexcharts-canvas ::-webkit-scrollbar-thumb {\n  border-radius: 4px;\n  background-color: rgba(0, 0, 0, .5);\n  box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n  -webkit-box-shadow: 0 0 1px rgba(255, 255, 255, .5);\n}\n\n\n.apexcharts-inner {\n  position: relative;\n}\n\n.apexcharts-text tspan {\n  font-family: inherit;\n}\n\n.legend-mouseover-inactive {\n  transition: 0.15s ease all;\n  opacity: 0.20;\n}\n\n.apexcharts-series-collapsed {\n  opacity: 0;\n}\n\n.apexcharts-tooltip {\n  border-radius: 5px;\n  box-shadow: 2px 2px 6px -4px #999;\n  cursor: default;\n  font-size: 14px;\n  left: 62px;\n  opacity: 0;\n  pointer-events: none;\n  position: absolute;\n  top: 20px;\n  display: flex;\n  flex-direction: column;\n  overflow: hidden;\n  white-space: nowrap;\n  z-index: 12;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light {\n  border: 1px solid #e3e3e3;\n  background: rgba(255, 255, 255, 0.96);\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark {\n  color: #fff;\n  background: rgba(30, 30, 30, 0.8);\n}\n\n.apexcharts-tooltip * {\n  font-family: inherit;\n}\n\n\n.apexcharts-tooltip-title {\n  padding: 6px;\n  font-size: 15px;\n  margin-bottom: 4px;\n}\n\n.apexcharts-tooltip.apexcharts-theme-light .apexcharts-tooltip-title {\n  background: #ECEFF1;\n  border-bottom: 1px solid #ddd;\n}\n\n.apexcharts-tooltip.apexcharts-theme-dark .apexcharts-tooltip-title {\n  background: rgba(0, 0, 0, 0.7);\n  border-bottom: 1px solid #333;\n}\n\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-z-value {\n  display: inline-block;\n  font-weight: 600;\n  margin-left: 5px;\n}\n\n.apexcharts-tooltip-title:empty,\n.apexcharts-tooltip-text-y-label:empty,\n.apexcharts-tooltip-text-y-value:empty,\n.apexcharts-tooltip-text-goals-label:empty,\n.apexcharts-tooltip-text-goals-value:empty,\n.apexcharts-tooltip-text-z-value:empty {\n  display: none;\n}\n\n.apexcharts-tooltip-text-y-value,\n.apexcharts-tooltip-text-goals-value,\n.apexcharts-tooltip-text-z-value {\n  font-weight: 600;\n}\n\n.apexcharts-tooltip-text-goals-label, \n.apexcharts-tooltip-text-goals-value {\n  padding: 6px 0 5px;\n}\n\n.apexcharts-tooltip-goals-group, \n.apexcharts-tooltip-text-goals-label, \n.apexcharts-tooltip-text-goals-value {\n  display: flex;\n}\n.apexcharts-tooltip-text-goals-label:not(:empty),\n.apexcharts-tooltip-text-goals-value:not(:empty) {\n  margin-top: -6px;\n}\n\n.apexcharts-tooltip-marker {\n  width: 12px;\n  height: 12px;\n  position: relative;\n  top: 0px;\n  margin-right: 10px;\n  border-radius: 50%;\n}\n\n.apexcharts-tooltip-series-group {\n  padding: 0 10px;\n  display: none;\n  text-align: left;\n  justify-content: left;\n  align-items: center;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active .apexcharts-tooltip-marker {\n  opacity: 1;\n}\n\n.apexcharts-tooltip-series-group.apexcharts-active,\n.apexcharts-tooltip-series-group:last-child {\n  padding-bottom: 4px;\n}\n\n.apexcharts-tooltip-series-group-hidden {\n  opacity: 0;\n  height: 0;\n  line-height: 0;\n  padding: 0 !important;\n}\n\n.apexcharts-tooltip-y-group {\n  padding: 6px 0 5px;\n}\n\n.apexcharts-tooltip-box, .apexcharts-custom-tooltip {\n  padding: 4px 8px;\n}\n\n.apexcharts-tooltip-boxPlot {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.apexcharts-tooltip-box>div {\n  margin: 4px 0;\n}\n\n.apexcharts-tooltip-box span.value {\n  font-weight: bold;\n}\n\n.apexcharts-tooltip-rangebar {\n  padding: 5px 8px;\n}\n\n.apexcharts-tooltip-rangebar .category {\n  font-weight: 600;\n  color: #777;\n}\n\n.apexcharts-tooltip-rangebar .series-name {\n  font-weight: bold;\n  display: block;\n  margin-bottom: 5px;\n}\n\n.apexcharts-xaxistooltip {\n  opacity: 0;\n  padding: 9px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-xaxistooltip:after,\n.apexcharts-xaxistooltip:before {\n  left: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-xaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-left: -6px;\n}\n\n.apexcharts-xaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-left: -7px;\n}\n\n.apexcharts-xaxistooltip-bottom:after,\n.apexcharts-xaxistooltip-bottom:before {\n  bottom: 100%;\n}\n\n.apexcharts-xaxistooltip-top:after,\n.apexcharts-xaxistooltip-top:before {\n  top: 100%;\n}\n\n.apexcharts-xaxistooltip-bottom:after {\n  border-bottom-color: #ECEFF1;\n}\n\n.apexcharts-xaxistooltip-bottom:before {\n  border-bottom-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:after {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-bottom.apexcharts-theme-dark:before {\n  border-bottom-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top:after {\n  border-top-color: #ECEFF1\n}\n\n.apexcharts-xaxistooltip-top:before {\n  border-top-color: #90A4AE;\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:after {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip-top.apexcharts-theme-dark:before {\n  border-top-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-xaxistooltip.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-yaxistooltip {\n  opacity: 0;\n  padding: 4px 10px;\n  pointer-events: none;\n  color: #373d3f;\n  font-size: 13px;\n  text-align: center;\n  border-radius: 2px;\n  position: absolute;\n  z-index: 10;\n  background: #ECEFF1;\n  border: 1px solid #90A4AE;\n}\n\n.apexcharts-yaxistooltip.apexcharts-theme-dark {\n  background: rgba(0, 0, 0, 0.7);\n  border: 1px solid rgba(0, 0, 0, 0.5);\n  color: #fff;\n}\n\n.apexcharts-yaxistooltip:after,\n.apexcharts-yaxistooltip:before {\n  top: 50%;\n  border: solid transparent;\n  content: " ";\n  height: 0;\n  width: 0;\n  position: absolute;\n  pointer-events: none;\n}\n\n.apexcharts-yaxistooltip:after {\n  border-color: rgba(236, 239, 241, 0);\n  border-width: 6px;\n  margin-top: -6px;\n}\n\n.apexcharts-yaxistooltip:before {\n  border-color: rgba(144, 164, 174, 0);\n  border-width: 7px;\n  margin-top: -7px;\n}\n\n.apexcharts-yaxistooltip-left:after,\n.apexcharts-yaxistooltip-left:before {\n  left: 100%;\n}\n\n.apexcharts-yaxistooltip-right:after,\n.apexcharts-yaxistooltip-right:before {\n  right: 100%;\n}\n\n.apexcharts-yaxistooltip-left:after {\n  border-left-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-left:before {\n  border-left-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:after {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-left.apexcharts-theme-dark:before {\n  border-left-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right:after {\n  border-right-color: #ECEFF1;\n}\n\n.apexcharts-yaxistooltip-right:before {\n  border-right-color: #90A4AE;\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:after {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip-right.apexcharts-theme-dark:before {\n  border-right-color: rgba(0, 0, 0, 0.5);\n}\n\n.apexcharts-yaxistooltip.apexcharts-active {\n  opacity: 1;\n}\n\n.apexcharts-yaxistooltip-hidden {\n  display: none;\n}\n\n.apexcharts-xcrosshairs,\n.apexcharts-ycrosshairs {\n  pointer-events: none;\n  opacity: 0;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-xcrosshairs.apexcharts-active,\n.apexcharts-ycrosshairs.apexcharts-active {\n  opacity: 1;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-ycrosshairs-hidden {\n  opacity: 0;\n}\n\n.apexcharts-selection-rect {\n  cursor: move;\n}\n\n.svg_select_boundingRect, .svg_select_points_rot {\n  pointer-events: none;\n  opacity: 0;\n  visibility: hidden;\n}\n.apexcharts-selection-rect + g .svg_select_boundingRect,\n.apexcharts-selection-rect + g .svg_select_points_rot {\n  opacity: 0;\n  visibility: hidden;\n}\n\n.apexcharts-selection-rect + g .svg_select_points_l,\n.apexcharts-selection-rect + g .svg_select_points_r {\n  cursor: ew-resize;\n  opacity: 1;\n  visibility: visible;\n}\n\n.svg_select_points {\n  fill: #efefef;\n  stroke: #333;\n  rx: 2;\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-zoom {\n  cursor: crosshair\n}\n\n.apexcharts-svg.apexcharts-zoomable.hovering-pan {\n  cursor: move\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon,\n.apexcharts-reset-icon,\n.apexcharts-pan-icon,\n.apexcharts-selection-icon,\n.apexcharts-menu-icon,\n.apexcharts-toolbar-custom-icon {\n  cursor: pointer;\n  width: 20px;\n  height: 20px;\n  line-height: 24px;\n  color: #6E8192;\n  text-align: center;\n}\n\n.apexcharts-zoom-icon svg,\n.apexcharts-zoomin-icon svg,\n.apexcharts-zoomout-icon svg,\n.apexcharts-reset-icon svg,\n.apexcharts-menu-icon svg {\n  fill: #6E8192;\n}\n\n.apexcharts-selection-icon svg {\n  fill: #444;\n  transform: scale(0.76)\n}\n\n.apexcharts-theme-dark .apexcharts-zoom-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomin-icon svg,\n.apexcharts-theme-dark .apexcharts-zoomout-icon svg,\n.apexcharts-theme-dark .apexcharts-reset-icon svg,\n.apexcharts-theme-dark .apexcharts-pan-icon svg,\n.apexcharts-theme-dark .apexcharts-selection-icon svg,\n.apexcharts-theme-dark .apexcharts-menu-icon svg,\n.apexcharts-theme-dark .apexcharts-toolbar-custom-icon svg {\n  fill: #f3f4f5;\n}\n\n.apexcharts-canvas .apexcharts-zoom-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-selection-icon.apexcharts-selected svg,\n.apexcharts-canvas .apexcharts-reset-zoom-icon.apexcharts-selected svg {\n  fill: #008FFB;\n}\n\n.apexcharts-theme-light .apexcharts-selection-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoom-icon:not(.apexcharts-selected):hover svg,\n.apexcharts-theme-light .apexcharts-zoomin-icon:hover svg,\n.apexcharts-theme-light .apexcharts-zoomout-icon:hover svg,\n.apexcharts-theme-light .apexcharts-reset-icon:hover svg,\n.apexcharts-theme-light .apexcharts-menu-icon:hover svg {\n  fill: #333;\n}\n\n.apexcharts-selection-icon,\n.apexcharts-menu-icon {\n  position: relative;\n}\n\n.apexcharts-reset-icon {\n  margin-left: 5px;\n}\n\n.apexcharts-zoom-icon,\n.apexcharts-reset-icon,\n.apexcharts-menu-icon {\n  transform: scale(0.85);\n}\n\n.apexcharts-zoomin-icon,\n.apexcharts-zoomout-icon {\n  transform: scale(0.7)\n}\n\n.apexcharts-zoomout-icon {\n  margin-right: 3px;\n}\n\n.apexcharts-pan-icon {\n  transform: scale(0.62);\n  position: relative;\n  left: 1px;\n  top: 0px;\n}\n\n.apexcharts-pan-icon svg {\n  fill: #fff;\n  stroke: #6E8192;\n  stroke-width: 2;\n}\n\n.apexcharts-pan-icon.apexcharts-selected svg {\n  stroke: #008FFB;\n}\n\n.apexcharts-pan-icon:not(.apexcharts-selected):hover svg {\n  stroke: #333;\n}\n\n.apexcharts-toolbar {\n  position: absolute;\n  z-index: 11;\n  max-width: 176px;\n  text-align: right;\n  border-radius: 3px;\n  padding: 0px 6px 2px 6px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\n.apexcharts-menu {\n  background: #fff;\n  position: absolute;\n  top: 100%;\n  border: 1px solid #ddd;\n  border-radius: 3px;\n  padding: 3px;\n  right: 10px;\n  opacity: 0;\n  min-width: 110px;\n  transition: 0.15s ease all;\n  pointer-events: none;\n}\n\n.apexcharts-menu.apexcharts-menu-open {\n  opacity: 1;\n  pointer-events: all;\n  transition: 0.15s ease all;\n}\n\n.apexcharts-menu-item {\n  padding: 6px 7px;\n  font-size: 12px;\n  cursor: pointer;\n}\n\n.apexcharts-theme-light .apexcharts-menu-item:hover {\n  background: #eee;\n}\n\n.apexcharts-theme-dark .apexcharts-menu {\n  background: rgba(0, 0, 0, 0.7);\n  color: #fff;\n}\n\n@media screen and (min-width: 768px) {\n  .apexcharts-canvas:hover .apexcharts-toolbar {\n    opacity: 1;\n  }\n}\n\n.apexcharts-datalabel.apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-pie-label,\n.apexcharts-datalabels,\n.apexcharts-datalabel,\n.apexcharts-datalabel-label,\n.apexcharts-datalabel-value {\n  cursor: default;\n  pointer-events: none;\n}\n\n.apexcharts-pie-label-delay {\n  opacity: 0;\n  animation-name: opaque;\n  animation-duration: 0.3s;\n  animation-fill-mode: forwards;\n  animation-timing-function: ease;\n}\n\n.apexcharts-canvas .apexcharts-element-hidden {\n  opacity: 0;\n}\n\n.apexcharts-hide .apexcharts-series-points {\n  opacity: 0;\n}\n\n.apexcharts-gridline,\n.apexcharts-annotation-rect,\n.apexcharts-xaxis-annotation-label,\n.apexcharts-yaxis-annotation-label,\n.apexcharts-point-annotation-label,\n.apexcharts-tooltip .apexcharts-marker,\n.apexcharts-area-series .apexcharts-area,\n.apexcharts-line,\n.apexcharts-zoom-rect,\n.apexcharts-toolbar svg,\n.apexcharts-area-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-line-series .apexcharts-series-markers .apexcharts-marker.no-pointer-events,\n.apexcharts-radar-series path,\n.apexcharts-radar-series polygon {\n  pointer-events: none;\n}\n\n\n/* markers */\n\n.apexcharts-marker {\n  transition: 0.15s ease all;\n}\n\n@keyframes opaque {\n  0% {\n    opacity: 0;\n  }\n  100% {\n    opacity: 1;\n  }\n}\n\n\n/* Resize generated styles */\n\n@keyframes resizeanim {\n  from {\n    opacity: 0;\n  }\n  to {\n    opacity: 0;\n  }\n}\n\n.resize-triggers {\n  animation: 1ms resizeanim;\n  visibility: hidden;\n  opacity: 0;\n}\n\n.resize-triggers,\n.resize-triggers>div,\n.contract-trigger:before {\n  content: " ";\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n\n.resize-triggers>div {\n  background: #eee;\n  overflow: auto;\n}\n\n.contract-trigger:before {\n  width: 200%;\n  height: 200%;\n}',
        }}
      />
      {/* Begin page */}
      <div className="wrapper">
        {/* ========== Topbar Start ========== */}
        <div className="navbar-custom bg-white">
          <div className="topbar container-fluid">
            <div className="d-flex align-items-center gap-1">
              {/* Topbar Brand Logo */}
              <div className="logo-topbar">
                {/* Logo light */}
                <a
                  href="https://techzaa.in/velonic/layouts/index.html"
                  className="logo-light"
                >
                  <span className="logo-lg">
                    <img src="./administracion_files/logo.png" alt="logo" />
                  </span>
                  <span className="logo-sm">
                    <img
                      src="./administracion_files/logo-sm.png"
                      alt="small logo"
                    />
                  </span>
                </a>
                {/* Logo Dark */}
                <a
                  href="https://techzaa.in/velonic/layouts/index.html"
                  className="logo-dark"
                >
                  <span className="logo-lg">
                    <img
                      src="./administracion_files/logo-dark.png"
                      alt="dark logo"
                    />
                  </span>
                  <span className="logo-sm">
                    <img
                      src="./administracion_files/logo-sm.png"
                      alt="small logo"
                    />
                  </span>
                </a>
              </div>
              {/* Sidebar Menu Toggle Button */}
              <button className="button-toggle-menu">
                <i className="ri-menu-line" />
              </button>
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
                                backgroundColor: !message.read
                                  ? "#007bff"
                                  : "#ccc", // Color según si está leído
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
                      href="#"
                      onClick={(e) => {
                        e.preventDefault();
                        setShowAll(true); // Mostrar todos los mensajes
                      }}
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
                        <h6 className="m-0 fs-16 fw-semibold">
                          Notificaciones
                        </h6>
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
                                <p className="notify-details mb-0 ms-2 d-flex flex-column justify-content-center">
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
                      href="#"
                      onClick={() =>
                        setVerTodasNotificaciones(!verTodasNotificaciones)
                      }
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
        {/* ========== Topbar End ========== */}
        {/* ========== Left Sidebar Start ========== */}
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
                <div
                  className="simplebar-offset"
                  style={{ right: 0, bottom: 0 }}
                >
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
                            className="side-nav-link active"
                          >
                            <i className="ri-dashboard-3-line" />
                            <span> Dashboard </span>
                          </Link>
                        </li>
                        <li className="side-nav-item">
                          <a
                            data-bs-toggle="collapse"
                            href="https://techzaa.in/velonic/layouts/index.html#sidebarPages"
                            aria-expanded="false"
                            aria-controls="sidebarPages"
                            className="side-nav-link collapsed"
                          >
                            <i className="ri-pages-line" />
                            <span> Facturas </span>
                            <span className="menu-arrow" />
                          </a>
                          <div
                            className="collapse"
                            id="sidebarPages"
                            style={{}}
                          >
                            <ul className="side-nav-second-level">
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/pages-starter.html">
                                  Facturas clientes
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/pages-contact-list.html">
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
                            aria-expanded="false"
                            aria-controls="sidebarPagesAuth"
                            className="side-nav-link collapsed"
                          >
                            <i className="ri-earth-line" />
                            <span> Paquetes </span>
                            <span className="menu-arrow" />
                          </a>
                          <div
                            className="collapse"
                            id="sidebarPagesAuth"
                            style={{}}
                          >
                            <ul className="side-nav-second-level">
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/auth-login.html">
                                  Listado
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/auth-login.html">
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
                            aria-expanded="false"
                            aria-controls="sidebarLayouts"
                            className="side-nav-link"
                          >
                            <i className="ri-layout-line" />
                            <span> Blog </span>
                            <span className="menu-arrow" />
                          </a>

                          <div className="collapse" id="sidebarLayouts">
                            <ul className="side-nav-second-level">
                              <li>
                                <a href="#" target="_blank">
                                  Listado
                                </a>
                              </li>
                              <li>
                                <a href="#" target="_blank">
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
                            aria-expanded="false"
                            aria-controls="sidebarBaseUI"
                            className="side-nav-link collapsed"
                          >
                            <i className="ri-briefcase-line" />
                            <span> Reservas </span>
                            <span className="menu-arrow" />
                          </a>
                          <div
                            className="collapse"
                            id="sidebarBaseUI"
                            style={{}}
                          >
                            <ul className="side-nav-second-level">
                              <li>
                                <a href="#">Confirmadas</a>
                              </li>
                              <li>
                                <a href="#">En Proceso</a>
                              </li>
                              <li>
                                <a href="#">Canceladas</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="side-nav-item">
                          <a
                            data-bs-toggle="collapse"
                            href="https://techzaa.in/velonic/layouts/index.html#sidebarExtendedUI"
                            aria-expanded="false"
                            aria-controls="sidebarExtendedUI"
                            className="side-nav-link"
                          >
                            <i className="ri-user-line" />
                            <span> Administradores </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarExtendedUI">
                            <ul className="side-nav-second-level">
                              <li>
                                <a href="#">Todos</a>
                              </li>
                              <li>
                                <a href="#">Alta Usuarios</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="side-nav-item">
                          <a
                            data-bs-toggle="collapse"
                            href="https://techzaa.in/velonic/layouts/index.html#sidebarIcons"
                            aria-expanded="false"
                            aria-controls="sidebarIcons"
                            className="side-nav-link"
                          >
                            <i className="ri-pencil-ruler-2-line" />
                            <span> Eventos </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarIcons">
                            <ul className="side-nav-second-level">
                              <li>
                                <a href="#">Listado</a>
                              </li>
                              <li>
                                <a href="#">Agregar eventos</a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="side-nav-item">
                          <a
                            data-bs-toggle="collapse"
                            href="#sidebarMessages"
                            aria-expanded="false"
                            aria-controls="sidebarMessages"
                            className="side-nav-link"
                          >
                            <i className="ri-message-3-line" />
                            <span> Mensajes </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarMessages">
                            <ul className="side-nav-second-level">
                              <li>
                                <a href="#">Todos los mensajes</a>
                              </li>
                            </ul>
                          </div>
                        </li>

                        <li className="side-nav-item">
                          <a
                            data-bs-toggle="collapse"
                            href="#sidebarNotifications"
                            aria-expanded="false"
                            aria-controls="sidebarNotifications"
                            className="side-nav-link"
                          >
                            <i className="ri-notification-3-line" />
                            <span> Notificaciones </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarNotifications">
                            <ul className="side-nav-second-level">
                              <li>
                                <a href="#">Todas las notificaciones</a>
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
        {/* ========== Left Sidebar End ========== */}
        {/* ============================================================== */}
        {/* Start Page Content here */}
        {/* ============================================================== */}
        <div className="content-page">
          <div className="content">
            {/* Start Content*/}
            <div className="container-fluid">
              {/* start page title */}
              <div className="row">
                <div className="col-12">
                  <div className="page-title-box">
                    <h4 className="page-title">¡Bienvenido!</h4>
                  </div>
                </div>
              </div>
              {/* end page title */}
              <div className="row">
                <div className="col-xxl-3 col-sm-6">
                  <div className="card widget-flat text-bg-pink">
                    <div className="card-body">
                      <div className="float-end">
                        <i className="ri-store-2-line widget-icon" />
                      </div>
                      <h6 className="text-uppercase mt-0" title="Customers">
                        Total Proveedores
                      </h6>
                      <h2 className="my-2">{totalProveedores}</h2>
                    </div>
                  </div>
                </div>{" "}
                {/* end col*/}
                <div className="col-xxl-3 col-sm-6">
                  <div className="card widget-flat text-bg-purple">
                    <div className="card-body">
                      <div className="float-end">
                        <i className="ri-wallet-2-line widget-icon" />
                      </div>
                      <h6 className="text-uppercase mt-0" title="Customers">
                        Total Ingresos
                      </h6>
                      <h2 className="my-2">{totalIngresos} €</h2>
                    </div>
                  </div>
                </div>{" "}
                {/* end col*/}
                <div className="col-xxl-3 col-sm-6">
                  <div className="card widget-flat text-bg-info">
                    <div className="card-body">
                      <div className="float-end">
                        <i className="ri-shopping-basket-line widget-icon" />
                      </div>
                      <h6 className="text-uppercase mt-0" title="Customers">
                        Total de Reservas
                      </h6>
                      <h2 className="my-2">{totalReservas}</h2>
                    </div>
                  </div>
                </div>{" "}
                {/* end col*/}
                <div className="col-xxl-3 col-sm-6">
                  <div className="card widget-flat text-bg-primary">
                    <div className="card-body">
                      <div className="float-end">
                        <i className="ri-group-2-line widget-icon" />
                      </div>
                      <h6 className="text-uppercase mt-0" title="Customers">
                        Total Usuarios
                      </h6>
                      <h2 className="my-2">{totalUsuarios}</h2>
                    </div>
                  </div>
                </div>{" "}
                {/* end col*/}
              </div>
              <div className="row">
                <div className="col-lg-8">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-widgets">
                        <a href="javascript:;" data-bs-toggle="reload">
                          <i className="ri-refresh-line" />
                        </a>
                        <a
                          data-bs-toggle="collapse"
                          href="https://techzaa.in/velonic/layouts/index.html#weeklysales-collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="weeklysales-collapse"
                        >
                          <i className="ri-subtract-line" />
                        </a>
                        <a
                          href="https://techzaa.in/velonic/layouts/index.html#"
                          data-bs-toggle="remove"
                        >
                          <i className="ri-close-line" />
                        </a>
                      </div>
                      <h5 className="header-title mb-0">
                        Informe semanal de ventas
                      </h5>
                      <div
                        id="weeklysales-collapse"
                        className="collapse pt-3 show"
                      >
                        <div dir="ltr">
                          <div
                            id="revenue-chart"
                            className="apex-charts"
                            style={{ minHeight: 377 }}
                          >
                            <ApexCharts
                              options={opciones}
                              series={series}
                              type="bar"
                              height={350}
                            />
                          </div>
                        </div>
                        <div className="row text-center">
                          <div className="col">
                            <p className="text-muted mt-3">Semana Actual</p>
                            <h3 className=" mb-0">
                              <span>{totalIngresosSemanaActual} €</span>
                            </h3>
                          </div>
                          <div className="col">
                            <p className="text-muted mt-3">Semana Anterior</p>
                            <h3 className=" mb-0">
                              <span>{totalIngresosSemanaAnterior} € </span>
                            </h3>
                          </div>
                          <div className="col">
                            <p className="text-muted mt-3">Clientes</p>
                            <h3 className=" mb-0">
                              <span>{totalUsuarios}</span>
                            </h3>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* end card-body*/}
                  </div>{" "}
                  {/* end card*/}
                </div>{" "}
                {/* end col*/}
                <div className="col-lg-4">
                  <div className="card">
                    <div className="card-body">
                      <div className="card-widgets">
                        <a href="javascript:;" data-bs-toggle="reload">
                          <i className="ri-refresh-line" />
                        </a>
                        <a
                          data-bs-toggle="collapse"
                          href="https://techzaa.in/velonic/layouts/index.html#yearly-sales-collapse"
                          role="button"
                          aria-expanded="false"
                          aria-controls="yearly-sales-collapse"
                        >
                          <i className="ri-subtract-line" />
                        </a>
                        <a
                          href="https://techzaa.in/velonic/layouts/index.html#"
                          data-bs-toggle="remove"
                        >
                          <i className="ri-close-line" />
                        </a>
                      </div>
                      <h5 className="header-title mb-0">
                        Informe de ventas anual
                      </h5>
                      <div
                        id="yearly-sales-collapse"
                        className="collapse pt-3 show"
                      >
                        <div dir="ltr">
                          <div
                            id="yearly-sales-chart"
                            className="apex-charts"
                            data-colors="#3bc0c3"
                            style={{ minHeight: 250 }}
                          >
                            <ReactApexChart2
                              options={opciones2}
                              series={series2}
                              type="line"
                              height={250}
                            />
                          </div>
                        </div>
                        <div className="row text-center">
                          <div className="col">
                            <p className="text-muted mt-3 mb-2">
                              Cuatrimestre 1
                            </p>
                            <h4 className="mb-0">{totalPrimerTrimestre}€</h4>
                          </div>
                          <div className="col">
                            <p className="text-muted mt-3 mb-2">
                              Cuatrimestre 2
                            </p>
                            <h4 className="mb-0">{totalSegundoTrimestre}€</h4>
                          </div>
                          <div className="col">
                            <p className="text-muted mt-3 mb-2">
                              Cuatrimestre 3
                            </p>
                            <h4 className="mb-0">{totalTercerTrimestre}€</h4>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* end card-body*/}
                  </div>{" "}
                  {/* end card*/}
                  <div className="card"></div> {/* end card*/}
                </div>{" "}
                {/* end col*/}
              </div>
              {/* end row */}
              <div className="row">
                <div className="col-xl-4">
                  {/* Chat*/}
                  <div className="card">
                    <div className="card-body p-0">
                      <div className="p-3 d-flex justify-content-between align-items-center">
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={handlePrevMonth}
                        >
                          Anterior
                        </button>
                        <h5 className="header-title mb-0 text-center">
                          Calendario {currentMonth + 1}/{currentYear}
                        </h5>
                        <button
                          className="btn btn-sm btn-primary"
                          onClick={handleNextMonth}
                        >
                          Siguiente
                        </button>
                      </div>
                      <div className="table-responsive mx-2">
                        <table className="table table-bordered text-center align-middle">
                          <thead>
                            <tr className="bg-primary text-white">
                              {["L", "M", "X", "J", "V", "S", "D"].map(
                                (day, i) => (
                                  <th key={i} className="text-white">
                                    {day}
                                  </th>
                                )
                              )}
                            </tr>
                          </thead>
                          <tbody>
                            {Array.from({ length: 6 }, (_, rowIndex) => (
                              <tr key={rowIndex}>
                                {Array.from({ length: 7 }, (_, colIndex) => {
                                  const dayIndex = rowIndex * 7 + colIndex;
                                  const day =
                                    dayIndex < daysInMonth.length
                                      ? daysInMonth[dayIndex]
                                      : "";

                                  const dayKey = `${currentYear}-${
                                    currentMonth + 1
                                  }-${day}`;
                                  const dayEvents = eventos[dayKey] || [];

                                  return (
                                    <td
                                      key={colIndex}
                                      style={{
                                        verticalAlign: "top",
                                        padding: "4px",
                                        minWidth: "35px",
                                        maxWidth: "40px",
                                        height: "60px",
                                        overflow: "hidden",
                                      }}
                                    >
                                      <div
                                        style={{
                                          fontSize: "0.8rem",
                                          lineHeight: "1.2",
                                          overflow: "hidden",
                                          textOverflow: "ellipsis",
                                        }}
                                        title={dayEvents.join(", ")}
                                      >
                                        <strong>{day}</strong>
                                        {dayEvents.map((eventText, i) => (
                                          <div
                                            key={i}
                                            style={{
                                              color: "red",
                                              fontSize: "0.7rem",
                                              whiteSpace: "nowrap",
                                              overflow: "hidden",
                                              textOverflow: "ellipsis",
                                            }}
                                          >
                                            {eventText}
                                          </div>
                                        ))}
                                      </div>
                                    </td>
                                  );
                                })}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* end card*/}
                </div>{" "}
                {/* end col*/}
                <div className="col-xl-8">
                  {/* Todo*/}
                  <div className="card">
                    <div className="card-body p-0">
                      <div className="p-3">
                        <div className="card-widgets">
                          <a href="javascript:;" data-bs-toggle="reload">
                            <i className="ri-refresh-line" />
                          </a>
                          <a
                            data-bs-toggle="collapse"
                            href="https://techzaa.in/velonic/layouts/index.html#yearly-sales-collapse"
                            role="button"
                            aria-expanded="false"
                            aria-controls="yearly-sales-collapse"
                          >
                            <i className="ri-subtract-line" />
                          </a>
                          <a
                            href="https://techzaa.in/velonic/layouts/index.html#"
                            data-bs-toggle="remove"
                          >
                            <i className="ri-close-line" />
                          </a>
                        </div>
                        <h5 className="header-title mb-0">Proyectos</h5>
                      </div>
                      <div id="yearly-sales-collapse" className="collapse show">
                        <div className="table-responsive">
                          <table className="table table-nowrap table-hover mb-0">
                            <thead>
                              <tr>
                                <th>ID</th>
                                <th>Nombre</th>
                                <th>Fecha Inicio</th>
                                <th>Fecha Fin</th>
                                <th>Estado</th>
                                <th>Asignado</th>
                              </tr>
                            </thead>
                            <tbody>
                              {proyectos.map((proyecto, index) => (
                                <tr key={proyecto.id}>
                                  <td>{index + 1}</td>
                                  <td>{proyecto.nombre}</td>
                                  <td>
                                    {formatearFecha(proyecto.fechaInicio)}
                                  </td>
                                  <td>{formatearFecha(proyecto.fechaFin)}</td>
                                  <td>
                                    <span
                                      className={`badge ${getBadgeClass(
                                        proyecto.estado
                                      )}`}
                                    >
                                      {proyecto.estado}
                                    </span>
                                  </td>
                                  <td>{proyecto.asignado}</td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* end card*/}
                </div>{" "}
                {/* end col*/}
              </div>
              {/* end row */}
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
        {/* ============================================================== */}
        {/* End Page content */}
        {/* ============================================================== */}
      </div>
      {/* END wrapper */}
      {/* Theme Settings */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex={-1}
        id="theme-settings-offcanvas"
      >
        <div className="d-flex align-items-center bg-primary p-3 offcanvas-header">
          <h5 className="text-white m-0">Theme Settings</h5>
          <button
            type="button"
            className="btn-close btn-close-white ms-auto"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body p-0">
          <div data-simplebar="init" className="h-100">
            <div className="simplebar-wrapper" style={{ margin: 0 }}>
              <div className="simplebar-height-auto-observer-wrapper">
                <div className="simplebar-height-auto-observer" />
              </div>
              <div className="simplebar-mask">
                <div
                  className="simplebar-offset"
                  style={{ right: 0, bottom: 0 }}
                >
                  <div
                    className="simplebar-content-wrapper"
                    tabIndex={0}
                    role="region"
                    aria-label="scrollable content"
                    style={{ height: "100%", overflow: "hidden scroll" }}
                  >
                    <div className="simplebar-content" style={{ padding: 0 }}>
                      <div className="p-3">
                        <h5 className="mb-3 fs-16 fw-bold">Color Scheme</h5>
                        <div className="row">
                          <div className="col-4">
                            <div className="form-check form-switch card-switch mb-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="data-bs-theme"
                                id="layout-color-light"
                                defaultValue="light"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="layout-color-light"
                              >
                                <img
                                  src="./administracion_files/light.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </label>
                            </div>
                            <h5 className="font-14 text-center text-muted mt-2">
                              Light
                            </h5>
                          </div>
                          <div className="col-4">
                            <div className="form-check form-switch card-switch mb-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="data-bs-theme"
                                id="layout-color-dark"
                                defaultValue="dark"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="layout-color-dark"
                              >
                                <img
                                  src="./administracion_files/dark.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </label>
                            </div>
                            <h5 className="font-14 text-center text-muted mt-2">
                              Dark
                            </h5>
                          </div>
                        </div>
                        <div id="layout-width">
                          <h5 className="my-3 fs-16 fw-bold">Layout Mode</h5>
                          <div className="row">
                            <div className="col-4">
                              <div className="form-check form-switch card-switch mb-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="data-layout-mode"
                                  id="layout-mode-fluid"
                                  defaultValue="fluid"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="layout-mode-fluid"
                                >
                                  <img
                                    src="./administracion_files/light.png"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </label>
                              </div>
                              <h5 className="font-14 text-center text-muted mt-2">
                                Fluid
                              </h5>
                            </div>
                            <div className="col-4">
                              <div id="layout-boxed">
                                <div className="form-check form-switch card-switch mb-1">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    name="data-layout-mode"
                                    id="layout-mode-boxed"
                                    defaultValue="boxed"
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="layout-mode-boxed"
                                  >
                                    <img
                                      src="./administracion_files/boxed.png"
                                      alt=""
                                      className="img-fluid"
                                    />
                                  </label>
                                </div>
                                <h5 className="font-14 text-center text-muted mt-2">
                                  Boxed
                                </h5>
                              </div>
                            </div>
                          </div>
                        </div>
                        <h5 className="my-3 fs-16 fw-bold">Topbar Color</h5>
                        <div className="row">
                          <div className="col-4">
                            <div className="form-check form-switch card-switch mb-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="data-topbar-color"
                                id="topbar-color-light"
                                defaultValue="light"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="topbar-color-light"
                              >
                                <img
                                  src="./administracion_files/light.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </label>
                            </div>
                            <h5 className="font-14 text-center text-muted mt-2">
                              Light
                            </h5>
                          </div>
                          <div className="col-4">
                            <div className="form-check form-switch card-switch mb-1">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                name="data-topbar-color"
                                id="topbar-color-dark"
                                defaultValue="dark"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="topbar-color-dark"
                              >
                                <img
                                  src="./administracion_files/topbar-dark.png"
                                  alt=""
                                  className="img-fluid"
                                />
                              </label>
                            </div>
                            <h5 className="font-14 text-center text-muted mt-2">
                              Dark
                            </h5>
                          </div>
                        </div>
                        <div>
                          <h5 className="my-3 fs-16 fw-bold">Menu Color</h5>
                          <div className="row">
                            <div className="col-4">
                              <div className="form-check form-switch card-switch mb-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="data-menu-color"
                                  id="leftbar-color-light"
                                  defaultValue="light"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="leftbar-color-light"
                                >
                                  <img
                                    src="./administracion_files/sidebar-light.png"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </label>
                              </div>
                              <h5 className="font-14 text-center text-muted mt-2">
                                Light
                              </h5>
                            </div>
                            <div className="col-4">
                              <div className="form-check form-switch card-switch mb-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="data-menu-color"
                                  id="leftbar-color-dark"
                                  defaultValue="dark"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="leftbar-color-dark"
                                >
                                  <img
                                    src="./administracion_files/light.png"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </label>
                              </div>
                              <h5 className="font-14 text-center text-muted mt-2">
                                Dark
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div id="sidebar-size">
                          <h5 className="my-3 fs-16 fw-bold">Sidebar Size</h5>
                          <div className="row">
                            <div className="col-4">
                              <div className="form-check form-switch card-switch mb-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="data-sidenav-size"
                                  id="leftbar-size-default"
                                  defaultValue="default"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="leftbar-size-default"
                                >
                                  <img
                                    src="./administracion_files/light.png"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </label>
                              </div>
                              <h5 className="font-14 text-center text-muted mt-2">
                                Default
                              </h5>
                            </div>
                            <div className="col-4">
                              <div className="form-check form-switch card-switch mb-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="data-sidenav-size"
                                  id="leftbar-size-compact"
                                  defaultValue="compact"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="leftbar-size-compact"
                                >
                                  <img
                                    src="./administracion_files/compact.png"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </label>
                              </div>
                              <h5 className="font-14 text-center text-muted mt-2">
                                Compact
                              </h5>
                            </div>
                            <div className="col-4">
                              <div className="form-check form-switch card-switch mb-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="data-sidenav-size"
                                  id="leftbar-size-small"
                                  defaultValue="condensed"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="leftbar-size-small"
                                >
                                  <img
                                    src="./administracion_files/sm.png"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </label>
                              </div>
                              <h5 className="font-14 text-center text-muted mt-2">
                                Condensed
                              </h5>
                            </div>
                            <div className="col-4">
                              <div className="form-check form-switch card-switch mb-1">
                                <input
                                  className="form-check-input"
                                  type="checkbox"
                                  name="data-sidenav-size"
                                  id="leftbar-size-full"
                                  defaultValue="full"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="leftbar-size-full"
                                >
                                  <img
                                    src="./administracion_files/full.png"
                                    alt=""
                                    className="img-fluid"
                                  />
                                </label>
                              </div>
                              <h5 className="font-14 text-center text-muted mt-2">
                                Full Layout
                              </h5>
                            </div>
                          </div>
                        </div>
                        <div id="layout-position">
                          <h5 className="my-3 fs-16 fw-bold">
                            Layout Position
                          </h5>
                          <div className="btn-group checkbox" role="group">
                            <input
                              type="radio"
                              className="btn-check"
                              name="data-layout-position"
                              id="layout-position-fixed"
                              defaultValue="fixed"
                            />
                            <label
                              className="btn btn-soft-primary w-sm"
                              htmlFor="layout-position-fixed"
                            >
                              Fixed
                            </label>
                            <input
                              type="radio"
                              className="btn-check"
                              name="data-layout-position"
                              id="layout-position-scrollable"
                              defaultValue="scrollable"
                            />
                            <label
                              className="btn btn-soft-primary w-sm ms-0"
                              htmlFor="layout-position-scrollable"
                            >
                              Scrollable
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="simplebar-placeholder"
                style={{ width: "auto", height: 1154 }}
              />
            </div>
            <div
              className="simplebar-track simplebar-horizontal"
              style={{ visibility: "hidden" }}
            >
              <div
                className="simplebar-scrollbar"
                style={{ width: 0, display: "none" }}
              />
            </div>
            <div
              className="simplebar-track simplebar-vertical"
              style={{ visibility: "visible" }}
            >
              <div
                className="simplebar-scrollbar"
                style={{
                  height: 568,
                  transform: "translate3d(0px, 0px, 0px)",
                  display: "block",
                }}
              />
            </div>
          </div>
        </div>
        <div className="offcanvas-footer border-top p-3 text-center">
          <div className="row">
            <div className="col-6">
              <button
                type="button"
                className="btn btn-light w-100"
                id="reset-layout"
              >
                Reset
              </button>
            </div>
            <div className="col-6">
              <a
                href="https://1.envato.market/velonic"
                target="_blank"
                role="button"
                className="btn btn-primary w-100"
              >
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DashboardAdmin;
