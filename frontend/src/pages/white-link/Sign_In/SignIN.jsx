import React, { useState } from "react";
import "./SignIN.css";
import { Link, useNavigate, useLocation } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const res = await fetch(`/api/auth/signin`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // Dispatch custom event to update navbar
        window.dispatchEvent(new Event('userLogin'));

        navigate("/", { replace: true });
      } else {
        setError(data.message || "Invalid email or password");
      }
    } catch (_err) {
      setError("Cannot connect to server. Make sure backend is running.");
    }
  };

  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Login</h2>

        <form onSubmit={handleSubmit}>
          {error && <p className="error-message">{error}</p>}

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="signin-btn">
            Login
          </button>

          <p className="signup-link">
            Don’t have an account?{" "}
            <Link to="/signup">Create an account</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
