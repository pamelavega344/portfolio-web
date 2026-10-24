
const listaProyectos = [
  {
    id: 1,
    nombre: "StockPoint",
    descripcion:
      "Sistema de gestión para un supermercado mediano. Permite organizar productos, controlar el stock, registrar ventas y administrar usuarios.",
    
    imagen: "https://placehold.co/500x280/183153/ffffff?text=StockPoint",
  },
  
];

function Proyectos() {
  return (
    <section>
      <h1>Mis proyectos</h1>
      <p>Proyectos desarrollados durante mi formación académica.</p>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        {listaProyectos.map((proyecto) => (
          <article
            key={proyecto.id}
            style={{
              backgroundColor: "white",
              borderRadius: "12px",
              padding: "20px",
              width: "300px",
              boxShadow: "0 2px 8px #00000015",
            }}
          >
            <img
              src={proyecto.imagen}
              alt={proyecto.nombre}
              style={{ width: "100%", borderRadius: "10px" }}
            />

            <h2>{proyecto.nombre}</h2>
            <p>{proyecto.descripcion}</p>
            
          
          </article>
        ))}
      </div>
    </section>
  );
}

export default Proyectos;
