function validate()
{
	if(form2.txt1.value.length<5)
	{
		alert("user name cannot be less than 5");
		return false;
	}
	if(form2.txt2.value.length<5)
	{
		alert("password cannot be less than 4");
		return false;
	}
	if((form2.txt5.value.length)!=10||isNaN(form2.txt5.value))
	{
		alert("invalid phone number");
		return false;
	}
	else
	{
		alert("registered sucessfully");
		return true;
	}
}