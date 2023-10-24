import React, { useState } from "react";

const Form = () => {
  const [data, setData] = useState("");
  const [submittedData, setSubmittedData] = useState("");

  function handleInputChange(e) {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  }

  function handleButtonSubmit(e) {
    e.preventDefault();
    setSubmittedData(data);
  }

  return (
    <div>
      <form>
        <input
          type="text"
          name="username"
          value={data.name}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          value={data.password}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="email"
          value={data.email}
          onChange={handleInputChange}
        />
        <button onClick={handleButtonSubmit}>Submit!</button>
      </form>
      {submittedData && submittedData.password.length > 5 ? (
      <div>
        <h3>Datos ingresados:</h3>
        <p>Nombre: {submittedData.name}</p>
        <p>Contraseña: {submittedData.password}</p>
        <p>Correo electronico: {submittedData.email}</p>
      </div>
        ):(<p>La contraseña es demasiado corta!</p>)}
    </div>
  );
};

export default Form;
