import React from "react";

const UncontrolledLogin = () => {
  function handleFormSubmit(e) {
    e.preventDefault();
    const username = e.target.elements.username.value;
    const password = e.target.elements.password.value;
    const data = { username, password };
    console.log(data);
  }
  return (
    <form onSubmit={handleFormSubmit}>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="checkbox" name="session" />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default UncontrolledLogin;
