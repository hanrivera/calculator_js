// get display for computation and result
let dispComputation = document.getElementById(compute);
let dispResult = document.getElementById(result);

// clear display
let allClear = document.getElementById(ac);
ac.addEventListener("click", clearDisplay);

function clearDisplay(){
    compute.innerHTML = "0";
    result.innerHTML = "0";
}

// display numbers 0~9

let button0 = document.getElementById(zero);
zero.addEventListener("click", display0);

function display0(){
    alert('0');
}

let button1 = document.getElementById(one);
one.addEventListener("click", display1);

function display1(){
    alert('1');
}

let button2 = document.getElementById(two);
two.addEventListener("click", display2);

function display2(){
    alert('2');
}

let button3 = document.getElementById(three);
three.addEventListener("click", display3);

function display3(){
    alert('3');
}

let button4 = document.getElementById(four);
four.addEventListener("click", display4);

function display4(){
    alert('4');
}

let button5 = document.getElementById(five);
five.addEventListener("click", display5);

function display5(){
    alert('5');
}

let button6 = document.getElementById(six);
six.addEventListener("click", display6);

function display6(){
    alert('6');
}

let button7 = document.getElementById(seven);
seven.addEventListener("click", display7);

function display7(){
    alert('7');
}

let button8 = document.getElementById(eight);
eight.addEventListener("click", display8);

function display8(){
    alert('8');
}

let button9 = document.getElementById(nine);
nine.addEventListener("click", display9);

function display9(){
    alert('9');
}

// add, subtract, multiply, and divide keys

let addBtn = document.getElementById(plus);
plus.addEventListener("click", displayPlus);

function displayPlus(){

}


