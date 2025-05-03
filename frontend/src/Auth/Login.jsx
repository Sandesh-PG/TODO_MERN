import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CardContainer, Card, InputBox } from "./FormStyles";
import { useTheme } from "../components/theme-provider.jsx";
import { useAuth } from "../context/AuthContext.jsx";

const Login = () => {
  const { theme } = useTheme();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      setLoading(true);
      await login({ email, password });
      setTimeout(() => {
        navigate("/dashboard");
      }, 10);
    } catch (err) {
      setError(err.message || "Login failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CardContainer>
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "700",
          textAlign: "center",
          color: theme === "dark" ? "#fff" : "#222",
          fontFamily: "sans-serif",
        }}
      >
        Let’s get things done!
      </h1>
      <Card>
        <form onSubmit={handleSubmit}>
          <InputBox>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="name@example.com"
            />
          </InputBox>

          <InputBox>
            <p
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
                marginTop: "1.2rem",
                marginBottom: "0",
              }}
            >
              <label htmlFor="password" style={{ width: "65%" }}>
                Password
              </label>
              <Link
                to=""
                style={{
                  textDecoration: "none",
                  color: "#919ba6",
                  fontFamily: "sans-serif",
                  fontSize: "0.8rem",
                }}
              >
                Forgot password?
              </Link>
            </p>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder=""
            />
          </InputBox>

          {error && <div className="error-message">{error}</div>}

          <button
            type="submit"
            style={{
              width: "100%",
              padding: "1rem",
              margin: "0.8rem 0",
              fontWeight: "bold",
              borderRadius: "8px",
              fontFamily: "sans-serif",
            }}
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          <p
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              marginBottom: "0",
              fontSize: "1.1rem",
            }}
          >
            Don't have an account?{" "}
            <Link
              style={{
                textDecoration: "none",
                color: theme === "dark" ? "#fff" : "#222",
              }}
              to="/signup"
            >
              Sign Up
            </Link>
          </p>
        </form>
      </Card>
    </CardContainer>
  );
};

export default Login;
