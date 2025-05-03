import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { CardContainer, Card, InputBox } from "./FormStyles";
import { useTheme } from "../components/theme-provider.jsx";

const Signup = () => {
  const { theme } = useTheme();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { register } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError("Passwords don't match");
      return;
    }

    setLoading(true);
    setError("");

    try {
      await register({ email, password });
      navigate("/dashboard");
    } catch (err) {
      setError(err.message || "Registration failed. Please try again.");
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
        Create an account
      </h1>
      <Card>
        <form action="" onSubmit={handleSubmit}>
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
              <label htmlFor="password">Password</label>
            </p>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder=""
              required
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
              <label htmlFor="confirm-password">Confirm Password</label>
            </p>
            <input
              type="password"
              id="confirm-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder=""
              required
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
          >
            {loading ? "Signing Up..." : "Sign Up"}
          </button>

          <p
            style={{
              textAlign: "center",
              fontFamily: "sans-serif",
              marginBottom: "0",
              fontSize: "1.1rem",
            }}
          >
            Already have an account?{" "}
            <Link
              style={{
                textDecoration: "none",
                color: theme === "dark" ? "#fff" : "#222",
              }}
              to="/login"
            >
              Login
            </Link>
          </p>
        </form>
      </Card>
    </CardContainer>
  );
};

export default Signup;
