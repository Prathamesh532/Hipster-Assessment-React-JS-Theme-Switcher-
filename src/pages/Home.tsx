import React from "react";
import { motion } from "framer-motion";
import { ShoppingBag, Star, TrendingUp, Shield } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useApi } from "../hooks/useApi";
import { Product } from "../types";
import { ProductCard } from "../components/ProductCard";
import { LoadingSpinner } from "../components/LoadingSpinner";

export function Home() {
  const { themeConfig } = useTheme();
  const {
    data: products,
    loading,
    error,
  } = useApi<Product[]>(import.meta.env.VITE_PRODUCT_API_URL);

  const features = [
    {
      icon: ShoppingBag,
      title: "Quality Products",
      description:
        "Curated selection of premium items from trusted brands worldwide.",
    },
    {
      icon: Star,
      title: "Top Rated",
      description:
        "All products are highly rated by our community of satisfied customers.",
    },
    {
      icon: TrendingUp,
      title: "Trending Now",
      description: "Stay ahead with the latest trends and most popular items.",
    },
    {
      icon: Shield,
      title: "Secure Shopping",
      description:
        "Shop with confidence using our secure payment and delivery system.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="space-y-12"
    >
      {/* Hero Section */}
      <motion.section
        variants={itemVariants}
        className={`text-center py-16 ${
          themeConfig.layout === "grid"
            ? "bg-gradient-to-br from-pink-100 via-purple-50 to-yellow-100 rounded-3xl border-4 border-dashed border-pink-300"
            : themeConfig.layout === "sidebar"
            ? "bg-gradient-to-r from-gray-900 to-gray-800 rounded-lg border border-gray-700"
            : "bg-gradient-to-b from-blue-50 to-white rounded-lg border border-gray-200"
        }`}
      >
        <motion.h1
          className={`font-bold text-[var(--color-text)] mb-6 font-[var(--font-primary)] ${
            themeConfig.layout === "grid"
              ? "text-5xl md:text-7xl transform -rotate-2"
              : themeConfig.layout === "sidebar"
              ? "text-4xl md:text-6xl"
              : "text-4xl md:text-6xl"
          }`}
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          Welcome to{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)]">
            MultiTheme Store
          </span>
        </motion.h1>

        <motion.p
          className={`text-[var(--color-textSecondary)] mb-8 max-w-3xl mx-auto font-[var(--font-secondary)] ${
            themeConfig.layout === "grid"
              ? "text-xl md:text-2xl font-medium"
              : themeConfig.layout === "sidebar"
              ? "text-lg md:text-xl"
              : "text-lg md:text-xl"
          }`}
          variants={itemVariants}
        >
          Discover amazing products with our dynamic theme switcher. Experience
          how each theme transforms the entire shopping experience.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex flex-wrap justify-center gap-4"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 bg-[var(--color-primary)] text-white rounded-lg font-semibold hover:bg-opacity-90 transition-all shadow-lg font-[var(--font-secondary)] ${
              themeConfig.layout === "grid" ? "transform hover:rotate-1" : ""
            }`}
          >
            Shop Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`px-8 py-4 bg-transparent border-2 border-[var(--color-primary)] text-[var(--color-primary)] rounded-lg font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-all font-[var(--font-secondary)] ${
              themeConfig.layout === "grid" ? "transform hover:-rotate-1" : ""
            }`}
          >
            Learn More
          </motion.button>
        </motion.div>
      </motion.section>

      {/* Features Section */}
      <motion.section variants={itemVariants}>
        <h2
          className={`font-bold text-[var(--color-text)] mb-8 text-center font-[var(--font-primary)] ${
            themeConfig.layout === "grid"
              ? "text-4xl transform -rotate-1"
              : "text-3xl"
          }`}
        >
          Why Choose Us
        </h2>

        <div
          className={`grid gap-6 ${
            themeConfig.layout === "grid"
              ? "grid-cols-1 md:grid-cols-2 gap-8"
              : themeConfig.layout === "sidebar"
              ? "grid-cols-1 lg:grid-cols-2 gap-8"
              : "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
          }`}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className={`bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 text-center hover:border-[var(--color-primary)] transition-all duration-300 group ${
                  themeConfig.layout === "grid"
                    ? "transform hover:rotate-1 border-2 border-dashed"
                    : themeConfig.layout === "sidebar"
                    ? "bg-opacity-50 backdrop-blur-sm"
                    : ""
                }`}
              >
                <div
                  className={`w-16 h-16 bg-gradient-to-br from-[var(--color-primary)] to-[var(--color-accent)] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform ${
                    themeConfig.layout === "grid" ? "rounded-full" : ""
                  }`}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3
                  className={`font-semibold text-[var(--color-text)] mb-3 font-[var(--font-primary)] ${
                    themeConfig.layout === "grid" ? "text-xl" : "text-lg"
                  }`}
                >
                  {feature.title}
                </h3>
                <p className="text-[var(--color-textSecondary)] font-[var(--font-secondary)]">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.section>

      {/* Products Section */}
      <motion.section variants={itemVariants}>
        <div className="flex items-center justify-between mb-8">
          <h2
            className={`font-bold text-[var(--color-text)] font-[var(--font-primary)] ${
              themeConfig.layout === "grid"
                ? "text-4xl transform -rotate-1"
                : "text-3xl"
            }`}
          >
            Featured Products
          </h2>
          {loading && (
            <div className="flex items-center space-x-2 text-[var(--color-textSecondary)]">
              <LoadingSpinner size="sm" />
              <span className="text-sm font-[var(--font-secondary)]">
                Loading products...
              </span>
            </div>
          )}
        </div>

        {error ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12 bg-red-50 rounded-lg border border-red-200"
          >
            <p className="text-red-600 font-medium font-[var(--font-secondary)]">
              Error loading products: {error}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="mt-4 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-[var(--font-secondary)]"
            >
              Retry
            </button>
          </motion.div>
        ) : (
          <div
            className={`grid gap-6 ${
              themeConfig.layout === "grid"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                : themeConfig.layout === "sidebar"
                ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
                : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
            }`}
          >
            {products?.map((product, index) => (
              <ProductCard key={product.id} product={product} index={index} />
            ))}
          </div>
        )}
      </motion.section>

      {/* CTA Section */}
      <motion.section
        variants={itemVariants}
        className={`text-center py-16 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] rounded-2xl ${
          themeConfig.layout === "grid"
            ? "transform -rotate-1 border-4 border-dashed border-white"
            : ""
        }`}
      >
        <h2
          className={`font-bold text-white mb-4 font-[var(--font-primary)] ${
            themeConfig.layout === "grid"
              ? "text-4xl transform rotate-2"
              : "text-3xl"
          }`}
        >
          Ready to Start Shopping?
        </h2>
        <p
          className={`text-white/90 mb-8 font-[var(--font-secondary)] ${
            themeConfig.layout === "grid" ? "text-xl" : "text-lg"
          }`}
        >
          Explore our full catalog and experience the power of dynamic theming.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className={`px-8 py-4 bg-white text-[var(--color-primary)] rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg font-[var(--font-secondary)] ${
            themeConfig.layout === "grid" ? "transform hover:rotate-1" : ""
          }`}
        >
          Browse All Products
        </motion.button>
      </motion.section>
    </motion.div>
  );
}
