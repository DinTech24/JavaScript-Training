function output(location,result){
	document.getElementById(location).innerHTML = result;
}


function findMissingAlpha(){
	var string = document.getElementById("string").value;
	var array = [];
	var result = "";
	var dupliarray = [];
	var resultArr = [];
	var flag = 1;
	for(let i in string){
		array.push(string.charCodeAt(i));
		dupliarray.push(string.charCodeAt(i));
	}
	console.log(array);
	for(j=0;j<dupliarray.length;j++){
		if(dupliarray[j]+1 == dupliarray[j+1]){
			flag = flag * 1;
		}
		else{	
			if(dupliarray[j] == array[array.length-1]){
				break;
			}
			flag = flag * 0;
			dupliarray.splice(j+1,0,dupliarray[j]+1);
			resultArr.push(dupliarray[j]+1)	;

		}
	}
	for(let x in dupliarray){
		result = result + String.fromCharCode(resultArr[x]);
	}
	if(flag == 1){
		output("innerDiv","No missing Letter");
	}
	else{
		output("innerDiv",result);
	}

}
