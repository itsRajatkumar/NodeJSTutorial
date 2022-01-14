const express = require('express');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
    res.send('Hello World! this is rajat kumar');
});

app.get('/about',(req,res)=>{
    res.send('Hello World! ');
});

app.listen(port,()=>{
    console.log(`app listening at http://localhost:${port}`);
})