module.exports = {
    devtool: "inline-source-map",
    entry: "./example.js",
    output: {
        filename: "tag.js"
    },
    resolve: {
        extensions: [".js"],
        alias: {
            fs: "memfs"
        }
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    }
};
