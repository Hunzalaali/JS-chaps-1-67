var fname = prompt("Enter first name: ");
var lname = prompt("Enter last name: ");

var fullname = fname.concat(" ",lname);

alert("Welcome " +fullname);


var phone = prompt("My favorite phone is: ");

var lenght = phone.length;

alert("The length of string: "+lenght);


var a = "Pakistani";

for(i=0; i<a.length; i++)
{
    if(a.slice(i, i+1) == "n")
    {
        document.write("String: Pakistani<br>");
        document.write("Index of 'n': "+i);
    }
}


var b = "Hello World";

for(i=b.length; i>0; i--)
{
    if(b.slice(i, i+1) == "l")
    {
        document.write("<br><br>String: " +b+ "<br>");
        document.write("Last Index of 'l': "+i);
        break;
    }
}


var char3 = a.charAt(3);

document.write("<br><br>String: Pakistani<br>");
document.write("Character at index 3: "+char3);

var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");

document.writeln("<br><br>"+newCity);


var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replace(/and/g, "&");

document.writeln("<br><br>"+newCity);

var stringNo ="472";

document.writeln("<br><br>"+stringNo);
document.writeln("<br><br>"+typeof stringNo);

var intNo = Number(stringNo);

document.writeln("<br><br>"+intNo);
document.writeln("<br><br>"+typeof intNo);


var c = prompt("Enter input: ");

var d = c.toUpperCase();

document.writeln("<br><br>User input: "+c);
document.writeln("<br><br>Upper Case: "+d);


var c = prompt("Enter input: ");

var d = c.charAt(0).toUpperCase() + c.slice(1);

document.writeln("<br><br>User input: "+c);
document.writeln("<br><br>Title Case: "+d);


var num = 35.36;

var res = num.toString().replace(".","");

document.writeln("<br><br>Number: "+num);
document.writeln("<br><br>Result: "+res);


var username = prompt("Enter username: ");

for(i=0; i<username.length; i++)
{
    if(username.slice(i, i+1) == "!" || username.slice(i, i+1) == "." || username.slice(i, i+1) == "," || username.slice(i, i+1) == "@")
    {
        alert("Please enter a valid username");
        break;
    }
}


var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var s = prompt("What do you want to order?");

s = s.toLowerCase();

var check = 0;

for(i=0; i<4; i++)
{
    if(A[i] == s)
    {
        document.write("<br><br>" +s+ " is available at index " +i+ " in our bakery");
        check = 1;
    }
}
if(check == 0)
{
    document.write("<br>We are sorry. " +s+ " is not available in our bakery");
}



var pw = prompt("Enter a password: ");
var charpw = pw.charAt(0);

if(pw.length < 6)
{
    document.writeln("<br><br>Entered password: "+pw);
    document.writeln("<br>Password should have atleast 6 character");
    document.writeln("<br>Please enter a valid password");
    
}
else if(charpw > 47 || charpw < 58)
{
    document.writeln("<br><br>Entered password: "+pw);
    document.writeln("<br>Password should not begin with a number");
    document.writeln("<br>Please enter a valid password");
    
}

var check =0;
for(i=0; i<pw.length; i++)
{
    if(pw.slice(i, i+1) > 64 || pw.slice(i, i+1) < 91 || pw.slice(i, i+1) > 96 || pw.slice(i, i+1) < 123 )
    {
        if(pw.slice(i+1, i+2) > 47 || pw.slice(i+1, i+2) < 58 )
        {
            check++;
    
        }
    }
    
}
if(check < 1){
    document.writeln("<br><br>Entered password: "+pw);
    document.writeln("<br>Password should have both numbers and alphabets");
    document.writeln("<br>Please enter a valid password");
    
}


var University = "University of Karachi";

var uni = University.split("");

for(i=0; i<uni.length; i++)
{
    document.writeln("<br>"+uni[i]);
}


var word = prompt("User input: ");

var charWord = word.charAt(word.length - 1);

alert("Last character: "+charWord);


var sentence = "The quick brown fox jumps over the lazy dog.";
var sen = sentence.toLowerCase();

var sent = sen.split(" ");
var count = 0;
for(i=0; i<sent.length; i++)
{
    if(sent[i] == "the")
    {
        count++;
    }
    document.writeln("<br>"+sent[i]);
}
document.writeln("<br><br>"+sentence);
document.writeln("<br>There are "+count+ " occurrence(s) of word 'the'");
