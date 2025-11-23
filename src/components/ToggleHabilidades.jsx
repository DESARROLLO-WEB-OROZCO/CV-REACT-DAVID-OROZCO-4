import { useState } from "react";

const ToggleHabilidades = ({ children }) => {
  const [visible, setVisible] = useState(true);

  const toggle = () => {
    setVisible(!visible);
  };

  return (
    <div>
      <button onClick={toggle}>
        {visible ? "Ocultar Habilidades" : "Mostrar Habilidades"}
      </button>

      {visible && <div>{children}</div>}
    </div>
  );
};

export default ToggleHabilidades;
