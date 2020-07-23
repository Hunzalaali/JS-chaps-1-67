//1

function msg()
{
    alert("Hello world");
}


//2

function msg2()
{
    alert("Thanks for purchasing from us");
}


//3


function del(table){

    // var a = document.getElementById('index');
    // var b = document.getElementById('name');
    // var c = document.getElementById('class');
    // var d = document.getElementById('btn');

    // a.innerHTML = "";
    // b.innerHTML = "";
    // c.innerHTML = "";
    // d.innerHTML = "";

    var t = document.getElementById(table);

    t.innerHTML = "";

}

//4 (on html)


//5

var a = 0;

function increaseCount()
{
    a += 1;

    document.getElementById("count").innerHTML = a; 
}


function decreaseCount()
{
    a -= 1;

    document.getElementById("count").innerHTML = a; 
}