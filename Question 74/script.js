function output(location,result){
	document.getElementById(location).innerHTML = result;
}


function maximumOccurance(){
	var string = document.getElementById("string").value;
	var count = 0;
	var occur = 0;
	var flag ="";
	for(let i in string){
		for(let j in string ){
			 if(string[i] == string[j]){
			count++;
			}
		}
		if(count > occur){
			flag = string[i]
			occur = count;
			count = 0;
		}
		else{
			count = 0;
		}


	}
	output("innerDiv","Character with maximum occurance is : " +flag);

}
