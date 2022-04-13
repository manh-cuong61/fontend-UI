let btnOpen = document.querySelector('.open-modal-btn')
let modal = document.querySelector('.modal')
let btnClose = document.querySelector('.modal-footer button')
let iconClose = document.querySelector('.modal-header button')

toggleModal = () => modal.classList.toggle('hide')
 
 btnOpen.addEventListener('click', toggleModal)
 btnClose.addEventListener('click', toggleModal)
 iconClose.addEventListener('click', toggleModal)
 modal.addEventListener('click', function(e){
    if(e.target == e.currentTarget){
        modal.classList.toggle('hide')
    }
 })
