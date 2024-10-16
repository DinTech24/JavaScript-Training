function output(location,result){
	document.getElementById(location).innerHTML = result;
}


function floatOperations(){
	var num1 = parseFloat(document.getElementById("number1").value); 
	var num2 = parseFloat(document.getElementById("number2").value);
	var sum = num1+num2;
	var difference = num1-num2;
	var product = num1*num2;
	var quotient = num1/num2;
	output("innerSpan1",sum);
	output("innerSpan2",difference);
	output("innerSpan3",product);
	output("innerSpan4",quotient);
}
