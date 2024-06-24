const ola = document.querySelector ("#ola")

function position () {
    console.log("oi")
    ola.style.position = "absolute"
    ola.style.top = Math.random() * (window.innerHeight - Number(getComputedStyle(ola).height.replace("px", "")))+ "px"
    ola.style.left = Math.random() * (window.innerWidth - Number(getComputedStyle(ola).width.replace("px", "")))+ "px"
}

ola.addEventListener("click", position)