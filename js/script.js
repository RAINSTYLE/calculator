"use strict"; 
let counterEvent = 1;
const result = document.getElementById('result');

const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const btn7 = document.getElementById('btn7');
const btn8 = document.getElementById('btn8');
const btn9 = document.getElementById('btn9');
const btn0 = document.getElementById('btn0');
const btndel = document.getElementById('btndel');



















btn1.addEventListener('click', () => {
    
    if (result.innerHTML.length <= 10) {
    if (counterEvent <= 1) {
        result.innerHTML = "1";
        counterEvent++;
    } else {
        result.innerHTML = `${result.innerHTML}1`
    };   
}});

btn2.addEventListener('click', () => {
    
    if (result.innerHTML.length <= 10) {
    if (counterEvent <= 1) {
        result.innerHTML = "2";
        counterEvent++;
    } else {
        result.innerHTML = `${result.innerHTML}2`
    };   
}});


btn3.addEventListener('click', () => {
    
    if (result.innerHTML.length <= 10) {
    if (counterEvent <= 1) {
        result.innerHTML = "3";
        counterEvent++;
    } else {
        result.innerHTML = `${result.innerHTML}3`
    };   
}});




btn4.addEventListener('click', () => {
    
    if (result.innerHTML.length <= 10) {
    if (counterEvent <= 1) {
        result.innerHTML = "4";
        counterEvent++;
    } else {
        result.innerHTML = `${result.innerHTML}4`
    };   
}});


btn5.addEventListener('click', () => {
    
    if (result.innerHTML.length <= 10) {
    if (counterEvent <= 1) {
        result.innerHTML = "5";
        counterEvent++;
    } else {
        result.innerHTML = `${result.innerHTML}5`
    };   
}});

btn6.addEventListener('click', () => {
    
    if (result.innerHTML.length <= 10) {
    if (counterEvent <= 1) {
        result.innerHTML = "6";
        counterEvent++;
    } else {
        result.innerHTML = `${result.innerHTML}6`
    };   
}});


btn7.addEventListener('click', () => {
    
    if (result.innerHTML.length <= 10) {
    if (counterEvent <= 1) {
        result.innerHTML = "7";
        counterEvent++;
    } else {
        result.innerHTML = `${result.innerHTML}7`
    };   
}});


btn8.addEventListener('click', () => {
    
    if (result.innerHTML.length <= 10) {
    if (counterEvent <= 1) {
        result.innerHTML = "8";
        counterEvent++;
    } else {
        result.innerHTML = `${result.innerHTML}8`
    };   
}});



btn9.addEventListener('click', () => {
    
    if (result.innerHTML.length <= 10) {
    if (counterEvent <= 1) {
        result.innerHTML = "9";
        counterEvent++;
    } else {
        result.innerHTML = `${result.innerHTML}9`
    };   
}});

btn0.addEventListener('click', () => {
    
    if (result.innerHTML.length <= 10) {
    if (counterEvent <= 1) {
        result.innerHTML = "0";
        counterEvent++;
    } else {
        result.innerHTML = `${result.innerHTML}0`
    };   
}});


btndel.addEventListener('click', () => {
    result.innerHTML = 0;
});











