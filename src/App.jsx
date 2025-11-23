import { useState } from "react";
import ToggleHabilidades from "./components/ToggleHabilidades";
import Habilidades from "./components/Habilidades";

function App() {
  const [mostrarHabilidades, setMostrarHabilidades] = useState(true);

  return (
    <div>
      <ToggleHabilidades>
        {mostrarHabilidades && <Habilidades />}
      </ToggleHabilidades>
    </div>
  );
}

export default App;
