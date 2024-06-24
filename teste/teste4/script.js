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
    card.style.top = Math.random() * innerHeight + "px"
    card.style.left = Math.random() * innerWidth + "px"
    imgs.classList.add("imgs")
    imgs.src = "../img/th.jpeg"
    card.appendChild(imgs)
    main.appendChild(card)


    function adicionarOX () {
        console.log("deu errado")
        const detectar = document.createElement("img")
        detectar.src = "../img/R.png"
        detectar.classList.add("detectar")
        card.appendChild(detectar)


        function removerImgs (e){
            let oi = e.target
            console.log(oi)
            card.remove()
        }
        
        detectar.addEventListener("click", removerImgs)

    }
    
    remover.addEventListener("click", adicionarOX)
}


adicionar.addEventListener("click", adicionarImgs)