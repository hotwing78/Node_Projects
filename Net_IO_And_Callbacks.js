var http = require('http');
var fs = require('fs');
var start = new Date();

http.get({host: 'shapeshed.com'},function(res){
  console.log('Got a response from shapshed.com in ' + (new Date() - start)+ 'ms');
}).on('error',function(e){
  console.log('There was an error from shapeshed.com ' + e);
});

fs.readFile('dummy_file1.txt', 'utf8', function(err,data){
  if(err) throw err;
  console.log('File 1 read in ' + (new Date() - start)+ 'ms');
});

http.get({host: 'www.bbc.co.uk'}, function(res){
    console.log('Got a response from bbc.co.uk in ' + (new Date() - start)+ 'ms');
});

fs.readFile('dummy_file2.txt', function(err,data){
  if(err) throw err;
  console.log('File 2 read in ' + (new Date() - start)+ 'ms');
});
