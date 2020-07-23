var c;
c = prompt("Enter a character: ");

var char = c.charCodeAt(0);

if(char >= 65 && char <= 90)
{
    alert("Character is Uppercase");
}
else if(char >= 97 && char <= 122)
{
    alert("Character is Lowercase");
}
else if(char >= 60 && char <= 71)
{
    alert("Character is number");
}


var num1 = prompt("Enter first number: ");
var num2 = prompt("Enter second number: ");

if(num1 < num2)
{
    alert(num2+ " is maximum");
}
else if(num2 < num1)
{
    alert(num1+ " is maximum");
}
else if(num1 == num2)
{
    alert("Both are equal");
}


var n = prompt("Enter a positive or negative number: ");

if(n<0)
{
    alert("Negative number");
}
else if(n>0)
{
    alert("Positive number");
}


var v = prompt("Enter a character to check vowel: ");

if(v=='a')
{
    alert("character is vowel");
}
else if(v=='e')
{
    alert("character is vowel");
}
else if(v=='i')
{
    alert("character is vowel");
}
else if(v=='o')
{
    alert("character is vowel");
}
else if(v=='u')
{
    alert("character is vowel");
}
else{
    alert("Character is non-vowel");
}


var pw = "12345";

var p = 0;
p = prompt("Enter the password: ");

if(p == 0)
{
    alert("Please enter your password");
}
else if(p == pw)
{
    alert("Correct! The password you entered matches the original password");
}
else
{
    alert("Incorrect password");
}

var greeting;
var hour = 13;

if (hour < 18) {
greeting = "Good day";
alert(greeting);
}
else{
greeting = "Good evening";
alert(greeting);
}


var time = prompt("Enter the time: ");

if(time >= 0000 && time <1200)
{
    alert("Good Morning!");
}
else if(time >= 1200 && time <1700)
{
    alert("Good afternoon!");
}
else if(time >= 1700 && time <2100)
{
    alert("Good evening!");
}
else if(time >= 2100 && time <=2359)
{
    alert("Good night!");
}

