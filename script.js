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


