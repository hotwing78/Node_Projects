var http = require('http'),
    url = require('url');
//creating a server route request at base level ---no express
http.createServer(function (req, res) {
  var pathname = url.parse(req.url).pathname;

  if (pathname === '/') {
      res.writeHead(200, {
    //This is a typical response header from the server.
      'Content-Type': 'text/plain'
    });
    res.end('Home Page\n');
  } else if (pathname === '/about') {
      res.writeHead(200, {
      'Content-Type': 'text/plain'
    });
    res.end('About Us\n');
  } else if (pathname === '/redirect') {
    //This is a page redirect http header
      res.writeHead(301, {
      'Location': 'https://hotwing78.github.io'
    });
    res.end();
  } else {
      res.writeHead(404, {
      'Content-Type': 'text/plain'
    });
    res.end('Page not found\n');
  }
}).listen(3000, "127.0.0.1");
console.log('Server running at http://127.0.0.1:3000/');
