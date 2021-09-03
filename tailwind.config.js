// eslint-disable-next-line @typescript-eslint/no-var-requires
const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./index.html", "./src/**/*.{vue,ts}"],
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
  ],
  theme: {
    colors: {
      primary: colors.violet,
      secondary: colors.sky,
      success: colors.emerald,
      warning: colors.amber,
      danger: colors.red,
      ...colors,
    },
  },
};
