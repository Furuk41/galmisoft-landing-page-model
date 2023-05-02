import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "aos/dist/aos.css";
import "./css/style.css";

import AOS from "aos";

import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import ResetPassword from "./pages/ResetPassword";
import Nosotros from "./pages/Nosotros";
import Contacto from "./pages/Contacto";
import NeoRex from "./pages/NeoRex";
import Geosales from "./pages/Geosales";
import WebBi from "./pages/WebBi";
import TiendaVirtual from "./pages/TiendaVirtual";

function App() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 600,
      easing: "ease-out-sine",
    });
  });

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change

  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/neorex" element={<NeoRex />} />
        <Route path="/geosales" element={<Geosales />} />
        <Route path="/webbi" element={<WebBi />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/tiendavirtual" element={<TiendaVirtual />} />
        {/* <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPassword />} /> */}
      </Routes>
    </>
  );
}

export default App;
