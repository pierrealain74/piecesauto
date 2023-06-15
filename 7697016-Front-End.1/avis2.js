const reponse = await fetch('http://localhost:8081/pieces')
const pieces = await reponse.json()

//Affiche liste produits sur la sidebar

const fichesElement = document.querySelector('.fiches')
const ulElement2 = document.createElement('ul')

pieces.forEach((piece, index) => {
    
    const liElement2 = document.createElement('li')
    liElement2.setAttribute('id', index)
    liElement2.innerText = `${piece.nom} - Avis`

    ulElement2.appendChild(liElement2)

    //AddeventListener avec MOUSEOVER
    liElement2.addEventListener('click', async function (event) {
    
    const id = liElement2.getAttribute('id')
    //console.log('id du li : ', id)
    
    //Fetch
    const reponse = await fetch("http://localhost:8081/pieces/" + id + "/avis")        
    const avis = await reponse.json()

    //Insérer tous les avid pour un produit
    for (let i = 0; i < avis.length; i++){
        const pAvis = document.createElement('p')

        pAvis.innerHTML = '<b>' + avis[i].utilisateur + ' : </b>' + avis[i].commentaire

        liElement2.appendChild(pAvis)
    }
    
    })
})

fichesElement.appendChild(ulElement2) 
