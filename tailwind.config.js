module.exports = {
  mode: "jit",
  purge: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "app-purple": "#891bd4",
        "app-dark-purple": '#140630',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
