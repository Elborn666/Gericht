const openLoginBtn = document.querySelectorAll('#login')
const closedLoginBtn = document.querySelector('.login__icon-close')
const menuLogin = document.querySelector('.backdrop__login')
const body = document.querySelector('body')

closedLoginBtn.addEventListener('click', onClosedLogin)

for (let openLogin of openLoginBtn) {
    openLogin.addEventListener('click', onOpenLogin);
}

function onOpenLogin (){
    menuLogin.classList.add('active__book')
    body.classList.add('hidden')
}

function onClosedLogin (){
    menuLogin.classList.remove('active__book')
    body.classList.remove('hidden')
}