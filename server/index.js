const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 2999;

app.use('/:id', express.static(path.join(__dirname, '../', '/public')));
app.use(cors());

// app.get('/:id/api/:id', (req, res) => {
//   res.send('Hello from server!');
// });

app.listen(port, () => {
  console.log(`Proxy server listening at http://localhost:${port}`);
});
