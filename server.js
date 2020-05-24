var express = require('express');
var app = express();

app.get('/', function (req, res) {
  var dev = req.query.developer;
  var git = req.query.git;
  var project = req.query.project;

  if(dev && git && project) {
      console.log(`
        Project: ${project}
        Developer: ${dev}
        Repository: ${git}
    `);
    return res.sendStatus(200)
  }
  return res.sendStatus(400);

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});