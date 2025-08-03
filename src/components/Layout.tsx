import React, { ReactNode, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { themeConfig, isTransitioning } = useTheme();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.div
      className="min-h-screen bg-[var(--color-background)] text-[var(--color-text)] transition-all duration-300"
      style={{ fontFamily: "var(--font-secondary)" }}
      animate={{ opacity: isTransitioning ? 0.7 : 1 }}
      transition={{ duration: 0.2 }}
    >
      <Header
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div className="pt-16">
        {themeConfig.layout === "sidebar" ? (
          <div className="flex">
            {/* Sidebar for desktop */}
            <div className="hidden md:block">
              <Sidebar />
            </div>

            {/* Mobile sidebar with animation */}
            <AnimatePresence>
              {isMobileMenuOpen && (
                <motion.div
                  className="md:hidden fixed inset-0 z-40 bg-black bg-opacity-50"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <motion.div
                    initial={{ x: -300 }}
                    animate={{ x: 0 }}
                    exit={{ x: -300 }}
                    transition={{ duration: 0.3 }}
                    className="w-64 h-full bg-[var(--color-surface)] border-r border-[var(--color-border)]"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Sidebar onLinkClick={() => setIsMobileMenuOpen(false)} />
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            <main className="flex-1 md:ml-64">
              <div className="p-6">{children}</div>
            </main>
          </div>
        ) : (
          <main className="container mx-auto px-4 py-8">{children}</main>
        )}
      </div>
    </motion.div>
  );
}
