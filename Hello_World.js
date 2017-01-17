var http = require('http');
http.createServer(function (req, res){
  res. writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(5757, "127.0.0.1");
console.log('Damon is chilling while server is running at http://127.0.0.1:5757/');
