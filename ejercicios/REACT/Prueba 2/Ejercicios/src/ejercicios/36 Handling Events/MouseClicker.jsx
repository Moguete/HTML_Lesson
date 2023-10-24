import React from "react";

const MouseClicker = () => {
  function handleButton(e) {
    console.log(e.currentTarget.name);
  }
  function handleImage(e) {
    console.log(e.currentTarget.src);
    e.stopPropagation();
  }
  return (
    <button name="one" onClick={handleButton}>
        <img onClick={handleImage} width={50} height={50} src="/src/assets/Captura de pantalla 2023-09-06 a las 15.54.00.png" />
      click me!
    </button>
  );
};

export default MouseClicker;
