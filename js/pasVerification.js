const password = document.querySelector('#password');
const repeatPass = document.querySelector('#repeat-password');
const signInBtn = document.querySelector('.signup__button');

password.addEventListener('input', onInputPassword)
repeatPass.addEventListener('input', onInputRepeat)


function onInputPassword(el) {
    const search = el.currentTarget.value
    console.log(search)
}

function onInputRepeat(el) {
    const searchRepeat = el.currentTarget.value
    console.log(searchRepeat)
}


