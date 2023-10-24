import { useState } from "react";

const Login = () => {
    const [formData, setFormData] = useState({
      username: "",
      password: "",
      rememberMe: false,
    });
  
    function handleChange(event) {
      const { name, value, type, checked } = event.target;
  
      setFormData({
        ...formData,
        [name]: type === "checkbox" ? checked : value,
      });
    }
    return (
      <div>
        <label htmlFor="username">usuario:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
  
        <label htmlFor="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
  
        <label>
          <input
            type="checkbox"
            name="rememberMe"
            checked={formData.rememberMe}
            onChange={handleChange}
          />
          Remember Me!
        </label>
      </div>
    );
  }

export default Login