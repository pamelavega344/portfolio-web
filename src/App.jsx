
import { useState } from "react";
import "./App.css";

import Proyectos from "./Proyectos.jsx";
import Contacto from "./Contacto.jsx";
import Inicio from "./Inicio.jsx";

function App() {
  const [pagina, setPagina] = useState("inicio");

  return (
    <div>
      <header>
        <h1>Currículum vitae</h1>

        <img
          src={`${import.meta.env.BASE_URL}foto-perfil.png`}
          alt="Foto de Gilda Pamela Vega"
          width="200"
        />

        <h2>Gilda Pamela Vega</h2>

        <p>
          Estudiante de la Tecnicatura Universitaria
          en Desarrollo de Aplicaciones.
        </p>

        <nav>
          <button onClick={() => setPagina("inicio")}>
            Inicio
          </button>

          <button onClick={() => setPagina("proyectos")}>
            Proyectos
          </button>

          <button onClick={() => setPagina("contacto")}>
            Contacto
          </button>
          <button onClick={() => setPagina("api")}>
  API
</button>
        </nav>
      </header>

      <main>
        {pagina === "inicio" && (
          <div>
            <h2>Sobre mí</h2>
            <p>
              Estoy aprendiendo a desarrollar
              páginas web utilizando React
              y JavaScript.
            </p>

            <h2>Mis conocimientos</h2>

            {[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Git",
              "GitHub"
            ].map((conocimiento) => (
              <p key={conocimiento}>
                {conocimiento}
              </p>
            ))}
          </div>
        )}

        {pagina === "proyectos" && <Proyectos />}

        {pagina === "contacto" && <Contacto />}
        {pagina === "api" && <Inicio />}
      </main>
    </div>
  );
}

export default App;
