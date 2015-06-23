var express = require('express')
var app = express()
var bodyparser = require('body-parser')

app.listen(process.argv[2])

app.use(bodyparser.urlencoded({extended: false}))

app.get('/home', function(req, res) {
  res.end('Hello World!')
})

app.post('/form', function(req, res) {
  req.body.str.split('').reverse().join('')
})
