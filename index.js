const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send("Welcome to obi  node project");
})

app.listen(3000,()=>console.log("App is  listen at 3000"));