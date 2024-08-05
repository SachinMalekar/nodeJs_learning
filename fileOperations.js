var http = require('http');
var fs = require('fs');

http.createServer(function(req,res){
    fs.readFile('demofile.html',function(err, data){
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();   
    });
}).listen(9090);

fs.appendFile('myNewFile2.txt','Hello Content', function(err){
    if(err) throw err;
    console.log('Saved append..')
})

fs.open('myNewFileTxt.txt','w', function(err, file){
    if(err) throw err;
    console.log('Saved..!');
})