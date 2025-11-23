import { useState } from "react";
import ToggleHabilidades from "./components/ToggleHabilidades";
import Habilidades from "./components/Habilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";

import { tecnologiasIniciales } from "./cvData"; // <-- Importa tu data

function App() {
  // 1. Estado local de tecnologías
  const [tecnologias, setTecnologias] = useState(tecnologiasIniciales);

  // 2. Función para agregar una tecnología nueva
  const agregarTecnologia = (nueva) => {
    setTecnologias((prev) => [...prev, nueva]);
  };

  // 3. Estado de visibilidad
  const [mostrarHabilidades, setMostrarHabilidades] = useState(false);

  return (
    <div>
      <ToggleHabilidades mostrar={mostrarHabilidades} setMostrar={setMostrarHabilidades} />

      {mostrarHabilidades && <Habilidades tecnologias={tecnologias} />}

      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />
    </div>
  );
}

export default App;
