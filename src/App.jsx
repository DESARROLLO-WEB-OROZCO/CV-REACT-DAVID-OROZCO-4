import { useState } from "react";
import ToggleHabilidades from "./components/ToggleHabilidades";
import Habilidades from "./components/Habilidades";
import FormularioTecnologia from "./components/FormularioTecnologia";

function App() {
  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  const [tecnologias, setTecnologias] = useState([
    "React",
    "JavaScript",
    "HTML",
    "CSS"
  ]);

  const agregarTecnologia = (tec) => {
    setTecnologias([...tecnologias, tec]);
  };

  return (
    <div>
      <ToggleHabilidades mostrar={mostrarHabilidades} setMostrar={setMostrarHabilidades} />

      {mostrarHabilidades && <Habilidades tecnologias={tecnologias} />}

      <FormularioTecnologia agregarTecnologia={agregarTecnologia} />
    </div>
  );
}

export default App;
