	
	
	setInterval(tctbutton1, 100);
	function tctbutton()
	{
		for(i=0; i<4; i++)
		{
			newvalue = pfio.digital_read(i);
		
			if(newvalue != check[i])
			{
				if(newvalue == 1)
				{
					console.log("Switch " + i + ": ON.");
					socket.emit(
					check[i] = newvalue;
				}
			
				else
				{
					console.log("Switch " + i + ": OFF.");
					check[i] = newvalue;
				}
			}
		}
	};
	
