import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/clientes/Navbar";
import Seccion1 from "../../components/clientes/Seccion1";
import Seccion3 from "../../components/clientes/Seccion3";
import Seccion2 from "../../components/clientes/Seccion2";
import Seccion4 from "../../components/clientes/Seccion4";
import Seccion5 from "../../components/clientes/Seccion5";
import Footer from "../../components/clientes/Footer";

const Home = () => {


  return (
    <div>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="utf-8" />
      <meta
        name="keywords"
        content="​Book your outdoor adventure, About Us, ​Find your next getaway, Our Services, ​Plan Your Camping Trip, ​How to plan a camping trip, Contact Us"
      />
      
      <meta name="description" content />
      <title>Atalanta | Inicio</title>
      <link rel="stylesheet" href="nicepage.css" media="screen" />
      <link rel="stylesheet" href="index.css" media="screen" />
      <link
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&display=swap"
        rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Sansita:ital,wght@0,400;0,700;0,800;0,900;1,400;1,700;1,800;1,900&display=swap"
        rel="stylesheet"
      />
      <meta name="generator" content="Nicepage 7.6.4, nicepage.com" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
        rel="stylesheet"
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

      <Navbar />

      <Seccion1 />

      <Seccion2 />
      
      <Seccion3 />

      <Seccion4 />
      
      <Seccion5 />
      
      <Footer />
    </div>
  );
};

export default Home;
