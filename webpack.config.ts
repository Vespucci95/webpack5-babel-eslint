import path from "path";
import webpack from "webpack";

const config: webpack.Configuration = {
    mode: 'production',
    entry: 'app.ts',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
    },
};
