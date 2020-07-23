var a = 7;
var b = 3;

var c = a + b;
document.write("Sum of " +a+ " and " +b+ " is " +c);

var c = a - b;
document.write("<br>Difference of " +a+ " and " +b+ " is " +c);

var c = a * b;
document.write("<br>Product of " +a+ " and " +b+ " is " +c);

var c = a / b;
document.write("<br>Quotient of " +a+ " and " +b+ " is " +c);

var c = a % b;
document.write("<br>Remainder of " +a+ " and " +b+ " is " +c);

var num;
document.write("<br><br><br>Value after variable declaration is undefined");

num = 5;
document.write("<br>Initial value: " +num);

num++;
document.write("<br>Variable after increment is: "+num);

num = num + 7;
document.write("<br>Value after addition is: "+num);

num--;
document.write("<br>Value after decrement is: "+num);

document.write("<br>The remainder is: " +num%3);


var ticketPrice = 600;
var totalPrice = ticketPrice * 5;

document.write("<br><br><br>Total cost to buy 5 tickets to a movie is " +totalPrice);


var t = 3;
var n = 0;

document.write("<br><br>Table of " +t);

n++;
document.write("<br>" +t+ "x" +n+ "=" +t*n);
n++;
document.write("<br>" +t+ "x" +n+ "=" +t*n);
n++;
document.write("<br>" +t+ "x" +n+ "=" +t*n);
n++;
document.write("<br>" +t+ "x" +n+ "=" +t*n);
n++;
document.write("<br>" +t+ "x" +n+ "=" +t*n);
n++;
document.write("<br>" +t+ "x" +n+ "=" +t*n);
n++;
document.write("<br>" +t+ "x" +n+ "=" +t*n);
n++;
document.write("<br>" +t+ "x" +n+ "=" +t*n);
n++;
document.write("<br>" +t+ "x" +n+ "=" +t*n);
n++;
document.write("<br>" +t+ "x" +n+ "=" +t*n);


var cel;
var fah;

cel = 25;
fah = (cel * (9/5)) + 32;
document.write("<br><br>" +cel+ "oC is " +fah+ "oF");

fah = 70;
cel = (fah - 32) * (5/9);
document.write("<br><br>" +fah+ "oF is " +cel+ "oC");


var item1 = 650;
var item2 = 100;
var quan1 = 3;
var quan2 = 7;
var shippingCharges = 100;

var totalCost = (item1 * quan1) + (item2 * quan2) + shippingCharges;

document.write("<br><br>Shopping Cart");
document.write("<br>Price of item 1 is " +item1+ "<br>Quantity of item 1 is " +quan1+ "<br>Price of item 2 is " +item2+ "<br>Quantity of item 2 is " +quan2+ "<br>Shipping Charges " +shippingCharges);
document.write("<br><br>Total cost of your order is " +totalCost);

var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (804/980) * 100;

document.write("<br><br>Mark Sheet");
document.write("<br><br>Total marks: " +totalMarks+ "<br>Marks obtained: " +obtainedMarks+ "<br>Percentage: " +percentage);


var USD = 104.80;
var SR = 28;
var PKR;

PKR = (USD * 10) + (SR * 25);
document.write("<br><br>Total Currency in PKR: " +PKR);

var num1 = 2;
num1 = (((2 + 5)  * 10) / 2);
document.write("<br><br>Result: " +num1);

var currentYear = 2020;
var birthYear = 1998;
var calAge = currentYear - birthYear;

document.write("<br><br>Age Calculator");
document.write("<br><br>Current Year: " +currentYear+ "<br>Birth year: " +birthYear+ "<br>They are either " +calAge+ " or " +(--calAge)+ " years old");


var radius = 20;
var circum = 2 * 3.142 * radius;
var area = 3.142 * (radius*radius);

document.write("<br><br>The Geometrizer");
document.write("<br><br>Radius of a circle: " +radius+ "<br>Circumference: " +circum+ "<br>Area: " +area);

var snack = "Chocolate";
var currentAge = 21;
var maxAge = 65;
var amountPerDay = 2;
var totalSnack = (65-21) * 365 * 2;

document.write("<br><br>The Lifetime Supply Calculator");
document.write("<br><br>Favourite snack: " +snack+ "<br>Current age: " +currentAge+ "<br>Maximum Age: " +maxAge+ "<br>Amount of snack per day: " +amountPerDay+ "<br>You will need " +totalSnack+ " to last you until the ripe old age of " +maxAge);

