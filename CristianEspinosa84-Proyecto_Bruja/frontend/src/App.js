import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Main from "./main";
import Login from "./components/Login";
import Register from "./components/Register";
import ProtectedRoute from "./components/ProtectedRoute";
import InfoTooltip from "./components/InfoTooltip";
import Header from "./components/Header"; // ⬅️ Importar Header
import Footer from "./components/Footer";
import * as auth from "./utils/auth";
import "../src/styles/index.css";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [email, setEmail] = useState("");

  const navigate = useNavigate();
  // const location = useLocation(); // ⬅️ Para saber en qué ruta estás

  useEffect(() => {
    const token = localStorage.getItem("jwt");
    if (token) {
      auth
        .checkToken(token)
        .then((res) => {
          setLoggedIn(true);
          setEmail(res.email);
        })
        .catch((err) => {
          console.log("Token inválido:", err);
          setLoggedIn(false);
        });
    }
  }, []);

  function handleRegister(email, password) {
    auth
      .register(email, password)
      .then(() => {
        setIsSuccess(true);
        setIsTooltipOpen(true);
        navigate("/signin");
      })
      .catch((err) => {
        console.log("Error en registro:", err);
        setIsSuccess(false);
        setIsTooltipOpen(true);
      });
  }

  function handleLogin(email, password) {
    auth
      .authorize(email, password)
      .then((data) => {
        if (data.token) {
          localStorage.setItem("jwt", data.token); // ✅ solo si existe
          setLoggedIn(true);
          setEmail(email);
          navigate("/app");
        } else {
          throw new Error("No se recibió el token");
        }
      })
      .catch((err) => {
        console.log("Error al iniciar sesión:", err);
        setIsSuccess(false);
        setIsTooltipOpen(true);
      });
  }

  function handleLogout() {
    localStorage.removeItem("jwt");
    setLoggedIn(false);
    setEmail("");
    navigate("/signin");
  }

  function closeAllPopups() {
    setIsTooltipOpen(false);
  }

  // Mostrar Header solo si estás logueado o en la página principal
  // const showHeader = loggedIn || location.pathname === "/";

  return (
    <>
      <Header userEmail={email} onLogout={handleLogout} isLoggedIn={loggedIn} />

      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Login onLogin={handleLogin} />} />
          <Route
            path="/signup"
            element={<Register onRegister={handleRegister} />}
          />

          {/* <Route
          path="/signup"
          element={<Register onRegister={handleRegister} />}
        /> */}
          <Route
            path="/app"
            element={
              <ProtectedRoute
                element={<Main onLogout={handleLogout} email={email} />}
                loggedIn={loggedIn}
              />
            }
          />
          <Route path="*" element={<Navigate to="/signin" />} />
        </Routes>
      </main>
      <Footer />

      <InfoTooltip
        isOpen={isTooltipOpen}
        onClose={closeAllPopups}
        isSuccess={isSuccess}
      />
    </>
  );
}

export default App;
