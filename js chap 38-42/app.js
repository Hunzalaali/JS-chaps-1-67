//1

function power(a,b)
{
    var i = 1;
    var n = 1;

    for(i = 0; i < b; i++)
    {
        n = n * a;
    }

    return n;
}


document.writeln(power(3,3));

//2

function leapYear()
{
    var a = prompt("Enter leap year: ");
    if(a%4 == 0)
    {
        document.writeln("<br><br>The year is leap year");
    }
    else{
        document.writeln("<br><br>The year is not leap year");
    }
}

leapYear();





//3

function areaOfTriangle(a,b,c)
{
    var s = S(a,b,c)

    var area = s * ((s - a) * (s - b) * (s - c));

    return area;
}

function S(a,b,c)
{
    var s = (a + b +c)/2
    return s;
}

document.writeln("<br><br>"+areaOfTriangle(2,3,4));




//4


function mainFunction()
{
    var a = prompt("Enter subject 1 marks:");
    var b = prompt("Enter subject 2 marks:");
    var c = prompt("Enter subject 3 marks:");

    var d = parseInt(a);
    var e = parseInt(b);
    var f = parseInt(c);

    var avg = average(d,e,f);
    var per = percentage(avg);


    document.writeln("<br><br>Average: "+avg);
    document.writeln("<br><br>Percentage "+per+"%");


}

function average(a,b,c)
{
    var avg = (a + b + c) / 3;
    return avg;
}

function percentage(avg)
{
    var per = (avg / 100)* 100;

    return per;
}


mainFunction();


//5

function indexFind()
{
    var s = prompt("Enter a string: ");
    var a = prompt("Enter char to find index of: ");
    for (var i = 0; i < s.length; i++) {
        if(a == s.charAt(i))
        {
            document.writeln("<br><br>Index: " +i);
        }
        
    }
}

indexFind();


//6


function disemvowel(str) {
    var strArr = str.split('');
    for (var x = 0; x < str.length; x++) {
      var char = str[x].toLowerCase();
      if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u") {
        strArr[x] = '';
      }
    }
    return strArr.join('');
  }

document.writeln("<br><br> " +disemvowel("Hello world"));



//7


function findOccurrences() {
    var str = "Pleases read this application and give me gratuity";
    var chars = str.toLowerCase().split("");
    var count = 0;
    
    
    for(let i = 0; i < chars.length - 1; i++) {
      var char = chars[i];
      var next = chars[i + 1];
      
      
      if(isCorrectCharacter(char) && isCorrectCharacter(next)) {
        count++
      }
    }
    
    return count;
  }
  
  
  function isCorrectCharacter(char) {
    switch (char) {
      case 'a':
      case 'e':
      case 'i':
      case 'o':
      case 'u':
        return true;
      default:
        return false;
    }
  }

document.writeln("<br><br> " +findOccurrences());


//8


function kmToMeters(km)
{
    var m = km * 1000;
    return m;
}

function kmToFeet(km)
{
    var f = km * 3281;
    return f;
}

function kmToInches(km)
{
    var i = km * 39370;
    return i;
}

function kmToCentimeters(km)
{
    var c = km * 100000;
    return c;
}

function convert()
{
    var km = prompt("Enter km to covert: ");

    document.writeln("<br><br>Meters: " +kmToMeters(km));
    document.writeln("<br><br>Feet: " +kmToFeet(km));
    document.writeln("<br><br>Inches: " +kmToInches(km));
    document.writeln("<br><br>Meters: " +kmToMeters(km));
}


convert();



//9


function overtime()
{

    var a = prompt("Enter hours worked: ");

    if(a > 40)
    {
        var b = a - 40;
        c = b * 12;
        document.writeln("<br><br>Overtime pay: Rs. " +c);
    }
    else{
        document.writeln("<br><br>Employee have not worked overtime");
    }


}


overtime();



//10


function cash()
{
    var a = prompt("Enter amount to withdraw!!");

    var h1 = a / 100;
    
    var h2 = a % 100;
    var f1 = h2 / 50;
    
    var f2 = h2 % 50;
    var t1 = f2 / 10;
    

    document.writeln("<br><br>Hundred: " +Math.trunc(h1));
    document.writeln("<br><br>Fifty: " +Math.trunc(f1));
    document.writeln("<br><br>Ten: " +t1);
}


cash();