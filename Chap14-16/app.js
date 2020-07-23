var studentNames = new Array();

var studentNames = [];

var city = ["karachi", "lahore", "islamabad"];

var nums = [1,3,4,7];

var bol = [true , false];

var mixed = [1, "hello", true];

var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];

document.write("Qualifications:");

document.write("<br><br>1) " +qual[0]);
document.write("<br>2) " +qual[1]);
document.write("<br>3) " +qual[2]);
document.write("<br>4) " +qual[3]);
document.write("<br>5) " +qual[4]);
document.write("<br>6) " +qual[5]);
document.write("<br>7) " +qual[6]);
document.write("<br>8) " +qual[7]);


var names = [], score = [], percentage = [];

names[0] = prompt("Enter first name: ");
names[1] = prompt("Enter second name: ");
names[2] = prompt("Enter third name: ");

score[0] = prompt("Enter first score: ");
score[1] = prompt("Enter second score: ");
score[2] = prompt("Enter third score: ");

percentage[0] = (score[0] / 500) * 100;
percentage[1] = (score[1] / 500) * 100;
percentage[2] = (score[2] / 500) * 100;

document.write("<br><br>Score of " +names[0]+ " is " +score[0]+ ". Percentage: " +percentage[0]+ "%");
document.write("<br>Score of " +names[1]+ " is " +score[1]+ ". Percentage: " +percentage[1]+ "%");
document.write("<br>Score of " +names[2]+ " is " +score[2]+ ". Percentage: " +percentage[2]+ "%");

var studentScore =[];

studentScore[0] = prompt("Enter first student score: ");
studentScore[1] = prompt("Enter second student score: ");
studentScore[2] = prompt("Enter third student score: ");
studentScore[3] = prompt("Enter fourth student score: ");
studentScore[4] = prompt("Enter fifth student score: ");

studentScore.sort();

document.write("<br><br>"+studentScore[0]);
document.write("<br>"+studentScore[1]);
document.write("<br>"+studentScore[2]);
document.write("<br>"+studentScore[3]);
document.write("<br>"+studentScore[4]);


var cities = ["karachi", "lahore", "islamabad", "quetta", "peshawar"];

var selectedCities = [];

selectedCities[0] = cities[0];
selectedCities[1] = cities[1];
selectedCities[2] = cities[2];

document.write("<br><br>"+selectedCities[0]);
document.write("<br>"+selectedCities[1]);
document.write("<br>"+selectedCities[2]);

var arr = ["This ", " is ", " my ", " cat"];

var abc = arr.join("");

document.write("<br><br>"+abc);


var dev = ["Keyboard", "mouse", "printer", "monitor"];

var dev1 = dev.join();

document.write("<br><br>"+dev1);

document.write("<br><br>"+dev[0]);
document.write("<br>"+dev[1]);
document.write("<br>"+dev[2]);
document.write("<br>"+dev[3]);

var dev = ["Keyboard", "mouse", "printer", "monitor"];

var dev1 = dev.join();

document.write("<br><br>"+dev1);

document.write("<br><br>"+dev[3]);
document.write("<br>"+dev[2]);
document.write("<br>"+dev[1]);
document.write("<br>"+dev[0]);

var  manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony & Haier"];

document.write("<br><br>Select a manufacturer: ");
document.write("<br><br>1) " +manufacturers[0]);
document.write("<br>2) " +manufacturers[1]);
document.write("<br>3) " +manufacturers[2]);
document.write("<br>4) " +manufacturers[3]);
document.write("<br>5) " +manufacturers[4]);
