import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation, useParams } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import Topbar from "../../../components/admin/dashboard/Topbar";
import Leftsidebar from "../../../components/admin/dashboard/Leftsidebar";
import Leer from "../../../components/admin/mensajes/Leer";

const MensajeSolo = () => {

  return (
    <>
      <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
      <title>Dashboard Admin | Atalanta</title>
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
        <Topbar />
        {/* ========== Topbar End ========== */}
        <Leftsidebar />
        {/* ========== Left Sidebar Start ========== */}
        
        {/* ========== Left Sidebar End ========== */}
        {/* ============================================================== */}
        {/* Start Page Content here */}
        {/* ============================================================== */}
        <Leer />
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
export default MensajeSolo;
