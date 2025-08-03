import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, Palette } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { themes } from "../config/themes";

interface HeaderProps {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (isOpen: boolean) => void;
}

export function Header({ isMobileMenuOpen, setIsMobileMenuOpen }: HeaderProps) {
  const { currentTheme, setTheme, themeConfig } = useTheme();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname, setIsMobileMenuOpen]);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/contact", label: "Contact" },
  ];

  const headerClass =
    themeConfig.layout === "sidebar"
      ? "fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)]"
      : "fixed top-0 left-0 right-0 z-50 border-b border-[var(--color-border)]";

  return (
    <motion.header
      className={`${headerClass} bg-[var(--color-surface)] backdrop-blur-md bg-opacity-95`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-lg flex items-center justify-center"
            >
              <Palette className="w-6 h-6 text-white" />
            </motion.div>
            <span className="text-2xl font-bold text-[var(--color-text)] font-[var(--font-primary)] group-hover:text-[var(--color-primary)] transition-colors">
              MultiTheme
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium transition-colors font-[var(--font-secondary)] ${
                  location.pathname === link.path
                    ? "text-[var(--color-primary)]"
                    : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                }`}
              >
                {link.label}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--color-primary)]"
                    initial={false}
                  />
                )}
              </Link>
            ))}
          </nav>

          {/* Theme Dropdown & Mobile Menu */}
          <div className="flex items-center space-x-4">
            {/* Theme Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <motion.button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-[var(--color-background)] border border-[var(--color-border)] text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors font-[var(--font-secondary)]"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="text-sm font-medium">{themeConfig.name}</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform ${
                    isDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </motion.button>

              <AnimatePresence>
                {isDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: -10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-56 bg-[var(--color-surface)] rounded-lg shadow-lg border border-[var(--color-border)] overflow-hidden"
                  >
                    {Object.values(themes).map((theme) => (
                      <motion.button
                        key={theme.id}
                        onClick={() => {
                          setTheme(theme.id);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left hover:bg-[var(--color-background)] transition-colors font-[var(--font-secondary)] ${
                          currentTheme === theme.id
                            ? "bg-[var(--color-background)] text-[var(--color-primary)]"
                            : "text-[var(--color-text)]"
                        }`}
                        whileHover={{ x: 4 }}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className="w-4 h-4 rounded-full border-2 border-gray-300"
                            style={{ backgroundColor: theme.colors.primary }}
                          />
                          <div>
                            <div className="text-sm font-medium">
                              {theme.name}
                            </div>
                            <div className="text-xs text-[var(--color-textSecondary)]">
                              {theme.layout === "default" &&
                                "Minimalist Layout"}
                              {theme.layout === "sidebar" &&
                                "Dark Sidebar Layout"}
                              {theme.layout === "grid" &&
                                "Colorful Grid Layout"}
                            </div>
                          </div>
                        </div>
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg text-[var(--color-text)] hover:bg-[var(--color-surface)] transition-colors"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-[var(--color-border)] mt-2 pt-4 pb-4"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block px-4 py-2 text-base font-medium rounded-lg transition-colors font-[var(--font-secondary)] ${
                    location.pathname === link.path
                      ? "text-[var(--color-primary)] bg-[var(--color-background)]"
                      : "text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-[var(--color-background)]"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
