var num = prompt("Enter a number: ");

rnum = Math.round(num);
fnum = Math.floor(num);
cnum = Math.ceil(num);

document.write("<br>number: "+num);
document.write("<br>round off value: "+rnum);
document.write("<br>floor value: "+fnum);
document.write("<br>ceil value: "+cnum);


var num2 = prompt("Enter a negative floor number: ");

rnum = Math.round(num2);
fnum = Math.floor(num2);
cnum = Math.ceil(num2);

document.write("<br>number: "+num2);
document.write("<br>round off value: "+rnum);
document.write("<br>floor value: "+fnum);
document.write("<br>ceil value: "+cnum);

var num3 = prompt("Enter a number for absolute value: ");

anum = Math.abs(num3);

document.write("<br>number: "+num3);
document.write("<br>Absolute number: "+anum);


var dice = Math.random();
var improvedNum = (dice * 6) + 1;
var numberOfDice = Math.floor(improvedNum);

document.write("<br>Random number: "+numberOfDice);


var coin = Math.random();
var improvedNum = (coin * 2) + 1;
var numberOfCoin = Math.floor(improvedNum);

document.write("<br><br>"+numberOfCoin);
if(numberOfCoin == 1)
{
    document.write("<br>It is tail");
}
else if(numberOfCoin == 2)
{
    document.write("<br>It is Head");
}


var random = Math.random();
var improvedNum = (random * 100) + 1;
var numberOfRandom = Math.floor(improvedNum);

document.write("<br><br>random number between 1 and 100: "+numberOfRandom);


var weight = prompt("Enter your weight in kilograms: ");

var numWeight = parseFloat(weight);

document.write("<br><br>The weight of the user is "+numWeight+ " kilograms");


var guess = Math.random();
var improvedNum = (guess * 10) + 1;
var numberOfGuess = Math.floor(improvedNum);

var userGuess = prompt("Enter a number between 1 to 10: ");

document.write("<br><br>"+numberOfGuess);
if(userGuess == numberOfGuess)
{
    document.write("<br>Congratulations");
}
else
{
    document.write("<br>Try again");
}
