/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['Sora', 'sans-serif'],
      },
      backgroundImage: {
        'purple-white': 'linear-gradient(90deg, #8750F7 0%, #FFFFFF 100%)',
      },
      boxShadow: {
        'inset-white-glow': 'inset -5px -5px 250px 0px #FFFFFF05',
      },
    },
  },
  plugins: [],
}