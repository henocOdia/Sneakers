

const container = document.querySelector("#containers")

const url = "https://js-dynamic-portfolio-data-makerslab-emlyon-cdweb-8f83155c64a0cc.gitlab.io/json/sneakers.json"
fetch (url)
    .then(response => response.json())
    .then(data => {
        const services = data.entreprise.services
        services.forEach(service => {
            const containcard = document.createElement("div")
            containcard.classList.add("cards")
            const h2 = document.createElement("h2")
            h2.innerText = service.nom
            const p = document.createElement("p")
            p.innerText = service.description
            containcard.appendChild(h2)
            containcard.appendChild(p)
            container.appendChild(containcard)
            console.log(containcard)
        });
    })