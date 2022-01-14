const http = require('http');

const port = process.env.PORT || 3000;

const server = http.createServer((req , res)=>{
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if(req.url == '/'){
        res.end('<h1>Hello</h1><p> hey this rajat kumar</p>');
        
    }
    else if (req.url=='/about') {
        res.end('<h1>Hello</h1><p> hey this rajat kumar about</p>');
        
    }
    else{
        res.statusCode = 404;
        res.end('<h1>Hello</h1><p> This page is not available</p>');
        
    }
})

server.listen(port,()=>{
    console.log(`server is listening on port ${port}`);
});