const http =  require('http');
const { hostname } = require('os');
const PORT = 3020;

const server =  http.createServer((req , res) =>{
// home page 
// about page
// contact page
// product page
// Reast ... > error

if (req.url == '/') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Welcome to Node js server by chirag goel')
}else if(req.url ==  '/about'){
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('About Page!')

}else if(req.url  == '/contact'){
res.statusCode = 200;
res.setHeader('Content-Type', 'text/plain');
res.end('Contact Page!')
}else{
    res.statusCode =500;
    res.setHeader('Content-Type', 'text/plain');
    res.end('server error');
}



   
});

server.listen(PORT, () =>{
    console.log(`Server running at ${hostname}: ${PORT}`);
})