import { ThemeConfig } from "../types";

export const themes: Record<string, ThemeConfig> = {
  theme1: {
    id: "theme1",
    name: "Default",
    colors: {
      primary: "#2563eb",
      secondary: "#64748b",
      background: "#ffffff",
      surface: "#f8fafc",
      text: "#1e293b",
      textSecondary: "#64748b",
      accent: "#3b82f6",
      border: "#e2e8f0",
    },
    fonts: {
      primary:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
      secondary:
        '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    },
    layout: "default",
  },
  theme2: {
    id: "theme2",
    name: "Dark",
    colors: {
      primary: "#fbbf24",
      secondary: "#9ca3af",
      background: "#0f172a",
      surface: "#1e293b",
      text: "#f1f5f9",
      textSecondary: "#94a3b8",
      accent: "#f59e0b",
      border: "#334155",
    },
    fonts: {
      primary: 'Georgia, "Times New Roman", Times, serif',
      secondary: 'Georgia, "Times New Roman", Times, serif',
    },
    layout: "sidebar",
  },
  theme3: {
    id: "theme3",
    name: "Colorful",
    colors: {
      primary: "#ec4899",
      secondary: "#8b5cf6",
      background: "#fef7ed",
      surface: "#ffffff",
      text: "#374151",
      textSecondary: "#6b7280",
      accent: "#10b981",
      border: "#f3e8ff",
    },
    fonts: {
      primary: '"Pacifico", cursive',
      secondary: '"Inter", sans-serif',
    },
    layout: "grid",
  },
};
