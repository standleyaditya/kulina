const express = require('express');
const math = require('math');

// init express
const app = express();

// middleware / routing
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.raw());

var n = 7;
var ar = [1, 2, 1, 2, 1, 2, 3];
const sockMerchant = (n, ar) => {    
    var total = 0;
    var done = [];
    var sum;
    var x = true;
    if (n <= 100 && n > 0 && ar.length == n){
        for (let i = 0; i < ar.length-1; i++) {
            x = true;
            sum = 1;
            if (done){
                for (let j = 0; j < done.length; j++) {
                    if (ar[i] == done[j]){
                        x = false
                    }
                }
            }            
            if (x == true){
                for (let j = i+1; j < ar.length; j++) {
                    if (ar[i] == ar[j]){
                        sum++;
                    }                
                }
                sum = math.floor(sum/2);
                total = total+sum;
                done.push(ar[i]); 
            }              
        }
    }
    return console.log(total)     
}

sockMerchant(n, ar);
app.listen(3000, () => {
    console.log('Server Running')
})