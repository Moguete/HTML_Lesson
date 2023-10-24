import React, { useState } from "react";
import Form from "./form";

const ToggleingComponent = () => {
  const [estado, setEstado] = useState(false);
  const handleToggleButton = () => {
    setEstado(!estado);
  };

  return (
    <div>
      <button onClick={handleToggleButton}>Click para abrir!</button>
      {estado === true && (
        <div>
          <ul>
            <li>Hola, completa el formulario:</li>
            <li><Form/></li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ToggleingComponent;
