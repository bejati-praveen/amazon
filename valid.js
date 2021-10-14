function valid()
{
	if(form1.login.value.length<5)
	{
		alert("user name cannot be less than 5");
		return false;
	}
	if(form1.pass.value.length<4)
	{
		alert("password cannot be less than 4");
		return false;
	}
	else
	{
		alert("logged in sucessfully");
		return true;
	}
}