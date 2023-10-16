import React, { useState } from "react";

const Counter = ({valorInicial, incremento}) => {
  const [counter, setCounter] = useState(valorInicial);
  function Incrementar() {
    setCounter(counter + incremento);
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={Incrementar}>+{incremento}</button>
    </div>
  );
};

export default Counter;
