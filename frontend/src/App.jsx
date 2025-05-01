import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login.jsx";
import Signup from "./Auth/Signup.jsx";
import Dashboard from "./pages/Dashboard";
import Header from "./pages/Header.jsx";

import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, useTheme } from "./components/theme-provider.jsx";
import { lightTheme, darkTheme } from "./styles/theme.js";

function App() {
  return (
    <ThemeProvider>
      <ThemedApp />
    </ThemeProvider>
  );
}

function ThemedApp() {
  const { theme } = useTheme();
  const themeObject = theme === "light" ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={themeObject}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </StyledThemeProvider>
  );
}

export default App;
