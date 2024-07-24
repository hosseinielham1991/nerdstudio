/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontSize: {
        icon: "1.714rem",
        12:'0.857rem'
      },
      width: {
        "286": "20.43rem",
        "122":'8.714rem',
        '50':'3.5714rem'
      },
      padding: {
        '36': "2.571rem",
      },
      colors: {
        secondary: "var(--secondaryColor)",
        primary: "var(--primaryColor)",
        hover: "var(--hoverBackground)",
        customgray: "var(--backgroundcolorSecondary)",
        colorline: "var(--borderColor)",
      },
      height: {
        '80': "5.714rem",
        '48':'3.429rem',
        '50':'3.5714rem'
      },
      borderRadius: {
        '8': '8px', // Define a custom border radius
      },
    },
  },
  plugins: [],
};
