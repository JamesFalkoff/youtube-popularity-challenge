const express = require('express');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config.js');
const bodyParser = require('body-parser');
const db = require('./src/db/db');
const app = express();
 
const compiler = webpack(webpackConfig);
 
app.use(express.static(__dirname + '/www'));
app.use(bodyParser.json());
 
app.use(webpackDevMiddleware(compiler, {
  hot: true,
  filename: 'bundle.js',
  publicPath: '/',
  stats: {
    colors: true,
  },
  historyApiFallback: true,
}));

app.get('/scores', function(req, res) {
  db.Score.findAll({order: 'score DESC', limit: 5}).then(function(scores) {
    res.send(JSON.stringify(scores));
  });
});

app.post('/scores', function(req, res) {
  var results = req.body;
  console.log('Results from client: ', results);
  db.Score.create({
    username: '',
    query: results.query,
    result: results.snippet.title,
    channel: results.snippet.channelTitle,
    score: results.statistics.viewCount,
  });
  res.send();
});

const server = app.listen(3000, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('App listening at http://%s:%s', host, port);
});