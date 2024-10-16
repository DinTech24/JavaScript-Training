function output(location,result){
	document.getElementById(location).innerHTML = result;
}

function isOdd(){
	var number = Number(document.getElementById("number1").value);
	if(number==0){
		output("innerDiv","It's niether odd nor even");	
	} 
	else if(number%2==0){
		output("innerDiv","It's an even number");
	}
	else{
		output("innerDiv","It's an odd number");	
	} 	
}

