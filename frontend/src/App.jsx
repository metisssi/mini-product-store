import { useEffect } from "react"
import Navbar from "./components/Navbar"
import { Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProductPage from "./pages/ProductPage"
import { useThemeStore } from "./store/useThemeStore"

import { Toaster } from "react-hot-toast"; 

function App() {
  const { theme } = useThemeStore()

  // Применяем тему к HTML элементу при каждом изменении
  useEffect(() => {
    console.log("Setting theme to:", theme);
    document.documentElement.setAttribute('data-theme', theme);
    console.log("HTML theme is now:", document.documentElement.getAttribute('data-theme'));
  }, [theme]);

  // Инициализация темы при первой загрузке
  useEffect(() => {
    const savedTheme = localStorage.getItem("preferred-theme") || "forest";
    console.log("Initial theme from localStorage:", savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  return (
    <div className="min-h-screen bg-base-200 transition-colors duration-300">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>

      <Toaster/>
    </div>
  )
}

export default App