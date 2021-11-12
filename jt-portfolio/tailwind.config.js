module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      orange: {
        DEFAULT: 'rgb(255, 94, 0)',
        banner: 'rgb(220, 80, 20)',
      },
      black: {
        DEFAULT: 'rgb(0, 0, 0)',
      }
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
