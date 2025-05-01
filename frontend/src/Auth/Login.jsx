import React from "react";
import { Link } from "react-router-dom";
import { CardContainer, Card, InputBox } from "./FormStyles";

const Login = () => {
  return (
    <CardContainer>
      <h1
        style={{
          fontSize: "30px",
          fontWeight: "700",
          textAlign: "center",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        Let’s get things done!
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
            <input type="password" id="password" placeholder="" />
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
            Login
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
              style={{ textDecoration: "none", color: "#fff" }}
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
