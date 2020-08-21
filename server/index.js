const express = require('express');
const path = require('path');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 2999;

app.use('/:id', express.static(path.join(__dirname, '../', '/public')));
// Not sure if CORS is needed:
app.use(cors());

app.use('/:id/pictures/:id', createProxyMiddleware({ target: 'http://18.190.28.33:3000/' }));
app.use('/:id/similar/:id', createProxyMiddleware({ target: 'http://localhost:3001/' }));
app.use('/:id/bag/:id', createProxyMiddleware({ target: 'http://localhost:3003/' }));
app.use('/:id/reviews/:id', createProxyMiddleware({ target: 'http://localhost:3002/' }));

app.get('/', (req, res) => {
  res.send('Hello from MYKEA! Please go to a product endpoint.');
});

app.listen(port, () => {
  console.log(`Proxy server listening at port: ${port}`);
});
