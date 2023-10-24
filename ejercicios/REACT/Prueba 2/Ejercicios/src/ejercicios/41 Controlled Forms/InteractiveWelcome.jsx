import { useState } from "react";
import Welcome from "../15 Props/Welcome";


const InteractiveWelcome = () => {
  const [inputValue, setInputValue] = useState("");
  function handleInputChange(e) {
    setInputValue(e.target.value);
  }
  return (
    <div>
      <input value={inputValue} onChange={handleInputChange} />
      <Welcome name={inputValue}/>
    </div>
  );
};

export default InteractiveWelcome;
