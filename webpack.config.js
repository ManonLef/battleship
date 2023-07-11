const path = require("path");

module.exports = {
entry: "./src/index.js",
output: {
  filename: "main.js",
  path: path.resolve(__dirname, "dist"),
},
mode: 'production',
module: {
  rules: [
    {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    },
    {
      test: /\.(?:js|mjs|cjs)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', { targets: "defaults" }]
          ]
        }
      }
    }
  ]
}
};
