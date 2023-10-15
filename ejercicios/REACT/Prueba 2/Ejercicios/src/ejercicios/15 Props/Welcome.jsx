import React from "react";
import Age from "../20 Props/Age";

const Welcome = ({ name, age }) => {
  return (
    <div>
      <p>Welcome, {name}!</p>
      {age > 18 ? <p>Your age is {age}</p> : <p>You are very young!</p>}
    </div>
  );
};

export default Welcome;
