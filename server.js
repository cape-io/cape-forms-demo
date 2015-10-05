var path = require('path');
var express = require('express');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var webpackConfig = require('./webpack.config');

var app = express();
var port = 3000;
var compiler = webpack(webpackConfig);

// Use this middleware to set up hot module reloading via webpack.
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(webpackHotMiddleware(compiler));

app.use(express.static('public'));

// app.get('*', function(req, res) {
//   res.sendFile(path.join(__dirname, 'index.html'));
// });

app.listen(port, 'localhost', function (err) {
  if (err) {
    console.log(err);
    return;
  }
  else {
    console.log('Listening at http://localhost:'+port);
  }
});
