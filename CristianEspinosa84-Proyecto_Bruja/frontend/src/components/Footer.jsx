import React from "react";
import instagram from "../Images/Intagram.png";
import facebook from "../Images/facebook.png";
import youtube from "../Images/youtube.png";

function Footer() {
  return (
    <div id="contacto" className="footer">
      <div className="footer__container">
        <a
          href="https://www.instagram.com/karina.bruja"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={instagram} alt="Instagram" className="footer__icono" />
        </a>

        <a
          href="https://www.facebook.com/karina.bruja"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={facebook} alt="Facebook" className="footer__icono" />
        </a>

        <a
          href="https://www.youtube.com/@karina.bruja"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={youtube} alt="YouTube" className="footer__icono" />
        </a>

        <p class="footer__quote">
          “Confía en la intuición, ella siempre te guía hacia la verdad.”
        </p>
        <p class="footer__copy">
          © 2025 HiWich · Todos los derechos reservados
        </p>
      </div>
    </div>
  );
}

export default Footer;
