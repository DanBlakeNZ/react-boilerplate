const path = require("path");

process.env.NODE_ENV = process.env.NODE_ENV || "development";

module.exports = env => {
  return {
    stats: "errors-only",
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "public"),
      publicPath: '/',
      filename: "bundle.js"
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          }
        },
        {
          test:/\.s?css$/,
          use:['style-loader','css-loader', 'sass-loader']
        },
        {
          test: /\.(woff|woff2|eot|ttf|otf)$/,
          use: [
            {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                outputPath: "fonts/"
              }
            }
          ]
        },
      ]
    },
    devServer: {
      contentBase: path.join(__dirname, "public"),
      publicPath: "/dist/",
      historyApiFallback: true,
      writeToDisk: true
    }
  };
};
