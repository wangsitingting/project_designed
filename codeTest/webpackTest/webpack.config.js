/*包含入口文件路径和存放打包后文件地方的路径*/
module.exports = {
    entry: __dirname + "/app/main.js",   //已多次提及的唯一入口文件
    output: {
        path: __dirname + "/public",     //打包后文件存放的地方
        filename: "bundle.js"          //打包后输出文件的文件名
    },


    module: {
        loaders: [
            {
                test: /\.json$/,
                loader: "json"
            }
        ]
    },


    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true,
        inline: true
    }
}
/*__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录*/
/*注意路径*/