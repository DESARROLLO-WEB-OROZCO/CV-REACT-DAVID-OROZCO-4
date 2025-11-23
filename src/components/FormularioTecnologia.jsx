import { useState } from "react";

function FormularioTecnologia({ agregarTecnologia }) {
  const [nuevaTec, setNuevaTec] = useState("");

  const manejarSubmit = (e) => {
    e.preventDefault();
    if (nuevaTec.trim() === "") return;
    agregarTecnologia(nuevaTec);
    setNuevaTec("");
  };

  return (
    <form onSubmit={manejarSubmit}>
      <input
        type="text"
        placeholder="Agregar tecnología"
        value={nuevaTec}
        onChange={(e) => setNuevaTec(e.target.value)}
      />

      <button type="submit">
        Agregar
      </button>
    </form>
  );
}

export default FormularioTecnologia;
