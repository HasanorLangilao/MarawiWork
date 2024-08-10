/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGray: '#272525',
        grayDark: '#404040',
        grayDarker: '#555a56',
        blueDark: '#2980b9',
        blueDarker: '#3498db',
      },
      
    },
  },
  plugins: [],
}

