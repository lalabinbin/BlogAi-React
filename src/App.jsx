// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Editor from "./pages/Editor";
import History from "./pages/History";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Home toggleTheme={toggleTheme} theme={theme} />}
        />
        <Route path="/editor" element={<Editor />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </Router>
  );
}

export default App;
