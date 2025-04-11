import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ReactApexChart from "react-apexcharts";

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
  const chartData = {
    series: [
      {
        name: "Ingresos (€)",
        data: [1200, 1900, 1000, 1500, 1700, 2500, 2040], // lunes a viernes
      },
      {
        name: "Ventas",
        data: [10, 15, 8, 13, 11, 14, 20], // lunes a viernes
      },
    ],
    options: {
      chart: {
        type: "bar",
        height: 350,
        stacked: false,
        toolbar: { show: false },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "40%",
          endingShape: "rounded",
        },
      },
      dataLabels: {
        enabled: false,
      },
      xaxis: {
        categories: ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],
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
      colors: ["#3bc0c3", "#1a2942"],
      tooltip: {
        shared: true,
        intersect: false,
      },
      legend: {
        position: "top",
      },
    },
  };

  return (
    <>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>
        Dashboard | Velonic - Bootstrap 5 Admin &amp; Dashboard Template
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
                    4
                  </span>
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
                  <div className="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
                    <div className="row align-items-center">
                      <div className="col">
                        <h6 className="m-0 fs-16 fw-semibold"> Messages</h6>
                      </div>
                      <div className="col-auto">
                        <a
                          href="javascript: void(0);"
                          className="text-dark text-decoration-underline"
                        >
                          <small>Clear All</small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div style={{ maxHeight: 300 }} data-simplebar="init">
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
                            style={{ height: "auto", overflow: "hidden" }}
                          >
                            <div
                              className="simplebar-content"
                              style={{ padding: 0 }}
                            >
                              {/* item*/}
                              <a
                                href="javascript:void(0);"
                                className="dropdown-item p-0 notify-item read-noti card m-0 shadow-none"
                              >
                                <div className="card-body">
                                  <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                      <div className="notify-icon">
                                        <img
                                          src="./administracion_files/avatar-1.jpg"
                                          className="img-fluid rounded-circle"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="flex-grow-1 text-truncate ms-2">
                                      <h5 className="noti-item-title fw-semibold fs-14">
                                        Cristina Pride{" "}
                                        <small className="fw-normal text-muted float-end ms-1">
                                          1 day ago
                                        </small>
                                      </h5>
                                      <small className="noti-item-subtitle text-muted">
                                        Hi, How are you? What about our next
                                        meeting
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              {/* item*/}
                              <a
                                href="javascript:void(0);"
                                className="dropdown-item p-0 notify-item read-noti card m-0 shadow-none"
                              >
                                <div className="card-body">
                                  <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                      <div className="notify-icon">
                                        <img
                                          src="./administracion_files/avatar-2.jpg"
                                          className="img-fluid rounded-circle"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="flex-grow-1 text-truncate ms-2">
                                      <h5 className="noti-item-title fw-semibold fs-14">
                                        Sam Garret{" "}
                                        <small className="fw-normal text-muted float-end ms-1">
                                          2 day ago
                                        </small>
                                      </h5>
                                      <small className="noti-item-subtitle text-muted">
                                        Yeah everything is fine
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              {/* item*/}
                              <a
                                href="javascript:void(0);"
                                className="dropdown-item p-0 notify-item read-noti card m-0 shadow-none"
                              >
                                <div className="card-body">
                                  <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                      <div className="notify-icon">
                                        <img
                                          src="./administracion_files/avatar-3.jpg"
                                          className="img-fluid rounded-circle"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="flex-grow-1 text-truncate ms-2">
                                      <h5 className="noti-item-title fw-semibold fs-14">
                                        Karen Robinson{" "}
                                        <small className="fw-normal text-muted float-end ms-1">
                                          2 day ago
                                        </small>
                                      </h5>
                                      <small className="noti-item-subtitle text-muted">
                                        Wow that's great
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              {/* item*/}
                              <a
                                href="javascript:void(0);"
                                className="dropdown-item p-0 notify-item read-noti card m-0 shadow-none"
                              >
                                <div className="card-body">
                                  <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                      <div className="notify-icon">
                                        <img
                                          src="./administracion_files/avatar-4.jpg"
                                          className="img-fluid rounded-circle"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="flex-grow-1 text-truncate ms-2">
                                      <h5 className="noti-item-title fw-semibold fs-14">
                                        Sherry Marshall{" "}
                                        <small className="fw-normal text-muted float-end ms-1">
                                          3 day ago
                                        </small>
                                      </h5>
                                      <small className="noti-item-subtitle text-muted">
                                        Hi, How are you? What about our next
                                        meeting
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </a>
                              {/* item*/}
                              <a
                                href="javascript:void(0);"
                                className="dropdown-item p-0 notify-item read-noti card m-0 shadow-none"
                              >
                                <div className="card-body">
                                  <div className="d-flex align-items-center">
                                    <div className="flex-shrink-0">
                                      <div className="notify-icon">
                                        <img
                                          src="./administracion_files/avatar-5.jpg"
                                          className="img-fluid rounded-circle"
                                          alt=""
                                        />
                                      </div>
                                    </div>
                                    <div className="flex-grow-1 text-truncate ms-2">
                                      <h5 className="noti-item-title fw-semibold fs-14">
                                        Shawn Millard{" "}
                                        <small className="fw-normal text-muted float-end ms-1">
                                          4 day ago
                                        </small>
                                      </h5>
                                      <small className="noti-item-subtitle text-muted">
                                        Yeah everything is fine
                                      </small>
                                    </div>
                                  </div>
                                </div>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="simplebar-placeholder"
                        style={{ width: 0, height: 0 }}
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
                      style={{ visibility: "hidden" }}
                    >
                      <div
                        className="simplebar-scrollbar"
                        style={{ height: 0, display: "none" }}
                      />
                    </div>
                  </div>
                  {/* All*/}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item text-center text-primary text-decoration-underline fw-bold notify-item border-top border-light py-2"
                  >
                    View All
                  </a>
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
                  <span className="noti-icon-badge badge text-bg-pink">3</span>
                </a>
                <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
                  <div className="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
                    <div className="row align-items-center">
                      <div className="col">
                        <h6 className="m-0 fs-16 fw-semibold"> Notification</h6>
                      </div>
                      <div className="col-auto">
                        <a
                          href="javascript: void(0);"
                          className="text-dark text-decoration-underline"
                        >
                          <small>Clear All</small>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div style={{ maxHeight: 300 }} data-simplebar="init">
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
                            style={{ height: "auto", overflow: "hidden" }}
                          >
                            <div
                              className="simplebar-content"
                              style={{ padding: 0 }}
                            >
                              {/* item*/}
                              <a
                                href="javascript:void(0);"
                                className="dropdown-item notify-item"
                              >
                                <div className="notify-icon bg-primary-subtle">
                                  <i className="mdi mdi-comment-account-outline text-primary" />
                                </div>
                                <p className="notify-details">
                                  Caleb Flakelar commented on Admin
                                  <small className="noti-time">1 min ago</small>
                                </p>
                              </a>
                              {/* item*/}
                              <a
                                href="javascript:void(0);"
                                className="dropdown-item notify-item"
                              >
                                <div className="notify-icon bg-warning-subtle">
                                  <i className="mdi mdi-account-plus text-warning" />
                                </div>
                                <p className="notify-details">
                                  New user registered.
                                  <small className="noti-time">
                                    5 hours ago
                                  </small>
                                </p>
                              </a>
                              {/* item*/}
                              <a
                                href="javascript:void(0);"
                                className="dropdown-item notify-item"
                              >
                                <div className="notify-icon bg-danger-subtle">
                                  <i className="mdi mdi-heart text-danger" />
                                </div>
                                <p className="notify-details">
                                  Carlos Crouch liked
                                  <small className="noti-time">
                                    3 days ago
                                  </small>
                                </p>
                              </a>
                              {/* item*/}
                              <a
                                href="javascript:void(0);"
                                className="dropdown-item notify-item"
                              >
                                <div className="notify-icon bg-pink-subtle">
                                  <i className="mdi mdi-comment-account-outline text-pink" />
                                </div>
                                <p className="notify-details">
                                  Caleb Flakelar commented on Admi
                                  <small className="noti-time">
                                    4 days ago
                                  </small>
                                </p>
                              </a>
                              {/* item*/}
                              <a
                                href="javascript:void(0);"
                                className="dropdown-item notify-item"
                              >
                                <div className="notify-icon bg-purple-subtle">
                                  <i className="mdi mdi-account-plus text-purple" />
                                </div>
                                <p className="notify-details">
                                  New user registered.
                                  <small className="noti-time">
                                    7 days ago
                                  </small>
                                </p>
                              </a>
                              {/* item*/}
                              <a
                                href="javascript:void(0);"
                                className="dropdown-item notify-item"
                              >
                                <div className="notify-icon bg-success-subtle">
                                  <i className="mdi mdi-heart text-success" />
                                </div>
                                <p className="notify-details">
                                  Carlos Crouch liked <b>Admin</b>.
                                  <small className="noti-time">
                                    Carlos Crouch liked
                                  </small>
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="simplebar-placeholder"
                        style={{ width: 0, height: 0 }}
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
                      style={{ visibility: "hidden" }}
                    >
                      <div
                        className="simplebar-scrollbar"
                        style={{ height: 0, display: "none" }}
                      />
                    </div>
                  </div>
                  {/* All*/}
                  <a
                    href="javascript:void(0);"
                    className="dropdown-item text-center text-primary text-decoration-underline fw-bold notify-item border-top border-light py-2"
                  >
                    View All
                  </a>
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
                    <img
                      src="./administracion_files/avatar-1.jpg"
                      alt="user-image"
                      width={32}
                      className="rounded-circle"
                    />
                  </span>
                  <span className="d-lg-block d-none">
                    <h5 className="my-0 fw-normal">
                      Thomson{" "}
                      <i className="ri-arrow-down-s-line d-none d-sm-inline-block align-middle" />
                    </h5>
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
                  <a
                    href="https://techzaa.in/velonic/layouts/auth-logout-2.html"
                    className="dropdown-item"
                  >
                    <i className="ri-logout-box-line fs-18 align-middle me-1" />
                    <span>Logout</span>
                  </a>
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
                          <a
                            href="https://techzaa.in/velonic/layouts/index.html"
                            className="side-nav-link active"
                          >
                            <i className="ri-dashboard-3-line" />
                            <span className="badge bg-success float-end">
                              9+
                            </span>
                            <span> Dashboard </span>
                          </a>
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
                            href="https://techzaa.in/velonic/layouts/index.html#sidebarExtendedUI"
                            aria-expanded="false"
                            aria-controls="sidebarExtendedUI"
                            className="side-nav-link"
                          >
                            <i className="ri-compasses-2-line" />
                            <span> Extended UI </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarExtendedUI">
                            <ul className="side-nav-second-level">
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/extended-portlets.html">
                                  Portlets
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/extended-scrollbar.html">
                                  Scrollbar
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/extended-range-slider.html">
                                  Range Slider
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/extended-scrollspy.html">
                                  Scrollspy
                                </a>
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
                            <span> Icons </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarIcons">
                            <ul className="side-nav-second-level">
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/icons-remixicons.html">
                                  Remix Icons
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/icons-bootstrap.html">
                                  Bootstrap Icons
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/icons-mdi.html">
                                  Material Design Icons
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="side-nav-item">
                          <a
                            data-bs-toggle="collapse"
                            href="https://techzaa.in/velonic/layouts/index.html#sidebarCharts"
                            aria-expanded="false"
                            aria-controls="sidebarCharts"
                            className="side-nav-link"
                          >
                            <i className="ri-donut-chart-fill" />
                            <span> Charts </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarCharts">
                            <ul className="side-nav-second-level">
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/charts-apex.html">
                                  Apex Charts
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/charts-chartjs.html">
                                  Chartjs
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/charts-sparklines.html">
                                  Sparkline Charts
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="side-nav-item">
                          <a
                            data-bs-toggle="collapse"
                            href="https://techzaa.in/velonic/layouts/index.html#sidebarForms"
                            aria-expanded="false"
                            aria-controls="sidebarForms"
                            className="side-nav-link"
                          >
                            <i className="ri-survey-line" />
                            <span> Forms </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarForms">
                            <ul className="side-nav-second-level">
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/form-elements.html">
                                  Basic Elements
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/form-advanced.html">
                                  Form Advanced
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/form-validation.html">
                                  Form Validation
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/form-wizard.html">
                                  Form Wizard
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/form-fileuploads.html">
                                  File Uploads
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/form-editors.html">
                                  Form Editors
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/form-image-crop.html">
                                  Image Crop
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/form-x-editable.html">
                                  X Editable
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="side-nav-item">
                          <a
                            data-bs-toggle="collapse"
                            href="https://techzaa.in/velonic/layouts/index.html#sidebarTables"
                            aria-expanded="false"
                            aria-controls="sidebarTables"
                            className="side-nav-link"
                          >
                            <i className="ri-table-line" />
                            <span> Tables </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarTables">
                            <ul className="side-nav-second-level">
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/tables-basic.html">
                                  Basic Tables
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/tables-datatable.html">
                                  Data Tables
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/tables-editable.html">
                                  Editable Tables
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/tables-responsive.html">
                                  Responsive Table
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="side-nav-item">
                          <a
                            data-bs-toggle="collapse"
                            href="https://techzaa.in/velonic/layouts/index.html#sidebarMaps"
                            aria-expanded="false"
                            aria-controls="sidebarMaps"
                            className="side-nav-link"
                          >
                            <i className="ri-map-pin-line" />
                            <span> Maps </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarMaps">
                            <ul className="side-nav-second-level">
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/maps-google.html">
                                  Google Maps
                                </a>
                              </li>
                              <li>
                                <a href="https://techzaa.in/velonic/layouts/maps-vector.html">
                                  Vector Maps
                                </a>
                              </li>
                            </ul>
                          </div>
                        </li>
                        <li className="side-nav-item">
                          <a
                            data-bs-toggle="collapse"
                            href="https://techzaa.in/velonic/layouts/index.html#sidebarMultiLevel"
                            aria-expanded="false"
                            aria-controls="sidebarMultiLevel"
                            className="side-nav-link"
                          >
                            <i className="ri-share-line" />
                            <span> Multi Level </span>
                            <span className="menu-arrow" />
                          </a>
                          <div className="collapse" id="sidebarMultiLevel">
                            <ul className="side-nav-second-level">
                              <li>
                                <a href="javascript: void(0);">Level 1.1</a>
                              </li>
                              <li className="side-nav-item">
                                <a
                                  data-bs-toggle="collapse"
                                  href="https://techzaa.in/velonic/layouts/index.html#sidebarSecondLevel"
                                  aria-expanded="false"
                                  aria-controls="sidebarSecondLevel"
                                >
                                  <span> Level 1.2 </span>
                                  <span className="menu-arrow" />
                                </a>
                                <div
                                  className="collapse"
                                  id="sidebarSecondLevel"
                                >
                                  <ul className="side-nav-third-level">
                                    <li>
                                      <a href="javascript: void(0);">Item 1</a>
                                    </li>
                                    <li>
                                      <a href="javascript: void(0);">Item 2</a>
                                    </li>
                                  </ul>
                                </div>
                              </li>
                              <li className="side-nav-item">
                                <a
                                  data-bs-toggle="collapse"
                                  href="https://techzaa.in/velonic/layouts/index.html#sidebarThirdLevel"
                                  aria-expanded="false"
                                  aria-controls="sidebarThirdLevel"
                                >
                                  <span> Level 1.3 </span>
                                  <span className="menu-arrow" />
                                </a>
                                <div
                                  className="collapse"
                                  id="sidebarThirdLevel"
                                >
                                  <ul className="side-nav-third-level">
                                    <li>
                                      <a href="javascript: void(0);">Item 1</a>
                                    </li>
                                    <li className="side-nav-item">
                                      <a
                                        data-bs-toggle="collapse"
                                        href="https://techzaa.in/velonic/layouts/index.html#sidebarFourthLevel"
                                        aria-expanded="false"
                                        aria-controls="sidebarFourthLevel"
                                      >
                                        <span> Item 2 </span>
                                        <span className="menu-arrow" />
                                      </a>
                                      <div
                                        className="collapse"
                                        id="sidebarFourthLevel"
                                      >
                                        <ul className="side-nav-forth-level">
                                          <li>
                                            <a href="javascript: void(0);">
                                              Item 2.1
                                            </a>
                                          </li>
                                          <li>
                                            <a href="javascript: void(0);">
                                              Item 2.2
                                            </a>
                                          </li>
                                        </ul>
                                      </div>
                                    </li>
                                  </ul>
                                </div>
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
                      <p className="mb-0">
                        <span className="badge bg-white bg-opacity-10 me-1">
                          2.97%
                        </span>
                        <span className="text-nowrap">Since last month</span>
                      </p>
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
                      <p className="mb-0">
                        <span className="badge bg-white bg-opacity-10 me-1">
                          18.25%
                        </span>
                        <span className="text-nowrap">Since last month</span>
                      </p>
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
                      <p className="mb-0">
                        <span className="badge bg-white bg-opacity-25 me-1">
                          -5.75%
                        </span>
                        <span className="text-nowrap">Since last month</span>
                      </p>
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
                      <p className="mb-0">
                        <span className="badge bg-white bg-opacity-10 me-1">
                          8.21%
                        </span>
                        <span className="text-nowrap">Since last month</span>
                      </p>
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
                            <ReactApexChart
                              options={chartData.options}
                              series={chartData.series}
                              type="bar"
                              height={377}
                            />
                          </div>
                        </div>
                        <div className="row text-center">
                          <div className="col">
                            <p className="text-muted mt-3">Semana Actual</p>
                            <h3 className=" mb-0">
                              <span>$506.54</span>
                            </h3>
                          </div>
                          <div className="col">
                            <p className="text-muted mt-3">Semana Anterior</p>
                            <h3 className=" mb-0">
                              <span>$305.25 </span>
                            </h3>
                          </div>
                          <div className="col">
                            <p className="text-muted mt-3">Porcentaje</p>
                            <h3 className=" mb-0">
                              <span>3.27%</span>
                            </h3>
                          </div>
                          <div className="col">
                            <p className="text-muted mt-3">Clientes</p>
                            <h3 className=" mb-0">
                              <span>3k</span>
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
                      <h5 className="header-title mb-0">Yearly Sales Report</h5>
                      <div
                        id="yearly-sales-collapse"
                        className="collapse pt-3 show"
                      >
                        <div dir="ltr">
                          <div
                            id="yearly-sales-chart"
                            className="apex-charts"
                            data-colors="#3bc0c3,#1a2942,#d1d7d973"
                            style={{ minHeight: 250 }}
                          >
                            <div
                              id="apexchartsa9qzh9d4l"
                              className="apexcharts-canvas apexchartsa9qzh9d4l apexcharts-theme-light"
                              style={{ width: 520, height: 250 }}
                            >
                              <div
                                className="apexcharts-legend"
                                style={{ maxHeight: 125 }}
                              />
                              <div className="apexcharts-tooltip apexcharts-theme-light">
                                <div
                                  className="apexcharts-tooltip-title"
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif",
                                    fontSize: 12,
                                  }}
                                />
                                <div
                                  className="apexcharts-tooltip-series-group"
                                  style={{ order: 1 }}
                                >
                                  <span
                                    className="apexcharts-tooltip-marker"
                                    style={{
                                      backgroundColor: "rgb(59, 192, 195)",
                                    }}
                                  />
                                  <div
                                    className="apexcharts-tooltip-text"
                                    style={{
                                      fontFamily:
                                        "Helvetica, Arial, sans-serif",
                                      fontSize: 12,
                                    }}
                                  >
                                    <div className="apexcharts-tooltip-y-group">
                                      <span className="apexcharts-tooltip-text-y-label" />
                                      <span className="apexcharts-tooltip-text-y-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-goals-group">
                                      <span className="apexcharts-tooltip-text-goals-label" />
                                      <span className="apexcharts-tooltip-text-goals-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-z-group">
                                      <span className="apexcharts-tooltip-text-z-label" />
                                      <span className="apexcharts-tooltip-text-z-value" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="apexcharts-tooltip-series-group"
                                  style={{ order: 2 }}
                                >
                                  <span
                                    className="apexcharts-tooltip-marker"
                                    style={{
                                      backgroundColor: "rgb(26, 41, 66)",
                                    }}
                                  />
                                  <div
                                    className="apexcharts-tooltip-text"
                                    style={{
                                      fontFamily:
                                        "Helvetica, Arial, sans-serif",
                                      fontSize: 12,
                                    }}
                                  >
                                    <div className="apexcharts-tooltip-y-group">
                                      <span className="apexcharts-tooltip-text-y-label" />
                                      <span className="apexcharts-tooltip-text-y-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-goals-group">
                                      <span className="apexcharts-tooltip-text-goals-label" />
                                      <span className="apexcharts-tooltip-text-goals-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-z-group">
                                      <span className="apexcharts-tooltip-text-z-label" />
                                      <span className="apexcharts-tooltip-text-z-value" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="apexcharts-xaxistooltip apexcharts-xaxistooltip-bottom apexcharts-theme-light">
                                <div
                                  className="apexcharts-xaxistooltip-text"
                                  style={{
                                    fontFamily: "Helvetica, Arial, sans-serif",
                                    fontSize: 12,
                                  }}
                                />
                              </div>
                              <div className="apexcharts-yaxistooltip apexcharts-yaxistooltip-0 apexcharts-yaxistooltip-left apexcharts-theme-light">
                                <div className="apexcharts-yaxistooltip-text" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row text-center">
                          <div className="col">
                            <p className="text-muted mt-3 mb-2">Quarter 1</p>
                            <h4 className="mb-0">$56.2k</h4>
                          </div>
                          <div className="col">
                            <p className="text-muted mt-3 mb-2">Quarter 2</p>
                            <h4 className="mb-0">$42.5k</h4>
                          </div>
                          <div className="col">
                            <p className="text-muted mt-3 mb-2">All Time</p>
                            <h4 className="mb-0">$102.03k</h4>
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* end card-body*/}
                  </div>{" "}
                  {/* end card*/}
                  <div className="card">
                    <div className="card-body">
                      <div className="d-flex align-items-center">
                        <div className="flex-grow-1 overflow-hidden">
                          <h4 className="fs-22 fw-semibold">69.25%</h4>
                          <p className="text-uppercase fw-medium text-muted text-truncate mb-0">
                            {" "}
                            US Dollar Share
                          </p>
                        </div>
                        <div className="flex-shrink-0">
                          <div
                            id="us-share-chart"
                            className="apex-charts"
                            dir="ltr"
                            style={{ minHeight: "69.3667px" }}
                          >
                            <div
                              id="apexchartsl52vnybm"
                              className="apexcharts-canvas apexchartsl52vnybm apexcharts-theme-light"
                              style={{ width: 80, height: "69.3667px" }}
                            >
                              <div className="apexcharts-legend" />
                              <div className="apexcharts-tooltip apexcharts-theme-dark">
                                <div
                                  className="apexcharts-tooltip-series-group"
                                  style={{ order: 1 }}
                                >
                                  <span
                                    className="apexcharts-tooltip-marker"
                                    style={{
                                      backgroundColor: "rgb(26, 41, 66)",
                                    }}
                                  />
                                  <div
                                    className="apexcharts-tooltip-text"
                                    style={{
                                      fontFamily:
                                        "Helvetica, Arial, sans-serif",
                                      fontSize: 12,
                                    }}
                                  >
                                    <div className="apexcharts-tooltip-y-group">
                                      <span className="apexcharts-tooltip-text-y-label" />
                                      <span className="apexcharts-tooltip-text-y-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-goals-group">
                                      <span className="apexcharts-tooltip-text-goals-label" />
                                      <span className="apexcharts-tooltip-text-goals-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-z-group">
                                      <span className="apexcharts-tooltip-text-z-label" />
                                      <span className="apexcharts-tooltip-text-z-value" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="apexcharts-tooltip-series-group"
                                  style={{ order: 2 }}
                                >
                                  <span
                                    className="apexcharts-tooltip-marker"
                                    style={{
                                      backgroundColor: "rgb(241, 60, 110)",
                                    }}
                                  />
                                  <div
                                    className="apexcharts-tooltip-text"
                                    style={{
                                      fontFamily:
                                        "Helvetica, Arial, sans-serif",
                                      fontSize: 12,
                                    }}
                                  >
                                    <div className="apexcharts-tooltip-y-group">
                                      <span className="apexcharts-tooltip-text-y-label" />
                                      <span className="apexcharts-tooltip-text-y-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-goals-group">
                                      <span className="apexcharts-tooltip-text-goals-label" />
                                      <span className="apexcharts-tooltip-text-goals-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-z-group">
                                      <span className="apexcharts-tooltip-text-z-label" />
                                      <span className="apexcharts-tooltip-text-z-value" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="apexcharts-tooltip-series-group"
                                  style={{ order: 3 }}
                                >
                                  <span
                                    className="apexcharts-tooltip-marker"
                                    style={{
                                      backgroundColor: "rgb(59, 192, 195)",
                                    }}
                                  />
                                  <div
                                    className="apexcharts-tooltip-text"
                                    style={{
                                      fontFamily:
                                        "Helvetica, Arial, sans-serif",
                                      fontSize: 12,
                                    }}
                                  >
                                    <div className="apexcharts-tooltip-y-group">
                                      <span className="apexcharts-tooltip-text-y-label" />
                                      <span className="apexcharts-tooltip-text-y-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-goals-group">
                                      <span className="apexcharts-tooltip-text-goals-label" />
                                      <span className="apexcharts-tooltip-text-goals-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-z-group">
                                      <span className="apexcharts-tooltip-text-z-label" />
                                      <span className="apexcharts-tooltip-text-z-value" />
                                    </div>
                                  </div>
                                </div>
                                <div
                                  className="apexcharts-tooltip-series-group"
                                  style={{ order: 4 }}
                                >
                                  <span
                                    className="apexcharts-tooltip-marker"
                                    style={{
                                      backgroundColor:
                                        "rgba(209, 215, 217, 0.45)",
                                    }}
                                  />
                                  <div
                                    className="apexcharts-tooltip-text"
                                    style={{
                                      fontFamily:
                                        "Helvetica, Arial, sans-serif",
                                      fontSize: 12,
                                    }}
                                  >
                                    <div className="apexcharts-tooltip-y-group">
                                      <span className="apexcharts-tooltip-text-y-label" />
                                      <span className="apexcharts-tooltip-text-y-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-goals-group">
                                      <span className="apexcharts-tooltip-text-goals-label" />
                                      <span className="apexcharts-tooltip-text-goals-value" />
                                    </div>
                                    <div className="apexcharts-tooltip-z-group">
                                      <span className="apexcharts-tooltip-text-z-label" />
                                      <span className="apexcharts-tooltip-text-z-value" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* end card body */}
                  </div>{" "}
                  {/* end card*/}
                </div>{" "}
                {/* end col*/}
              </div>
              {/* end row */}
              <div className="row">
                <div className="col-xl-4">
                  {/* Chat*/}
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
                        <h5 className="header-title mb-0">Chat</h5>
                      </div>
                      <div id="yearly-sales-collapse" className="collapse show">
                        <div className="chat-conversation mt-2">
                          <div
                            className="card-body py-0 mb-3"
                            data-simplebar="init"
                            style={{ height: 322 }}
                          >
                            <div
                              className="simplebar-wrapper"
                              style={{ margin: "0px -24px" }}
                            >
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
                                    style={{
                                      height: "100%",
                                      overflow: "hidden scroll",
                                    }}
                                  >
                                    <div
                                      className="simplebar-content"
                                      style={{ padding: "0px 24px" }}
                                    >
                                      <ul className="conversation-list">
                                        <li className="clearfix">
                                          <div className="chat-avatar">
                                            <img
                                              src="./administracion_files/avatar-5.jpg"
                                              alt="male"
                                            />
                                            <i>10:00</i>
                                          </div>
                                          <div className="conversation-text">
                                            <div className="ctext-wrap">
                                              <i>Geneva</i>
                                              <p>Hello!</p>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="clearfix odd">
                                          <div className="chat-avatar">
                                            <img
                                              src="./administracion_files/avatar-1.jpg"
                                              alt="Female"
                                            />
                                            <i>10:01</i>
                                          </div>
                                          <div className="conversation-text">
                                            <div className="ctext-wrap">
                                              <i>Thomson</i>
                                              <p>
                                                Hi, How are you? What about our
                                                next meeting?
                                              </p>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="clearfix">
                                          <div className="chat-avatar">
                                            <img
                                              src="./administracion_files/avatar-5.jpg"
                                              alt="male"
                                            />
                                            <i>10:01</i>
                                          </div>
                                          <div className="conversation-text">
                                            <div className="ctext-wrap">
                                              <i>Geneva</i>
                                              <p>Yeah everything is fine</p>
                                            </div>
                                          </div>
                                        </li>
                                        <li className="clearfix odd">
                                          <div className="chat-avatar">
                                            <img
                                              src="./administracion_files/avatar-1.jpg"
                                              alt="male"
                                            />
                                            <i>10:02</i>
                                          </div>
                                          <div className="conversation-text">
                                            <div className="ctext-wrap">
                                              <i>Thomson</i>
                                              <p>Wow that's great</p>
                                            </div>
                                          </div>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                className="simplebar-placeholder"
                                style={{ width: "auto", height: 344 }}
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
                                  height: 301,
                                  transform: "translate3d(0px, 0px, 0px)",
                                  display: "block",
                                }}
                              />
                            </div>
                          </div>
                          <div className="card-body pt-0">
                            <form
                              className="needs-validation"
                              noValidate=""
                              name="chat-form"
                              id="chat-form"
                            >
                              <div className="row align-items-start">
                                <div className="col">
                                  <input
                                    type="text"
                                    className="form-control chat-input"
                                    placeholder="Enter your text"
                                    required=""
                                  />
                                  <div className="invalid-feedback">
                                    Please enter your messsage
                                  </div>
                                </div>
                                <div className="col-auto d-grid">
                                  <button
                                    type="submit"
                                    className="btn btn-danger chat-send waves-effect waves-light"
                                  >
                                    Send
                                  </button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>{" "}
                        {/* end .chat-conversation*/}
                      </div>
                    </div>
                  </div>{" "}
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
                        <h5 className="header-title mb-0">Projects</h5>
                      </div>
                      <div id="yearly-sales-collapse" className="collapse show">
                        <div className="table-responsive">
                          <table className="table table-nowrap table-hover mb-0">
                            <thead>
                              <tr>
                                <th>#</th>
                                <th>Project Name</th>
                                <th>Start Date</th>
                                <th>Due Date</th>
                                <th>Status</th>
                                <th>Assign</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>1</td>
                                <td>Velonic Admin v1</td>
                                <td>01/01/2015</td>
                                <td>26/04/2015</td>
                                <td>
                                  <span className="badge bg-info-subtle text-info">
                                    Released
                                  </span>
                                </td>
                                <td>Techzaa Studio</td>
                              </tr>
                              <tr>
                                <td>2</td>
                                <td>Velonic Frontend v1</td>
                                <td>01/01/2015</td>
                                <td>26/04/2015</td>
                                <td>
                                  <span className="badge bg-info-subtle text-info">
                                    Released
                                  </span>
                                </td>
                                <td>Techzaa Studio</td>
                              </tr>
                              <tr>
                                <td>3</td>
                                <td>Velonic Admin v1.1</td>
                                <td>01/05/2015</td>
                                <td>10/05/2015</td>
                                <td>
                                  <span className="badge bg-pink-subtle text-pink">
                                    Pending
                                  </span>
                                </td>
                                <td>Techzaa Studio</td>
                              </tr>
                              <tr>
                                <td>4</td>
                                <td>Velonic Frontend v1.1</td>
                                <td>01/01/2015</td>
                                <td>31/05/2015</td>
                                <td>
                                  <span className="badge bg-purple-subtle text-purple">
                                    Work in Progress
                                  </span>
                                </td>
                                <td>Techzaa Studio</td>
                              </tr>
                              <tr>
                                <td>5</td>
                                <td>Velonic Admin v1.3</td>
                                <td>01/01/2015</td>
                                <td>31/05/2015</td>
                                <td>
                                  <span className="badge bg-warning-subtle text-warning">
                                    Coming soon
                                  </span>
                                </td>
                                <td>Techzaa Studio</td>
                              </tr>
                              <tr>
                                <td>6</td>
                                <td>Velonic Admin v1.3</td>
                                <td>01/01/2015</td>
                                <td>31/05/2015</td>
                                <td>
                                  <span className="badge bg-primary-subtle text-primary">
                                    Coming soon
                                  </span>
                                </td>
                                <td>Techzaa Studio</td>
                              </tr>
                              <tr>
                                <td>7</td>
                                <td>Velonic Admin v1.3</td>
                                <td>01/01/2015</td>
                                <td>31/05/2015</td>
                                <td>
                                  <span className="badge bg-danger-subtle text-danger">
                                    Cool
                                  </span>
                                </td>
                                <td>Techzaa Studio</td>
                              </tr>
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
