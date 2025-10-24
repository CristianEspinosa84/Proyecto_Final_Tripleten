import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../Images/Karina Logo-03.svg";

const HOME = "/";
const SIGNIN = "/signin";
const SIGNUP = "/signup";

function Header({ userEmail, onLogout, isLoggedIn }) {
  const { pathname } = useLocation();
  const onAuthPages = pathname === SIGNIN || pathname === SIGNUP;
  const onHome = pathname === HOME;

  // 🔹 Componente auxiliar para manejar el scroll suave en Home
  const HashLink = ({ id, children, className }) =>
    onHome ? (
      <a href={`#${id}`} className={className}>
        {children}
      </a>
    ) : (
      <NavLink to={`/#${id}`} className={className}>
        {children}
      </NavLink>
    );

  return (
    <header className="header">
      <div className="header__auth-logo">
        <img src={logo} alt="Logo" className="header__logo" />

        <h1 className="header__auth-title">
          Hi <br /> wich
        </h1>

        <nav className="header__auth-left">
          {isLoggedIn ? (
            <>
              <NavLink to={HOME} className="navbtn">
                Home
              </NavLink>
              <span className="header__auth-email">{userEmail}</span>
              <button className="navbtn navbtn--outline" onClick={onLogout}>
                Cerrar sesión
              </button>
            </>
          ) : onAuthPages ? (
            <>
              <NavLink to={HOME} className="navbtn">
                Home
              </NavLink>
              {pathname === SIGNIN ? (
                <NavLink to={SIGNUP} className="navbtn">
                  Registrarse
                </NavLink>
              ) : (
                <NavLink to={SIGNIN} className="navbtn">
                  Iniciar sesión
                </NavLink>
              )}
            </>
          ) : (
            <>
              {/* 🔸 Scroll interno a secciones */}
              <HashLink id="service" className="navbtn">
                Servicios
              </HashLink>
              <HashLink id="about" className="navbtn">
                Sobre mí
              </HashLink>

              {/* 🔸 Únete: abre nueva pestaña */}
              {onHome && (
                <NavLink
                  to={SIGNIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbtn"
                >
                  Únete
                </NavLink>
              )}
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
