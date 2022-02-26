const express = require('express')
const app = express()
const port = 3000

// Set EJS as templating engine 
app.set('view engine', 'ejs'); 

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/reshape.html');
})

app.post('/index.js', (req, res) => {
  var width = Number(req.body.width)
  var height = Number(req.body.height)
  console.log(width, height);
   
  res.render("myejs", {my_width : width});
  //  res.write('Done !');
  //  res.send();
  // res.sendFile(__dirname + '/reshape.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})