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
        
    liElement2.addEventListener("click", async function (event) {

        const id = liElement2.getAttribute('id')
        console.log('id du li : ', id)
 
        const reponse = await fetch("http://localhost:8081/pieces/" + id + "/avis")
        
        const avis = await reponse.json()
    })



/*     piecesElements[i].addEventListener("click", async function (event) {
           
        const id = event.target.dataset.id;

        const reponse = await fetch("http://localhost:8081/pieces/" + id + "/avis")
        
        const avis = await reponse.json()
        
        const pieceElement = event.target.parentElement;

        const avisElement = document.createElement("p");

        for (let i = 0; i < avis.length; i++) {
            avisElement.innerHTML += `<b>${avis[i].utilisateur}: </b>${avis[i].commentaire} <br>--<br>`;
            console.log('avis num : ', avis[i])
        }
        pieceElement.appendChild(avisElement)
    }); */
})

fichesElement.appendChild(ulElement2) 
