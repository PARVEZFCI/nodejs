const http = require('http');

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
    res.write("hello Programmser");
    res.end();
    }else if(req.url === '/about'){
        res.write("this is about page ");
        res.end();
    }else{
        res.write("Page Not Found ");
        res.end();
    }
});
server.listen(3000);
console.log("server run 3000 port");

