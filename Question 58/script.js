function output(location,result){
	document.getElementById(location).innerHTML = result;
}

function question1(){
	var result="Hello world"
	output("innerDiv",result);
}

function add(){
	var num1 = document.getElementById("number1").value; 
	var num2 = document.getElementById("number2").value; 
	var sum = Number(num1)+Number(num2);
	output("innerDiv",sum);
}

function average(){
	var num1 = document.getElementById("number1").value; 
	var num2 = document.getElementById("number2").value;
	var num3 = document.getElementById("number3").value;  
	var sum = Number(num1)+Number(num2)+Number(num3);
	var average = sum /3; 
	output("innerDiv","Sum is " +sum+ " & Average is " +average);
}

function simpleInterest(){
	var principle = document.getElementById("number1").value; 
	var years = document.getElementById("number2").value;
	var rate = document.getElementById("number3").value; 
	var intrest= (principle*years*rate)/100; 
	output("innerDiv","Simple Interest is "+intrest);
}


function compoundInterest(){
	var principle = document.getElementById("number1").value; 
	var years = document.getElementById("number2").value;
	var rate = document.getElementById("number3").value;
	var flag = 1+(Number(rate)/100);
	var intrest= Number(principle)*(flag ** Number(years)) - Number(principle);
	output("innerDiv","Compound Interest is "+intrest);
}


function circleArea(){
	var radius = document.getElementById("number1").value; 
	var PI = 22/7;
	var area= PI *(Number(radius)**2);
	output("innerDiv","Area of circle is "+area);
}

function floatOperations(){
	var num1 = parseFloat(document.getElementById("number1").value); 
	var num2 = parseFloat(document.getElementById("number2").value);
	var sum = num1+num2;
	var difference = num1-num2;
	var product = num1*num2;
	var quotient = num1/num2;
	output("innerSpan1",sum);
	output("innerSpan2",difference);
	output("innerSpan3",product);
	output("innerSpan4",quotient);
}

function cube(){
	var a = Number(document.getElementById("number1").value); 
	var cube = a**3;
	output("innerDiv",cube);
}


function isOdd(){
	var number = Number(document.getElementById("number1").value);
	if(number==0){
		output("innerDiv","It's niether odd nor even");	
	} 
	else if(number%2==0){
		output("innerDiv","It's an even number");
	}
	else{
		output("innerDiv","It's an odd number");	
	} 	
}


function isLeapYear(){
	var year = Number(document.getElementById("number1").value);
	if(year % 100 == 0){
		if(year % 400 == 0){
			output("innerDiv","It's a Leap year")
		}
		else{
			output("innerDiv","It's a not Leap year")	
		}
	}
	else if(year % 4 == 0){
		output("innerDiv","It's a Leap year")
	}
	else{
		output("innerDiv","It's a not Leap year")	
	}
}


function swap(){
	var number1 = Number(document.getElementById("number1").value); 
	var number2 = Number(document.getElementById("number2").value);
	var flag =0;
	flag = number1;
	number1 = number2;
	number2 = flag;
	output("innerSpan1","First number is "+number1);
	output("innerSpan2","Second number is "+number2);
}


function power(){
	var number = Number(document.getElementById("number").value); 
	var exponent = Number(document.getElementById("exp").value);
	var result = number ** exponent;
	output("innerDiv",result);
}


function digitSum(){
	var number = document.getElementById("number").value; 
	num = Number(number)
	var numLength = number.length;
	var lastDig = 0;
	sum = 0;
	for(i=0;i<numLength;i++){
		lastDig=num%10;
		sum += lastDig;
		num = Math.floor(num/10);
	}
	output("innerDiv",sum);
	
}

function reverse(){
	var number = document.getElementById("number").value; 
	var numLength = number.length;
	var lastDig = 0;
	num = Number(number)
	sum = "";
	for(i=0;i<numLength;i++){
		lastDig=num%10;
		sum += lastDig;
		num = Math.floor(num/10);
	}
	sum = Number(sum)
	output("innerDiv",sum);
	
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


function dayInWeek(){
	var number = Number(document.getElementById("number1").value);
	switch(number){
	case 1: output("innerSpan","Sunday")
	break;

	case 2: output("innerSpan","Monday")
	break;

	case 3: output("innerSpan","Tuesday")
	break;

	case 4: output("innerSpan","Wednesday")
	break;

	case 5: output("innerSpan","Thursday")
	break;

	case 6: output("innerSpan","Friday")
	break;

	case 7: output("innerSpan","Saturday")
	break;

	default: output("innerSpan","Wrong Day")
	} 	
}


function simpleCalcAdd(){
	var num1 = Number(document.getElementById("number1").value);
	var num2 = Number(document.getElementById("number2").value);
	var sum = num1 + num2;
	output("innerSpan",sum);
	output("innerSpan2",'<i class="fa-solid fa-plus"></i>');
}
function simpleCalcDiff(){
	var num1 = Number(document.getElementById("number1").value);
	var num2 = Number(document.getElementById("number2").value);
	var diff = num1 - num2;
	output("innerSpan",diff);
	output("innerSpan2",'<i class="fa-solid fa-minus"></i>');
}
function simpleCalcMult(){
	var num1 = Number(document.getElementById("number1").value);
	var num2 = Number(document.getElementById("number2").value);
	var mul = num1 * num2;
	output("innerSpan",mul);
	output("innerSpan2",'<i class="fa-solid fa-xmark"></i>');
}
function simpleCalcDivi(){
	var num1 = Number(document.getElementById("number1").value);
	var num2 = Number(document.getElementById("number2").value);
	var div = num1 / num2;
	output("innerSpan",div);
	output("innerSpan2",'<i class="fa-solid fa-divide"></i>');
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


function printNumber(){
	for(i=1;i<=100;i++){
		arrayprint.push(i);
	}
	output("innerDiv",arrayprint);
}

function factors(){
	var number = Number(document.getElementById("number").value);
	for(i=1;i<=number;i++){
		if(number%i == 0){
			arrayprint.push(i);
		}
	}
	output("innerDiv",arrayprint);
}


function factorial(){
	var number = Number(document.getElementById("number").value);
	var factorial = 1;
	for(i=1;i<=number;i++){
		factorial = factorial * i;
	}
	output("innerDiv",factorial);
}

function firstLastDig(){
	var number =document.getElementById("number").value; 
	var flag = number.length;
	var num = Number(number);
	lastDig = num%10;
	firstDig = Math.floor(num/(10**(flag-1)));
	output("innerSpan1","The first Digit : "+firstDig);
	output("innerSpan2","The last Digit : "+lastDig);
}

function multiplictionTable(){
	var num1 = Number(document.getElementById("number1").value);
	var num2 = Number(document.getElementById("number2").value);
	for(i=1;i<=num2;i++){
		product = num1*i;
		arrayprint.push(num1+" * "+i+" = "+product);
	}
	output("innerDiv",arrayprint)
}

function naturalNumbers(){
	var number = Number(document.getElementById("number").value);
	for(i=1;i<=number;i++){
		arrayprint.push(i);
	}
	output("innerDiv",arrayprint);
}


function naturalNumbersReverse(){
	var number = Number(document.getElementById("number").value);
	for(i=number;i>=1;i--){
		arrayprint.push(i);
	}
	output("innerDiv",arrayprint);
}

function isDivisibleBy(){
	var number = Number(document.getElementById("number").value);
	for(i=1;i<=number;i++){
		if(i%5 == 0 && i%11 == 0){
			arrayprint.push(i);
		}
	}
	output("innerDiv",arrayprint);	
}


function findOdd(){
	var number = Number(document.getElementById("number").value);
	for(i=1;i<=number;i++){
		if(i%2 != 0){
			arrayprint.push(i);
		}
	}
	output("innerDiv",arrayprint);	
}


function digitProduct(){
	var number = document.getElementById("number").value; 
	num = Number(number)
	var numLength = number.length;
	var lastDig = 0;
	product = 1;
	for(i=0;i<numLength;i++){
		lastDig=num%10;
		product *= lastDig;
		num = Math.floor(num/10);
	}
	output("innerDiv",product);
	
}


function isPalindrome(){
	var string = document.getElementById("string").value; 
	var stringrev = string.split('').reverse().join('');
	if(string === stringrev){
		output("innerDiv","String is Palindrome");
	}
	else{
		output("innerDiv","String is Not Palindrome");		
	}
}

function isPerfect(){
	var number = Number(document.getElementById("number").value);
	sum = 0;
	for(i=1;i<number;i++){
		if(number%i == 0){
			sum+=i;
		}
	}
	if(number == sum){
		output("innerDiv","Number is perfect");	
	}
	else{
		output("innerDiv","Number is not perfect");	
	}
}


function isPositive(){
	var number = Number(document.getElementById("number").value);
	if(number == 0){
		output("innerDiv","Number is 0, neither positive nor negative");
	}
	else if(number > 0){
		output("innerDiv","Number is positive");
	}
	else{
		output("innerDiv","Number is negative");
	}
}


function countNotes(){
	var amount = Number(document.getElementById("number").value);
	var notes = [500,200,100,50,20,10,5,1];
	for(let i in notes){
		var flag = amount/notes[i];
		if(flag > 0){
			arrayprint.push(notes[i]+" Notes = "+Math.floor(flag));
			amount = amount - (notes[i] * Math.floor(flag));
		}
	}
	output("innerDiv",arrayprint)
}


function findEven(){
	var number = Number(document.getElementById("number").value);
	for(i=1;i<=number;i++){
		if(i%2 == 0){
			arrayprint.push(i);
		}
	}
	output("innerDiv",arrayprint);	
}



function naturalSumAverage(){
	var number = Number(document.getElementById("number").value);
	var sum = 0;
	for(i=1;i<=number;i++){
		sum += i;
	}
	var average = sum /number; 
	output("innerDiv","Sum is " +sum+ " & Average is " +average);
}


function evenSum(){
	var number = Number(document.getElementById("number").value);
	var sum = 0;
	for(i=1;i<=number;i++){
		if(i%2 == 0){
			sum += i;
		}
	}
	output("innerDiv",sum);
}

function evenOddSum(){
	var number = Number(document.getElementById("number").value);
	var Oddsum = 0;
	var Evensum = 0;
	for(i=1;i<=number;i++){
		if(i%2 == 0){
			Evensum += i;
		}
		else{
			Oddsum += i;
		}
	}
	output("innerDiv","Sum of Odd number is "+Oddsum+ " & Sum of Even number is "+Evensum);
}


function electricityBill(){
	var totalTariff = 0;
	var tariff200 = 0;
	var tariff100 = 0;
	var tarifffir50 = 0;
	var tariff50 = 0;
	var diffunits = 0;
	var totalUnits = Number(document.getElementById("number").value);
	var units = totalUnits;
	var totalAmount = 0;
	if(units > 200){
		diffunits = units - 200;
		tariff200 = diffunits * 7.25;
		units = units - diffunits;
	}
	if(units > 100 && units <= 200 ){
		diffunits = units - 100;
		tariff100 = diffunits * 5.65;
		units = units - diffunits;
	}
	if(units > 50 && units <= 100){
		diffunits = units - 50;
		tarifffir50 = diffunits * 3.25;
		units = units - diffunits;
	}
	if(units <= 50){
		tariff50 = units * 2.60;
	}
	totalAmount = tariff200 + tariff100 + tarifffir50 + tariff50;
	if(totalUnits > 700){
		var totalAmount = totalAmount + (totalAmount / 200);
		output("innerDiv",totalAmount);
	}
	else{
		output("innerDiv",totalAmount);
	}
}


function grossSalary(){
	var basicSalary = Number(document.getElementById("number").value);
	var grossSalary = 0;
	var hra = 1;
	var da = 1;
	if(basicSalary <= 10000){
		hra = basicSalary * (8/100);
		da = basicSalary * (10/100);
	}
	else if(basicSalary <= 20000){
		hra = basicSalary * (16/100);
		da = basicSalary * (20/100);
	}
	else{
		hra = basicSalary * (24/100);
		da = basicSalary * (30/100);
	}
	grossSal = basicSalary + hra + da;
	output("innerDiv",grossSal);
}


function coneAreaVolume(){
	var length = Number(document.getElementById("number1").value);
	var height = Number(document.getElementById("number2").value);
	var radius = Number(document.getElementById("number3").value);
	var PI = 22/7;
	var coneSurfaceArea = PI * radius * length + PI * (radius ** 2);
	var volume = 1/3 * (PI *(radius ** 2)* height);
	var lateralSurfaceArea = PI * radius * length;
	output("innerSpan1","Cone Surface Area : "+coneSurfaceArea);
	output("innerSpan2","Volume : "+volume);
	output("innerSpan3","Lateral Surface Area : "+lateralSurfaceArea);
}


function cubeAreaVolume(){
	var length = Number(document.getElementById("number1").value);
	var cubeSurfaceArea = 6 * (length ** 2);
	var volume = length ** 3;
	var lateralSurfaceArea = 4 * (length ** 2);
	output("innerSpan1","Surface Area : "+cubeSurfaceArea);
	output("innerSpan2","Volume : "+volume);
	output("innerSpan3","Lateral Surface Area : "+lateralSurfaceArea);
}


function cuboidAreaVolume(){	
	var length = Number(document.getElementById("number1").value);
	var height = Number(document.getElementById("number2").value);
	var width = Number(document.getElementById("number3").value);
	var cuboidSurfaceArea = 2 * length * width + 2 * length * height + 2 * width * height;
	var volume = length * width * height;
	var lateralSurfaceArea = 2 * height * (length + width);
	output("innerSpan1","Cuboid Surface Area : "+cuboidSurfaceArea);
	output("innerSpan2","Volume : "+volume);
	output("innerSpan3","Lateral Surface Area : "+lateralSurfaceArea);
}


function cylinderAreaVolume(){
	var radius = Number(document.getElementById("number1").value);
	var height = Number(document.getElementById("number2").value);
	var PI = 22/7;
	var cylinderSurfaceArea = 2 * PI * (radius ** 2) + 2 * PI * height;
	var volume =  PI * (radius ** 2) * height;
	var lateralSurfaceArea =  PI * (radius ** 2);
	output("innerSpan1","Cone Surface Area : "+cylinderSurfaceArea);
	output("innerSpan2","Volume : "+volume);
	output("innerSpan3","Top or Bottom Surface Area : "+lateralSurfaceArea);
}


function sphereAreaVolume(){
	var radius = Number(document.getElementById("number1").value);
	var PI = 22/7;
	var sphereSurfaceArea = 4 * PI * (radius ** 2) ;
	var volume =  4 * PI * (radius ** 3);
	var radius =  Math.sqrt(sphereSurfaceArea)/4 * PI;
	output("innerSpan1","Cone Surface Area : "+sphereSurfaceArea);
	output("innerSpan2","Volume : "+volume);
	output("innerSpan3","Top or Bottom Surface Area : "+radius);
}


function countDigits(){
	var number = document.getElementById("number").value; 
	var numLength = number.length;
	output("innerDiv",numLength);
	
}


function fibonacci(){
	var number = document.getElementById("number").value;
	var num1 = 0;
	var num2 = 1; 
	for(i=0;i<number;i++){
		arrayprint.push(num1);
		var flag = num1
		num1 = num2;
		num2 = flag + num2;
	}
	output("innerDiv",arrayprint);
}

function menuOperation(){
	var menu = Number(document.getElementById("case").value);
	var number1 = Number(document.getElementById("number1").value);
	var number2 = Number(document.getElementById("number2").value);
	switch(menu){
		case 1:output("innerDiv",number1 + number2);
		break;

		case 2:output("innerDiv",number1 - number2);
		break;

		case 3:output("innerDiv",number1 * number2);
		break;

		case 4:output("innerDiv",number1 / number2);
		break;

		case 5:output("menuDiv","Code Exited");
		break;
	}
}


function isNumberPalindrome(){
	var number = document.getElementById("number").value; 
	num = Number(number)
	var numLength = number.length;
	var lastDig = 0;
	var strnum ="";
	for(i=0;i<numLength;i++){
		lastDig = num%10;
		strnum += lastDig;
		num = Math.floor(num/10);
	}
	if(strnum == number){
		output("innerDiv","Number is Palindrome");
	}
	else{
		output("innerDiv","Number is not Palindrome");
	}
}


function concatString(){
	var string1 = document.getElementById("string1").value;
	var string2 = document.getElementById("string2").value;
	output("innerDiv",string1 + string2);
}


function convertToAscii(){
	var char = document.getElementById("string").value;
	output("innerDiv",char.charCodeAt(0));
} 

function convertByteToStr(){
	var array =[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100];
	var wordArr = [];
	var result ="";
	for(i=0;i<=array.length-1;i++){
		wordArr.push(String.fromCharCode(array[i]));
	}
	for(let i in wordArr){
		result += wordArr[i];
	}
	output("innerDiv",result);
}


function concatStringMeth(){
	var string1 = document.getElementById("string1").value;
	var string2 = document.getElementById("string2").value;
	output("innerDiv",string1.concat(string2));
}


function stringLastChar(){
	var string = document.getElementById("string").value;
	var length = string.length;
	output("innerDiv",string.charAt(length-1));
}


function stringMiddleChar(){
	var string = document.getElementById("string").value;
	var length = string.length;
	if(length % 2 == 0){
		output("innerDiv","String should have a perfect middle");
	}
	else{
		output("innerDiv",string.charAt((length-1)/2));
	}
}


function printStringChars(){
	var string = document.getElementById("string").value;
	var splittedString = [];
	splittedString.push(string.split(""));
	output("innerDiv",splittedString);
}


function stringLengthMethod(){
	var string = document.getElementById("string").value;
	output("innerDiv",string.length);
}

function stringLength(){
	var count = 0;
	var string = document.getElementById("string").value;
	for(let i in string){
		count++
	}
	output("innerDiv",count);
}


function characterIndex(){
	var string = document.getElementById("string").value;
	var char = document.getElementById("char").value;
	output("innerDiv",string.indexOf(char));
}


function characterIndex(){
	var string = document.getElementById("string").value;
	var char = document.getElementById("char").value;
	output("innerDiv",string.indexOf(char));
}


function characterOccurence(){
	var string = document.getElementById("string").value;
	var char = document.getElementById("char").value;
	var count =0;
	for(let i in string){
		if(string.charAt(i) == char){
			count ++
		}
	}
	output("innerDiv",count);
}



function subStringOccurence(){
	var string = document.getElementById("string").value;
	var subString = document.getElementById("subString").value;
	var subLength = subString.length;
	if(string.substring(0,subLength) == subString){
		output("innerDiv","sub-String is prefix");
	}
	else{
		output("innerDiv","sub-String is not prefix");
	}
}


function subStringReplace(){
	var string = document.getElementById("string").value;
	var subReplaceString = document.getElementById("subReplaceString").value;
	var subString = document.getElementById("subString").value;
	output("innerDiv",string.replace(subReplaceString,subString));
}


function reverseStringcase(){
	var string = document.getElementById("string").value;
	if(string.charCodeAt(0) >=65 && string.charCodeAt(0) <=90){
		output("innerDiv",string.toLowerCase());
	}
	else{
		output("innerDiv",string.toUpperCase());
	}
}


function reverseVowels(){
	var vowelArray = [];
	var array = [];
	var vowels = ["a","e","i","o","u"]; 
	var str = "";
	var string = document.getElementById("string").value;
	for(let i in string){
		if(vowels.includes(string[i])){
			vowelArray.push(string[i]);
		}
	}
	for(let j in string){
		if(vowels.includes(string[j])){
			var arrvow = vowelArray.pop();
			array.push(arrvow);
		}
		else{
			array.push(string[j]);
		}
	}
	for(let k in array){
		str = str + array[k];
	}
	output("innerDiv",str);
}



function countVowels(){
	var string = document.getElementById("string").value;
	var vcount =0;
	var ccount =0;
	var vowels = ["a","e","i","o","u","A","E","I","O","U"];
	for(let i in string){
		if(vowels.includes(string[i])){
			vcount+=1;
		}
		else if(string[i] == " "){
			continue;
		}
		else{
			ccount+=1;
		}
	}
	output("innerSpan1","Vowels Count = "+vcount);
	output("innerSpan2","Consonents Count = "+ccount);
}



function isClosed(){
	var string = document.getElementById("string").value;
	var closeArr =["}","]",")"];
	var openArr =["{","[","("];
	var newArr = [];
	var flag = 1;
	var ocount = 0;
	var ccount = 0;
	for(let i in string){
		newArr.push(string[i]);
	}
	for(i=0;i<newArr.length;i++){
		for(j=0;j<closeArr.length;j++){
			if(newArr.indexOf(closeArr[j])<newArr.indexOf(openArr[j])){
				flag = flag * 0;
			}
			if(string[i] == openArr[j]){
				if(string.includes(closeArr[j])){
					flag = flag * 1;
					ccount += 1;
				}
				else{
					flag = flag * 0;	
				}
			}
			if(string[i] == closeArr[j]){
				if(string.includes(openArr[j])){
					flag = flag * 1;
					ocount += 1;
				}
				else{
					flag = flag * 0;
				}	
			}
			
		}

	}
	if(ocount != ccount){
		flag = flag * 0;
	}
	if(flag == 0){
		output("innerDiv","Not closed correctly")
	}
	else{
		output("innerDiv","No error")
	}
}




function largestSmallestWord(){
	var string = document.getElementById("string").value;
	string = string+" ";
	var word ="";
	var array1 =[];
	var array2 =[];
	for(let i in string){
		word = word + string[i];
		if(string[i] == " "){
		array1.push(word);
		array2.push(word.length);
		word ="";
		}
	console.log(array1);
	}
	array1.sort((n1,n2)=>n1.length-n2.length);
	console.log(array1);
	output("innerSpan1","Largest is "+array1[array1.length-1]);
	output("innerSpan2","Smallest is "+array1[0]);
}


function replaceAlphabets(){
	var string = document.getElementById("string").value;
	var array = [];
	var newstring = "";
	for(i=0;i<=string.length-1;i++){
		array.push(string.charCodeAt(i));
	}
	for(i=0;i<array.length;i++){
		if(array[i] == 122){
			array.splice(i, 1,"a");
		}
		else{
			array.splice(i, 1, String.fromCharCode(array[i] + 1));
		}
	}
	for(let i in array){
		var newstring = newstring + array[i];
	}
	output("innerSpan1",newstring);
}



function findMissingAlpha(){
	var string = document.getElementById("string").value;
	var array = [];
	var result ="";
	var dupliarray = [];
	for(let i in string){
		array.push(string.charCodeAt(i));
		dupliarray.push(string.charCodeAt(i));
	}
	console.log(array);
	for(j=0;j<dupliarray.length;j++){
		if(dupliarray[j]+1 == dupliarray[j+1]){
			
		}
		else{
			if(dupliarray[j] == array[array.length-1]){
				break;
			}
			dupliarray.splice(j+1,0,dupliarray[j]+1);	

		}
	}
	for(let x in dupliarray){
		result = result+ String.fromCharCode(dupliarray[x]);
	}
	output("innerDiv",result);
}



function deleteConsonents(){
	var string = document.getElementById("string").value;
	var vowels = ["a","e","i","o","u","A","E","I","O","U"];
	for(let i in string){
		if(vowels.includes(string[i])){
			continue;
		}
		else{
			string = string.replace(string[i]," ")
		}
	}
	output("innerSpan1",string);
}


function maximumOccurance(){
	var string = document.getElementById("string").value;
	var count =0;
	for(let i in string){
		for(let j in string ){
			if(string[i] == string[j]){
			string.replace(string[j]," ");
			count =count+1;
			}
		}
		arrayprint.push(string[i]+ " = " +count)
		count =0;
	}
	output("innerDiv",arrayprint);

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
