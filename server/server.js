const express = require('express');
const app = express();
const url = require('url');
const listApi  = require('./mocks/list');
const detailApi = require('./mocks/detail');

app.get('/cf/list', (req, res, next) => {
  res.json(listApi);
});

app.get('/cf/detail', (req, res, next) => {
  const { id } = req.query;
  const resData = detailApi.data[id];
  res.json(resData);
});

app.listen(3000, () => {
  console.log('listen on port 3000');
});