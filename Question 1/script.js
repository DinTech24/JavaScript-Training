function output(location,result){
	document.getElementById(location).innerHTML = result;
}

function question1(){
	var result="Hello world"
	output("innerDiv",result);
}
