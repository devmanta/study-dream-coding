const express = require('express');
const app = express();
const fs = require('fs');

app.use(express.static('public'));

//Serves all the request which includes /images in the url from Images folder
app.use('/image', express.static(__dirname + '/Image'));

app.get('/',function(request,response){
    console.log('ddddd');
    response.writeHead(200, {
        'Content-Type': 'text/html'
    });
    fs.readFile('test.html', null, function (error, data) {
        if (error) {
            response.writeHead(404);
            respone.write('Whoops! File not found!');
        } else {
            response.write(data);
        }
        response.end();
    });
});

app.listen(3000, function(){
  console.log('Listening at 3000');
});