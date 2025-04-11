module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: '#cbcbca', // اللون من الهوية
        accent: '#355863', // الأزرق اللي في الهوية
      },
      fontFamily: {
        arabic: ['Hanimation Arabic Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}