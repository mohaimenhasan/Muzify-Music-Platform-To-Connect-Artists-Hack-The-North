'use strict';

/** Module dependencies. */
const express      = require('express');
const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const path         = require('path');
const logger       = require('morgan');
const routes       = require('./routes');

const port = process.env.PORT || 3000;

var router = express.Router();

// configure the express server
const app = express();

var path1 = __dirname + '/radial/';

router.use(function(req,res,next){
    console.log('/radial/'+ req.method)
    next();
})

app.use(express.static(__dirname + '/radial'))
// app.use(express.static(__dirname + '/public/radial'))

app.use("/",router);

 router.get("/radial",function(req,res){
    res.sendFile(path1 + "/radial.html");
  });

// if we're developing, use webpack middleware for module hot reloading
if (process.env.NODE_ENV !== 'production') {
  console.log('==> 🌎 using webpack');

  // load and configure webpack
  const webpack = require('webpack');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const config = require('../webpack/dev.config');

  // setup middleware
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
  app.use(webpackHotMiddleware(compiler));
}

app.set('port', port);
app.use(logger('dev'))
  .use(cookieParser())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: false }))
  .use(express.static(path.resolve(__dirname, '../public')))
  .use('/', routes);

// Start her up, boys
app.listen(app.get('port'), () => {
  console.log('Express server listening on port ' + app.get('port'));
});


