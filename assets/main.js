const audio = new Audio('./assets/songLoop.mp3')
const button = document.getElementById('giga-button')
const body = document.getElementsByTagName('body')[0]


const enableSong = () => {
    audio.play()
    audio.loop = true
    body.classList.add('activated');
}

const disableSong = () => {
    audio.pause()
    audio.currentTime = 0;
    body.classList.remove('activated');
}

button.addEventListener('mousedown', enableSong);
button.addEventListener('touchstart', enableSong);


button.addEventListener('mouseup', disableSong);
button.addEventListener('mouseout', disableSong);
button.addEventListener('touchstop', disableSong);
button.addEventListener('touchcancel', disableSong);
