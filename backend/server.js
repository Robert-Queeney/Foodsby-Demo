const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/index');

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use((res, next) => {
  res.header("Access-Control-Allow-Methods", "GET, HEAD, OPTIONS, POST");
  // res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Max-Age", "1296000");
  next();
});

app.use('/', routes);

app.listen(3001, () => {
  console.log('Listening at :3001...');
})