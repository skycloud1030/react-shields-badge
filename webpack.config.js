var path = require("path");
var plugins = [];

var config = {
  entry: {
    "react-shields-badge": path.resolve(__dirname, "src/index.js")
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
    library: "ReactShieldsBadge",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  externals: {
    "react": "react",
    "react-dom": "react-dom"
  },
  plugins: plugins,
  resolve: { alias: {} },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        query: {
          cacheDirectory: true,
          presets: ["env", "stage-0", "react"]
        }
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
    ]
  }
};
module.exports = config;
