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

// Fonction pour récupérer les données du commentaire HTML
function extractData() {
    // Sélectionner le nœud contenant le commentaire
    const commentNodes = Array.from(document.childNodes).filter(node => node.nodeType === Node.COMMENT_NODE);

    // Si le commentaire est trouvé, on extrait son contenu
    if (commentNodes.length > 0) {
        const commentContent = commentNodes[0].textContent;

        // Créer un élément temporaire pour traiter le contenu HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = commentContent;

        // Sélectionner toutes les balises figure
        const figures = tempDiv.querySelectorAll('figure');
        const data = [];

        // Parcourir chaque figure et extraire les informations des balises img et figcaption
        figures.forEach(figure => {
            const img = figure.querySelector('img');
            const caption = figure.querySelector('figcaption');
            
            if (img && caption) {
                data.push({
                    imageSrc: img.getAttribute('src'),
                    altText: img.getAttribute('alt'),
                    caption: caption.textContent.trim()
                });
            }
        });

        return data;
    }
    
    return [];
}

// Appel de la fonction et affichage des données sous forme de tableau
const extractedData = extractDataFromComment();
console.table(extractedData);

