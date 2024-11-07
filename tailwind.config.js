const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT( {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brandColor: "rgb(111, 207, 151)", 
        darkBrandColor: "rgb(20, 48, 25)", 
        primaryTextColor: "rgb(20, 48, 25)",
        secondaryTextColor:"rgb(225, 225, 225)"
      },
    },
  },
  plugins: [],
})

