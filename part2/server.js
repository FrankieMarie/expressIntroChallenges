const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const fs = require('fs');

app.get('/yourroute', function(req, res) {
  res.send("stuff");
});

app.post('/create/:name/:age', function(req, res) {
  let obj = {
    "name": "troy",
    "age": 20
  }
  //obj = res.json(obj);
fs.writeFileSync('./storage.json', res.json(obj), (err) => {
  if (err) throw err;
  console.log('object saved!');
});
})

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
