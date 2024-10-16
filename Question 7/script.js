function output(location,result){
	document.getElementById(location).innerHTML = result;
}


function circleArea(){
	var radius = document.getElementById("number1").value; 
	var PI = 22/7;
	var area= PI *(Number(radius)**2);
	output("innerDiv","Area of circle is "+area);
}
