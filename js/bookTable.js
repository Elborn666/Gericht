const openBookBtn = document.querySelectorAll('#booking')
const closedBookBtn = document.querySelector('.book__icon-close')
const menuBook = document.querySelector('.backdrop__book')
const body = document.querySelector('body')

closedBookBtn.addEventListener('click', onClosedBook)

for (let openBook of openBookBtn) {
    openBook.addEventListener('click', onOpenBook);
}

function onOpenBook (){
    menuBook.classList.add('active__book')
    body.classList.add('hidden')
    console.log('click')
}

function onClosedBook (){
    menuBook.classList.remove('active__book')
    body.classList.remove('hidden')
}




