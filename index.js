const express = require('express')
var bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded());

app.get('/', (req, res) => res.sendFile(__dirname + '/bingo.html'))
app.get('/admin', (req, res) => res.sendFile(__dirname + '/admin.html'))

var numeros = [5, 3]

app.get('/numeros', (req, res) => res.send(JSON.stringify(numeros)))
app.post('/numeros', (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify(numeros.push(req.body.num)))
})
app.delete('/clear', (req, res) => res.send(JSON.stringify(numeros = [])))
app.delete('/undo', (req, res) => res.send(JSON.stringify(numeros.pop())))


app.listen(process.env.PORT||80, () => console.log(`Example app listening on port ${process.env.PORT||80}!`))