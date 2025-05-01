import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Auth/Login.jsx";
import Signup from "./Auth/Signup.jsx";
import Dashboard from "./pages/Dashboard";
import { ThemeProvider } from "./components/theme-provider.jsx";
import Header from "./pages/Header.jsx";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
