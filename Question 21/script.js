function output(location,result){
	document.getElementById(location).innerHTML = result;
}


var arrayprint=[];
function printNumberWL(numb,lim){
	arrayprint.push(numb);
	if(numb==lim){
		output("innerDiv",arrayprint);
		return 1;
	}
	else{
		printNumberWL(numb + 1,lim)
	}

}


