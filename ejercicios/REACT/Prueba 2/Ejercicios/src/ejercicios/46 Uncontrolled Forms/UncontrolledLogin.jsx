import React from "react";

const UncontrolledLogin = () => {
  function handleFormSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
        username : formData.get('username'),
        password : formData.get('password'),
        session : formData.get('session') === 'on' ? true : false,
    }
    console.log(data)
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
