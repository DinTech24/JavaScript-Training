function output(location,result){
	document.getElementById(location).innerHTML = result;
}


function average(){
	var num1 = document.getElementById("number1").value; 
	var num2 = document.getElementById("number2").value;
	var num3 = document.getElementById("number3").value;  
	var sum = Number(num1)+Number(num2)+Number(num3);
	var average = sum /3; 
	output("innerDiv","Sum is " +sum+ " & Average is " +average);
}

