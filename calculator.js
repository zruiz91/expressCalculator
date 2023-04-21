
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


// route that gets the bmiCalculator page
app.get('/bmiCalculator', function(req, res){
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post('/', function(req, res){
    let num1 = Number(req.body.n1);
    let num2 = Number(req.body.n2);
    let result = num1 + num2;

    res.send("The answer is: " + result);
});


//route that posts the data entered into the inputs and sends back the BMI of the user
app.post('/bmiCalculator', function(req, res){
    let weight = Number(req.body.weight);
    let height = Number(req.body.height);
    let BMI = (weight) / (height * height)

    res.send("Your BMI is: " + BMI);
});