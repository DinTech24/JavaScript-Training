function output(location,result){
	document.getElementById(location).innerHTML = result;
}


function smallestLargest(){
	var num1 = Number(document.getElementById("number1").value); 
	var num2 = Number(document.getElementById("number2").value); 
	var num3 = Number(document.getElementById("number3").value);
	var arr =[];
	arr.push(num1);
	arr.push(num2);
	arr.push(num3);
	arr.sort((n1,n2)=>n1-n2);
	console.log(arr)
	output("innerSpan1",arr[0]);
	output("innerSpan2",arr[2]);	
}

