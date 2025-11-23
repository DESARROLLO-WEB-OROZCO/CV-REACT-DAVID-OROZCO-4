import { useState } from "react";
import { habilidadesData } from "./cvData";
import Habilidades from "./components/Habilidades";

export default function App() {
  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  return (
    <div>
      <button onClick={() => setMostrarHabilidades(!mostrarHabilidades)}>
        {mostrarHabilidades ? "Ocultar Habilidades" : "Mostrar Habilidades"}
      </button>

      {mostrarHabilidades && (
        <Habilidades habilidades={habilidadesData} />
      )}
    </div>
  );
}

