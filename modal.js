const CloseBtn1 = document.getElementById("CloseBtn1")
const modalContainer = document.getElementById("modalContainer")

BtnModifier.addEventListener('click', () => {

    modalContainer.style.display="flex"
    
})

CloseBtn1.addEventListener('click', () => {

    modalContainer.style.display="none"
    
})

const displayModalGallery = () => {

    const galleryModal = document.querySelector('#galleryModal');

    galleryModal.innerHTML="";

    works.forEach(work => {       

        const card = document.createElement('div');
        card.classList.add('card');

        const img = document.createElement('img');
        img.src = work.imageUrl;

        const i = document.createElement('i');
        i.classList.add('fa');
        i.classList.add('fa-trash');

       
        card.appendChild(img);
        card.appendChild(i); 
        
        galleryModal.appendChild(card)
    
});
}