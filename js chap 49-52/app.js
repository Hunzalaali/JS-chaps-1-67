//1

function save()
{
    var f = document.getElementById("fn");
    var f2 =document.getElementById("fn2");
    f2.innerHTML = f.value;
    var l = document.getElementById("ln");
    var l2 =document.getElementById("ln2");
    l2.innerHTML = l.value;
    var c = document.getElementById("c");
    var c2 =document.getElementById("c2");
    c2.innerHTML = c.value;
    var a = document.getElementById("a");
    var a2 =document.getElementById("a2");
    a2.innerHTML = a.value;
    var z = document.getElementById("z");
    var z2 =document.getElementById("z2");
    z2.innerHTML = z.value;
}

//2

function expand(){

    var exp = "First Name = Hunzala, Last Name = Ali, Contact = 123456789, Address = abc block 5, Zip Code = 5585"
    document.getElementById("par").innerHTML = exp;
}

//3


var t = document.getElementById("table")


function saveTable(){
    
    var i = document.getElementById("index")
    var n = document.getElementById("name")
    var c = document.getElementById("class")

    var tr = document.createElement("tr")
    var td = document.createElement("td")
    var td2 = document.createElement("td")
    var td3 = document.createElement("td")
    var del = document.createElement("button")
    var edit = document.createElement("button")

    
    

    var trIndex = document.createTextNode(i.value)
    var trName = document.createTextNode(n.value)
    var trClass = document.createTextNode(c.value)
    var delText = document.createTextNode("Delete")
    var editText = document.createTextNode("Edit")


    del.setAttribute("onclick", "deleteRow(this)")
    edit.setAttribute("onclick", "editRow(this)")

    td.appendChild(trIndex)
    td2.appendChild(trName)
    td3.appendChild(trClass)
    del.appendChild(delText)
    edit.appendChild(editText)

    t.appendChild(tr)

    tr.appendChild(td)
    tr.appendChild(td2)
    tr.appendChild(td3)
    tr.appendChild(del)
    tr.appendChild(edit)


    i.value = ""
    n.value = ""
    c.value = ""

    

}

function deleteRow(e)
{
    e.parentNode.remove();
}

function editRow(e)
{

    var parentElement = e.parentElement;

    
    var a = prompt("Enter updated index:", parentElement.children[0].innerHTML)
    var b = prompt("Enter updated name:", parentElement.children[1].innerHTML)
    var c = prompt("Enter updated class:", parentElement.children[2].innerHTML)

    

    parentElement.children[0].innerHTML = a;
    parentElement.children[1].innerHTML = b;
    parentElement.children[2].innerHTML = c;
}