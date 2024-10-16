function output(location,result){
	document.getElementById(location).innerHTML = result;
}

function power(){
	var number = Number(document.getElementById("number").value); 
	var exponent = Number(document.getElementById("exp").value);
	var result = number ** exponent;
	output("innerDiv",result);
}
