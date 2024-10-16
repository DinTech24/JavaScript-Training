function output(location,result){
	document.getElementById(location).innerHTML = result;
}

function simpleInterest(){
	var principle = document.getElementById("number1").value; 
	var years = document.getElementById("number2").value;
	var rate = document.getElementById("number3").value; 
	var intrest= (principle*years*rate)/100; 
	output("innerDiv","Simple Interest is "+intrest);
}

