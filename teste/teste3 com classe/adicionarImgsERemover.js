class Adicionar {
    tags (){
        const adicionar = document.querySelector("#adicionar")
        const remover = document.querySelector("#remover")
        const body = document.querySelector("#body")
        const main = document.querySelector("main")
    }

    adicionarImgs (){
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
        this.detectClick(adicionar)
        this.detectClick(this.remover)
        main.appendChild(card)
    }

    remove (){
        function removerImgs (e) {
            e.style.height = 400 + "px"
            let diga = card.pop()
            console.log(diga)
        }
        let ola = document.querySelectorAll("div")
        ola.forEach(removerImgs)
        console.log(ola)
    }

    detectClick (e){
        remover.addEventListener("click", this.remove)
        adicionar.addEventListener("click", this.adicionarImgs)
    }
}

export default Adicionar