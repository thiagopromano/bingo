var mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'show_do_milhao'
});

connection.connect();


const express = require('express');
const bodyParser = require('body-parser');
const ip = require("ip");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', (req, res) => res.sendFile(__dirname + '/bingo.html'));
app.get('/admin', (req, res) => res.sendFile(__dirname + '/admin.html'));

let current_question = {};
let answer = false;

app.get('/question', (req, res) => res.json(current_question));

app.post('/new_question', async (req, res) => {

    connection.query('SELECT * from `perguntas` order by RAND() limit 1', function (error, results, fields) {
        if (error) throw error;
        connection.query(`delete
                          from perguntas
        where id = ${results[0].id}`);
        current_question = results[0];
        res.json(results[0]);
    });
});

app.post('/numeros', (req, res) => {
    console.log(req.body);
    res.send(JSON.stringify(numeros.push(req.body.num)))
});

app.post('/answer', (req, res) => {
    answer = true;
    res.send('')
});

app.get('/answer', (req, res) => {
    res.json({show: answer});
    answer = 0;
});


const port = process.env.PORT || 8081;

app.listen(port, () => {
    console.log(`App started listening on port ${port}!`);
    console.log(`Admins should browse to http://${ip.address()}:${port}/admin`);
    console.log(`clients should browse to http://${ip.address()}:${port}/`)
});
