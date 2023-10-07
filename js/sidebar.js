const openSidebarBtn = document.querySelector('.sidebar__button')
const closedSidebarBtn = document.querySelector('.sidebar__close-icon')
const menuSidebar = document.querySelector('.backdrop__sidebar')
const body = document.querySelector('body')

openSidebarBtn.addEventListener('click', onOpenSidebar)
closedSidebarBtn.addEventListener('click', onClosedSidebar)

function onOpenSidebar (){
    menuSidebar.classList.add('active__burger')
    body.classList.add('hidden')
}

function onClosedSidebar (){
    menuSidebar.classList.remove('active__burger')
    body.classList.remove('hidden')
}

