function Habilidades({ tecnologias }) {
  return (
    <div>
      <h2>Habilidades / Tecnologías</h2>

      <ul>
        {tecnologias.map((tec, index) => (
          <li key={index}>{tec}</li>
        ))}
      </ul>
    </div>
  );
}

export default Habilidades;
