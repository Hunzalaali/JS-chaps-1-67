var mulArr =[]

var numbers = [
    [0,1,2,3],
    [1,0,1,2],
    [2,1,0,1]
]
document.write(numbers);

var a = 0;
for(i=0; i<10; i++)
{
    a++;
    document.write("<br>"+a);
}

var b = prompt("Enter a number for table");
var n = prompt("Enter table lenght: ");

document.write("<br><br>Table of "+b+ "<br>Length "+n+"<br>");

for(i=1; i<=n; i++)
{
    
    document.write("<br>"+i+"x"+b+"="+b*i);
}

var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for(i=0; i<5; i++)
{
    document.write("<br>"+fruits[i]);
}
    
for(i=0; i<5; i++)
{
    document.write("<br>Element at index "+i+ " is "+fruits[i]);
}


document.write("<br><br>Counting: <br>");

for(i=1; i<=15; i++)
{
    document.write(i+", ");
}

document.write("<br><br>Reverse Counting: <br>");

for(i=10; i>=1; i--)
{
    document.write(i+", ");
}

document.write("<br><br>Even: <br>");

for(i=0; i<=20; i++)
{
    if(i%2==0)
    document.write(i+", ");
}

document.write("<br><br>Odd: <br>");

for(i=0; i<=20; i++)
{
    if(i%2!=0)
    document.write(i+", ");
}

document.write("<br><br>Series: <br>");

for(i=1; i<=20; i++)
{
    if(i%2==0)
    document.write(i+"k, ");
}


var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var s = prompt("What do you want to order?");

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


var c = [24, 53, 78, 91, 12];
var max = c[0];

document.write("<br><br>Array items: "+c);

for(i=1; i<5; i++)
{
    if(max < c[i])
    {
        max = c[i];
    }
}

document.write("<br><br>The largest number is "+max);


var c = [24, 53, 78, 91, 12];
var min = c[0];

document.write("<br><br>Array items: "+c);

for(i=1; i<5; i++)
{
    if(min > c[i])
    {
        min = c[i];
    }
}

document.write("<br><br>The smallest number is "+min+"<br><br>");


for(i=1; i<=100; i++)
{
    if(i%5 == 0)
    document.write(i+ ", ");
}