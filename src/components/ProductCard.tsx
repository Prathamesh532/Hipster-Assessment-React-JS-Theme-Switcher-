import React from "react";
import { motion } from "framer-motion";
import { Star, ShoppingCart } from "lucide-react";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? "text-yellow-400 fill-current"
            : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
      className="bg-[var(--color-surface)] border border-[var(--color-border)] rounded-xl p-6 hover:border-[var(--color-primary)] transition-all duration-300 group h-full flex flex-col"
    >
      <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      <div className="flex-1 flex flex-col">
        <div className="mb-2">
          <span className="text-xs text-[var(--color-primary)] bg-[var(--color-background)] px-2 py-1 rounded-full font-medium font-[var(--font-secondary)]">
            {product.category}
          </span>
        </div>

        <h3 className="text-lg font-bold text-[var(--color-text)] mb-3 line-clamp-2 font-[var(--font-primary)] group-hover:text-[var(--color-primary)] transition-colors flex-1">
          {product.title}
        </h3>

        <p className="text-[var(--color-textSecondary)] mb-4 line-clamp-3 font-[var(--font-secondary)] text-sm">
          {product.description}
        </p>

        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-1">
            {renderStars(product.rating.rate)}
            <span className="text-sm text-[var(--color-textSecondary)] ml-1 font-[var(--font-secondary)]">
              ({product.rating.count})
            </span>
          </div>
          <div className="text-2xl font-bold text-[var(--color-primary)] font-[var(--font-primary)]">
            ${product.price}
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full flex items-center justify-center space-x-2 px-4 py-3 bg-[var(--color-primary)] text-white rounded-lg font-medium hover:bg-opacity-90 transition-all font-[var(--font-secondary)]"
        >
          <ShoppingCart className="w-4 h-4" />
          <span>Add to Cart</span>
        </motion.button>
      </div>
    </motion.div>
  );
}
