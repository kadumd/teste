/*let listaConvidados = ['Ana', 'João', 'Maria', 'Pedro'];
let ultimoConvidado = listaConvidados.pop();
console.log(listaConvidados); // Output: ['Ana', 'João', 'Maria']
console.log(ultimoConvidado); // Output: 'Pedro'


function rem(e) {
    e.style.background = "red";
}

// Seleciona todos os elementos <div> no documento
let opa = document.querySelectorAll("div");

// Verifica se há elementos para manipular
if (opa.length > 0) {
    // Remove o último elemento <div>
    let lastDiv = opa[opa.length - 1];
    lastDiv.parentNode.removeChild(lastDiv);

    // Aplica a função rem nos elementos restantes
    opa.forEach(rem);
}

console.log(opa);*/


function rem (e){
    e.style.background = "red"
}

let opa = Array.from(document.querySelectorAll("div"));

let ola = opa.pop()
opa.forEach(rem)
console.log (opa)

let nodeListAtualizado = document.querySelectorAll("div");

console.log(nodeListAtualizado);