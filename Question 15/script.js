function output(location,result){
	document.getElementById(location).innerHTML = result;
}


function reverse(){
	var number = document.getElementById("number").value; 
	var numLength = number.length;
	var lastDig = 0;
	num = Number(number)
	sum = "";
	for(i=0;i<numLength;i++){
		lastDig=num%10;
		sum += lastDig;
		num = Math.floor(num/10);
	}
	sum = Number(sum)
	output("innerDiv",sum);
	
}

