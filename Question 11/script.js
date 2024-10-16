function output(location,result){
	document.getElementById(location).innerHTML = result;
}


function isLeapYear(){
	var year = Number(document.getElementById("number1").value);
	if(year % 100 == 0){
		if(year % 400 == 0){
			output("innerDiv","It's a Leap year")
		}
		else{
			output("innerDiv","It's a not Leap year")	
		}
	}
	else if(year % 4 == 0){
		output("innerDiv","It's a Leap year")
	}
	else{
		output("innerDiv","It's a not Leap year")	
	}
}

