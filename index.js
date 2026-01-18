const express = require('express');
const server = express();
const port = 3000;

server.get('/goodmorning', function(req, res)
{
    res.send('Goodmorning everyone!!!');
});

server.listen(port, function()
{
    console.log("listening on " + port);
});