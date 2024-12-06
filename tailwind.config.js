/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#e2e2e2',
        },
        taskbar: {
          DEFAULT: 'rgba(0, 0, 0, 0.6)',
        }
      },
      backgroundImage: {
        wallpaper: "url('/assets/astronaut_jellyfish.jpg')"
      },
    },
  },
  plugins: [],
}