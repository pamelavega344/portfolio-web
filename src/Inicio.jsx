
import { useEffect, useState } from "react";
import axios from "axios";

function Inicio() {
  const [personajes, setPersonajes] = useState([]);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((respuesta) => {
        setPersonajes(respuesta.data.results.slice(0, 3));
      })
      .catch(() => {
        setError("No se pudieron cargar los personajes.");
      })
      .finally(() => {
        setCargando(false);
      });
  }, []);

  return (
    <div>
      <h1>Personajes de Rick and Morty</h1>
      <p>Información obtenida de una API pública.</p>

      {cargando && <p>Cargando personajes...</p>}
      {error && <p>{error}</p>}

      {personajes.map((personaje) => (
        <div key={personaje.id}>
          <h2>{personaje.name}</h2>
          <img
            src={personaje.image}
            alt={personaje.name}
            width="150"
          />
          <p>Estado: {personaje.status}</p>
          <p>Especie: {personaje.species}</p>
          <p>Género: {personaje.gender}</p>
        </div>
      ))}
    </div>
  );
}

export default Inicio;
