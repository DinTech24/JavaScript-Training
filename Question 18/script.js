function output(location,result){
	document.getElementById(location).innerHTML = result;
}


function courseEligiblity(){
	var maths = Number(document.getElementById("number1").value); 
	var physics = Number(document.getElementById("number2").value); 
	var chemistry = Number(document.getElementById("number3").value); 

	if(maths>65 && physics>=55 && chemistry>=50){
		if(maths+physics+chemistry >=190){
			output("innerDiv","He is Eligible");
		}
		else if(maths+physics >=140){
			output("innerDiv","He is Eligible");
		}
		else{
			output("innerDiv","He is not Eligible");
		}
	}
	else{
		output("innerDiv","He is not Eligible");
	}
	
}
