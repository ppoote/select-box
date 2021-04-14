var path = require("path");

module.exports = {
  entry: {
    main: ["./src/Main.js"],
  },
  output: {
    path: path.resolve(__dirname, "./build"),
    filename: "[name].js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, "./src"),
        loader: "babel-loader",
      },
      {
        // test : /\.css$/,
        // include: path.resolve(__dirname , './src/css'),
        // loader:['style-loader', 'css-loader']
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader", // creates style nodes from JS strings
          //   "css-loader", // translates CSS into CommonJS
          "sass-loader", // compiles Sass to CSS, using Node Sass by default
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [],
  devServer: {
    contentBase: "./public",
    host: "localhost",
    port: 8080,
    historyApiFallback: true,
  },
};
