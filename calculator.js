
const express = require('express');

const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function() {
    console.log("listening on port 3000");
});

app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.post('/', function(req, res){
    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);
    let result = num1 + num2;

    res.send("The answer is: " + result);
    console.log(req.body.num1);
});