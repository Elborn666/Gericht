const openLoginBtn = document.querySelector('.header__login')
const closedLoginBtn = document.querySelector('.login__icon-close')
const menuLogin = document.querySelector('.backdrop__login')
const body = document.querySelector('body')


openLoginBtn.addEventListener('click', onOpenLogin)
closedLoginBtn.addEventListener('click', onClosedLogin)

function onOpenLogin (){
    menuLogin.classList.add('active__book')
    body.classList.add('hidden')
}

function onClosedLogin (){
    menuLogin.classList.remove('active__book')
    body.classList.remove('hidden')
}