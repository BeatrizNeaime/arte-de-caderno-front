/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        rosa: "#f49897",
        roxo: "#dfb2f4",
        amarelo: "#f5e960",
        azul: "#55d6c2",
        cinza: "#F8F9FA",
        "cinza-medio": "#f0f2f5",
        "cinza-subtitle": "#7a7a7a"
      },
      fontFamily: {
        jetbrains: ["JetBrains Mono", "mono"],
        "magic-retro":["Magic Retro"]
      },
      boxShadow: {
        'container': '10px 10px 29px 0px rgba(210,211,214,1)'
      }
    },
    screens: {
      sm: '320px',
      md: '768px',
      lg: '1010px'
    }
  },
  plugins: [],
}
