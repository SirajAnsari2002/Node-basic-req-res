const HTTP = require('http');


const SERVER = HTTP.createServer((req, res)=>{
    console.log(req.url, req.method, req.headers);
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>Server</title></head>');
    res.write('<body>I love you Siraj</body>');
    res.write('</html>')
    res.end();

    // console.log(req);

});
const PORT = 3000;
SERVER.listen(PORT, ()=>{
    console.log(`server running on address http://localhost:${PORT}`);
});