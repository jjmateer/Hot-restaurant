var bodyParser = require('body-parser')
const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.write('you posted:\n')
    res.end(JSON.stringify(req.body, null, 2))
})
app.listen(3000)