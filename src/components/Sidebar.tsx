import React from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { Home, User, Mail, Palette, TrendingUp, Settings } from "lucide-react";

interface SidebarProps {
  onLinkClick?: () => void;
}

export function Sidebar({ onLinkClick }: SidebarProps) {
  const location = useLocation();

  const sidebarLinks = [
    { path: "/", label: "Dashboard", icon: Home },
    { path: "/about", label: "About Us", icon: User },
    { path: "/contact", label: "Contact", icon: Mail },
    { path: "/analytics", label: "Analytics", icon: TrendingUp },
    { path: "/settings", label: "Settings", icon: Settings },
  ];

  return (
    <motion.aside
      initial={{ x: -300 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-16 left-0 w-64 h-[calc(100vh-4rem)] bg-[var(--color-surface)] border-r border-[var(--color-border)] overflow-y-auto"
    >
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <Palette className="w-6 h-6 text-[var(--color-primary)]" />
          <h2 className="text-lg font-bold text-[var(--color-text)] font-[var(--font-primary)]">
            Navigation
          </h2>
        </div>

        <nav className="space-y-2">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = location.pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                onClick={onLinkClick}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-200 font-[var(--font-secondary)] ${
                  isActive
                    ? "bg-[var(--color-primary)] text-white shadow-lg"
                    : "text-[var(--color-text)] hover:bg-[var(--color-background)] hover:text-[var(--color-primary)]"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-8 p-4 bg-[var(--color-background)] rounded-lg border border-[var(--color-border)]">
          <h3 className="text-sm font-semibold text-[var(--color-text)] mb-2 font-[var(--font-primary)]">
            Pro Tip
          </h3>
          <p className="text-xs text-[var(--color-textSecondary)] font-[var(--font-secondary)]">
            Try switching between different themes to see how the layout adapts
            dynamically.
          </p>
        </div>
      </div>
    </motion.aside>
  );
}
