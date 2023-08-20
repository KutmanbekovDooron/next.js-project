/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'lg':{'max' : '1024px'},
        'md':{'max' : '768px'},
        'sm':{'max' : '640px'},
      },
    },
  },
  plugins: [],
}

