export type Theme = "theme1" | "theme2" | "theme3";

export interface ThemeConfig {
  id: Theme;
  name: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
    surface: string;
    text: string;
    textSecondary: string;
    accent: string;
    border: string;
  };
  fonts: {
    primary: string;
    secondary: string;
  };
  layout: "default" | "sidebar" | "grid";
}

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export interface ThemeContextType {
  currentTheme: Theme;
  themeConfig: ThemeConfig;
  setTheme: (theme: Theme) => void;
  isTransitioning: boolean;
}
