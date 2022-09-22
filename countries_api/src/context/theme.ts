import { createContext } from "react";

type themeType = {
    theme: boolean;
    setTheme: (theme: boolean) => void
}

export const themeContext = createContext<themeType>({
    theme: false,
    setTheme: (theme: boolean) => {}
});