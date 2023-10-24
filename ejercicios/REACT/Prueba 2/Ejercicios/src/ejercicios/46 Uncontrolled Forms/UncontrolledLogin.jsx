import React from "react";

const UncontrolledLogin = () => {
  return (
    <form>
      <input type="text" name="username" />
      <input type="password" name="password" />
      <input type="checkbox" name="session" />
      <button>Login</button>
      <button type="reset">Reset</button>
    </form>
  );
};

export default UncontrolledLogin;
