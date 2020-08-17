const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 2999;

app.use(express.static(path.join(__dirname, '../', '/public')));

app.get('/', (req, res) => {
  res.send('Hello from server!');
});

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
