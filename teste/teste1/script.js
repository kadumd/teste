let button = document.querySelector("#button")
let total = document.querySelector("#resultado")

function soma (){
    let numero1 = document.getElementById("number1").value
    let numero2 = document.getElementById("number2").value
    let result = Number(numero1) + Number(numero2)
    console.log(result)
    total.textContent = result
}

button.addEventListener("click", soma)