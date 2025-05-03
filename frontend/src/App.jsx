import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Auth/Login.jsx";
import Signup from "./Auth/Signup.jsx";
import Dashboard from "./pages/Dashboard";
import Header from "./pages/Header.jsx";
import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider, useTheme } from "./components/theme-provider.jsx";
import { lightTheme, darkTheme } from "./styles/theme.js";
import { AuthProvider } from "./context/AuthContext.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx";

function ThemedApp() {
  const { theme } = useTheme();
  const themeObject = theme === "light" ? lightTheme : darkTheme;

  return (
    <StyledThemeProvider theme={themeObject}>
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </StyledThemeProvider>
  );
}

function App() {
  return (
    <AuthProvider>
      <ThemeProvider>
        <ThemedApp />
      </ThemeProvider>
    </AuthProvider>
  );
}

export default App;
