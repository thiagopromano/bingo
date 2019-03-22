const express = require('express');
const bodyParser = require('body-parser');
const ip = require("ip");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.sendFile(__dirname + '/bingo.html'));
app.get('/admin', (req, res) => res.sendFile(__dirname + '/admin.html'));

let numeros = [];

app.get('/numeros', (req, res) => res.send(JSON.stringify(numeros)));
app.post('/numeros', (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify(numeros.push(req.body.num)))
});
app.delete('/clear', (req, res) => res.send(JSON.stringify(numeros = [])));
app.delete('/undo', (req, res) => res.send(JSON.stringify(numeros.pop())));


const port  = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App started listening on port ${port}!`);
    console.log(`Admins should browse to http://${ip.address()}:${port}/admin`);
    console.log(`clients should browse to http://${ip.address()}:${port}/`)
});
