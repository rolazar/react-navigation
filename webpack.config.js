export default {
  module: {
    rules: [
      {
        test: /\.js/,
        use: "babel-loader",
      },
      {
        test: /\.(jpg|png)/,
        type: "asset/resource",
      },
    ],
  },
  watch: true,
  watchOptions: { aggregateTimeout: 1000 },
  mode: "development",
  devtool: "source-map",
};
