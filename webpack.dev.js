const Dotenv = require("dotenv-webpack"); //no en boiler
const path = require("path");
const webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
    entry: "./src/client/index.js", //BUNDLING STARTS FROM HERE
    mode: "development",
    devtool: "source-map",
    //stats: "verbose", no comentado en boiler
    output: {
        libraryTarget: "var",
        library: "Client",
    },
    module: {
        rules: [{
                test: "/.js$/",
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"],
            },
        ],
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./src/client/views/index.html",
            filename: "./index.html",
        }),

        new Dotenv(), //WHY AS A PLUGIN? MATEO no en bloiler

        new CleanWebpackPlugin({
            // Simulate the removal of files
            dry: true,
            // Write Logs to Console
            verbose: true,
            // Automatically remove all unused webpack assets on rebuild
            cleanStaleWebpackAssets: true,
            protectWebpackAssets: false,
        }),
    ],
};