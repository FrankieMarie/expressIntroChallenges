const express = require('express');
const app = express();
const port = process.env.PORT || 8000;
const fs = require('fs');

app.get('/yourroute', function(req, res) {
  res.send("stuff");
});

app.post('/create/:name/:age', function(req, res) {
  let obj = {
    "name": `${req.params.name}`,
    "age": `${req.params.age}`
  }
  let output = fs.readFileSync('./storage.json')
  output = JSON.parse(output)
  output.push(obj)
  fs.writeFileSync('./storage.json', JSON.stringify(output));
  res.json(output)
})

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
