function output(location,result){
	document.getElementById(location).innerHTML = result;
}


function compoundInterest(){
	var principle = document.getElementById("number1").value; 
	var years = document.getElementById("number2").value;
	var rate = document.getElementById("number3").value;
	var flag = 1+(Number(rate)/100);
	var intrest= Number(principle)*(flag ** Number(years)) - Number(principle);
	output("innerDiv","Compound Interest is "+intrest);
}


