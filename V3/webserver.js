var pfio = require('piface');
var http = require('http').createServer(handler);
var fs = require('fs')
var io = require('socket.io')(http);

pfio.init();
http.listen(8080);

function handler (req, res) { //create server
  fs.readFile(__dirname + '/index.html', function(err, data) { //read file index.html in public folder
    if (err) {
      res.writeHead(404, {'Content-Type': 'text/html'}); //display 404 on error
      return res.end("404 Not Found");
    }
    res.writeHead(200, {'Content-Type': 'text/html'}); //write HTML
    res.write(data); //write data from index.html
    return res.end();
  });
}

io.sockets.on('connection', function(socket) {
	var ledstatus = 0;
	var signal = 0;
	socket.on('led', function(data) {
		
		ledstatus = data;
		if(ledstatus != 0)
		{
			if(signal == 0)
			{
				pfio.digital_write(0,1);
				signal = 1;
			}
			
			else
			{
				pfio.digital_write(0,0);
				signal = 0;
			}
		}
	});
});


//function toggleled()
//{
	//var status = pfio.digital_write(0,0);
	//if(status == 0)
	//{
		//pfio.digital_write(0,1);
		//status = pfio.digital_write(0,1);
	//}
	//else
	//{
		//pfio.digital_write(0,0);
		//status = pfio.digital_write(0,0);
	//}
//}
