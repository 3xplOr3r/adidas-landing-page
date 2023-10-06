/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx}"];
export const theme = {
  extend: {
    colors: {
      gray: {
        "100": "#081728",
        "200": "#040d17",
      },
      white: "#fff",
      lightslategray: "#8296ab",
      "body-text-c-1": "#f5f5f5",
      gainsboro: {
        "100": "#dedede",
        "200": "#dbdbdb",
        "300": "#d9d9d9",
      },
      lightsteelblue: "#a7b4c3",
      whitesmoke: "#eaeaea",
      aquamarine: "#00eebd",
      black: "#000",
    },
    spacing: {},
    fontFamily: {
      inter: "Inter",
      oxanium: "Oxanium",
    },
    borderRadius: {
      "3xs": "10px",
    },
  },
  fontSize: {
    base: "1rem",
    sm: "0.88rem",
    lg: "1.13rem",
    "3xl": "1.38rem",
    "21xl": "2.5rem",
    xl: "1.25rem",
    "5xl": "1.5rem",
    "45xl": "6rem",
    "29xl": "3rem",
    inherit: "inherit",
  },
};
export const corePlugins = {
  preflight: false,
};
