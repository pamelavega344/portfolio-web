
function Contacto() {
  return (
    <div>
      <h1>Contacto</h1>
      <p>Podés comunicarte conmigo completando este formulario.</p>



      <div style={{ display: "flex", gap: "30px", justifyContent: "center", flexWrap: "wrap" }}>

        <form action="https://formsubmit.co/pamelavega650@gmail.com" method="POST">
          <label>Nombre:</label>
          <br />
          <input type="text" name="nombre" required />
          <br /><br />

         
<label>Correo electrónico:</label>
<br />
<input
  type="email"
  name="email"
  placeholder="pamelavega650@gmail.com"
  required
/>
<br /><br />


          <label>Mensaje:</label>
          <br />
          <textarea name="mensaje" rows="5" required />
          <br /><br />

          <button type="submit">Enviar mensaje</button>
        </form>

        <iframe
          title="Mapa de Salta"
          src="https://www.google.com/maps?q=Salta,Argentina&output=embed"
          width="300"
          height="250"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>

      </div>
    </div>
  );
}

export default Contacto;
