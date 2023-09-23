const listBtn = document.querySelector('.main__award-list')
const itemBtn = document.querySelectorAll('.main__award-item-img')

function filter() {
    listBtn.addEventListener('click', e => {
        const targetId = e.target.dataset.id

        switch (targetId) {
            case 'mgg':
                getItems(targetId)
                break
            case 'ronise':
                getItems(targetId)
                break
            case 'egg':
                getItems(targetId)
                break
            case 'meat':
                getItems(targetId)
                break
        }
    })
}

filter()

function getItems(className) {
    itemBtn.forEach(item => {
        if(item.classList.contains(className)) {
            item.style.display = 'block'
        } else {
            item.style.display = 'none'
        }
    })
}

// data-id="" додається до HTML кнопок
// те що ми фільтруємо, додається в клас загально прийнята назва