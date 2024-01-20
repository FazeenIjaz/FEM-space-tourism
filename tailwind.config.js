/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        headerLinks: "#ffffff0a",
        lightBlack: "#0B0D17",
        skyBlue: "#D0D6F9",
        pureWhite: "#FFFFFF",
      },
      backgroundImage: {
        "home-desktop": 'url("/src/assets/home/background-home-desktop.jpg")',
        "home-tab": 'url("/src/assets/home/background-home-tablet.jpg")',
        "home-mb": 'url("/src/assets/home/background-home-mobile.jpg")',
        "destination-desktop":
          "url('/src/assets/destination/background-destination-desktop.jpg')",
        "destination-tab":
          "url('/src/assets/destination/background-destination-tablet.jpg')",
        "destination-mb":
          "url('/src/assets/destination/background-destination-mobile.jpg')",
        "crew-desktop": "url('/src/assets/crew/background-crew-desktop.jpg')",
        "crew-tab": "url('/src/assets/crew/background-crew-tablet.jpg')",
        "crew-mb": "url('/src/assets/crew/background-crew-mobile.jpg')",
        "technology-desktop":
          "url('/src/assets/technology/background-technology-desktop.jpg')",
        "technology-tab":
          "url('/src/assets/technology/background-technology-tablet.jpg')",
        "technology-mb":
          "url('/src/assets/technology/background-technology-mobile.jpg')",
      },
    },
  },
  plugins: [],
};
