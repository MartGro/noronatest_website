module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  theme: {
    colors: {
      gray: {
        lighter: "#f7f6f6",
        light: "#e7e6e6",
        DEFAULT: "#585858",
        dark: "#282828",
      },
      green: {
        light: "#c2ff86",
        DEFAULT: "#8bd839",
        dark: "#497717",
      },
      blue: {
        dark: "#022a48",
        DEFAULT: "#0566aff",
        light: "#269ef9",
      },
      red: {
        dark: "#7a0303",
        DEFAULT: "#ba0505",
        light: "#fa4848",
      },
      pastel_green: {
        dark: "#a3ff4d",
        DEFAULT: "#d7ffb3",
        light: "#f2ffe6",
      },
      white: {
        dark: "#fffffe6",
        DEFAULT: "#fffff0",
        light: "#ffffff",
      },
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
