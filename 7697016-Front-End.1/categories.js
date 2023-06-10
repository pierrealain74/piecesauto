const reponse = await fetch('categories.json')
const categories = await reponse.json()

categories.forEach((categorie) => {
    // Créer une div Card pour chaque catégorie
    const divFiche = document.createElement('div');
    divFiche.classList.add('card'); 
  
    // Créer titre des catégories
    const titreCategorie = document.createElement('h2');
    titreCategorie.textContent = categorie.nom ?? "pas de catégorie";
    titreCategorie.classList.add('class-categorie');
  
    // Créer description des catégories
    const descriptionCategorie = document.createElement('p');
    descriptionCategorie.textContent = categorie.description ?? "pas de description";
    descriptionCategorie.classList.add('class-description');
  
    // Créer image des catégories
    const imageCategorie = document.createElement('img');
    imageCategorie.src =
    categorie.image === null || categorie.image === undefined || categorie.image === ""
        ? 'images/no-picture.jpg'
        : categorie.image;
    imageCategorie.classList.add('class-image');
  
    // Créer le lien autour du titre
    const lienCategorie = document.createElement('a');
    lienCategorie.href = 'pieces.html?cat=' + categorie.nom;
    lienCategorie.appendChild(titreCategorie);
  
    // Relier les éléments HTML dans la div Card
    divFiche.appendChild(lienCategorie);
    divFiche.appendChild(descriptionCategorie);
    divFiche.appendChild(imageCategorie);
  
    const fichesElement = document.querySelector('.fiches');
    fichesElement.appendChild(divFiche);
  });
  
