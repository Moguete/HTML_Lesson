import { useState } from "react";
import JSX2 from "./ejercicios/2 JSX/2JSX";
import JSX5 from "./ejercicios/5 JSX/5JSX";
import "./App.css";
import HelloWorld from "./ejercicios/7 Components/HelloWorld";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <HelloWorld />
        <JSX2 name={"Esteve"} />
        <JSX5 a={"10"} b={"5"} />
      </div>
    </>
  );
}

export default App;
