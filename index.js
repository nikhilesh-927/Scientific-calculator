"use strict";
var $ = function(id){
    return document.getElementById(id);
};

function getNumber(num){
    var a = $('input');
    switch(num){
        case 1: a.value += '1';
        break;
        case 2: a.value += '2';
        break;
        case 3: a.value += '3';
        break;
        case 4: a.value += '4';
        break;
        case 5: a.value += '5';
        break;
        case 6: a.value += '6';
        break;
        case 7: a.value += '7';
        break;
        case 8: a.value += '8';
        break;
        case 9: a.value += '9';
        break;
        case 0: a.value += '0';
        break;
    }
}

function clearScreen(){
    $('input').value = "";
    $('output').value = "";
}

function getOperand(o){
    var a = $('input');
    switch(o){
        case '+': a.value += '+';
        break;
        case '-': a.value += '-';
        break;
        case 'x': a.value += '*';
        break;
        case '/': a.value += '/';
        break;
        case '+/-': a.value += '-' + a.value;
        break;
        case '.': a.value += '.';
        break;
    }
}

function backspace(){
    var a = $('input');
    var x = a.value;
    if(x.length > 0){
        x = x.substring(x.length - 1, 0);
        a.value = x;
    }
}

function compute(){
    var a = $('input');
    var sign = a.value.substring(0, 2);
    if(a.value == '' || a.value == 0){
        $('output').value = '';
    }
    else if(sign == 'si'){
            var num = a.value.substring(3, a.value.length);
            ans = Math.sin(num * Math.PI/180);
            $('output').value = a.value + '\u00B0' + '=' + ans; 
    }
    else if(sign == 'co'){
        var num = a.value.substring(3, a.value.length);
        ans = Math.cos(num * Math.PI/180);
        $('output').value = a.value + '\u00B0' + '=' + ans; 
    }
    else if(sign == 'ta'){
        var num = a.value.substring(3, a.value.length);
        ans = Math.tan(num * Math.PI/180);
        $('output').value = a.value + '\u00B0' + '=' + ans; 
    }
    else if(sign == 'ln'){
        var num = a.value.substring(2, a.value.length);
        ans = Math.log(num);
        $('output').value = '=' + ans;
    }
    else if(sign == 'e^'){
        var num = a.value.substring(2, a.value.length);
        ans = Math.exp(num);
        $('output').value = '=' + ans;
    }
    else if(sign.substring(0, 1) == '√'){
        var num = a.value.substring(1, a.value.length);
        var ans = Math.sqrt(num);
        $('output').value = '=' + ans;
    }
    else{
        var ans = eval(a.value);
        $('output').value = '=' + ans;
        a.value = ans;
    }
}

var i = 0;

function brackets(){
    var a = $('input');
    if(i == 0){
        a.value += '(';
        i = 1;
    }
    else if(i == 1){
        a.value += ')'
        i = 0;
    }
}

function pi(){
    var a = $('input');
    if(a.value != '' && a.value != 0){
        var num = a.value;
        a.value += 'π';
        var ans = num * Math.PI;
        $('output').value = '=' + ans;
    }
    else if(a.value == ''){
        a.value += 'π';
        var ans = Math.PI;
        $('output').value = '=' + ans;
    }
}

function sin(){
    var a = $('input');
    a.value += 'sin';
}

function cos(){
    var a = $('input');
    a.value += 'cos';
}

function tan(){
    var a = $('input');
    a.value += 'tan';
}

function ln(){
    var a = $('input');
    a.value += 'ln';
}

function squrt(){
    var a = $('input');
    a.value += '√';
}

function sqr(){
    var a = $('input');
    var ans = Math.pow(a.value, 2);
    $('output').value = '=' + ans;
    a.value += '^2';
}

function expo(){
    var a = $('input');
    a.value += 'e^';
}

function per(){
    var a = $('input');
    var ans = a.value/100;
    $('output').value = '=' + ans;
    a.value += '%';
}