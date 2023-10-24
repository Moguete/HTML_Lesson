import { useState } from "react";

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLoginClick = () => {
    if (username && password) {
      onLogin({ username, password });
    }
  };
  const handleResetClick = () => {
    setUsername("");
    setPassword("");
  };

  const isButtonDisabled = !username && !password;
  return (
    <div>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <label>
        <input type="checkbox" name="rememberMe" onChange={onLogin} />
        Remember Me!
      </label>
      <button onClick={handleLoginClick} disabled={isButtonDisabled}>
        Login
      </button>
      <div>
        <button type="button" onClick={handleResetClick}>
          Reset
        </button>
        <button onClick={handleLoginClick} disabled={isButtonDisabled}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
