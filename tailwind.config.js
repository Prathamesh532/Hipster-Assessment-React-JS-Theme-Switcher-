/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html', 
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      // Custom animation keyframes
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        // TODO: Add more custom animations
      },
      animation: {
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      // Custom spacing for specific use cases
      spacing: {
        '18': '4.5rem',
        '68': '17rem',
      },
    },
  },
  // Will add these plugins when needed
  // plugins: [
  //   require('@tailwindcss/forms'),
  //   require('@tailwindcss/typography'),
  // ],
  plugins: [],
};
