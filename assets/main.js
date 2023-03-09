const audio = document.getElementById('giga-loop')
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
button.addEventListener('touchend', disableSong);


document.getElementById('giga-start').addEventListener('click', (e)=> {
    e.target.style.display = 'none';
    button.style.display = 'block'
})
