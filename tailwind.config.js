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
        },
        taskbar: {
          DEFAULT: 'rgba(0, 0, 0, 0.6)',
          appholder: 'rgba(200, 200, 200)',
        }
      },
      backgroundImage: {
        wallpaper: "url('/assets/astronaut_jellyfish.jpg')"
      },
    },
  },
  plugins: [],
}