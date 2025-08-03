import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Theme, ThemeConfig, ThemeContextType } from "../types";
import { themes } from "../config/themes";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [currentTheme, setCurrentTheme] = useLocalStorage<Theme>(
    "app-theme",
    "theme1"
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  const setTheme = (theme: Theme) => {
    setIsTransitioning(true);

    // Small delay to trigger transition animation
    setTimeout(() => {
      setCurrentTheme(theme);
      setIsTransitioning(false);
    }, 150);
  };

  const themeConfig = themes[currentTheme];

  // Apply CSS custom properties for smooth theme transitions
  useEffect(() => {
    const root = document.documentElement;
    const config = themes[currentTheme];

    Object.entries(config.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    root.style.setProperty("--font-primary", config.fonts.primary);
    root.style.setProperty("--font-secondary", config.fonts.secondary);

    // Update document title
    document.title = `MultiTheme Store - ${config.name}`;
  }, [currentTheme]);

  const value: ThemeContextType = {
    currentTheme,
    themeConfig,
    setTheme,
    isTransitioning,
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
