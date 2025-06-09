import './tarjetaaa.css'

function Tarjeta() {
  // Definimos la información estática de la tarjeta
  const nombre = "Ailsa Ammishaddai";
  const profesion = "Estudiante";
  const mensaje = "¡Bienvenido a mi tarjeta de presentación!";

  // Retornamos el JSX que representa la tarjeta
  return (
    <section className="seccion1">

      {/* JSX permite incrustar variables en HTML utilizando llaves {} */}
      <h2>{nombre}</h2>
      <h4>{profesion}</h4>
      <p>{mensaje}</p>
    </section>
  );
}

export default Tarjeta;