var restify = require('restify'),
    sanitize = require('validator').sanitize;

var server = restify.createServer({
    formatters: {
        'text/html': function(req, res, body){
            return body;
        }
    }
});

function respond(req, res, next) {
  res.contentType = 'text/html';
  res.send('Hello ' + sanitize(req.params.name).xss());
}

server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
