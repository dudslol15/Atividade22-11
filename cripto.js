let frm = document.querySelector("form")
let saida = document.querySelector("#saida")

frm.addEventListener("click", (e) => {
    e.preventDefault()

    saida.innerText = `oi`

})