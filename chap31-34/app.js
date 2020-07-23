var now = new Date();

document.write(now);

var monthNames = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

var now = new Date();
var month = now.getMonth();
var themonth = monthNames[month];

document.write("<br>Current month: "+themonth);

var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var now = new Date();
var theDay = now.getDay();
var nameOfToday = dayNames[theDay];

document.write("<br>Today is "+nameOfToday);

if(nameOfToday == "Sun" || nameOfToday == "Sat")
{
    document.write("<br>It's fun day");
}


var now = new Date();
var theDate = now.getDate();

if(theDate < 16)
{
    document.write("<br>First fifteen days of the month");
}
else{
    document.write("<br>Last days of the month");
}


var now = new Date();

document.write("<br><br>Current Date: "+now);

var millsSince = now.getTime();
var minSince = millsSince / (1000 * 60 * 60);

document.write("<br><br>Elapsed milliseconds since January 1, 1970: "+millsSince);
document.write("<br><br>Elapsed minutes since January 1, 1970: "+minSince);


var now = new Date();
var theTime = now.getHours();

document.write("<br><br>Current hour: "+theTime);

if(theTime < 24 && theTime >= 12)
{
    document.write("<br>Its PM");
}
else{
    document.write("<br>Its AM");
}


var laterDate = new Date("Thu December 31 2020 00:00:00 GMT +0500 (PKT)");
document.write("<br><br>Later Date: "+laterDate);

var today = new Date();
var ramadanStart = new Date("April 24, 2020");

var msToday = today.getTime();
var msRamadanStart = ramadanStart.getTime();

var msDiff = msToday - msRamadanStart;

var dDiff = msDiff / (1000 * 60 * 60 * 24);

dDiff = Math.floor(dDiff);

document.write("<br><br>"+dDiff+ " days have passed since 1st Ramadan, 2020");


var startDate = new Date("Wed Jan 01 2020 00:00:00 GMT +0500 (PKT)");
var referenceDate = new Date("Thu Dec 05 2020 22:50:16 GMT +0500 (PKT)");

var msStartDate = startDate.getTime();
var msReferenceDate = referenceDate.getTime();

var msDiff = msReferenceDate - msStartDate;

var dDiff = msDiff / 1000 ;

dDiff = Math.floor(dDiff);

document.write("<br><br>"+referenceDate+ ",");
document.write("<br><br>"+dDiff+ " seconds have passed since beginning of 2020");


var d = new Date();
document.write("<br><br>Current time: "+d);

d.setTime(d.getTime() - (1*1000*60*60));

document.write("<br><br>1 hour ago, it was "+d);


var d = new Date();
document.write("<br><br>Current time: "+d);

d.setTime(d.getTime() - (100*365*24*1000*60*60));

document.write("<br><br>100 years back, it was "+d);


var age = prompt("Enter your age: ");
var a = new Date();

a.setTime(a.getTime() - (age*365*24*1000*60*60));

document.write("<br><br>Your age is "+age);
document.write("<br><br>Your birth year is "+a.getUTCFullYear());

var c = new Date();
var name = "Hunzala Ali";
var units = 410;
var charges =16;
var amount = units * charges;
var surcharge = 350;
var grossAmount = amount + surcharge;

document.write("<br><br>K-Electric Bill");
document.write("<br><br>Customer Name: "+name);
document.write("<br>Month: "+monthNames[c.getMonth()]);
document.write("<br>Number of units: "+units);
document.write("<br>Charges per unit: "+charges);
document.write("<br><br>Net amount payable (within Due Date): "+amount);
document.write("<br>Late payment surcharge: "+surcharge);
document.write("<br>Gross amount payable (after Due Date): "+grossAmount);


