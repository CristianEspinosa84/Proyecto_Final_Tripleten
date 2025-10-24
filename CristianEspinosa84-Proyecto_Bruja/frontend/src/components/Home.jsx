import { NavLink } from "react-router-dom";
import React from "react";

import reiki from "../Images/reiki.jpg";
import tarot from "../Images/Tarot.jpg";
import oraculo from "../Images/oraculo1.jpg";
import aboutme from "../Images/karina12.jpg";

function Home() {
  return (
    <div className="home">
      <div id="home" className="home__welcome">
        <h1 className="home__welcome_title">Bienvenidos</h1>
        <p className="home__welcome_text">
          "Bienvenido a este espacio mágico, donde la intuición y la energía se
          encuentran para guiarte en tu camino. Aquí encontrarás lecturas de
          tarot, mensajes de los oráculos y la sanadora vibración del reiki,
          todo pensado para acompañarte con amor y claridad. Siéntete libre de
          explorar, dejarte llevar por la magia y descubrir lo que el universo
          tiene para ti."
        </p>
      </div>
      <div id="service" className="service">
        <h1 className="service__title">
          Mis <br />
          Servicios
        </h1>
        <div className="service__tarot">
          <img src={tarot} alt="image tarot" className="service__image" />
          <p className="service___text">
            El tarot es una herramienta ancestral de autoconocimiento y guía
            espiritual. A través de sus 78 cartas, llenas de símbolos y
            arquetipos, nos ayuda a reflexionar sobre nuestro presente,
            comprender mejor nuestro pasado y vislumbrar posibles caminos en el
            futuro. Más que predecir, el tarot invita a conectar con la
            intuición.
          </p>
        </div>

        <div className="service__reiki">
          <img src={reiki} alt="image reiki" className="service__image" />
          <p className="service__reiki_text">
            El reiki es una técnica de sanación energética de origen japonés que
            canaliza la energía universal a través de las manos. Su objetivo es
            equilibrar cuerpo, mente y espíritu, promoviendo la relajación,
            reduciendo el estrés y potenciando la capacidad natural de sanación.
          </p>
        </div>

        <div className="service__oraculo">
          <img src={oraculo} alt="image oraculo" className="service__image" />
          <p className="service__araculo_text">
            Los oráculos son cartas de mensajes e imágenes inspiradoras que
            aportan orientación y claridad. A diferencia del tarot, no siguen
            una estructura fija, lo que les permite adaptarse a diferentes temas
            como amor, propósito de vida, crecimiento espiritual o motivación
            diaria.
          </p>
        </div>
      </div>

      <div id="about" className="about">
        <h1 className="about__title">
          Algo sobre <br />
          Mi
        </h1>
        <img src={aboutme} alt="imagen mia" className="about__image" />
        <p className="about__text">
          "Hola, soy Karina, y te doy la bienvenida a este espacio de magia y
          energía. Soy una apasionada exploradora del mundo espiritual, dedicada
          a guiar y acompañar a quienes buscan claridad, sanación y conexión con
          su esencia. A través del tarot, el reiki y los oráculos, creo un
          puente entre la intuición y el corazón, ofreciendo mensajes y energía
          que inspiran, reconfortan y transforman. Mi misión es ayudarte a
          reconocer el poder que ya vive en ti, abrir caminos hacia tu bienestar
          y recordarte que nunca estás solo en tu viaje. Cada lectura, cada
          sesión y cada palabra están guiadas por el respeto, el amor y la luz,
          para que encuentres en este lugar un refugio de paz y descubrimiento.
          Te invito a explorar este espacio, escuchar lo que el universo tiene
          para decirte y dejarte acompañar en tu propio despertar."
        </p>
      </div>
    </div>
  );
}

export default Home;
