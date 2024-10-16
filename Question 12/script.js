function output(location,result){
	document.getElementById(location).innerHTML = result;
}

function swap(){
	var number1 = Number(document.getElementById("number1").value); 
	var number2 = Number(document.getElementById("number2").value);
	var flag =0;
	flag = number1;
	number1 = number2;
	number2 = flag;
	output("innerSpan1","First number is "+number1);
	output("innerSpan2","Second number is "+number2);
}

