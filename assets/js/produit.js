
const link = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json"
const containers = document.querySelector("#produit")

fetch (link)
    .then(response => response.json())
    .then(data => {
        const produits = data.entreprise.produits
        console.log(produits)
        produits.forEach(produit => {
            const card = document.createElement("div")
            card.classList.add("card")
            const image = document.createElement("img")
            const cardContent = document.createElement("div")
            cardContent.classList.add("content")
            const h3 = document.createElement("h3")
            h3.innerText = produit.nom
            const p = document.createElement("p")
            p.innerText = produit.description
            cardContent.appendChild(h3)
            cardContent.appendChild(p)
            card.appendChild(image)
            card.appendChild(cardContent)
            containers.appendChild(card)
        })
    })