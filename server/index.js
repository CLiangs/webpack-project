const express = require('express');
const webpack = require('webpack');
const openBrowser = require("react-dev-utils/openBrowser");
const chalk = require("chalk"); //颜色插件
const ip = require("ip"); //ip插件

const app = express();
let webpackConfig;
const port = 3000;

if (process.env.NODE_ENV === 'development') {
    webpackConfig = require('../webpack/webpack.dev.config');
} else if (process.env.NODE_ENV === 'production') {
    webpackConfig = require('../webpack/webpack.prod.config');
}

const compiler = webpack(webpackConfig);
// 启动服务器
const devMiddleware = require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: '/',
    quiet: true
});
// 热更新
const hotMiddleware = require('webpack-hot-middleware')(compiler, {
    noInfo: true
});

app.use(devMiddleware);
app.use(hotMiddleware);

devMiddleware.waitUntilValid(() => {
    openBrowser('http://localhost:' + port);
})
//提示
console.log(`
Localhost: ${chalk.magenta('http://localhost:' + port)}
    `);
    
app.listen(3000);