import React, { createContext, useContext, useEffect, useState } from "react";

type context = {
    theme: boolean;
    setTheme: (theme: boolean) => void;
}

const themeProvider = createContext({} as context);

export function ThemeContext({ children }: {children: React.ReactNode}) {
    const [theme, setTheme] = useState(false);

    useEffect(() => {
        const currentTheme = JSON.parse(localStorage.getItem('theme') ?? 'false');
        setTheme(currentTheme);
        
        if (currentTheme) {
            document.querySelector('body')?.classList.add(...['dark', 'bg-dark']);
        } else {
            document.querySelector('body')?.classList.remove(...['dark', 'bg-dark']);
        }
    }, [theme])

    return (
        <themeProvider.Provider value={{ theme, setTheme }}>
            {children}
        </themeProvider.Provider>
    );
};

export const useContextTheme = () => useContext(themeProvider);