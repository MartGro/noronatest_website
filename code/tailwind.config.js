module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
    defaultLineHeights: true,
    standardFontWeights: true,
  },
  theme: {
    colors: {
      white: "#88ff88",
      "text-gray-700": "#88ff88",
      "bg-gray-800": "#88ff88",
      "bg-blue-500": "#808080",
    },
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/typography")],
};
// module.exports = {
//   // future: {
//   //   purgeLayersByDefault: true,
//   //   removeDeprecatedGapUtilities: true,
//   //   defaultLineHeights: true,
//   //   standardFontWeights: true,
//   // },
//   theme: {
//   colors: {
//     gray: {
//       light: '#e7e6e6',
//       DEFAULT: '#585858',
//       dark: '#282828',
//     },
//     green: {
//       light: '#c2ff86',
//       DEFAULT: '#8bd839',
//       dark: '#497717',
//     },
//     blue: {
//       dark: '#022a48',
//       DEFAULT: '#0566aff',
//       light: '#269ef9',
//     },
//     red: {
//       dark: '#7a0303',
//       DEFAULT: '#ba0505',
//       light: '#fa4848',
//     }
//   }
// }//,
//   //variants: {},
//   //plugins: [require("@tailwindcss/typography")],
// };
