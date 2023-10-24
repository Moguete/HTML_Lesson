import React from "react";

const Fetch = () => {
  const fetching = async () => {
    const response = await fetch("http://numbersapi.com/random/math")
      .then((response) => {
        response.text();
      })
      .then((data) => data)
      .catch((error) => console.log(error));
  };
  fetching();

  return (
    <div>
      <h1>Sabias que...</h1>
      <p>{data}</p>
    </div>
  );
};

export default Fetch;
