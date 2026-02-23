// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // এখানে custom colors, fonts, spacing ইত্যাদি যোগ করতে পারো
      colors: {
        brand: {
          DEFAULT: "#4F46E5", // Indigo-600
          light: "#6366F1",   // Indigo-500
          dark: "#3730A3",    // Indigo-800
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [],
};
