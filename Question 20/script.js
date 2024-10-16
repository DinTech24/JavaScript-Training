function output(location,result){
	document.getElementById(location).innerHTML = result;
}



function simpleCalcAdd(){
	var num1 = Number(document.getElementById("number1").value);
	var num2 = Number(document.getElementById("number2").value);
	var sum = num1 + num2;
	output("innerSpan",sum);
	output("innerSpan2",'<i class="fa-solid fa-plus"></i>');
}
function simpleCalcDiff(){
	var num1 = Number(document.getElementById("number1").value);
	var num2 = Number(document.getElementById("number2").value);
	var diff = num1 - num2;
	output("innerSpan",diff);
	output("innerSpan2",'<i class="fa-solid fa-minus"></i>');
}
function simpleCalcMult(){
	var num1 = Number(document.getElementById("number1").value);
	var num2 = Number(document.getElementById("number2").value);
	var mul = num1 * num2;
	output("innerSpan",mul);
	output("innerSpan2",'<i class="fa-solid fa-xmark"></i>');
}
function simpleCalcDivi(){
	var num1 = Number(document.getElementById("number1").value);
	var num2 = Number(document.getElementById("number2").value);
	var div = num1 / num2;
	output("innerSpan",div);
	output("innerSpan2",'<i class="fa-solid fa-divide"></i>');
}

