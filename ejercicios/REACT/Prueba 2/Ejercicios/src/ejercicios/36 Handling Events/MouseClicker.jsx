import React from "react";

const MouseClicker = () => {
  function handleButton(e) {
    console.log(e.currentTarget.name);
  }

  return (
    <button name="one" onClick={handleButton}>
      click me!
    </button>
  );
};

export default MouseClicker;
