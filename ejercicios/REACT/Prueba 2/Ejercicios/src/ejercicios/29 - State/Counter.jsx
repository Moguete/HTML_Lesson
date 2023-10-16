import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  function Incrementar() {
    setCounter(counter + 1);
  }
  return (
    <div>
      <h2>{counter}</h2>
      <button onClick={Incrementar}>+1</button>
    </div>
  );
};

export default Counter;
