const express = require('express');
const math = require('math');

// init express
const app = express();

// middleware / routing
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.raw());

var n = 8;
var s = ['U','D','D','D','U','D','U','U','D','D','U','U'];
const countingValleys = (n, s) => {    
    var potition = 0;
    var total_valley = 0;
    var valley = false;
    var start = true;
    var end = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'U'){
            potition++
        }             
        else if (s[i] == 'D'){
            potition--
        }
        console.log(potition)
        if (start == true && potition == -2){
            valley = true
        }
        console.log(valley)
        if (start == false && s[i] == 0){
            start = true
            end = false
        }
        if (start == true && potition == 0 && valley == true){
            end = true
        }
        console.log(start)
        console.log(end)
        if (start == true && valley == true && end == true){
            total_valley++
            var valley = false;
            var start = true;
            var end = false;
        }     
    }
    return console.log(total_valley)     
}

countingValleys(n, s);
app.listen(3000, () => {
    console.log('Server Running')
})