
var a = document.getElementById("main-content");

function showContent(){

for (var i=0; i<a.childNodes.length; i++) {

  var d = a.childNodes[i];

  var e = d.innerHTML;
  
  document.write(e + "<br>");     
  }
}

function showRender()
{
  var r = document.getElementsByClassName("render");
  var n = r.length;

  for(i = 0; i<n; i++)
  {
    document.writeln(r[i].innerHTML)
  }

}

function firstName()
{
  var fn = document.getElementById("first-name");
  
  fn.value = "Hunzala";
  
}
function lastName()
{
  var ln = document.getElementById("last-name");
  
  ln.value = "Ali";
  
}
function email()
{
  var e = document.getElementById("email");
  
  e.value = "hunzalaali8@gmail.com";
  
}

function i ()
{
  var x = document.getElementById("form-content").nodeType;
  document.writeln("Type : " +x)
}

function ii ()
{
  var x = document.getElementById("lastName");
  var t = x.nodeType;
  
  document.writeln("Type: " +t)
  document.writeln("<br><br>Child Nodes: <br>")

  document.writeln(x.innerHTML)
}

function iii ()
{
  var x = document.getElementById("lastName");
  x.innerHTML = "Last Name: Ali"

  document.writeln("<br><br>Child Nodes: <br>")

  document.writeln(x.innerHTML)
}

function iv()
{
  var x = document.getElementById("main-content");

  document.writeln(x.firstElementChild.innerHTML)
  document.writeln("<br>"+ x.lastElementChild.innerHTML)
}

function v(){

  var x = document.getElementById("lastName");

  document.writeln(x.nextElementSibling.innerHTML)
  document.writeln("<br>"+ x.previousElementSibling.innerHTML)

}

function vi(){

  var x = document.getElementById("email");

  document.writeln(x.parentElement.innerHTML)
  document.writeln("<br>Type: "+ x.nodeType)

}