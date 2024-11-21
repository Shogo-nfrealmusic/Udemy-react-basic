export const ThemeContext = createContext();
import { useState } from "react";

export const ThemeProvider = ( { children }) => {
  const [theme, setTheme] = useState('light')

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}