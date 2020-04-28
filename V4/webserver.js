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
	var ledstatus = [0,0,0,0,0,0,0,0];
	var signal = [0,0,0,0,0,0,0,0];
	
	socket.on('LED1', function(data) {
		ledstatus[0] = data;
		if(ledstatus[0] != 0)
		{
			if(signal[0] == 0)
			{
				pfio.digital_write(0,1);
				signal[0] = 1;
			}
			else
			{
				pfio.digital_write(0,0);
				signal[0] = 0;
			}
		}
	});
	
	socket.on('LED2', function(data) {
		ledstatus[1] = data;
		if(ledstatus[1] != 0)
		{
			if(signal[1] == 0)
			{
				pfio.digital_write(1,1);
				signal[1] = 1;
			}
			else
			{
				pfio.digital_write(1,0);
				signal[1] = 0;
			}
		}
	});

	socket.on('LED3', function(data) {
		ledstatus[2] = data;
		if(ledstatus[2] != 0)
		{
			if(signal[2] == 0)
			{
				pfio.digital_write(2,1);
				signal[2] = 1;
			}
			else
			{
				pfio.digital_write(2,0);
				signal[2] = 0;
			}
		}
	});
	
	socket.on('LED4', function(data) {
		ledstatus[3] = data;
		if(ledstatus[3] != 0)
		{
			if(signal[3] == 0)
			{
				pfio.digital_write(3,1);
				signal[3] = 1;
			}
			else
			{
				pfio.digital_write(3,0);
				signal[3] = 0;
			}
		}
	});
	
	socket.on('LED5', function(data) {
		ledstatus[4] = data;
		if(ledstatus[4] != 0)
		{
			if(signal[4] == 0)
			{
				pfio.digital_write(4,1);
				signal[4] = 1;
			}
			else
			{
				pfio.digital_write(4,0);
				signal[4] = 0;
			}
		}
	});
	
	socket.on('LED6', function(data) {
		ledstatus[5] = data;
		if(ledstatus[5] != 0)
		{
			if(signal[5] == 0)
			{
				pfio.digital_write(5,1);
				signal[5] = 1;
			}
			else
			{
				pfio.digital_write(5,0);
				signal[5] = 0;
			}
		}
	});

	socket.on('LED7', function(data) {
		ledstatus[6] = data;
		if(ledstatus[6] != 0)
		{
			if(signal[6] == 0)
			{
				pfio.digital_write(6,1);
				signal[6] = 1;
			}
			else
			{
				pfio.digital_write(6,0);
				signal[6] = 0;
			}
		}
	});
	
	socket.on('LED8', function(data) {
		ledstatus[7] = data;
		if(ledstatus[7] != 0)
		{
			if(signal[7] == 0)
			{
				pfio.digital_write(7,1);
				signal[7] = 1;
			}
			else
			{
				pfio.digital_write(7,0);
				signal[7] = 0;
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
