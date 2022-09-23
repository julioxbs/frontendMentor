import { Routes, Route, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { FilterableSection } from "./components/FilterableSection";
import { Navigation } from "./components/Navigation";
import { themeContext } from "./context/theme";

export function App() {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    const isDark = JSON.parse(localStorage.getItem('isDark') ?? 'false');
    setTheme(isDark);
    if (isDark) {
      document.querySelector('body')?.classList.add('dark');
    } else {
      document.querySelector('body')?.classList.remove('dark');
    }
  }, [theme])

  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <div className="dark:bg-[#202D36] dark:text-[#FBFCFC] w-full min-h-screen">
        <Navigation />
        <Outlet />
      </div>
    </themeContext.Provider>
  );
}