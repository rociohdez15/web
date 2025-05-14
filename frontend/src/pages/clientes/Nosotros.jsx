import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/clientes/Navbar";
import Footer from "../../components/clientes/Footer";
import NosotrosComponent from "../../components/clientes/NosotrosComponent";

const Nosotros = () => {
 
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
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap" rel="stylesheet"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Sansita:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700;1,800;1,900&display=swap" rel="stylesheet"/>
      <meta name="theme-color" content="#478ac9" />
      <meta property="og:title" content="Atalanta" />
      <meta property="og:type" content="website" />
      <meta data-intl-tel-input-cdn-path="intlTelInput/" />
      <style
        dangerouslySetInnerHTML={{
          __html:
            "\n    body {\n      font-family: 'Inter', sans-serif;\n      background-color: white;\n      color: #1f2937; /* Tailwind gray-900 */\n    }\n    h1, h2 {\n      font-weight: 600;\n      font-size: 22px;\n      line-height: 28px;\n      color: #1f2937;\n    }\n    p {\n      font-weight: 400;\n      margin-bottom: 0.25rem;\n    }\n    .text-strong {\n      font-weight: 600;\n      font-size: 13px;\n      line-height: 18px;\n      color: #374151; /* Tailwind gray-700 */\n    }\n    .text-small {\n      font-weight: 400;\n      font-size: 11px;\n      line-height: 16px;\n      color: #4b5563; /* Tailwind gray-600 */\n    }\n    .btn-custom {\n      font-weight: 600;\n      font-size: 11px;\n      line-height: 16px;\n      color: #1f2937;\n      border: 1px solid #1f2937;\n      border-radius: 9999px;\n      padding: 0.375rem 1.5rem;\n      background-color: transparent;\n      transition: background-color 0.2s ease;\n    }\n    .btn-custom:hover {\n      background-color: #f3f4f6; /* Tailwind gray-100 */\n      color: #1f2937;\n    }\n    .img-rounded {\n      border-radius: 0.375rem;\n      object-fit: cover;\n      width: 100%;\n      height: 100%;\n    }\n    .bottom-img {\n      aspect-ratio: 1 / 2;\n      object-fit: cover;\n      border-radius: 0.375rem;\n      width: 100%;\n      height: 240px;\n    }\n    @media (max-width: 575.98px) {\n      h1, h2 {\n        font-size: 20px;\n        line-height: 26px;\n      }\n      .text-strong {\n        font-size: 12px;\n        line-height: 16px;\n      }\n      .text-small {\n        font-size: 10px;\n        line-height: 14px;\n      }\n      .btn-custom {\n        font-size: 10px;\n        line-height: 14px;\n        padding: 0.3rem 1.2rem;\n      }\n    }\n  ",
        }}
      />
      <Navbar />
      
      <NosotrosComponent />
      
      <Footer />

      {/* CDN de Bootstrap JS (opcional, si necesitas interactividad como modales, dropdowns, etc.) */}
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-KyZXEJ6Haq4fVXf7Xw7xvvczf8vcnfd8j5LfUAW5A3v5Xr8V1BvLMth82A1ZcYpG"
        crossorigin="anonymous"
      ></script>
    </>
  );
};

export default Nosotros;
