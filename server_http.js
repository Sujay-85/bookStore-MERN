const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {

if(req.url === '/'){

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('Welcome to the Home page! \n');
}else if(req.url === '/about'){

    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('This is the About page! \n');
}
else{
    res.statusCode = 200;
    res.setHeader('Content-type', 'text/plain');
    res.end('404 Page Not Found! \n');
}

});

server.listen(port, hostname, ()=> {

console.log(`Server is running at ${port}`)

})
