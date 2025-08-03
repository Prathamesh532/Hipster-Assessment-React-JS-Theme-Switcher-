import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { visualizer } from 'rollup-plugin-visualizer';

/**
 * Vite configuration
 * 
 * I've customized this to optimize build performance and development experience
 * Added some exclusions for problematic dependencies
 */
export default defineConfig({
  plugins: [
    // Using the React plugin with fast refresh enabled
    react({
      // Using babel for JSX to improve HMR speed
      babel: {
        plugins: [
          // Add any babel plugins here
        ],
      },
    }),
    // Uncomment to analyze bundle size
    // visualizer({ open: true }),
  ],
  // Server configuration
  server: {
    port: 5173,
    // strictPort: true,
    // open: true,
  },
  // Build configuration
  build: {
    // Reduce chunk size warnings threshold
    chunkSizeWarningLimit: 1000,
    // Improve sourcemaps for debugging
    sourcemap: true,
  },
  // Dependency optimization
  optimizeDeps: {
    // Had to exclude these due to some weird bundling issues
    exclude: ['lucide-react'],
  },
});
