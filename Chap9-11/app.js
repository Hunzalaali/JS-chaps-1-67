var city = prompt("Enter city name: ");

if(city == "karachi")
{
    alert("Welcome to city of lights");
}

var gender = prompt("Enter your gender: ");

if(gender == "male")
{
    alert("Good Morning Sir");
}
else if(gender == "female")
{
    alert("Good Morning Ma'am");
}


var color = prompt("Enter traffic signal color: ");

if(color == "red")
{
    alert("Must Stop");
}
else if(color == "yellow")
{
    alert("Ready to move");
}
else if(color == "green")
{
    alert("Move now");
}


var fuel = prompt("Enter remaining fuel: ");

if(fuel < 0.25)
{
    alert("Please refill the fuel in your car");
}


var a = 4;
if (++a === 5){
alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
alert("condition 1 is true");
}
if (c === 13){
alert("condition 2 is true");
}
if (++c < 14){
alert("condition 3 is true");
}
if(c === 14){
alert("condition 4 is true");
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
alert("The cost equals");
}


if (true){
    alert("True");
    }
    if (false){
    alert("False");
    }

    if("car" < "cat"){
        alert("car is smaller than cat");
        }


var m1 = prompt("Enter subject 1 marks: ");
var m2 = prompt("Enter subject 2 marks: ");
var m3 = prompt("Enter subject 3 marks: ");

m1 = parseInt(m1);
m2 = parseInt(m2);
m3 = parseInt(m3);

var totalMarks = 300;
var  marks = m1 + m2 +m3;
var percent = (marks/totalMarks) * 100;

document.write("Mark Sheet");
document.write("<br><br>Total marks: " +totalMarks);
document.write("<br>Marks obtained: "+marks);
document.write("<br>Percentage: " +percent+ "%");


if(percent >= 80)
{
    document.write("<br>Grade: A-one");
    document.write("<br>Excellent");
}
else if(percent >= 70)
{
    document.write("<br>Grade: A");
    document.write("<br>Good");
}
else if(percent >= 60)
{
    document.write("<br>Grade: B");
    document.write("<br>You need to improve");
}
else{
    document.write("<br>Grade: Fail");
    document.write("<br>Sorry");
}


var num = 8;
var guess = prompt("Guess the secret number: ");

guess = parseInt(guess);

if(guess == num){

    document.write("<br><br>Bingo! Correct answer");
}
else if((guess+1) == num)
{
    document.write("<br><br>Close enough to the correct answer");

}

var a = prompt("Enter a number: ");

if(a%3 == 0)
{
    document.write("<br><br>The number is divisible by 3");
}

var b = prompt("Enter a number: ");

if(b%2 == 0)
{
    document.write("<br><br>The number is even");

}else{
    document.write("<br><br>The number is odd");
}


var t = prompt("Enter the temperature: ");

if(t > 40)
{
    document.write("<br>It is too hot outside");
    
}
else if(t > 30)
{
    document.write("<br>The Weather today is Normal");
    
}
else if(t > 20)
{
    document.write("<br>Today’s Weather is cool");
}
else if(t >10){
    document.write("<br>OMG! Today’s weather is so Cool");
    
}


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