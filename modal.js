const CloseBtn1 = document.getElementById("CloseBtn1")
const modalContainer = document.getElementById("modalContainer")

BtnModifier.addEventListener('click', () => {

    modalContainer.style.display="flex"
    
})

CloseBtn1.addEventListener('click', () => {

    modalContainer.style.display="none"
    
})