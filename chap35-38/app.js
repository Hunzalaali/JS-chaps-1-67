function time(){
    var now = new Date();
    document.write(now);
}

time();

function greet(){
    var fname = prompt("Enter first name: ");
    var lname = prompt("Enter last name: ");
    var fullName = fname +" " + lname;
    document.write("<br><br>Welcome "+fullName);
}

greet();

function add(){
    var num1 = prompt("Enter first number: ");
    var num2 = prompt("Enter second number: ");
    var sum = Number(num1) + Number(num2);
    document.write("<br><br>Sum: "+sum);
}

add();

function calculator(){
    var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter second number: ");
var op = prompt("Enter operator: ");
var res;

if(op == "+")
{
    res = num1 + num2;
    document.write("<br><b>Result = " +res);
    
}
else if(op == "-")
{
    res = num1 - num2;
    document.write("<br><b>Result = " +res);
    
}
else if(op == "*")
{
    res = num1 * num2;
    document.write("<br><b>Result = " +res);
}
else if(op == "/"){
    res = num1 / num2;
    document.write("<br><b>Result = " +res);
    
}
else if(op == "%"){
    res = num1 % num2;
    document.write("<br><b>Result = " +res);
    
}
}

calculator();

function square(a){
    var sq = a*a;
    document.write("<br><b>Square = " +sq);
}

square(5);


function factorialize(num) {
    if (num < 0) 
          return -1;
    else if (num == 0) 
        return 1;
    else {
        return (num * factorialize(num - 1));
    }
  }
  factorialize(5);



function count(){
    var s = prompt("Enter start number: ");
    var e = prompt("Enter end number: ");

    for(i=s; i<=e; i++)
    {
        document.write("<br>"+i);
    }

}

count();



function calculateHypotenuse(){

    var b = prompt("Enter base value: ");
    var p = prompt("Enter perpendicular value: ");

    function calculateSquare(a)
    {
        var sq = a * a;
        return sq;
    }

    var h = calculateSquare(b) + calculateSquare(p);

    document.write("<br><br>Hypotenuse value: " +h);

}

calculateHypotenuse();


function area(a, b){

    var c = a * b;

    document.write("<br><br>Area value: " +c);


}

area(2,3);

var w = 3;
var h = 4;

area(w,h);


function palindrome(str) {
    var re = /[^A-Za-z0-9]/g;
    str = str.toLowerCase().replace(re, '');
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
      if (str[i] !== str[len - 1 - i]) {
          return false;
      }
    }
    return true;
   }

  document.write("<br>"+palindrome("Madam"));



function uppercase(str){

    var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }

   return splitStr.join(' ');    

}

document.write("<br><br>" +uppercase("my name is hunzala ali"));


function longestWord(text) {
    let wordArray = text.split(' ')
    let maxLength = 0
    let result = ''

    for (let i = 0; i < wordArray.length; i++) {
        if (wordArray[i].length > maxLength) {
            maxLength = wordArray[i].length
            result = wordArray[i]
        }
    }

    return result
}

document.write("<br><br>" +longestWord("Hello world I am Hunzala Ali"));


function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

document.write("<br><br>" +char_count("Hello world I am Hunzala Ali","a"));



function calcCircumference(r)
{
    var cir = 2 * 3.142 * r;
    document.write("<br><br>The circimference of circle is: " +cir);

}


function calcArea(r)
{
    var area = 3.142 * (r * r);
    document.write("<br><br>The Area of circle is: " +area);

}

calcCircumference(5);
calcArea(5);