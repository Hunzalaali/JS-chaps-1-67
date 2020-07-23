var num;

num = prompt("Enter a number: ");

document.write("Result:<br>The value of a is " +num+"<br>...................................");

document.write("<br><br>The value of ++a is: "+(++num));
document.write("<br>Now the value of a is: "+num);

document.write("<br><br>The value of ++a is: "+(num++));
document.write("<br>Now the value of a is: "+num);

document.write("<br><br>The value of ++a is: "+(--num));
document.write("<br>Now the value of a is: "+num);

document.write("<br><br>The value of ++a is: "+(num--));
document.write("<br>Now the value of a is: "+num);


var a = 2, b = 1;
var result = --a - --b + ++b + b--;

document.write("<br><br>a is " +a);
document.write("<br>b is "+b);
document.write("<br>result is "+result);

var name;

name = prompt("Enter your name: ");
alert("Welcome "+name);


var t = 5;
var n = 0;

t = prompt("Enter a number:");

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


var s1,s2,s3;

s1 = prompt("Enter subject 1: ");
s2 = prompt("Enter subject 2: ");
s3 = prompt("Enter subject 3: ");

var totalMarks = 100;
var m1,m2,m3;

m1 = prompt("Enter subject 1 marks: ");
m2 = prompt("Enter subject 2 marks: ");
m3 = prompt("Enter subject 3 marks: ");

m1 = parseInt(m1);
m2 = parseInt(m2);
m3 = parseInt(m3);

var p1 = (m1/totalMarks) * 100;
var p2 = (m2/totalMarks) * 100;
var p3 = (m3/totalMarks) * 100;

var tmarks = totalMarks * 3;
var p = (p1+p2+p3)/3;
var m = m1+m2+m3;

document.write("<br><br>Subject Total Marks Obtained Marks Percentage");
document.write("<br>"+s1+ "  "+totalMarks+ "      " +m1+ "        "+p1+ "%");
document.write("<br>"+s2+ "  "+totalMarks+ "      " +m2+ "        "+p2+ "%");
document.write("<br>"+s3+ "  "+totalMarks+ "      " +m3+ "        "+p3+ "%");
document.write("<br>Total "+ tmarks+ "       " +m+ "         "+p+ "%");


