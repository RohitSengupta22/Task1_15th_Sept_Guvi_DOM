document.getElementById("input").addEventListener("keypress",function(e){
    if(e.key < "0" || e.key > "9"){
        alert("You can only enter numbers")
        e.preventDefault();
    }
})

function add() {
    document.getElementById("input").value =  document.getElementById("input").value + "+"
}

function mul() {
    document.getElementById("input").value =  document.getElementById("input").value + "*"
}

function divide() {
    document.getElementById("input").value =  document.getElementById("input").value + "/"
}

function substract() {
    document.getElementById("input").value =  document.getElementById("input").value + "-"
}

function calculate(){
    document.getElementById("input").value = eval( document.getElementById("input").value)
}

function one(){
    document.getElementById("input").value =  document.getElementById("input").value + "1"
}
function two(){
    document.getElementById("input").value =  document.getElementById("input").value + "2"
}
function three(){
    document.getElementById("input").value =  document.getElementById("input").value + "3"
}
function four(){
    document.getElementById("input").value =  document.getElementById("input").value + "4"
}
function five(){
    document.getElementById("input").value =  document.getElementById("input").value + "5"
}
function six(){
    document.getElementById("input").value =  document.getElementById("input").value + "6"
}
function seven(){
    document.getElementById("input").value =  document.getElementById("input").value + "7"
}
function eight(){
    document.getElementById("input").value =  document.getElementById("input").value + "8"
}
function nine(){
    document.getElementById("input").value =  document.getElementById("input").value + "9"
}
function clearInput(){
    document.getElementById("input").value =  ""
}