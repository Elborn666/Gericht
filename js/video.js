const playButton = document.querySelector('.main__video-play');
const img = document.querySelector('.main__video-img');
const videoEl = document.querySelector('#video-player')

playButton.addEventListener('click', onHiddenTitle);

function onHiddenTitle (){
    console.log('click');
    playButton.classList.add('none')
    img.classList.add('none')
}

playButton.addEventListener('click', function () {
    if (videoEl.paused) {  // если видео остановлено, запускаем
        videoEl.play();
    } else {
        videoEl.pause();
    }
}, false);