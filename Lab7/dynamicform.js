

function createForm(){
var fname = prompt("Name the form","");
//create a form
var f = document.createElement("form");
f.setAttribute('method',"post");
f.setAttribute('action',"submit.php");
f.setAttribute("id", "meForm");
f.setAttribute("title", fname);

var tf = document.getElementById("textfield");
tf.style.visibility="visible";

var cr = document.getElementById("Create");
cr.style.visibility="hidden";

var pas = document.getElementById("password");
pas.style.visibility="visible";

var rb = document.getElementById("rbtn");
rb.style.visibility="visible";




//create a button
var s = document.createElement("input");
s.type = "button";
s.value = "Submit";

// add all elements to the form
f.appendChild(s);

// add the form inside the body
$("body").append(f);   //using jQuery or
document.getElementsByTagName('body')[0].appendChild(f); //pure javascript
}

function addText(){
var f = document.getElementById("meForm");
var i = document.createElement("input");
var label = prompt("Name the field","");
$('#meForm').append('<label>'+ label +'</label>');

i.type = "text";
i.name = "user_name";
i.id = "user_name1";
alert("element added");
f.appendChild(i);
$('#meForm').append('<br>');
}

function addPass(){
var f = document.getElementById("meForm");
var i = document.createElement("input");
var label = prompt("Name the field","");
$('#meForm').append('<label>'+ label +'</label>');

i.type = "password";
i.name = "password";
i.id = "password1";
alert("element added");
f.appendChild(i);
$('#meForm').append('<br>');
}

function addrButton(){
var f = document.getElementById("meForm");
var i = document.createElement("input");
var label = prompt("Name the field","");
$('#meForm').append('<label>'+ label +'</label> ');

i.type = "radio";
i.name = "radio";
i.id = "radio";
f.appendChild(i);
$('#meForm').append('<br>');
}

// JavaScript Document