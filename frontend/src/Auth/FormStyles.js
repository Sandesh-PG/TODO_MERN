import styled from "styled-components";

export const CardContainer = styled.div`
  min-height: 94vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.background};
`;

export const Card = styled.div`
  background: ${({ theme }) => theme.cardBg};
  border-radius: 0.75rem;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  padding: 2rem 2.5rem;
  width: 100%;
  max-width: 32rem;
  min-width: 18rem;
  box-sizing: border-box;

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
    color: ${({ theme }) => theme.text};
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
  input {
    padding: 0.65rem;
    border-radius: 0.375rem;
    font-size: 1rem;
    background: ${({ theme }) => theme.inputBg};
    color: ${({ theme }) => theme.inputText};
    border: 1px solid ${({ theme }) => theme.border};
  }
`;
