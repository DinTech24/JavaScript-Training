function output(location,result){
	document.getElementById(location).innerHTML = result;
}


function replacePalindromeSubstring(){
	var string = document.getElementById("string").value;
	string = string + " ";
	var substring ="";
	var stringArray=[];
	for(let i in string){
		if(string[i]==" "){
			if(substring == (substring.split("").reverse().join(""))){
				for(let j in substring){
					substring = substring.replace(substring[j],"*");
				}
					stringArray.push(substring+" ");
					console.log(stringArray)
					substring = "";
			}
			else{
				stringArray.push(substring+" ");
				substring = "";
			}
		}
		else{
			substring += string[i];
			console.log(substring)
		}
	}
	console.log(stringArray);
	var replacedString = "";
	for(let k in stringArray){
		replacedString = replacedString + stringArray[k];
	}
	output("innerDiv",replacedString);
}
