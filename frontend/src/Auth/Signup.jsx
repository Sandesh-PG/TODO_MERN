import React from "react";
import { Link } from "react-router-dom";
import { CardContainer, Card, InputBox } from "./FormStyles";
import { useTheme } from "../components/theme-provider.jsx";

const Signup = () => {
  const { theme } = useTheme();

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
        <form action="">
          <InputBox>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="name@example.com" />
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
            <input type="password" id="password" placeholder="" />
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
              <label htmlFor="password">Confirm Password</label>
            </p>
            <input type="password" id="confirm-password" placeholder="" />
          </InputBox>

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
            Sign Up
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
