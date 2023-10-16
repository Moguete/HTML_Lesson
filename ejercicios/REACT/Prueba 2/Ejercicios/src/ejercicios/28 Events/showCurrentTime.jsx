import React from "react";

const showCurrentTime = () => {
  const showCurrentTime = () => {
    const hora = new Date();
    const horaLocal = hora.toLocaleTimeString();
    alert(`Hora actual: ${horaLocal}`);
  };
  return <></>;
};

export default showCurrentTime;
