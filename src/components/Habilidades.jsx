function Habilidades({ tecnologias }) {
  return (
    <div>
      <h2>Habilidades Tecnológicas</h2>

      <ul>
        {tecnologias.map((tec, index) => (
          <li key={index}>
            {tec.nombre} – {tec.nivel}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Habilidades;
