// tailwind.config.js

module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#a70943',
        secondary: '#ce145e',
        accent: '#dfbfd4',
      },
      fontFamily: {
        heading: ['"Amatic SC"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      fontSize: {
        '2xl': '50rem',
        '3xl': '3rem',
      },
    },
  },
  plugins: [],
}
