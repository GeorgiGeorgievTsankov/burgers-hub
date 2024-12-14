/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'burger-bg': "url('/src/assets/img/home-background (2).jpg')", 
        'not-found': "url('/src/assets/img/contacts-bg.jpg')",
        'paper-bg': "url('/src/assets/img/paper-bg.jpg')",
        'enjoy-bg': "url('/src/assets/img/enjoy-bg.jpg')",
        'empty-bg': "url('/src/assets/img/empty-bg.jpg')",
      },
    },
  },
  plugins: [],
};

  
