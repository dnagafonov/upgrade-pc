const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const isDev = process.env.NODE_ENV === "development";

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: "all",
    },
  };
  if (!isDev) {
    config.minimizer = [new OptimizeCssAssetsPlugin(), new TerserPlugin()];
  }
  return config;
};

const cssLoaders = (extra) => {
  let loaders = [
    {
      loader: MiniCssExtractPlugin.loader,
      options: {
        hmr: isDev,
        reloadAll: true,
      },
    },
    "css-loader",
  ];
  if (extra) loaders.push(extra);
  return loaders;
};

const babelLoader = (preset) => {
  let loader = {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env"],
      plugins: ["@babel/plugin-proposal-class-properties"],
    },
  };
  if (preset) loader.options.presets.push(preset);
  return loader;
};

const jsLoader = (preset) => {
  let loaders = [babelLoader(preset)];

  if (isDev) {
    loaders.push("eslint-loader");
  }

  return loaders;
};

const plugins = () => {
  let base = [
    new HTMLWebpackPlugin({
      template: "../public/index.html",
      minify: {
        collapseWhitespace: !isDev,
      },
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "public/favicon.ico"),
          to: path.resolve(__dirname, "build"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ];

  if (!isDev) base.push(new BundleAnalyzerPlugin());
  return base;
};

module.exports = {
  context: path.resolve(__dirname, "src"),
  mode: "development",
  entry: ["@babel/polyfill", "./index.jsx"],
  output: {
    filename: !isDev ? "[name].[chunkhash].js" : "[name].[hash].js",
    path: path.resolve(__dirname, "build"),
  },
  optimization: optimization(),
  resolve: {
    extensions: [".js", ".json", ".jsx"],
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@scss": path.resolve(__dirname, "src/scss"),
      "@assets": path.resolve(__dirname, "src/assets"),
      "@images": path.resolve(__dirname, "src/assets/images"),
    },
  },
  devtool: isDev ? "source-map" : "",
  devServer: {
    historyApiFallback: true,
    port: 8080,
    hot: isDev,
  },
  plugins: plugins(),
  module: {
    rules: [
      {
        test: /\.css$/,
        use: cssLoaders(),
      },
      {
        test: /\.s[ca]ss$/,
        use: cssLoaders("sass-loader"),
      },
      {
        test: /\.(png|jpeg|svg|gif|jpg)$/,
        use: ["file-loader"],
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/,
        use: ["file-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: jsLoader(),
      },
      {
        test: /\.jsx$/,
        exclude: /node_modules/,
        loader: babelLoader("@babel/preset-react"),
      },
    ],
  },
};
