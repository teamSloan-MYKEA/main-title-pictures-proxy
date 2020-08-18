const express = require('express');
const path = require('path');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();
const port = process.env.PORT || 2999;

app.use('/:id', express.static(path.join(__dirname, '../', '/public')));
app.use(cors());

app.use('/pictures/:id', createProxyMiddleware({ target: 'http://localhost:3000/' }));
app.use('/similar/:id', createProxyMiddleware({ target: 'http://localhost:3001/' }));
// app.use('/:id', createProxyMiddleware({ target: 'http://localhost:3003/' }));

// app.get('/:id/api/:id', (req, res) => {
//   res.send('Hello from server!');
// });

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
