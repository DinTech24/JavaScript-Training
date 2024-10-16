function output(location,result){
	document.getElementById(location).innerHTML = result;
}



function isPrime(){
	var number = Number(document.getElementById("number1").value); 
	if(number==0||number==1){
		output("innerDiv","Not a prime Number");
	}
	else{
		for(i=2;i<number;i++){
			if(number%i==0){
				output("innerDiv","Not a prime Number");
				break;
			}
			else{
				if(i==number-1){
					output("innerDiv","It's a prime Number");
				}	
			}

		}
	}
}

