const form = document.querySelector("#form")
const cards = document.querySelector(".cards")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Formulaire soumis !")
    const commentDOM = document.querySelector("#comment")
    const comment = commentDOM.value
    const card = document.createElement("div")
    card.classList.add("card")
    const avis = document.createElement("p")
    avis.innerText = comment
    card.appendChild(avis)
    cards.appendChild(card)
})