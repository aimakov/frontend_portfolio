module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        sm: "480px",
      },
      animation: {
        slowAppearring: "slowAppearring 3s ease",
      },
      keyframes: {
        slowAppearring: {
          "0%, 100%": { opacity: "0" },
          "20%, 80%": { opacity: "100" },
        },
      },
    },

    fontFamily: {
      sans: ["ui-sans-serif", "system-ui"],
      serif: ["ui-serif", "Georgia"],
      hind: ["Hind", "cursive"],
    },
  },
  plugins: [],
};
