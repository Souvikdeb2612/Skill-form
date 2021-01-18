var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var selectedValue1 = document.getElementById("pro1");
var selectedValue2 = document.getElementById("pro2");
var selectedValue3 = document.getElementById("pro3");
var selectedValue4 = document.getElementById("pro4");
var selectedValue5 = document.getElementById("pro5");
var selectedValue6 = document.getElementById("pro6");
var id1=document.getElementById("hh");
function register(){
    x.style.left="-450px";
    y.style.left="50px";
    z.style.left="110px";
}
function login(){
    x.style.left="50px";
    y.style.left="450px";
    z.style.left="0px";

}

function getSelectValue1(){
    id1.value = selectedValue1.value
}

function getSelectValue2(){
    return selectedValue2.value
}
function getSelectValue3(){
    return selectedValue3.value
}
function getSelectValue4(){
    return selectedValue4.value
}
function getSelectValue5(){
    return selectedValue5.value
}
function getSelectValue6(){
    return selectedValue6.value
}

getSelectValue1()