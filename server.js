const express = require('express');
const app = express();

add.post('/',(req,res)=>{
    var email = req.body.email;
    var amount = req.body.amount;

    res.send({"ammount" : amount, "email" : email});
})

app.listen(3000, () =>{
    console.log('server is runnin gon port 3000')
})