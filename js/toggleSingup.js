const signupBtn = document.querySelector('.login__button-signup');
const signupItems = document.querySelector('.wrapper__singup');
const signinItems = document.querySelector('.wrapper__singin');
const closeBtn = document.querySelector('.login__icon-close')

signupBtn.addEventListener('click', onToggleBtn)
closeBtn.addEventListener('click', onMenuReturn)

function onToggleBtn() {
    signupItems.classList.add('visible')
    signinItems.classList.add('block')
}

function onMenuReturn() {
    signupItems.classList.remove('visible')
    signinItems.classList.remove('block')
}