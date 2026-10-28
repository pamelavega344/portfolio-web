
import { useEffect, useState } from "react";
import axios from "axios";

function Inicio() {
  const [proyectos, setProyectos] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://api.github.com/search/repositories?q=react+language:javascript&sort=stars&per_page=3")
      .then((respuesta) => {
        setProyectos(respuesta.data.items);
      })
      .catch(() => {
        setError("No se pudieron cargar los proyectos.");
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  return (
    <div>
      <h1>Proyectos de tecnología</h1>
      <p>Información obtenida de la API pública de GitHub.</p>

      {cargando && <p>Cargando proyectos...</p>}
      {error && <p>{error}</p>}

      {proyectos.map((proyecto) => (
        <div key={proyecto.id}>
          <h2>{proyecto.name}</h2>

          <img
            src={proyecto.owner.avatar_url}
            alt={proyecto.owner.login}
            width="100"
          />

          <p>Lenguaje: {proyecto.language}</p>
          <p>Estrellas: {proyecto.stargazers_count}</p>
          <p>Autor: {proyecto.owner.login}</p>
        </div>
      ))}
    </div>
  );
}

export default Inicio;
