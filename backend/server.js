const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/', routes);

app.listen(3001, () => {
  console.log('Listening at :3001...');
})