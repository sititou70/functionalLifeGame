module.exports = {
  entry: "./src/index.js",
  output: {
    path: __dirname,
    filename: "./dist/index.js"
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        loader: ["style-loader", "css-loader", "sass-loader"]
      }
    ]
  },
};