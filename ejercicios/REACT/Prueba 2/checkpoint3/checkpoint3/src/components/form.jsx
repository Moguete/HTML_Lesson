import { useState } from "react";

const Form = () => {
  const [name, setName] = useState({ name: "", surname: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleOnChange(e) {
    e.preventDefault();
    setName({ ...name, [e.target.name]: e.target.value });
  }

  function handleOnClick() {
    setSubmitted(true);
  }

  return (
    <div>
        <input
          type="text"
          name="name"
          value={name.name}
          onChange={handleOnChange}
        />
        <input
          type="text"
          name="surname"
          value={name.surname}
          onChange={handleOnChange}
        />
        <input
          type="email"
          name="email"
          value={name.email}
          onChange={handleOnChange}
        />
        <button type="submit" onClick={handleOnClick}>
          submit!
        </button>

      {submitted === true && (
        <div>
          <h4>Nombre: {name.name}</h4>
          <h4>Apellido: {name.surname}</h4>
          <h4>Correo electrónico: {name.email}</h4>
        </div>
      )}
    </div>
  );
};

export default Form;
