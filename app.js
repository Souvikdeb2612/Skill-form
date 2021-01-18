var x = document.getElementById("login");
var y = document.getElementById("register");
var z = document.getElementById("btn");
var selectedValue1 = document.getElementById("pro1");
var selectedValue2 = document.getElementById("pro2");
var selectedValue3 = document.getElementById("pro3");
var selectedValue4 = document.getElementById("pro4");
var selectedValue5 = document.getElementById("pro5");
var selectedValue6 = document.getElementById("pro6");


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

function dashboardLoad() {
    getSelectValue1();
    getSelectValue2();
    getSelectValue3();
    getSelectValue4();
    getSelectValue5();
    getSelectValue6();
}


function getSelectValue1() {
  document.getElementById('value1').innerText = getQueryVariable('pro1');
}

function getSelectValue2() {
  document.getElementById('value2').innerText = getQueryVariable('pro2');
}
function getSelectValue3() {
  document.getElementById('value3').innerText = getQueryVariable('pro3');
}
function getSelectValue4() {
  document.getElementById('value4').innerText = getQueryVariable('pro4');
}
function getSelectValue5() {
  document.getElementById('value5').innerText = getQueryVariable('pro5');
}
function getSelectValue6() {
  document.getElementById('value6').innerText = getQueryVariable('pro6');
}


function getQueryVariable(variable) {
  var query = window.location.search.substring(1);
  var vars = query.split('&');
  for (var i = 0; i < vars.length; i++) {
    var pair = vars[i].split('=');
    if (decodeURIComponent(pair[0]) == variable) {
      return decodeURIComponent(pair[1]);
    }
  }
  console.log('Query variable %s not found', variable);
}