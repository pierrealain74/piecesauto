const reponse = await fetch('pieces-autos.json')
const pieces = await reponse.json()

const url = new URL(window.location.href)
const params = new URLSearchParams(url.search)
const cat = params.get('cat')


const btTrier = document.querySelector('.btn-trier')
btTrier.addEventListener('click', () => {

    const produitsCategorie = pieces.filter((piece) => piece.categorie === cat);

    //console.log(produitsCategorie)
    
    const produitsTries = Array.from(produitsCategorie).sort(function (a, b) {
        return a.prix - b.prix
    })
    console.log(produitsTries)
}) 


const btFiltrer = document.querySelector('.btn-filtrer')
btFiltrer.addEventListener('click', () => {

    //Mettre dans un nouveau tableau les produits de la cat 
    const produitsCategorie = pieces.filter((piece) => piece.categorie === cat);

    //console.log(produitsCategorie)
    
    const produitsFiltres = Array.from(produitsCategorie).filter(function (piece) {
        return piece.prix < 35
    })
    console.log(produitsFiltres)
}) 


const titreCategorie = document.createElement('h2')
titreCategorie.innerHTML = `Produits de la catégorie : <b>${cat}</b>` //console.log(titreCategorie.innerhtml)
const fichesElement2 = document.querySelector('.fiches')
fichesElement2.appendChild(titreCategorie)

pieces.forEach((piece) => {
    if (piece.categorie === cat) {

      const fichesElement = document.querySelector('.fiches')
  
      const divFiche = document.createElement('div')
      divFiche.classList.add('card')
  
      const imageElement = document.createElement('img')
      imageElement.src =   piece.image === null || piece.image === undefined || piece.image === ""
      ? 'images/no-picture.jpg' : piece.image
  
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

