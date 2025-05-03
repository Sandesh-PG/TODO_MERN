import React from "react";
import styled from "styled-components";
import { useTheme } from "../components/theme-provider.jsx";
// import { useAuth } from "../context/AuthContext.jsx"; // If using auth context

const HeaderBar = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.background};
  border-bottom: 2px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 2rem;
  box-sizing: border-box;

  @media (max-width: 600px) {
    padding: 0.6rem 0.8rem;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: ${({ theme }) => theme.text};
  font-family: sans-serif;

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  @media (max-width: 600px) {
    gap: 0.5rem;
  }
`;

const IconButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.text};
  font-size: 1.3rem;
  cursor: pointer;
  margin-right: 0.5rem;
  display: flex;
  align-items: center;

  @media (max-width: 600px) {
    font-size: 1.1rem;
    margin-right: 0.2rem;
  }
`;

const LogoutButton = styled.button`
  background: none;
  border: 1px solid ${({ theme }) => theme.border};
  color: ${({ theme }) => theme.text};
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;

  @media (max-width: 600px) {
    padding: 0.3rem 0.6rem;
    font-size: 0.9rem;
  }
`;

const Header = () => {
  const { theme, setTheme } = useTheme();
  // const { user, logout } = useAuth(); // Uncomment if using auth context

  // For now, fallback to token check if no context
  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/login";
  };

  return (
    <HeaderBar>
      <Logo>TaskMaster</Logo>
      <Actions>
        <IconButton
          aria-label="Toggle theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <span role="img" aria-label={theme === "dark" ? "moon" : "sun"}>
            {theme === "dark" ? "🌙" : "☀️"}
          </span>
        </IconButton>
        {isLoggedIn && (
          <LogoutButton onClick={handleLogout}>
            <span style={{ display: "flex", alignItems: "center" }}>
              <svg
                style={{ marginRight: "0.3rem" }}
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                viewBox="0 0 24 24"
              >
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                <polyline points="16 17 21 12 16 7"></polyline>
                <line x1="21" y1="12" x2="9" y2="12"></line>
              </svg>
              Logout
            </span>
          </LogoutButton>
        )}
      </Actions>
    </HeaderBar>
  );
};

export default Header;
