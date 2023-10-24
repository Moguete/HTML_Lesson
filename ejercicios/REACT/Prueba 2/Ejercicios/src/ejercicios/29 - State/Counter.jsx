import React, { useEffect, useState } from "react";
import CounterDisplay from "../32 State/CounterDisplay";

const Counter = ({ valorInicial, incremento }) => {
  const [counter, setCounter] = useState(valorInicial);

  useEffect(() => {
    console.log(`El contador está en ${counter}`);
  }, [counter]);
  function Incrementar() {
    setCounter(counter + incremento);
  }
  function Restar() {
    setCounter(counter - incremento);
  }
  function Reset() {
    setCounter(valorInicial);
  }
  return (
    <div>
      <CounterDisplay count={counter} />
      <button onClick={Incrementar}>+{incremento}</button>
      <button onClick={Restar}>-{incremento}</button>
      <button onClick={Reset}>Reset</button>
    </div>
  );
};

export default Counter;
