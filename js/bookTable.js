const openBookBtn = document.querySelector('.header__booking')
const closedBookBtn = document.querySelector('.book__icon-close')
const menuBook = document.querySelector('.backdrop__book')
const body = document.querySelector('body')


openBookBtn.addEventListener('click', onOpenBook)
closedBookBtn.addEventListener('click', onClosedBook)

function onOpenBook (){
    menuBook.classList.add('active__book')
    body.classList.add('hidden')
}

function onClosedBook (){
    menuBook.classList.remove('active__book')
    body.classList.remove('hidden')
}




