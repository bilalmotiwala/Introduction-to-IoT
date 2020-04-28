	PushButton1.on(function(value) {
		if(buttonstatus[0] != 0)
		{
				sendstate[0] = 1;
				socket.emit('BUTTON1', sendstate[0]);
		}
		else
		{
			sendstate[0] = 0;
		}
	});
	
	PushButton2.on(function(value) {
		if(buttonstatus[1] != 0)
		{
				sendstate[1] = 1;
				socket.emit('BUTTON2', sendstate[1]);
		}
		else
		{
			sendstate[1] = 0;
		}
	});
		
	PushButton3.on(function(value) {
		if(buttonstatus[2] != 0)
		{
				sendstate[2] = 1;
				socket.emit('BUTTON3', sendstate[2]);
		}
		else
		{
			sendstate[2] = 0;
		}
	});
		
	PushButton4.on(function(value) {
		if(buttonstatus[3] != 0)
		{
				sendstate[3] = 1;
				socket.emit('BUTTON4', sendstate[3]);
		}
		else
		{
			sendstate[3] = 0;
		}
	});

	var pushbutton1 = pfio.digital_read(0);
	var pushbutton2 = pfio.digital_read(1);
	var pushbutton3 = pfio.digital_read(2);
	var pushbutton4 = pfio.digital_read(3);
	
	var readstate = [0,0,0,0];
	
	
	if(pushbutton1 != 0)
	{
		readstate[0] = 100;
		socket.emit('BUTTON1', readstate[0]);
		console.log("SWITCH ON");
	}
	else
	{
		readstate[0] = 0;
		socket.emit('BUTTON1', readstate[0]);
	};
	
	



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
