// try {
    // Remplace l'URL par celle de ton back-end
//     const response = await fetch('http://localhost:5678/api/works'); 

//     if (!response.ok) {
//         throw new Error('Erreur lors de la récupération des travaux');
//     }

//     const works = await response.json();

//     // Sélectionner l'élément HTML où les travaux seront affichés
//     const worksContainer = document.getElementById('works-container');

//     // Créer dynamiquement une liste des travaux
//     works.forEach(work => {
//         const workElement = document.createElement('div');
//         workElement.classList.add('work-item');
//         workElement.innerHTML = `
//             <h2>${work.title}</h2>
//             <p>${work.description}</p>
//             <p><strong>Date:</strong> ${work.date}</p>
//         `;
//         worksContainer.appendChild(workElement);
//     });
// } catch (error) {
//     console.error('Erreur:', error);
// }

// // Appel de la fonction GetWorks au chargement de la page
// document.addEventListener('DOMContentLoaded', Get
//     Works);

const getWorks = async () => {
    const response = await fetch('http://localhost:5678/api/works'); 
    const works = await response.json();

    console.log(works)

}

getWorks()

const worksContainer = document.querySelector('.gallery')

    works.forEach(work => {
    const workElement = document.createElement('figure');

    workElement.classList.add('work-item');
    workElement.innerHTML = `
        <h2>${work.title}</h2>
        <p>${work.description}</p>
        <p><strong>Date:</strong> ${work.date}</p>
    `;
    worksContainer.appendChild(workElement);
});
