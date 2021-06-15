// eslint-disable-next-line no-undef
const path = require("path");

// eslint-disable-next-line no-undef
module.exports = {
  entry: "./js/script.js", // arquivo de entrada a ser transcompilado
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "./main/main.js"), // local saída a ser transcompilado
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
      },
    ],
  },
};
