"use client";
import React, { useState, createContext, useEffect, type ReactNode, useContext } from "react";

type ThemeProviderValue = {
    theme: string;
    setThemeFun: () => void;
}

export const ThemeContext = createContext<ThemeProviderValue | null>(null);

export function useThemeContext(){
    const ctx = useContext(ThemeContext);
    if (ctx === null){
        throw new Error("PortfolioContext is null -- that should not happen");
    }
    
    return ctx;
}

type ThemeProviderProps = {
    children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
    const [theme, setTheme] = useState("dark");

    // Toggle Theme
    const setThemeFun = () => {
        if (theme === "dark") {
            setTheme("light");
            localStorage.setItem("myPortfolioProfileTheme", "light");
        } else {
            setTheme("dark");
            localStorage.setItem("myPortfolioProfileTheme", "dark");
        }
    };

    // Get Theme Value From LocalStorage
    useEffect(() => {
        const getTheme = localStorage.getItem("myPortfolioProfileTheme");
        if (!getTheme) {
            return
        }
        setTheme(getTheme);
    }, []);

    return (
        <ThemeContext.Provider value={{ theme, setThemeFun }}>
            <div className={theme === "dark" ? "dark" : ""}>
                <div className='dark:text-white dark:bg-black'>{children}</div>
            </div>
        </ThemeContext.Provider>
    );
};

export default ThemeProvider;