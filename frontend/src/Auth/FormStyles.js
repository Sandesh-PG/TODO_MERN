// src/components/Auth/FormStyles.js

import styled from "styled-components";

export const CardContainer = styled.div`
  min-height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #09090b;
`;

export const Card = styled.div`
  background: #09090b;
  border-radius: 0.75rem;
  border: 1px solid #fff;
  padding: 2rem 2.5rem;
  width: 100%;
  max-width: 32rem;
  min-width: 18rem;
  box-sizing: border-box;
  color: #fff;

  @media (max-width: 600px) {
    padding: 1.2rem 0.5rem;
    max-width: 95vw;
    min-width: unset;
  }
`;

export const InputBox = styled.div`
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
    color: #fff;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  input {
    padding: 0.65rem;
    border-radius: 0.375rem;
    border: 1px solid #6b6969;
    background: #09090b;
    color: #fff;
    font-size: 1rem;
  }
`;
