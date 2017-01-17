var http = require('http');

var urls = ['shapeshed.com', 'www.bbc.co.uk', 'edition.cnn.com'];

function fetchURL (url){
  var start = new Date();
  http.get({host:url}, function(res){
    console.log('Got response from: ' + url);
    console.log('Request took: ', new Date() - start, 'ms');
  });
}

for(var i = 0; i<urls.length; i++){
  fetchURL(urls[i]);
}
