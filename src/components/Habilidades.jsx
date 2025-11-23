/* Habilidades.jsx */
export default function Habilidades({ habilidades }) {
  return (
    <div>
      <h2>Habilidades</h2>
      <ul>
        {habilidades.map((hab, index) => (
          <li key={index}>{hab}</li>
        ))}
      </ul>
    </div>
  );
}
