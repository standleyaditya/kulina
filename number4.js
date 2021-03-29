const express = require('express');
const math = require('math');

// init express
const app = express();

// middleware / routing
app.use(express.json());
app.use(express.urlencoded({ extended : true }));
app.use(express.raw());

const switchs = () => {  
    var switchs = []
    var total = 0;  
    for (let i = 0; i <= 100; i++) {
        switchs.push('0');        
    }
    for (let i = 1; i < switchs.length; i++) {
        for (let j = 1; j < switchs.length; j++) {
            if (j%i == 0){
                if (switchs[j] == '0'){
                    switchs[j] = '1'
                }
                else if (switchs[j] == '1'){
                    switchs[j] = '0'
                }
            }            
        }    
    }
    for (let i = 1; i < switchs.length; i++) {
        if (switchs[i] == 1){
            total++
        }        
    } 
    console.log(total) 
}

switchs();
app.listen(3000, () => {
    console.log('Server Running')
})