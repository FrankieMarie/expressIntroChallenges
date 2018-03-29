let express = require('express');
let app = express();
let port = process.env.PORT || 8000;

app.get('/yourroute', function(req, res) {
  res.send("stuff");
});

app.get('/hello', function(req, res) {
  res.send("hello");
});

app.post('/create/:name', function(req, res) {
  let obj = `${req.params.name}`;
  res.json(obj);
})

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
  //__dirname : It will resolve to your project folder.
});

app.get('/verify/:age', function(req, res) {
  if(`${req.params.age}` > 13){
    res.send("all good");
  }else{
    res.status(403).render();
  }

});

app.use(function(req, res) {
  res.sendStatus(404);
});

app.listen(port, function() {
  console.log('Listening on port', port);
});
