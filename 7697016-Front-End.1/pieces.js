const reponse = await fetch('pieces-autos.json')
const pieces = await reponse.json()

const url = new URL(window.location.href)
const params = new URLSearchParams(url.search)
const cat = params.get('cat')


//Premier affichage de la page : appel de la fonction ajouter FichePoduit via la variable cat passé via index.html
pieces.forEach((piece) => {
    if (piece.categorie === cat) {
        ajouterFicheProduit(piece);
    }
});

//Afficher le titre de la vategorie envoyé depuis la page index
const titreCategorie = document.querySelector('.titre-categorie')
titreCategorie.innerHTML = `Produits de la catégorie : <b>${cat} </b>` //console.log(titreCategorie.innerhtml)

// TRIER // Bouton Trier
const btTrier = document.querySelector('.btn-trier')
btTrier.addEventListener('click', () => {

    document.querySelector('.fiches').innerHTML = ""//vider tout dans .fiches

    const produitsCategorie = pieces.filter((piece) => piece.categorie === cat)

    //console.log(produitsCategorie)
    
    const produitsTries = Array.from(produitsCategorie).sort(function (a, b) {
        return a.prix - b.prix
    })
    //console.log(produitsTries)

    //aficher titre
    produitsTries.forEach(piece => { //apeler fonction avec tableau de data
        ajouterFicheProduit(piece)
    })
    
    document.querySelector('.titre-categorie').innerText = "Produits du - chers au + chers"
}) 

// FILTRER // Bouton Filtrer
const boutonFiltrer = document.querySelector(".btn-filtrer")

boutonFiltrer.addEventListener("click", function () {

    // Effacement de l'écran et regénération de la page avec les pièces filtrées uniquement
    document.querySelector(".fiches").innerHTML = ""

    const piecesFiltrees = pieces.filter(function (piece) {
        return piece.prix < 35
    });

    piecesFiltrees.forEach(piece => {
        ajouterFicheProduit(piece)
    })

    document.querySelector('.titre-categorie').innerText = "Produits abordables (-35€)"
})

//INPUT RANGE // Bouton pour afficher produits dont le prix = prix du input range
const priceRange = document.getElementById('price-range')
const btRange = document.querySelector('input[type=range]')

btRange.addEventListener('input', (event) => {
    
    //Affiche le prix du range
    const value = event.target.value
    priceRange.innerText = `${value}€`

    //
    const produitsCategorie = pieces.filter((piece) => piece.categorie === cat)
    
    const prixMax = produitsCategorie.filter(function (piece) { return piece.prix <= value })

    document.querySelector(".fiches").innerHTML = ""
    prixMax.forEach(piece => {
        ajouterFicheProduit(piece)
    })

})



//Afficher une liste ul li des produits abordable (soit < 35€)

//Methode map
/* const nomproduitsAbordables = pieces.map(piece => piece.nom)
const descriptionproduitsAbordables = pieces.map( piece => piece.description)

//Methode splice pour filtrer les produits 
for(let i = pieces.length -1 ; i >= 0; i--){
    if(pieces[i].prix > 35){
        nomproduitsAbordables.splice(i, 1)
        descriptionproduitsAbordables.splice(i,1)
    }
}
//console.log(nomproduitsAbordables + descriptionproduitsAbordables)

 
const ulElement = document.createElement('ul')
 
 for (let i = 0; i < nomproduitsAbordables.length; i++){
     const liElement = document.createElement('li')
     liElement.innerText = `${nomproduitsAbordables[i]} - ${descriptionproduitsAbordables[i]}`
     ulElement.appendChild(liElement)
 }
 document.querySelector('.abordable').appendChild(ulElement)
 //console.log(noms) */

/////////////////////////////////////////////////////////////////////////////
//Fonction qui affiche tous ls produits selon le tableau qu'on lui donne
function ajouterFicheProduit(piece) {


    //console.log('dans la fonction', piece)

    const fichesElement = document.querySelector('.fiches')

    const divFiche = document.createElement('div')
    divFiche.classList.add('card')

    const imageElement = document.createElement('img')
    imageElement.src =   piece.image === null || piece.image === undefined || piece.image === ""
        ? 'images/no-picture.jpg' : piece.image    
    console.log(imageElement)

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


