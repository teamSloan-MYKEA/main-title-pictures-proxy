require('newrelic');

const express = require('express');
const app = express();
const port = 2999;
const servicePort = 3001;
const compression = require('compression');
const path = require('path');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

app.use(cors());
app.use((req, res, next) => {
  res.set('Cache-Control', 'public, max-age=31557600, s-maxage=31557600');
  next();
});
app.use(compression());
app.use(express.text());
app.use(express.urlencoded({ extended: false }));
app.use(('/'), express.static(path.join(__dirname, '../public')));
app.use(('/'), express.static(path.join(__dirname, '../client')));
app.use(('/:id'), express.static(path.join(__dirname, '../client')));
app.use('/:id/pictures/:id', createProxyMiddleware({ target: 'http://18.220.212.160:3000'}));
//app.use('/:id/pictures/:id', createProxyMiddleware({ target: 'http://localhost:3000'}));
//app.use('/:id/pictures/:id', createProxyMiddleware({ target: 'http://3.15.203.117:3000' }));
app.use('/:id/similar/:id', createProxyMiddleware({ target: 'http://54.177.81.158:3001' }));
app.use('/:id', createProxyMiddleware({ target: 'http://3.21.37.48' }));
// app.use('/:id/bag/:id', createProxyMiddleware({ target: 'http://localhost:3003' }));



app.listen(port, () => {
  console.log('Connected to server on port 2999');
});

//http://52.207.78.191
