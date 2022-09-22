const path = require("path")

const mode =
  process.env.NODE_ENV === "production" ? "production" : "development"

module.exports = {
  mode,

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  devtool: "eval",
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
}
