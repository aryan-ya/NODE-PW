const http =  require('http');
const { hostname } = require('os');
const PORT = 3020;

const server =  http.createServer((req , res) =>{
    res.end('Node Server create by Aryan yadav')
});

server.listen(PORT, () =>{
    console.log(`Server running at ${hostname}: ${PORT}`);
})