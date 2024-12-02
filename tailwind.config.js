/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'burger-bg': "url('/src/assets/img/home-background (2).jpg')", 
        'not-found':"url('/src/assets/img/contacts-bg.jpg')"
      },
    },
  },
  plugins: [],
};

  
