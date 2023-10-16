import React, { useState } from "react";
import CounterDisplay from "../32 State/CounterDisplay";

const Counter = ({valorInicial, incremento}) => {
  const [counter, setCounter] = useState(valorInicial);
  function Incrementar() {
    setCounter(counter + incremento);
  }
  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={Incrementar}>+{incremento}</button>
    </div>
  );
};

export default Counter;
