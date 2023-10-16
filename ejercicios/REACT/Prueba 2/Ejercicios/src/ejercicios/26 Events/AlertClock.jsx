import React from "react";

function AlertClock({ onButtonClick }) {
  return (
    <div>
      <button onClick={onButtonClick}>Mostrar Hora</button>
    </div>
  );
}

export default AlertClock;
