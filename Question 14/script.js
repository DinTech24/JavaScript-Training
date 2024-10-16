function output(location,result){
	document.getElementById(location).innerHTML = result;
}

function digitSum(){
	var number = document.getElementById("number").value; 
	console.log(number);
	num = parseFloat(number)
	console.log(num);
	var numLength = number.length;
	var lastDig = 0;
	var sum = 0;
	for(i=0;i<numLength;i++){
		lastDig = num % 10;
		console.log(lastDig);
		sum += lastDig;
		console.log(sum);
		num = Math.floor(num/10);
		console.log(num);
	}
	output("innerDiv",sum);
	
}

