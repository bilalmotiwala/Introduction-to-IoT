var pfio = require('piface');
pfio.init();

function toggleled()
{
	var status = pfio.digital_write(0,0);
	if(status == 0)
	{
		pfio.digital_write(0,1);
		status = pfio.digital_write(0,1);
	}
	else
	{
		pfio.digital_write(0,0);
		status = pfio.digital_write(0,0);
	}
}
