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

        i.addEventListener('click', () => {
            if (confirm("Etes vous sûr de vouloir supprimer cette Photo!") == true) {
                deleteWork(work.id)
              }
            
        })

       
        card.appendChild(img);
        card.appendChild(i); 
        
        galleryModal.appendChild(card)
    
});
}




  const deleteWork = async (id) => {
    const res = await fetch(`http://localhost:5678/api/works/${id}`, { //chemin suppression des photos
      method: "DELETE",
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem('token'),
      },
    });
    
   if (res.status === 204){
    
   }
   getWorks();
  }

//   let form = document.createElement('form');
//   form.action = "http://localhost:5678/api/works";
//   form.method = "POST";

//   getWorks();
//   getCategory();
  
