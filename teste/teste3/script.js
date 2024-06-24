const adicionar = document.querySelector("#adicionar")
const remover = document.querySelector("#remover")
const body = document.querySelector("#body")
const main = document.querySelector("main")

function adicionarImgs () {
    console.log("deu certo")
    const card = document.createElement("div")
    const imgs = document.createElement("img")
    card.classList.add("card")
    card.style.position = "absolute"
    main.style.background = "red"
    card.style.top = Math.random() * innerHeight + "px"
    card.style.left = Math.random() * innerWidth + "px"
    imgs.classList.add("imgs")
    imgs.src = "../img/th.jpeg"
    card.appendChild(imgs)
    main.appendChild(card)



    function removerImgs () { 
        console.log(ola)
        let ultimoElemento = ola.pop()
    }
    let ola = Array.from(document.querySelectorAll("div"))
    ola.forEach(removerImgs)
    
    remover.addEventListener("click", removerImgs)
}

adicionar.addEventListener("click", adicionarImgs)