let works = [];
let categories = [];

const getWorks = async () => {
    const response = await fetch('http://localhost:5678/api/works'); 
    works = await response.json();

     console.log(works)
    displayWorks(0);

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

// recupertaion des categiries et affichage dynamiques des boutons

const getCategory = async () => {
    const response = await fetch('http://localhost:5678/api/categories'); 
    categories = await response.json();

     console.log(categories)
     displayFiltres();

}

getCategory();

const displayFiltres = () => {

    const worksContainer = document.querySelector('#FiltresBtns');

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
    btnFiltre.classList.add("btnFiltre");

    btnFiltre.addEventListener('click', () => {
        displayWorks(cat.id)
    })

    worksContainer.appendChild(btnFiltre);
        
});
}







