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