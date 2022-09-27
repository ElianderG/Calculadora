function entnum(num1){
    var display = document.getElementById("display")
    var varcont = display;
    if (display.innerHTML=="0"){
        display.innerHTML = num1;
    } else {
        display.innerHTML = varcont.innerHTML + num1
    }
}
function cleanall(){
    var display = document.getElementById("display").innerHTML = 0;
}

function entop(op){
    var display = document.getElementById("display");
    var varcont = display;
    display.innerHTML = varcont.innerHTML + op;
     
}

function showresult(){
    var display = document.getElementById("display");
    display.innerHTML = parseFloat(eval(display.innerHTML));
}

function bracall(){
    var display = document.getElementById("display")
    var varcont = display;
    if (braclosed == false){
        display.innerHTML = varcont.innerHTML + ")";
        braclosed = true;
    } else {
        display.innerHTML = varcont.innerHTML + "(";
        braclosed = false;
    }
}