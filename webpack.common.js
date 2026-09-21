import path from "node:path";
import HtmlWebpackPlugin from "html-webpack-plugin";

export default {
  entry: "./src/index.js",
  
  output: {
    filename: "main.js",
    path: path.resolve(import.meta.dirname, "dist"),
    clean: true,
  },

  // The html plugin is needed for the browser to execute the js file, even without any html
  plugins: [
    new HtmlWebpackPlugin({
      title: "Knight Travails",
    }),
  ],
};
