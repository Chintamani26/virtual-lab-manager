import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import ParticlesBackground from "./ParticlesBackground";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("student");
  const [error, setError] = useState("");
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/auth/login", {
        username,
        password,
        role,
      });

      const { token } = res.data;
      localStorage.setItem("token", token);
      localStorage.setItem("role", role);
      navigate("/dashboard");
    } catch (err) {
      setError("❌ Invalid credentials or role mismatch.");
    }
  };

  const getRoleIcon = (role) => {
    switch (role) {
      case "faculty":
        return "👨‍🏫";
      case "hod":
        return "🧑‍💼";
      default:
        return "🎓";
    }
  };

  return (
    <>
      <ParticlesBackground darkMode={darkMode} />
      <div className={`login-container ${darkMode ? "dark" : ""}`}>
        <div
          className="dark-mode-toggle"
          onClick={() => setDarkMode((prev) => !prev)}
          title="Toggle Theme"
        >
          {darkMode ? "🌞" : "🌙"}
        </div>

        <div className="login-card animate-slide">
          <h2 className="login-title">🔐 Login</h2>

          <div className="input-wrapper">
            <span className="input-icon">👤</span>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="login-input"
            />
          </div>

          <div className="input-wrapper">
            <span className="input-icon">🔑</span>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="login-input"
            />
            <span
              className="password-toggle"
              onClick={() => setShowPassword((prev) => !prev)}
              title="Show/Hide Password"
            >
              {showPassword ? "🙈" : "👁️"}
            </span>
          </div>

          <div className="input-wrapper">
            <span className="input-icon">{getRoleIcon(role)}</span>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="login-input login-select"
            >
              <option value="student">Student</option>
              <option value="faculty">Faculty</option>
              <option value="hod">HOD</option>
            </select>
          </div>

          <button className="login-button" onClick={handleLogin}>
            🚀 Login
          </button>

          {error && <p className="login-error">{error}</p>}
        </div>
      </div>
    </>
  );
}

export default Login;
