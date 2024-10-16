function output(location,result){
	document.getElementById(location).innerHTML = result;
}



function dayInWeek(){
	var number = Number(document.getElementById("number1").value);
	switch(number){
	case 1: output("innerSpan","Sunday")
	break;

	case 2: output("innerSpan","Monday")
	break;

	case 3: output("innerSpan","Tuesday")
	break;

	case 4: output("innerSpan","Wednesday")
	break;

	case 5: output("innerSpan","Thursday")
	break;

	case 6: output("innerSpan","Friday")
	break;

	case 7: output("innerSpan","Saturday")
	break;

	default: output("innerSpan","Wrong Day")
	} 	
}

