const reponse = await fetch('pieces-autos.json')
const pieces = await reponse.json()

const url = new URL(window.location.href)
const params = new URLSearchParams(url.search)
const cat = params.get('cat')

pieces.forEach((piece) => {
    if (piece.categorie === cat) {
      const fichesElement = document.querySelector('.fiches')
  
      const divFiche = document.createElement('div')
      divFiche.classList.add('card')
  
      const imageElement = document.createElement('img')
      imageElement.src =   piece.image === null || piece.image === undefined || piece.image === ""
      ? 'images/no-picture.jpg' : categorie.image
  
      const titreElement = document.createElement('h2')
      titreElement.innerText = piece.nom

        const prixElement = document.createElement('p')
        prixElement.innerText = `Prix : ${piece.prix}€`
        
        const indicateurPrix = document.createElement('p')
        indicateurPrix.innerText = `Indicateur prix : ${piece.prix < 35 ? "€€" : "€€€"}`

        const descriptionElement = document.createElement('p')
        descriptionElement.innerText = piece.description ?? "Pas de description disponible."
    
        const categorieElement = document.createElement('p')
        categorieElement.innerText = piece.categorie ?? ("pas de catégorie")
        //console.log(titreElement.innerText)



        divFiche.appendChild(imageElement)
        divFiche.appendChild(titreElement)
        divFiche.appendChild(prixElement)
        divFiche.appendChild(descriptionElement)

        fichesElement.appendChild(divFiche)

    }
});

