const path = require("path");

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
  },
  style: {
    sass: {
      loaderOptions: {
        additionalData: `
          @import "@/styles/_variables.scss";
          @import "@/styles/_mixins.scss";
        `,
        sassOptions: {
          includePaths: [path.join(__dirname, "src/styles")],
        },
      },
    },
  },
};
