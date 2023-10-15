import React from "react";
import Age from "../20 Props/Age";

const Welcome = ({ name, age }) => {
  return (
    <div>
      <p>Welcome, {name}!</p>
      {age && <Age age={age} />}
    </div>
  );
};

export default Welcome;
