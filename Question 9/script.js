function output(location,result){
	document.getElementById(location).innerHTML = result;
}


function cube(){
	var a = Number(document.getElementById("number1").value); 
	var cube = a**3;
	output("innerDiv",cube);
}

