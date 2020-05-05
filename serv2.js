const express = require('express');
const app = express();
const PORT = 4000;

app.get('/gago',(req,res)=>{
    res.send("Gagna");
});

app.listen(PORT,()=>console.log(`Connected to port::${PORT}`))

