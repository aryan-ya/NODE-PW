const http = require("http");

 const server = http.createServer((req , res) =>{
   if(req.url == '/'){
    res.write('<h1> hello node </h1>');

   }else if(req.url == '/about'){
     res.write("<h1> About pagee </h1>")
   }
   res.end();
})

server.listen(5002);

console.log('The http server is running on Port 5002');




