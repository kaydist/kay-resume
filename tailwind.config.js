module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  darkMode: 'class',
  theme: {
    fontFamily: {
      avertaCY: [
        '"Averta CY"', 'sans-serif'
      ]
    },

    extend: {
      spacing: {
        'mob-body': '1rem',
        '2xmob-body': '2rem',
        'body': '3.125rem',
        '2xbody': '6.25rem',
      }
    },
  },
  plugins: [],
}
