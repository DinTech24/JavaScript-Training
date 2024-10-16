function output(location,result){
	document.getElementById(location).innerHTML = result;
}

function add(){
	var num1 = document.getElementById("number1").value; 
	var num2 = document.getElementById("number2").value; 
	var sum = Number(num1)+Number(num2);
	output("innerDiv",sum);
}

