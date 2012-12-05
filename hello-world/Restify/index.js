var restify = require('restify'),
    sanitize = require('validator').sanitize;

function respond(req, res, next) {
  res.send('hello ' + sanitize(req.params.name).xss());
}

var server = restify.createServer();
server.get('/hello/:name', respond);
server.head('/hello/:name', respond);

server.listen(8080, function() {
  console.log('%s listening at %s', server.name, server.url);
});
