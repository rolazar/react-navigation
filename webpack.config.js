export default {
  module: {
    rules: [
      {
        test: /\.js/,
        use: "babel-loader",
      },
    ],
  },
  watch: true,
  watchOptions: { aggregateTimeout: 1000 },
  mode: "development",
  devtool: "source-map",
};
