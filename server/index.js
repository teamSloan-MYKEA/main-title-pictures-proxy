const express = require('express');

const app = express();
const port = process.env.PORT || 2999;

app.get('/', (req, res) => {
  res.send('Hello from server!');
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`)
});
