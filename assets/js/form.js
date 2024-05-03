const form = document.querySelector("#form")
const comments = document.querySelector("#comments")


form.addEventListener("submit", (event) => {
    event.preventDefault()
    console.log("Formulaire soumis !")
    const nomDOM = document.querySelector("#nom")
    const nom = nomDOM.value
    const sujetDOM = document.querySelector("#sujet")
    const sujet = sujetDOM.value
    const commentDOM = document.querySelector("#commentaire")
    const comment = commentDOM.value
    const card = document.createElement("div")
    card.classList.add("commentaire")
    const prenomClient = document.createElement("h3")
    prenomClient.innerText = nom
    const sujetClient = document.createElement("h4")
    sujetClient.innerText = sujet
    const avis = document.createElement("p")
    avis.innerText = comment
    card.appendChild(prenomClient)
    card.appendChild(sujetClient)
    card.appendChild(avis)
    comments.appendChild(card)
})

const lien = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json"

fetch (lien)
    .then(response => response.json())
    .then(data => {
        const temoignages = data.entreprise.temoignages
        console.log(temoignages)
        temoignages.forEach(temoignage => {
            const commentaire = document.createElement("div")
            commentaire.classList.add("commentaire")
            const nomClient = document.createElement("h3")
            nomClient.innerText = temoignage.prenom
            const exp = document.createElement("h4")
            exp.innerText = temoignage.typeExperience
            const feedBack = document.createElement("p")
            feedBack.innerText = temoignage.commentaire
            commentaire.appendChild(nomClient)
            commentaire.appendChild(exp)
            commentaire.appendChild(feedBack)
            comments.appendChild(commentaire)
        });
    })

