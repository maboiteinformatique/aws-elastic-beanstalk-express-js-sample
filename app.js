const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('c'est la fête à good place'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
