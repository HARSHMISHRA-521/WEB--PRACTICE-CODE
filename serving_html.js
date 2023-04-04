const http =require('http');
const fs = require('fs');
const filecontent =fs.readFileSync('js_loops.html')

const server =http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'});
    res.end(filecontent);
})

server.listen(80,'127.0.0.1',()=>{
    console.log("Listening on port 80");
})