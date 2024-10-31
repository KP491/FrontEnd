//Initialisation des variables
let works = [];
let categories = [];


const worksContainer = document.querySelector('#FiltresBtns');
const BtnModifier = document.querySelector('#BtnModifier');
const BtnLogin = document.querySelector('#BtnLogin');

const isLogin = () => {

    return sessionStorage.getItem("token") ? true : false
} 
//Vérification de la connexion utilisateur
if(isLogin()) {    
    // si on est connecté
    worksContainer.style.display = "none"
    BtnModifier.style.display = "inline" 
    BtnLogin.innerHTML="Logout"
}

//Gestion du bouton de connexion/déconnexion
BtnLogin.addEventListener('click', () => {

    if(isLogin()) {    
        sessionStorage.clear();
        BtnLogin.innerHTML="Login";
    }
    else
    {
        window.location.replace("/login.html");
    }
    

})

//Récupération et affichage des travaux (works)
const getWorks = async () => {
    const response = await fetch('http://localhost:5678/api/works'); 
    works = await response.json();

     console.log(works)
    displayWorks(0);
    displayModalGallery();   
}

getWorks()

const displayWorks = (id) => {

    const worksContainer = document.querySelector('.gallery');

    worksContainer.innerHTML="";

    works.forEach(work => {
        if(work.categoryId == id || id == 0){

            const workElement = document.createElement('figure');

            workElement.classList.add('work-item');
            workElement.innerHTML = `        
                <img src="${work.imageUrl}" alt="${work.title}">
                <figcaption>${work.title}</figcaption>
            `;
            worksContainer.appendChild(workElement);
        }
    
});
}

// recupération des categories et affichage dynamiques des boutons

const getCategory = async () => {
    const response = await fetch('http://localhost:5678/api/categories'); 
    categories = await response.json();

     console.log(categories)
     displayFiltres();

}

getCategory();

const displayFiltres = () => {

    

    const btnTous = document.createElement('button');

    btnTous.innerText = "Tous";
    btnTous.classList.add("btnFiltre");

    btnTous.addEventListener('click', () => {
        displayWorks(0)
    })

    worksContainer.appendChild(btnTous)

    categories.forEach(cat => {
    const btnFiltre = document.createElement('button');

    btnFiltre.innerText = cat.name;
     // Ajout de la classe CSS "btnFiltre" à chaque bouton de catégorie
     btnFiltre.classList.add("btnFiltre");

     // Ajout d'une autre classe conditionnelle si nécessaire
     // Par exemple, si tu veux que les boutons soient différents en fonction de la catégorie
     if (cat.name === "Spécial") {
         btnFiltre.classList.add("btnSpecial");
     }

     // Gestion du clic pour chaque bouton de catégorie
     btnFiltre.addEventListener('click', () => {
         displayWorks(cat.id);
     });

     // Ajout du bouton dans le conteneur
     worksContainer.appendChild(btnFiltre);
});
}
//fonctions de la modale pour la gestion des images
const createWork = async (RécupérationDuFormulaire) => {
    const req = await fetch('http://localhost:5678/api/works', {
      method: "POST",
      body: DonnéesDuFormulaire ('http://localhost:5678/api/works'
    });
    const res = await req.json();
  }

  const deleteWork = async (id) => {
    const req = await fetch(`http://localhost:5678/api/works/${id}`, { //chemin suppression des photos
      method: "DELETE"
    });
    const res = await req.json();
  }